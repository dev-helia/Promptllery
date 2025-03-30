import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import RegisterPage from "./components/RegisterPage";
import Logo from "./components/Logo";
import LoginPage from "./components/LoginPage";

function App() {
  const [prompts, setPrompts] = useState([
    {
      title: "写一段关于失恋的诗",
      prompt: "请帮我写一段以星星为意象的失恋诗，感性一点",
      tag: "GPT-4 | 文学",
      likeCount: 3,
    },
    {
      title: "生成商业计划书",
      prompt: "我想开一家宠物咖啡馆，帮我写一份商业计划书",
      tag: "Business | GPT-4",
      likeCount: 5,
    },
    {
      title: "用户画像分析",
      prompt: "根据以下社交数据，推测用户性格特点和偏好...",
      tag: "数据分析 | ChatGPT",
      likeCount: 1,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("全部");
  const [favoritedIndexes, setFavoritedIndexes] = useState([]);
  const [likedIndexes, setLikedIndexes] = useState([]);
  const [likes, setLikes] = useState(prompts.map((p) => p.likeCount || 0));
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [username, setUsername] = useState(""); // 新增用户名状态

  // ✅ 加载本地数据
  useEffect(() => {
    const savedPrompts = JSON.parse(localStorage.getItem("prompts"));
    const savedLikes = JSON.parse(localStorage.getItem("likes"));
    const savedFavorites = JSON.parse(localStorage.getItem("favorites"));

    if (savedPrompts) setPrompts(savedPrompts);
    if (savedLikes) setLikes(savedLikes);
    if (savedFavorites) setFavoritedIndexes(savedFavorites);
  }, []);

  // ✅ 持久化到本地
  useEffect(() => {
    localStorage.setItem("prompts", JSON.stringify(prompts));
  }, [prompts]);

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoritedIndexes));
  }, [favoritedIndexes]);

  const toggleFavorite = (index) => {
    setFavoritedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleLike = (index) => {
    if (likedIndexes.includes(index)) return;
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
    setLikedIndexes([...likedIndexes, index]);
  };

  const handleUpload = (newPrompt) => {
    setPrompts((prev) => [...prev, { ...newPrompt, likeCount: 0 }]);
    setLikes((prev) => [...prev, 0]);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-10">
      <nav className="mb-6 flex gap-4">
        <Logo />
        <Link to="/" className="text-purple-600 hover:underline">
          首页
        </Link>
        <Link to="/login" className="text-purple-600 hover:underline">
          登录
        </Link>

        <Link to="/register" className="text-purple-600 hover:underline">
          注册
        </Link>
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
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />;
      </Routes>
    </div>
  );
}

export default App;
