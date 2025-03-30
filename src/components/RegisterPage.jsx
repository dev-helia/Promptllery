import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("注册信息：", { email, password, nickname });
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-purple-50">
        <div className="bg-white p-10 rounded-2xl shadow text-center">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">
            🎉 注册成功！
          </h2>
          <p className="text-gray-600">
            欢迎加入 Promptllery！请返回首页登录系统～
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-purple-600 mb-6 text-center">
          📝 注册新账号
        </h2>

        <label className="block text-sm text-gray-600 mb-1">昵称</label>
        <input
          type="text"
          required
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <label className="block text-sm text-gray-600 mb-1">邮箱</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <label className="block text-sm text-gray-600 mb-1">密码</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition"
        >
          注册
        </button>
      </form>
    </div>
  );
}
