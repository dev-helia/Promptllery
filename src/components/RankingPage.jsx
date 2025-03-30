// src/components/RankingPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function RankingPage({ prompts, likes }) {
  const [sortBy, setSortBy] = useState("popular"); // popular | latest

  // 排序逻辑
  const sortedPrompts = [...prompts]
    .map((p, i) => ({ ...p, index: i, likeCount: likes[i] })) // 合并 index & likeCount
    .sort((a, b) => {
      if (sortBy === "popular") return b.likeCount - a.likeCount;
      return (b.createdAt || 0) - (a.createdAt || 0); // fallback to 0 if没有createdAt
    });

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">🏆 Prompt 排行榜</h1>

      {/* 切换排序方式 */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setSortBy("popular")}
          className={`px-4 py-2 rounded-xl ${
            sortBy === "popular"
              ? "bg-purple-600 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          🔥 最热
        </button>
        <button
          onClick={() => setSortBy("latest")}
          className={`px-4 py-2 rounded-xl ${
            sortBy === "latest"
              ? "bg-purple-600 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          🆕 最新
        </button>
      </div>

      {/* 排行列表 */}
      {sortedPrompts.map((p, i) => (
        <Link
          key={i}
          to={`/prompt/${p.index}`}
          className="block bg-white p-4 mb-4 rounded-xl shadow hover:bg-gray-50"
        >
          <div className="flex justify-between items-center mb-1">
            <h2 className="font-semibold text-lg">{p.title}</h2>
            <span className="text-sm text-gray-400">❤️ {p.likeCount || 0}</span>
          </div>
          <p className="text-sm text-gray-500 truncate">{p.prompt}</p>
        </Link>
      ))}
    </div>
  );
}
