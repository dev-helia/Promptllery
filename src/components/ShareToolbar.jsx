import { useState } from "react";
import QRCode from "react-qr-code";

export default function ShareToolbar() {
  const shareUrl = window.location.href;
  const [showQR, setShowQR] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("📎 链接已复制到剪贴板！");
  };

  return (
    <div className="mb-4 flex flex-col gap-2">
      <div className="flex gap-4 items-center">
        <button
          onClick={handleCopy}
          className="text-sm text-purple-600 hover:underline"
        >
          📎 分享链接
        </button>
        <button
          onClick={() => setShowQR((prev) => !prev)}
          className="text-sm text-purple-600 hover:underline"
        >
          🔳 {showQR ? "隐藏二维码" : "生成二维码"}
        </button>
      </div>

      {showQR && (
        <div className="border rounded-xl p-3 inline-block w-fit bg-white">
          <QRCode value={shareUrl} size={128} />
        </div>
      )}
    </div>
  );
}
