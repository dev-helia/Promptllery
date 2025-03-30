// UploadForm.jsx
import { useState } from "react";

// 假设你用的系统内的标签集👇，后面可以再扩展成可输入式的
const AVAILABLE_TAGS = [
  "GPT-4",
  "文学",
  "Business",
  "数据分析",
  "ChatGPT",
  "写作",
  "创意",
];

function UploadForm({ onUpload }) {
  const [title, setTitle] = useState("");
  const [prompt, setPrompt] = useState("");
  const [tags, setTags] = useState([]);
  const [source, setSource] = useState("");
  const [instructions, setInstructions] = useState("");
  const [exampleOutput, setExampleOutput] = useState("");


const handleSubmit = (e) => {
  e.preventDefault();
  if (!title || !prompt || tags.length === 0) return;

  const newPrompt = {
    title,
    prompt,
    tag: tags, // 注意是数组
    likeCount: 0,
    source,
    instructions,
    exampleOutput,
  };

  onUpload(newPrompt);

  // 清空字段
  setTitle("");
  setPrompt("");
  setTags([]);
  setSource("");
  setInstructions("");
  setExampleOutput("");
};

const toggleTag = (tag) => {
  setTags((prev) =>
    prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
  );
};

return (
  <form
    onSubmit={handleSubmit}
    className="bg-white p-6 rounded-2xl shadow mb-8 space-y-4"
  >
    <h2 className="text-xl font-bold text-purple-600">📤 上传新的 Prompt</h2>

    <input
      type="text"
      placeholder="标题"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="w-full p-3 border rounded-xl"
    />

    <textarea
      placeholder="Prompt 内容"
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      className="w-full p-3 border rounded-xl"
    />

    <input
      type="text"
      placeholder="来源（可选）"
      value={source}
      onChange={(e) => setSource(e.target.value)}
      className="w-full p-3 border rounded-xl"
    />

    <textarea
      placeholder="使用说明（可选）"
      value={instructions}
      onChange={(e) => setInstructions(e.target.value)}
      className="w-full p-3 border rounded-xl"
    />

    <textarea
      placeholder="示例输出（可选）"
      value={exampleOutput}
      onChange={(e) => setExampleOutput(e.target.value)}
      className="w-full p-3 border rounded-xl"
    />

    <div>
      <p className="text-sm text-gray-600 mb-1">选择分类标签：</p>
      <div className="flex flex-wrap gap-2">
        {AVAILABLE_TAGS.map((tag) => (
          <button
            type="button"
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1 rounded-full border ${
              tags.includes(tag)
                ? "bg-purple-600 text-white"
                : "bg-white text-purple-600 border-purple-300"
            } hover:bg-purple-100 transition`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>

    <button
      type="submit"
      className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
    >
      🚀 添加 Prompt
    </button>
  </form>
);
}

export default UploadForm;
