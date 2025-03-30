// src/components/LoginPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!nickname || !password) {
      alert("请输入昵称和密码！");
      return;
    }
    // 假登录：将昵称保存到 localStorage
    localStorage.setItem("nickname", nickname);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-purple-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center text-purple-600 mb-6">
          🔐 登录你的账号
        </h2>

        <label className="block text-sm mb-1">昵称</label>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-xl"
        />

        <label className="block text-sm mb-1">密码</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 border border-gray-300 rounded-xl"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition"
        >
          登录
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
