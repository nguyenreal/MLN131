"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ChatBox from "../components/ChatBox";

function HeaderBackground() {
  const [videoFailed, setVideoFailed] = useState(false);
  useEffect(() => {
    
  }, []);

  if (!videoFailed) {
    return (
      <video autoPlay muted loop playsInline
        onError={() => setVideoFailed(true)}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
      >
        <source src="/hero.mp4" type="video/mp4" onError={() => setVideoFailed(true)} />
      </video>
    );
  }

  return <div style={{ position: "absolute", inset: 0, zIndex: 0, background: "linear-gradient(135deg, #0F4A1F, #1E6B38)" }} />;
}

const QUIZ = [
  {
    q: "Đặc điểm nổi bật nhất về mặt thực chất của thời kỳ quá độ lên CNXH là gì?",
    opts: [
      "Xóa bỏ ngay lập tức và triệt để mọi tàn dư của xã hội cũ.",
      "Thời kỳ đan xen, tồn tại song song giữa cái cũ và cái mới trên tất cả các lĩnh vực.",
      "Chỉ tập trung xây dựng cái mới, không quan tâm đến các yếu tố cũ.",
      "Thiết lập ngay lập tức quan hệ sản xuất công hữu tuyệt đối."
    ],
    ans: 1,
    exp: "Thời kỳ quá độ mang tính chất đan xen giữa cái cũ và cái mới trên mọi lĩnh vực."
  },
  {
    q: "Trong lĩnh vực kinh tế, tính chất \"đan xen giữa cũ và mới\" ở Việt Nam được thể hiện rõ nhất qua yếu tố nào?",
    opts: [
      "Chỉ tồn tại duy nhất thành phần kinh tế xã hội chủ nghĩa.",
      "Sự biến mất hoàn toàn của các hình thức kinh tế tư nhân.",
      "Sự tồn tại của cơ chế bao cấp bên cạnh cơ chế thị trường.",
      "Sự tồn tại nhiều thành phần kinh tế, trong đó có cả những thành phần đối lập nhau."
    ],
    ans: 3,
    exp: "Kinh tế nhiều thành phần là biểu hiện rõ nhất của sự đan xen giữa cái cũ và cái mới."
  },
  {
    q: "Về mặt tư tưởng - văn hóa trong thời kỳ quá độ, nhiệm vụ trọng tâm để giải quyết sự đan xen giữa cũ và mới là gì?",
    opts: [
      "Cấm đoán tất cả các luồng tư tưởng không phải là tư tưởng vô sản.",
      "Xây dựng nền văn hóa mới, tiếp thu tinh hoa nhân loại và đấu tranh chống tư tưởng phản tiến bộ.",
      "Chỉ duy trì các giá trị văn hóa truyền thống, từ chối văn hóa hiện đại.",
      "Nhập khẩu hoàn toàn các giá trị văn hóa từ các nước phát triển."
    ],
    ans: 1,
    exp: "Cần xây dựng văn hóa mới đồng thời tiếp thu tinh hoa nhân loại và đấu tranh với tư tưởng lạc hậu."
  },
  {
    q: "Theo quan điểm của Lênin và bối cảnh thực tế, yếu tố then chốt nào giúp các nước lạc hậu có thể \"rút ngắn\" quá trình phát triển lên CNXH?",
    opts: [
      "Tự cô lập kinh tế để bảo vệ sản xuất trong nước.",
      "Trải qua đầy đủ tất cả các giai đoạn đau khổ của chủ nghĩa tư bản.",
      "Tận dụng bối cảnh toàn cầu hóa và thành tựu của các cuộc Cách mạng công nghiệp.",
      "Chỉ dựa vào nguồn tài nguyên thiên nhiên sẵn có của quốc gia."
    ],
    ans: 2,
    exp: "Việc tận dụng thành tựu khoa học - công nghệ và toàn cầu hóa giúp rút ngắn quá trình phát triển."
  },
  {
    q: "Để rút ngắn thời kỳ quá độ một cách bền vững, Việt Nam xác định việc \"bỏ qua chế độ tư bản chủ nghĩa\" phải gắn liền với việc tiếp thu yếu tố nào của CNTB?",
    opts: [
      "Thiết chế chính trị và bộ máy nhà nước tư sản.",
      "Quan hệ sản xuất dựa trên sự bóc lột lao động làm thuê.",
      "Vị trí thống trị của kiến trúc thượng tầng tư bản chủ nghĩa.",
      "Thành tựu khoa học - công nghệ và kinh nghiệm quản lý tiên tiến."
    ],
    ans: 3,
    exp: "Việt Nam tiếp thu thành tựu khoa học - công nghệ và quản lý, không tiếp thu bản chất bóc lột của CNTB."
  },
  {
    q: "Phương hướng nào sau đây được coi là \"nhiệm vụ trung tâm\" để phát triển lực lượng sản xuất, tạo tiền đề rút ngắn thời kỳ quá độ ở Việt Nam?",
    opts: [
      "Đẩy mạnh công nghiệp hóa, hiện đại hóa gắn với phát triển kinh tế tri thức.",
      "Chỉ tập trung phát triển nông nghiệp và thủ công nghiệp truyền thống.",
      "Mở rộng quan hệ đối ngoại mà không cần chú trọng thực lực kinh tế.",
      "Duy trì mô hình kinh tế tập trung quan liêu, bao cấp."
    ],
    ans: 0,
    exp: "Công nghiệp hóa, hiện đại hóa là nhiệm vụ trung tâm để phát triển lực lượng sản xuất."
  }
];

