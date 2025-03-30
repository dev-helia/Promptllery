import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../lib/supabaseClient";

function LoginPage({ setUsername }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("❌ 登录失败：" + error.message);
    } else {
      console.log("✅ 登录成功", user);
      setUsername(user.user.email); // 👈 用邮箱作为用户名
      localStorage.setItem("username", user.user.email); // 持久化
      navigate("/");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">登录</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="邮箱"
        className="border p-2 mb-2 w-full"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="密码"
        className="border p-2 mb-2 w-full"
      />
      <button
        onClick={handleLogin}
        className="bg-purple-600 text-white px-4 py-2"
      >
        登录
      </button>
    </div>
  );
}

export default LoginPage;
