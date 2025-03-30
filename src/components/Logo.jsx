import { Link } from "react-router-dom";
import sparkIcon from "../assets/spark.svg"; // 你可以先放个占位图

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src={sparkIcon} alt="logo" className="w-6 h-6" />
      <span className="text-lg font-bold text-purple-600">Promptllery</span>
    </Link>
  );
}

export default Logo;
