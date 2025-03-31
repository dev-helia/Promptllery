import PromptCard from "./components/PromptCard";
import UploadForm from "./components/UploadForm";
import { useState } from "react";
import { Link } from "react-router-dom";
import BrandHeader from "./components/BrandHeader";

function HomePage({
  prompts,
  searchTerm,
  setSearchTerm,
  selectedTag,
  setSelectedTag,
  favoritedIndexes,
  toggleFavorite,
  showOnlyFavorites,
  setShowOnlyFavorites,
  likes,
  likedIndexes,
  toggleLike,
  handleUpload,
  username,
  showOnlyMine,
  setShowOnlyMine,
}) {
  const allTags = [
    "全部",
    ...new Set(
      prompts.flatMap((item) => item.tags || []).map((tag) => tag.trim())
    ),
  ];

  const filteredPrompts = prompts.filter((item, index) => {
    const matchSearch =
      item.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags?.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchTag =
      selectedTag === "全部" || item.tags?.some((t) => t.includes(selectedTag));

    const matchFavorite =
      !showOnlyFavorites || favoritedIndexes.includes(index);

    const matchMine = !showOnlyMine || item.user_email === username;

    return matchSearch && matchTag && matchFavorite && matchMine;
  });

  return (
    <div>
      <BrandHeader />
      <input
        type="text"
        placeholder="🔍 搜索提示词/内容/标签..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
      />

      {username ? (
        <UploadForm onUpload={handleUpload} />
      ) : (
        <p className="text-sm text-gray-400 mb-4">
          🛑 请先{" "}
          <Link to="/login" className="text-purple-600 underline">
            登录
          </Link>{" "}
          后才能上传 Prompt 哦～
        </p>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {allTags.map((tag, index) => (
          <button
            key={index}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 rounded-full border ${
              selectedTag === tag
                ? "bg-purple-600 text-white"
                : "bg-white text-purple-600 border-purple-300"
            } hover:bg-purple-100 transition`}
          >
            {tag}
          </button>
        ))}

        <button
          onClick={() => setShowOnlyFavorites((prev) => !prev)}
          className={`px-3 py-1 rounded-full border ml-auto ${
            showOnlyFavorites
              ? "bg-pink-600 text-white"
              : "bg-white text-pink-600 border-pink-300"
          } hover:bg-pink-100 transition`}
        >
          {showOnlyFavorites ? "💖 只看收藏" : "🤍 全部展示"}
        </button>
      </div>

      <button
        onClick={() => setShowOnlyMine(!showOnlyMine)}
        className="text-sm text-blue-500 hover:underline"
      >
        {showOnlyMine ? "🔓 全部展示" : "🔒 只看我的"}
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPrompts.map((item, index) => (
          <PromptCard
            key={item.id}
            prompt={item}
            index={index}
            likeCount={likes[index]}
            onTagClick={setSelectedTag}
            onCopy={() => alert("已复制 Prompt！")}
            isFavorited={favoritedIndexes.includes(index)}
            onToggleFavorite={() => toggleFavorite(index)}
            onLike={() => toggleLike(index)}
          />
        ))}
      </div>

      {filteredPrompts.length === 0 && (
        <p className="text-gray-400 mt-6 text-center text-sm">
          🙈 没有找到符合条件的 Prompt 哦～换个关键词试试吧！
        </p>
      )}
    </div>
  );
}

export default HomePage;
