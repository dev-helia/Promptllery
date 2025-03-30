import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import Logo from "./components/Logo";
import PromptDetailPage from "./components/PromptDetailPage";
import JsonViewer from "./components/JsonViewer";
import RankingPage from "./components/RankingPage";
import useSupabasePrompts from "./hooks/useSupabasePrompts";
import usePromptActions from "./hooks/usePromptActions";

function App() {
  const [username, setUsername] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("全部");

  const [showOnlyMine, setShowOnlyMine] = useState(false);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const {
    prompts,
    setPrompts,
    likes,
    setLikes,
    favoritedIndexes,
    setFavoritedIndexes,
  } = useSupabasePrompts(username);

  const { likedIndexes, toggleLike, toggleFavorite } = usePromptActions({
    prompts,
    username,
    setLikes,
    setFavoritedIndexes,
  });

  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likes"));
    const savedFavorites = JSON.parse(localStorage.getItem("favorites"));
    const savedUser = localStorage.getItem("username");

    if (savedLikes) setLikes(savedLikes);
    if (savedFavorites) setFavoritedIndexes(savedFavorites);
    if (savedUser) setUsername(savedUser);
  }, []);

  useEffect(() => {
    localStorage.setItem("prompts", JSON.stringify(prompts));
  }, [prompts]);

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoritedIndexes));
  }, [favoritedIndexes]);

  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data.user) {
        setUsername(data.user.email);
      }
    };
    getUser();
  }, []);

  const handleUpload = async (newPrompt) => {
    const { title, content, tags } = newPrompt;

    const { error } = await supabase.from("prompts").insert([
      {
        title,
        content,
        tags,
        like_count: 0,
        user_email: username, // 👈 加上用户邮箱
      },
    ]);

    if (!error) {
      console.log("✅ 上传成功！");
      const { data } = await supabase
        .from("prompts")
        .select("*")
        .order("created_at", { ascending: false });
      if (data) {
        setPrompts(data);
        setLikes(data.map((p) => p.like_count || 0));
      }
    } else {
      console.error("❌ 上传失败：", error.message);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-10">
      <nav className="mb-6 flex gap-4 items-center">
        <Logo />
        <Link to="/" className="text-purple-600 hover:underline">
          首页
        </Link>
        <Link to="/ranking" className="text-purple-600 hover:underline">
          排行榜
        </Link>
        <Link to="/login" className="text-purple-600 hover:underline">
          登录
        </Link>
        <Link to="/register" className="text-purple-600 hover:underline">
          注册
        </Link>
        {username ? (
          <div className="ml-auto flex flex-col items-end text-sm text-gray-500">
            <span>🎉 欢迎 {username}</span>
            <button
              onClick={async () => {
                await supabase.auth.signOut();
                setUsername("");
                localStorage.removeItem("username");
              }}
              className="text-red-500 hover:underline text-xs mt-1"
            >
              登出
            </button>
          </div>
        ) : (
          <span className="ml-auto text-sm text-gray-400">未登录</span>
        )}
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              prompts={prompts}
              username={username}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
              favoritedIndexes={favoritedIndexes}
              toggleFavorite={(i) => toggleFavorite(i, favoritedIndexes)}
              showOnlyFavorites={showOnlyFavorites}
              setShowOnlyFavorites={setShowOnlyFavorites}
              likes={likes}
              likedIndexes={likedIndexes}
              toggleLike={(i) => toggleLike(i, likes)}
              handleUpload={handleUpload}
              showOnlyMine={showOnlyMine}
              setShowOnlyMine={setShowOnlyMine}
            />
          }
        />
        <Route
          path="/login"
          element={<LoginPage setUsername={setUsername} />}
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/prompt/:id" element={<PromptDetailPage />} />
        <Route path="/prompt/:id/json" element={<JsonViewer />} />
        <Route
          path="/ranking"
          element={<RankingPage prompts={prompts} likes={likes} />}
        />
      </Routes>
    </div>
  );
}

export default App;
