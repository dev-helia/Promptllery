import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { sendPromptToOpenAI } from "../lib/api";
import ModelSelector from "./ModelSelector";
import supabase from "../lib/supabaseClient";
import ShareToolbar from "./ShareToolbar";
import { Link } from "react-router-dom";

function PromptDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState("gpt-3.5-turbo");

  useEffect(() => {
    const isValidUUID = (str) =>
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
        str
      );

    if (!isValidUUID(id)) {
      console.error("❌ 非法 UUID:", id);
      navigate("/");
      return;
    }

    const fetchPrompt = async () => {
      const { data, error } = await supabase
        .from("prompts")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("❌ 加载失败", error.message);
      } else {
        setPrompt(data);
      }
    };

    fetchPrompt();
  }, [id, navigate]);

  const handleTestPrompt = async () => {
    if (!prompt) return;

    setLoading(true);
    setResponse("");
    const fullPrompt = `${prompt.content}\n\n${userInput}`;

    try {
      const reply = await sendPromptToOpenAI(fullPrompt, model);
      setResponse(reply);
    } catch (err) {
      setResponse("请求出错：" + err.message);
    } finally {
      setLoading(false);
    }
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

      <div className="relative mb-4">
        <div className="text-gray-700 whitespace-pre-wrap bg-gray-50 p-4 rounded-xl border">
          {prompt.content}
        </div>
        <button
          onClick={() => {
            navigator.clipboard.writeText(prompt.content);
            alert("✅ Prompt 已复制到剪贴板！");
          }}
          className="absolute top-2 right-2 text-sm text-purple-600 hover:underline"
        >
          📋 复制
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {prompt.tags?.map((t, i) => (
          <span
            key={i}
            className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mb-4">
        <h2 className="text-sm font-semibold text-gray-500">📌 来源</h2>
        <p className="text-gray-700">{prompt.source || "暂无来源信息"}</p>
      </div>

      <div className="mb-4">
        <h2 className="text-sm font-semibold text-gray-500">📖 使用说明</h2>
        <p className="text-gray-700 whitespace-pre-wrap">
          {prompt.instructions || "暂无说明"}
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-sm font-semibold text-gray-500">💡 示例输出</h2>
        <p className="text-gray-700 whitespace-pre-wrap">
          {prompt.example_output || "暂无示例"}
        </p>
      </div>

      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-1">
          🧠 选择 GPT 模型：
        </label>
        <ModelSelector model={model} setModel={setModel} />
      </div>

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
