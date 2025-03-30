// src/lib/api.js

export async function sendPromptToOpenAI(fullPrompt, model = "gpt-3.5-turbo") {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error("❌ API Key 未设置！");
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [{ role: "user", content: fullPrompt }],
    }),
  });

  const data = await response.json();

  if (data.error) {
    console.error("OpenAI API 错误：", data.error);
    throw new Error(data.error.message);
  }

  return data.choices?.[0]?.message?.content || "⚠️ OpenAI 没有返回任何内容";
}
