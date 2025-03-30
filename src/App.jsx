import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import Logo from "./components/Logo";
import PromptDetailPage from "./components/PromptDetailPage";
import promptsData from "./data/prompts.json";
import JsonViewer from "./components/JsonViewer";
import RankingPage from "./components/RankingPage";

function App() {
  const [prompts, setPrompts] = useState([]); // ✅ 先定义 prompts
  const [likes, setLikes] = useState([]); // ✅ likes 初始为空数组
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("全部");
  const [favoritedIndexes, setFavoritedIndexes] = useState([]);
  const [likedIndexes, setLikedIndexes] = useState([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [username, setUsername] = useState(""); // ✅ 记录当前登录的用户名

  // ✅ 初始化加载数据（从本地或 JSON）
  useEffect(() => {
    const savedPrompts = localStorage.getItem("prompts");
    if (savedPrompts) {
      const parsed = JSON.parse(savedPrompts);
      setPrompts(parsed);
      setLikes(parsed.map((p) => p.likeCount || 0));
    } else {
      setPrompts(promptsData);
      setLikes(promptsData.map((p) => p.likeCount || 0));
    }
  }, []);

  // ✅ 读取其他本地存储（用户、点赞、收藏）
  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likes"));
    const savedFavorites = JSON.parse(localStorage.getItem("favorites"));
    const savedUser = localStorage.getItem("username");

    if (savedLikes) setLikes(savedLikes);
    if (savedFavorites) setFavoritedIndexes(savedFavorites);
    if (savedUser) setUsername(savedUser);
  }, []);

  // ✅ 保存逻辑
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

  // ✅ 点赞逻辑
  const toggleLike = (index) => {
    if (likedIndexes.includes(index)) return;
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
    setLikedIndexes([...likedIndexes, index]);
  };

  // ✅ 收藏逻辑
  const toggleFavorite = (index) => {
    setFavoritedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // ✅ 上传 prompt
  const handleUpload = (newPrompt) => {
    const timestamped = { ...newPrompt, createdAt: Date.now(), likeCount: 0 };
    setPrompts((prev) => [...prev, timestamped]);
    setLikes((prev) => [...prev, 0]);
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
              onClick={() => setUsername("")}
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
              toggleFavorite={toggleFavorite}
              showOnlyFavorites={showOnlyFavorites}
              setShowOnlyFavorites={setShowOnlyFavorites}
              likes={likes}
              likedIndexes={likedIndexes}
              toggleLike={toggleLike}
              handleUpload={handleUpload}
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
