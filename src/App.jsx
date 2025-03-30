import { useState } from "react";
import PromptCard from "./components/PromptCard";

function App() {
  const prompts = [
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
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("全部");
  const [favoritedIndexes, setFavoritedIndexes] = useState([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const allTags = [
    "全部",
    ...new Set(
      prompts
        .map((item) => item.tag.split("|"))
        .flat()
        .map((tag) => tag.trim())
    ),
  ];

  const toggleFavorite = (index) => {
    setFavoritedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const filteredPrompts = prompts.filter((item, index) => {
    const matchSearch =
      item.prompt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tag.toLowerCase().includes(searchTerm.toLowerCase());

    const matchTag = selectedTag === "全部" || item.tag.includes(selectedTag);
    const matchFavorite =
      !showOnlyFavorites || favoritedIndexes.includes(index);

    return matchSearch && matchTag && matchFavorite;
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-10">
      <h1 className="text-3xl font-bold mb-6">🎯 Promptllery</h1>

      <input
        type="text"
        placeholder="🔍 搜索提示词/内容/标签..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
      />

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPrompts.map((item, index) => (
          <PromptCard
            key={index}
            title={item.title}
            prompt={item.prompt}
            tag={item.tag}
            likeCount={likeCounts[index] || 0} // 传递每个 Prompt 的点赞数
            onTagClick={setSelectedTag}
            onCopy={() => alert("已复制 Prompt！")}
            isFavorited={favoritedIndexes.includes(index)}
            onToggleFavorite={() => toggleFavorite(index)}
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

export default App;
