import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { sendPromptToOpenAI } from "../lib/api";
import ModelSelector from "./ModelSelector";
import { Link } from "react-router-dom"; // 别忘了加

import ShareToolbar from "./ShareToolbar";

function PromptDetailPage() {
  const { id } = useParams(); // ⬅ 从 URL 中获取 id
  const [prompt, setPrompt] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState("gpt-3.5-turbo");

  // 加载 prompt 内容（从本地缓存）
  useEffect(() => {
    const storedPrompts = JSON.parse(localStorage.getItem("prompts") || "[]");
    const selected = storedPrompts[parseInt(id)];
    setPrompt(selected);
  }, [id]);

  const handleTestPrompt = async () => {
    setLoading(true);
    setResponse("");

    const fullPrompt = `${prompt.prompt}\n\n${userInput}`;
    try {
      const reply = await sendPromptToOpenAI(fullPrompt, model);
      setResponse(reply);
    } catch (err) {
      setResponse("请求出错：" + err.message);
    }
    setLoading(false);
  };
  if (!prompt) {
    return (
      <div className="p-6 text-center text-gray-500">
        ❗ 无效的 Prompt 数据，无法加载详情页。
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">{prompt.title}</h1>
      <ShareToolbar />
      <Link
        to={`/prompt/${id}/json`}
        className="text-sm text-blue-600 hover:underline ml-2"
      >
        🔍 查看 JSON 源文件
      </Link>

      {/* 📋 Prompt 区域 + 复制按钮 */}
      <div className="relative mb-4">
        <div className="text-gray-700 whitespace-pre-wrap bg-gray-50 p-4 rounded-xl border">
          {prompt.prompt}
        </div>
        <button
          onClick={() => {
            navigator.clipboard.writeText(prompt.prompt);
            alert("✅ Prompt 已复制到剪贴板！");
          }}
          className="absolute top-2 right-2 text-sm text-purple-600 hover:underline"
        >
          📋 复制
        </button>
      </div>

      {/* 🏷️ 标签 */}
      <div className="flex flex-wrap gap-2 mb-4">
        {prompt.tag?.map((t, i) => (
          <span
            key={i}
            className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      {/* 📌 来源 */}
      <div className="mb-4">
        <h2 className="text-sm font-semibold text-gray-500">📌 来源</h2>
        <p className="text-gray-700">{prompt.source || "暂无来源信息"}</p>
      </div>

      {/* 📖 使用说明 */}
      <div className="mb-4">
        <h2 className="text-sm font-semibold text-gray-500">📖 使用说明</h2>
        <p className="text-gray-700 whitespace-pre-wrap">
          {prompt.instructions || "暂无说明"}
        </p>
      </div>

      {/* 💡 示例输出 */}
      <div className="mb-4">
        <h2 className="text-sm font-semibold text-gray-500">💡 示例输出</h2>
        <p className="text-gray-700 whitespace-pre-wrap">
          {prompt.exampleOutput || "暂无示例"}
        </p>
      </div>

      {/* ✅ 模型选择滑块 */}
      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-1">
          🧠 选择 GPT 模型：
        </label>
        <ModelSelector model={model} setModel={setModel} />
      </div>

      {/* 🧪 Prompt 测试区 */}
      <div className="mt-6 space-y-4">
        <label className="block font-medium text-gray-700">
          🧪 输入你的上下文（可选）：
        </label>
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="w-full p-3 border rounded-xl"
          placeholder="在这里输入 ChatGPT 的上下文，例如角色设定、背景描述等"
        />

        <button
          onClick={handleTestPrompt}
          className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700"
        >
          🚀 测试这个 Prompt
        </button>

        {loading && <p className="text-gray-400">正在向 OpenAI 请求中...</p>}
        {response && (
          <div className="bg-gray-100 p-4 rounded-xl whitespace-pre-wrap">
            <p className="text-sm text-gray-500 mb-2">🔁 ChatGPT 返回结果：</p>
            {response}
          </div>
        )}
      </div>
    </div>
  );
}

export default PromptDetailPage;
