"use client";
import { useState, useEffect, useRef } from "react";

// Tạo sessionId ngẫu nhiên cho mỗi tab/trình duyệt
function getSessionId() {
  let id = sessionStorage.getItem("sid");
  if (!id) {
    id = Math.random().toString(36).slice(2) + Date.now().toString(36);
    sessionStorage.setItem("sid", id);
  }
  return id;
}

export default function VisitorCounter() {
  const [online, setOnline] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const heartbeat = async () => {
    try {
      const res = await fetch("/api/visitors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: getSessionId() }),
      });
      const data = await res.json();
      setOnline(data.online);
    } catch {
      // im lặng nếu lỗi
    }
  };

  useEffect(() => {
    // Gửi heartbeat ngay khi vào trang
    heartbeat();

    // Gửi mỗi 30 giây để duy trì "online"
    intervalRef.current = setInterval(heartbeat, 30_000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
      {/* Chấm xanh nhấp nháy */}
      <span style={{ position: "relative", display: "inline-flex" }}>
        <span style={{
          display: "inline-block", width: "8px", height: "8px",
          borderRadius: "50%", background: "#2ECC71",
          animation: "ping 1.5s ease-in-out infinite",
        }} />
        <span style={{
          position: "absolute", inset: 0,
          borderRadius: "50%", background: "#2ECC71", opacity: 0.6,
          animation: "ping 1.5s ease-in-out infinite 0.3s",
        }} />
      </span>
      <span style={{ color: "#FEF9E7", fontSize: "0.78rem", fontWeight: 600, whiteSpace: "nowrap" }}>
        {online === null ? (
          <span style={{ color: "#fde8e8", opacity: 0.6 }}>...</span>
        ) : (
          <>
            <span style={{ color: "#2ECC71", fontWeight: 900, fontSize: "0.9rem" }}>
              {online}
            </span>
            {" "}đang xem
          </>
        )}
      </span>
      <style>{`
        @keyframes ping {
          0% { transform: scale(1); opacity: 1; }
          70% { transform: scale(2); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
