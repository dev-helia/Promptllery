// src/components/JsonViewer.jsx
import { useParams } from "react-router-dom";

function JsonViewer() {
  const { id } = useParams();
  const prompts = JSON.parse(localStorage.getItem("prompts") || "[]");
  const prompt = prompts[parseInt(id)];

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(prompt, null, 2));
    alert("📋 JSON 内容已复制到剪贴板！");
  };

  if (!prompt) {
    return (
      <div className="p-6 text-center text-gray-500">
        未找到对应 Prompt 数据。
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">🔍 Prompt JSON 数据</h1>
        <button
          onClick={handleCopy}
          className="text-sm text-purple-600 hover:underline"
        >
          📋 一键复制 JSON
        </button>
      </div>
      <pre className="bg-gray-100 p-4 rounded-xl text-sm overflow-auto border">
        {JSON.stringify(prompt, null, 2)}
      </pre>
    </div>
  );
}

export default JsonViewer;
