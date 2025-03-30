import { useState } from "react";
import { Link } from "react-router-dom";

function PromptCard({
  index,
  title,
  prompt,
  tag,
  onTagClick,
  onCopy,
  isFavorited,
  onToggleFavorite,
  likeCount,
  onLike,
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
    onCopy?.();
  };

  return (
    <Link
      to={`/prompt/${index}`} // ✅ 根据索引跳转
      className="block"
    >
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold mb-2 text-purple-700">
            {title}
          </h2>
          <p className="text-sm text-gray-700 whitespace-pre-line line-clamp-4">
            {prompt}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tag.map((t, i) => (
              <span
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  onTagClick?.(t);
                }}
                className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded cursor-pointer hover:bg-purple-200 transition"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                onToggleFavorite();
              }}
              className={`text-xl transition ${
                isFavorited
                  ? "text-pink-500"
                  : "text-gray-300 hover:text-pink-400"
              }`}
            >
              {isFavorited ? "❤️" : "🤍"}
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                onLike();
              }}
              className="text-gray-500 text-sm hover:text-blue-500 transition"
            >
              👍 {likeCount}
            </button>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              handleCopy();
            }}
            className="text-sm text-purple-600 hover:underline"
          >
            {copied ? "✅ 已复制" : "📋 复制"}
          </button>
        </div>
      </div>
    </Link>
  );
}

export default PromptCard;
