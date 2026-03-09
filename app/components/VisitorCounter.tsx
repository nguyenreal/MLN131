"use client";
import { useState, useEffect, useRef } from "react";

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
      // silent
    }
  };

  useEffect(() => {
    heartbeat();
    intervalRef.current = setInterval(heartbeat, 30_000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
      <span style={{ position: "relative", display: "inline-flex", width: 10, height: 10 }}>
        <span style={{
          position: "absolute", inset: 0,
          borderRadius: "50%", background: "#2ECC71", opacity: 0.5,
          animation: "pingDot 1.5s ease-in-out infinite",
        }} />
        <span style={{
          position: "relative", display: "inline-block",
          width: 10, height: 10, borderRadius: "50%", background: "#2ECC71",
        }} />
      </span>
      <span style={{ color: "#FEF9E7", fontSize: "0.78rem", fontWeight: 600, whiteSpace: "nowrap" }}>
        {online === null ? (
          <span style={{ opacity: 0.5 }}>...</span>
        ) : (
          <><span style={{ color: "#2ECC71", fontWeight: 900 }}>{online}</span> đang xem</>
        )}
      </span>
      <style>{`
        @keyframes pingDot {
          0% { transform: scale(1); opacity: 0.6; }
          70% { transform: scale(2.2); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