const FILL = [
  {
    s: "Thực chất của thời kỳ quá độ là sự .................... giữa cái cũ và cái mới trên mọi lĩnh vực.",
    ans: "Đan xen",
    hint: "Từ chỉ trạng thái tồn tại song song, xen kẽ lẫn nhau."
  },
  {
    s: "Trong thời kỳ quá độ, việc tồn tại nhiều .................... kinh tế (kể cả đối lập) là đặc điểm khách quan.",
    ans: "Thành phần",
    hint: "Từ dùng để chỉ các hình thức tổ chức kinh tế như nhà nước, tư nhân, tập thể..."
  },
  {
    s: "Việt Nam quá độ lên CNXH theo con đường ...................., bỏ qua chế độ tư bản chủ nghĩa.",
    ans: "Gián tiếp",
    hint: "Ngược lại với \"trực tiếp\"."
  },
  {
    s: "Để rút ngắn thời kỳ quá độ, Việt Nam cần tận dụng thành tựu của .................... công nghiệp và toàn cầu hóa.",
    ans: "Cách mạng",
    hint: "Từ dùng để chỉ sự thay đổi bước ngoặt về công nghệ sản xuất của nhân loại."
  }
];

export default function TroChoiPage() {
  const [chat, setChat] = useState(false);
  const [game, setGame] = useState<"quiz"|"fill"|null>(null);
  const [qi, setQi] = useState(0);
  const [sel, setSel] = useState<number|null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [fills, setFills] = useState(FILL.map(() => ""));
  const [checked, setChecked] = useState(false);

  const pick = (i: number) => {
    if (sel !== null) return;
    setSel(i);
    if (i === QUIZ[qi].ans) setScore(s => s + 1);
  };
  const next = () => {
    if (qi + 1 >= QUIZ.length) { setDone(true); } else { setQi(q => q + 1); setSel(null); }
  };
  const reset = () => { setQi(0); setSel(null); setScore(0); setDone(false); };

  const fillOk = FILL.filter((f, i) => fills[i].trim().toLowerCase() === f.ans.toLowerCase()).length;

  const S = { fontFamily: "'Be Vietnam Pro', sans-serif" };

  return (
    <div style={{ minHeight: "100vh", background: "#FDF6E3" }}>
      <Navbar />

      <div style={{ position: "relative", padding: "56px 0 48px", overflow: "hidden" }}>
        <HeaderBackground />

        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(135deg, rgba(15,74,31,0.85), rgba(30,107,56,0.75))" }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 700, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <h1 style={{ ...S, fontWeight: 900, fontSize: "clamp(1.8rem,5vw,2.8rem)", color: "white", lineHeight: 1.2 }}>
            Trò Chơi Lịch Sử
          </h1>
          <p style={{ ...S, color: "rgba(255,255,255,0.7)", fontSize: "1rem", marginTop: 10 }}>
            Học mà chơi, chơi mà học — kiểm tra kiến thức về CNXH Khoa học(Thời kì quá độ lên CNXH ở Việt Nam)
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "56px 28px" }}>
        {!game && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            {[
              { id: "quiz", title: "Trắc Nghiệm", desc: `${QUIZ.length} câu hỏi về Thời kì quá độ lên CNXH ở Việt Nam`, color: "#A93226" },
              { id: "fill", title: "Điền Vào Chỗ Trống", desc: `${FILL.length} câu hoàn thành kiến thức`, color: "#1E6B38" },
            ].map(g => (
              <button key={g.id} onClick={() => setGame(g.id as any)} style={{
                background: "white", border: `2px solid ${g.color}20`,
                borderRadius: 16, padding: "44px 28px", minHeight: 260, cursor: "pointer",
                textAlign: "center",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}>
                <div style={{ width: 40, height: 4, background: g.color, borderRadius: 2, margin: "0 auto 16px" }} />
                <h3 style={{ ...S, fontWeight: 800, fontSize: "1.4rem", color: g.color, marginBottom: 10 }}>{g.title}</h3>
                <p style={{ ...S, color: "#666", fontSize: "1.02rem", lineHeight: 1.6 }}>{g.desc}</p>
                <div style={{ ...S, marginTop: 18, fontWeight: 700, fontSize: "1rem", color: g.color }}>Bắt đầu</div>
              </button>
            ))}
          </div>
        )}

        {/* QUIZ */}
        {game === "quiz" && !done && (
          <div style={{ background: "white", borderRadius: 18, overflow: "hidden", boxShadow: "0 10px 38px rgba(0,0,0,0.12)" }}>
            <div style={{ background: "linear-gradient(135deg, #7B1A12, #A93226)", padding: "28px 34px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ ...S, color: "#F5C842", fontWeight: 700, fontSize: "1.1rem" }}>Câu {qi+1}/{QUIZ.length}</span>
                <span style={{ ...S, color: "rgba(255,255,255,0.82)", fontSize: "1rem" }}>Điểm: {score}</span>
              </div>
              <div style={{ height: 6, background: "rgba(255,255,255,0.2)", borderRadius: 2, marginTop: 14 }}>
                <div style={{ height: "100%", background: "#F5C842", borderRadius: 2, width: `${((qi+1)/QUIZ.length)*100}%`, transition: "width 0.5s" }} />
              </div>
            </div>
            <div style={{ padding: "38px 34px 34px" }}>
              <h3 style={{ ...S, fontWeight: 700, fontSize: "1.45rem", color: "#1A1A1A", lineHeight: 1.55, marginBottom: 24 }}>
                {QUIZ[qi].q}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {QUIZ[qi].opts.map((o, i) => (
                  <button key={i} onClick={() => pick(i)} className={`quiz-opt${sel !== null ? (i === QUIZ[qi].ans ? " correct" : sel === i ? " wrong" : "") : ""}`}>
                    {o}
                  </button>
                ))}
              </div>
              {sel !== null && (
                <div style={{
                  marginTop: 20, padding: "18px 20px", borderRadius: 12,
                  background: sel === QUIZ[qi].ans ? "#eafaf1" : "#fdf2f2",
                  border: `1px solid ${sel === QUIZ[qi].ans ? "#1E6B38" : "#A93226"}30`,
                }}>
                  <p style={{ ...S, fontSize: "1rem", color: "#333", lineHeight: 1.65 }}>
                    {sel === QUIZ[qi].ans ? "Chính xác! " : "Chưa đúng. "}{QUIZ[qi].exp}
                  </p>
                  <button onClick={next} style={{
                    ...S, marginTop: 14, padding: "11px 24px", borderRadius: 24,
                    background: "#A93226", color: "white", border: "none",
                    fontWeight: 700, fontSize: "0.95rem", cursor: "pointer",
                  }}>
                    {qi+1 >= QUIZ.length ? "Xem kết quả" : "Câu tiếp"}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {game === "quiz" && done && (
          <div style={{ background: "white", borderRadius: 18, padding: "64px 42px", textAlign: "center", boxShadow: "0 10px 38px rgba(0,0,0,0.12)" }}>
            <div style={{ ...S, fontWeight: 900, fontSize: "3.5rem", color: "#A93226", marginBottom: 8 }}>
              {score}/{QUIZ.length}
            </div>
            <p style={{ ...S, color: "#555", fontSize: "1.12rem", marginBottom: 28 }}>
              {score >= 5 ? "Xuất sắc! Bạn nắm vững lịch sử Đổi Mới." : score >= 3 ? "Tốt! Hãy ôn thêm để nhớ lâu hơn." : "Hãy đọc thêm nội dung và thử lại."}
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
              <button onClick={reset} style={{ ...S, padding: "12px 26px", borderRadius: 22, background: "#A93226", color: "white", border: "none", fontWeight: 700, cursor: "pointer", fontSize: "0.98rem" }}>
                Chơi lại
              </button>
              <button onClick={() => setGame(null)} style={{ ...S, padding: "12px 26px", borderRadius: 22, background: "#1E6B38", color: "white", border: "none", fontWeight: 700, cursor: "pointer", fontSize: "0.98rem" }}>
                Trò chơi khác
              </button>
            </div>
          </div>
        )}

        {/* FILL */}
        {game === "fill" && (
          <div style={{ background: "white", borderRadius: 18, overflow: "hidden", boxShadow: "0 10px 38px rgba(0,0,0,0.12)" }}>
            <div style={{ background: "linear-gradient(135deg, #0F4A1F, #1E6B38)", padding: "28px 34px" }}>
              <h3 style={{ ...S, fontWeight: 700, fontSize: "1.4rem", color: "white" }}>Điền Vào Chỗ Trống</h3>
              <p style={{ ...S, color: "rgba(255,255,255,0.72)", fontSize: "0.98rem", marginTop: 6 }}>Điền từ hoặc cụm từ thích hợp vào chỗ trống</p>
            </div>
            <div style={{ padding: "34px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {FILL.map((f, i) => {
                  const ok = checked && fills[i].trim().toLowerCase() === f.ans.toLowerCase();
                  return (
                    <div key={i} style={{
                      padding: "24px", borderRadius: 14,
                      background: checked
                        ? (ok ? "linear-gradient(135deg, #e9fff1 0%, #d8f8e4 100%)" : "linear-gradient(135deg, #fff1f0 0%, #ffe2dd 100%)")
                        : "linear-gradient(135deg, #fff8e5 0%, #f7e8be 100%)",
                      border: `2px solid ${checked ? (ok ? "#1E6B38" : "#A93226") : "#e2b85f"}`,
                      boxShadow: checked
                        ? (ok ? "0 8px 20px rgba(30,107,56,0.16)" : "0 8px 20px rgba(169,50,38,0.14)")
                        : "0 8px 20px rgba(226,184,95,0.2)",
                    }}>
                      <p style={{ ...S, color: "#333", lineHeight: 1.75, fontSize: "1.08rem" }}>
                        <strong>{i+1}.</strong> {f.s}
                      </p>
                      <p style={{ ...S, color: "#7b6a46", fontSize: "0.96rem", marginTop: 8, fontWeight: 600 }}>Gợi ý: {f.hint}</p>
                      <input value={fills[i]}
                        onChange={e => { setChecked(false); const a=[...fills]; a[i]=e.target.value; setFills(a); }}
                        placeholder="Nhập câu trả lời..."
                        style={{
                          ...S, marginTop: 12, width: "100%",
                          border: `2px solid ${checked ? (ok ? "#1E6B38" : "#A93226") : "#e8d5a3"}`,
                          borderRadius: 12, padding: "14px 16px",
                          fontSize: "1.1rem", fontWeight: 600,
                          background: "white", outline: "none",
                          color: "#4b180f",
                        }}
                      />
                      {checked && <p style={{ ...S, fontSize: "1rem", marginTop: 10, color: ok ? "#1E6B38" : "#A93226", fontWeight: 700 }}>
                        {ok ? "Chính xác!" : `Đáp án đúng: ${f.ans}`}
                      </p>}
                    </div>
                  );
                })}
              </div>
              <div style={{ display: "flex", gap: 14, marginTop: 28, alignItems: "center" }}>
                <button onClick={() => setChecked(true)} style={{ ...S, padding: "12px 26px", borderRadius: 22, background: "#1E6B38", color: "white", border: "none", fontWeight: 700, cursor: "pointer", fontSize: "0.98rem" }}>
                  Kiểm tra
                </button>
                {checked && <span style={{ ...S, color: "#444", fontSize: "1rem" }}>Kết quả: {fillOk}/{FILL.length}</span>}
                <button onClick={() => setGame(null)} style={{ ...S, marginLeft: "auto", padding: "12px 22px", borderRadius: 22, background: "#e8d5a3", color: "#555", border: "none", fontWeight: 600, cursor: "pointer", fontSize: "0.96rem" }}>
                  Quay lại
                </button>
              </div>
            </div>
          </div>
        )}

        {game && <div style={{ textAlign: "center", marginTop: 16 }}>
          <button onClick={() => setGame(null)} style={{ ...S, color: "#A93226", background: "none", border: "none", cursor: "pointer", fontSize: "0.88rem" }}>
            Xem tất cả trò chơi
          </button>
        </div>}
      </div>

      <ChatBox open={chat} onToggle={() => setChat(!chat)} />
    </div>
  );
}
