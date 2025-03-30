// UploadForm.jsx
import { useState } from "react";

function UploadForm({ onAddPrompt }) {
  const [title, setTitle] = useState("");
  const [prompt, setPrompt] = useState("");
  const [tag, setTag] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !prompt || !tag) return;
    const newPrompt = {
      title,
      prompt,
      tag,
      likeCount: 0,
    };
    onAddPrompt(newPrompt);
    setTitle("");
    setPrompt("");
    setTag("");
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
        className="w-full p-2 border border-gray-300 rounded"
      />
      <textarea
        placeholder="Prompt 内容"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded h-24 resize-none"
      />
      <input
        type="text"
        placeholder="标签（例如 GPT-4 | 写作）"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />

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
