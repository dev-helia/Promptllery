import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage({ setUsername }) {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // 用来跳转

  const handleLogin = (e) => {
    e.preventDefault();

    if (!nickname) return alert("请输入昵称");

    setUsername(nickname); // ✅ 设置用户名
    navigate("/"); // ✅ 跳转到首页
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-80"
      >
        <h2 className="text-xl font-bold text-purple-600 mb-4 text-center">
          🔐 登录你的账号
        </h2>

        <label className="text-sm block mb-1">昵称</label>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />

        <label className="text-sm block mb-1">密码</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-6 focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
        >
          登录
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
