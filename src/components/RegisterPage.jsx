import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../lib/supabaseClient";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert("❌ 注册失败：" + error.message);
    } else {
      alert("✅ 注册成功，请前往邮箱验证！");
      navigate("/login");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">注册</h2>
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
        onClick={handleRegister}
        className="bg-purple-600 text-white px-4 py-2"
      >
        注册
      </button>
    </div>
  );
}

export default RegisterPage;
