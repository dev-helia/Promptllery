// PromptCard.jsx
import { useState } from "react";

function PromptCard({
  title,
  prompt,
  tag,
  onTagClick,
  onCopy,
  isFavorited,
  onToggleFavorite,
  likeCount,
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
    onCopy?.();
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-semibold mb-2 text-purple-700">{title}</h2>
        <p className="text-sm text-gray-700 whitespace-pre-line">{prompt}</p>

        <div
          onClick={() => onTagClick?.(tag)}
          className="mt-4 inline-block text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded cursor-pointer hover:bg-purple-200 transition"
        >
          {tag}
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
<button
  onClick={onToggleFavorite}
  className={`text-xl transition ${
    isFavorited ? "text-pink-500" : "text-gray-300 hover:text-pink-400"
  }`}
>
  {isFavorited ? "❤️" : "🤍"}  {isFavorited ? "已收藏" : "收藏"}
</button>

          <span className="text-sm text-gray-500">👍 {likeCount}</span>
        </div>

        <button
          onClick={handleCopy}
          className="text-sm text-purple-600 hover:underline"
        >
          {copied ? "✅ 已复制" : "📋 复制 Prompt"}
        </button>
      </div>
    </div>
  );
}

export default PromptCard;
