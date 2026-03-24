"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ChatBox from "../components/ChatBox";

function HeaderBackground() {
  const [videoFailed, setVideoFailed] = useState(false);
  useEffect(() => {
    // Optionally load Three.js here for a 3D fallback like the home page.
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

  // Fallback: gradient background
  return <div style={{ position: "absolute", inset: 0, zIndex: 0, background: "linear-gradient(135deg, #7B1A12, #A93226, #C0392B)" }} />;
}

const SECTIONS = [
  {
    id: "boi-canh", color: "#1A4A7A",
    title: "Bỏ Qua Chế Độ Tư Bản Chủ Nghĩa",
    content: `Đây là đặc điểm nổi bật nhất, mang tính quy định toàn bộ tiến trình quá độ. Việt Nam xuất phát từ một nền kinh tế nông nghiệp lạc hậu, chưa trải qua giai đoạn phát triển tư bản chủ nghĩa một cách đầy đủ, nhưng tiến thẳng lên chủ nghĩa xã hội. Điều này tạo ra mâu thuẫn căn bản: lực lượng sản xuất còn thấp trong khi quan hệ sản xuất xã hội chủ nghĩa đang từng bước xác lập.
"Bỏ qua" ở đây không có nghĩa là bỏ qua toàn bộ những thành tựu văn minh mà chủ nghĩa tư bản đã tạo ra, mà là bỏ qua sự thống trị của giai cấp tư sản và chế độ bóc lột tư bản chủ nghĩa.
"Đặc điểm nổi bật của thời kỳ quá độ ở nước ta là từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, bỏ qua chế độ tư bản chủ nghĩa." — Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH (bổ sung, phát triển 2011)`,
    image: "/pictures/pic1.png",
    caption: "Nông dân canh tác trên các thửa ruộng bậc thang ở vùng núi phía Bắc Việt Nam",
    source: "Báo Nông nghiệp Việt Nam"
  },
  {
    id: "dai-hoi-vi", color: "#A93226",
    title: "Cơ Cấu Kinh Tế Đan Xen Nhiều Thành Phần",
    content: `Tồn tại đồng thời nhiều thành phần kinh tế với trình độ phát triển không đồng đều — đây là biểu hiện rõ nhất của tính đan xen "cái cũ – cái mới" trong nền kinh tế thời kỳ quá độ:
Kinh tế nhà nước: giữ vai trò chủ đạo, định hướng và điều tiết.
Kinh tế tập thể: hợp tác xã kiểu mới, khu vực nông nghiệp.
Kinh tế tư nhân & cá thể: phát triển mạnh sau Đổi Mới 1986, đóng góp lớn vào GDP.
Kinh tế có vốn FDI: thu hút công nghệ và vốn nước ngoài để rút ngắn phát triển.
Quan hệ sản xuất cũ chưa tan biến hoàn toàn, quan hệ sản xuất mới chưa chiếm ưu thế tuyệt đối — đây chính là bản chất của thời kỳ quá độ: không thuần nhất, không hoàn chỉnh, luôn vận động.
`,
    image: "/pictures/pic2.png",
    caption: "Một góc chợ Tết Nguyên Đán sầm uất tại Hà Nội vào năm 1990",
    source: "Báo Tri thức và Cuộc sống"
  },
  {
    id: "kinh-te", color: "#1E6B38",
    title: "Cơ Cấu Giai Cấp – Xã Hội Phức Tạp",
    content: `Xã hội Việt Nam trong thời kỳ quá độ tồn tại nhiều giai tầng với lợi ích chưa hoàn toàn đồng nhất. Sự phân hóa thu nhập và điều kiện sống giữa các vùng miền, các tầng lớp còn lớn — đây là mặt trái của quá trình phát triển chưa đồng đều.
Giai cấp công nhân: lực lượng lãnh đạo, đang lớn mạnh cùng CNH–HĐH.
Giai cấp nông dân: chiếm đa số, gắn với nông nghiệp và nông thôn.
Tầng lớp trí thức: động lực của kinh tế tri thức và đổi mới sáng tạo.
Đội ngũ doanh nhân: xuất hiện và lớn mạnh sau Đổi Mới, đóng góp phát triển.
Đặt ra yêu cầu cốt lõi: bảo đảm công bằng xã hội và thu hẹp khoảng cách phát triển trong suốt quá trình quá độ.
`,
    image: "/pictures/pic3.png",
    caption: "Các tiểu thương buôn mía ở vịnh Hạ Long",
    source: "nhiếp ảnh gia người Nhật Hiroji Kubota"
  },
  {
    id: "dai-hoi-vii", color: "#A93226",
    title: "Đấu Tranh Giữa Hai Con Đường Còn Gay Gắt",
    content: `Cuộc đấu tranh giữa định hướng xã hội chủ nghĩa và xu hướng tư bản hóa tự phát diễn ra liên tục trên các lĩnh vực kinh tế, chính trị, tư tưởng và văn hóa. Đây là mâu thuẫn cơ bản xuyên suốt thời kỳ quá độ.
Các biểu hiện tiêu cực của kinh tế thị trường như tham nhũng, cá nhân chủ nghĩa, suy thoái đạo đức, "tự diễn biến – tự chuyển hóa" chính là "cái cũ" vẫn còn tồn tại và kháng cự trong lòng xã hội mới. Cuộc đấu tranh này đòi hỏi sự lãnh đạo kiên định, nhất quán của Đảng.
`,
    image: "/pictures/pic4.png",
    caption: "Hà Nội trong giai đoạn bao cấp những năm 1980",
    source: "nhà ngoại giao Anh John Ramsden"
  }
  ,
  {
    id: "dai-hoi-vii", color: "#56a926",
    title: "Nhà Nước & Hệ Thống Chính Trị Đang Hoàn Thiện",
    content: `Nhà nước pháp quyền xã hội chủ nghĩa và hệ thống chính trị đang được xây dựng, kiện toàn từng bước. Năng lực quản trị quốc gia, hệ thống pháp luật, bộ máy hành chính còn những hạn chế nhất định — đây là biểu hiện của "cái chưa hoàn thiện" trong thượng tầng kiến trúc.
Đây cũng là lý do vì sao cải cách thể chế, xây dựng nhà nước pháp quyền và dân chủ hóa là nhiệm vụ then chốt trong suốt thời kỳ quá độ, không thể hoàn thành trong một sớm một chiều.
`,
    image: "/pictures/pic5.png",
    caption: "Đại hội đại biểu toàn quốc lần thứ VI của Đảng",
    source: "TTXVN - VNA"
  },
  {
    id: "dai-hoi-vii", color: "#c7c725",
    title: "Hội Nhập Quốc Tế Trong Bối Cảnh Toàn Cầu Hóa",
    content: `Thời kỳ quá độ của Việt Nam diễn ra không phải trong điều kiện biệt lập mà trong bối cảnh toàn cầu hóa sâu rộng, cuộc Cách mạng Công nghiệp lần thứ tư và sự cạnh tranh chiến lược giữa các nước lớn ngày càng quyết liệt.
Đây vừa là thời cơ lớn để rút ngắn — tiếp cận vốn, công nghệ, thị trường và kinh nghiệm quản trị tiên tiến — vừa đặt ra những thách thức về bảo vệ độc lập tự chủ, an ninh kinh tế và giữ vững định hướng xã hội chủ nghĩa.
`,
    image: "/pictures/pic6.png",
    caption: "Bộ trưởng Ngoại giao Nguyễn Mạnh Cẩm ký vào Tuyên bố kết nạp Việt Nam trở thành thành viên chính thức của ASEAN, sáng 29/7/1995",
    source: "TTXVN - VNA"
  },
  {
    id: "dai-hoi-vii", color: "#1ab6d9",
    title: "Sự Lãnh Đạo Vững Chắc Của Đảng Cộng Sản Việt Nam",
    content: `Đây là yếu tố có tính quyết định. Đảng đóng vai trò định hướng chiến lược, hoạch định đường lối và bảo đảm sự thống nhất trong lãnh đạo — không để con đường rút ngắn bị chệch hướng bởi các xu hướng tư bản tự phát hay áp lực từ bên ngoài.
Kiên định mục tiêu: độc lập dân tộc gắn liền với chủ nghĩa xã hội là sợi chỉ đỏ xuyên suốt.
Đổi mới tư duy lý luận: bài học lớn nhất từ Đổi Mới 1986 — dám nhìn thẳng vào thực tiễn.
Xây dựng Đảng trong sạch: chống tham nhũng, tiêu cực là điều kiện tiên quyết để giữ uy tín lãnh đạo.
Kết hợp sức mạnh dân tộc: với xu thế thời đại, phát huy nội lực là chính, tranh thủ ngoại lực.
`,
    image: "/pictures/pic7.png",
    caption: "Tổng Bí thư Nguyễn Văn Linh phát biểu tại Đại hội Đảng 6 - Đại hội “Đổi mới” của Việt Nam năm 1986",
    source: "Báo quân đội nhân dân Việt Nam"
  },
  {
    id: "dai-hoi-vii", color: "#2684a9",
    title: "Phát Triển Lực Lượng Sản Xuất Qua CNH – HĐH & Kinh Tế Tri Thức",
    content: `Rút ngắn đòi hỏi phải nhanh chóng nâng cao trình độ lực lượng sản xuất mà không nhất thiết phải lặp lại toàn bộ con đường mà các nước phát triển đã đi qua hàng thế kỷ. Chiến lược "đi tắt đón đầu" trong công nghệ là chìa khóa.
Ứng dụng khoa học – công nghệ tiên tiến: tự động hóa, trí tuệ nhân tạo, chuyển đổi số.
Phát triển kinh tế tri thức: từ gia công lắp ráp chuyển dần sang sáng tạo giá trị cao.
Kinh tế xanh, kinh tế tuần hoàn: phát triển bền vững, không hy sinh môi trường.
Giáo dục – đào tạo & nghiên cứu KH: đầu tư vào con người là đầu tư dài hạn nhất.
"Khoa học và công nghệ là quốc sách hàng đầu, là nền tảng và động lực phát triển đất nước." — Văn kiện Đại hội Đảng lần thứ XIII (2021)`,
    image: "/pictures/pic8.png",
    caption: "Cố Thủ tướng Võ Văn Kiệt thị sát công trình đường dây 500 KV ",
    source: "Nguồn: Báo Thanh Niên"
  },
  {
    id: "dai-hoi-vii", color: "#db1c1c",
    title: "Xây Dựng Nền Kinh Tế Thị Trường Định Hướng XHCN",
    content: `Đây là mô hình phát triển sáng tạo, chưa có tiền lệ trong lịch sử: vận dụng các quy luật của kinh tế thị trường (cạnh tranh, giá cả, cung cầu) trong khi Nhà nước điều tiết để bảo đảm định hướng xã hội chủ nghĩa và công bằng xã hội.
Tính "đan xen" ở đây chính là đặc điểm nhưng đồng thời là động lực — thị trường giải phóng năng lực sản xuất, Nhà nước định hướng mục tiêu xã hội. Hai lực này không đối lập mà bổ sung cho nhau trong thời kỳ quá độ.
Vai trò nhà nước: điều tiết, khắc phục khuyết tật thị trường, bảo đảm an sinh xã hội.
Kinh tế nhà nước chủ đạo: nắm giữ các lĩnh vực then chốt, huyết mạch nền kinh tế.
Khuyến khích kinh tế tư nhân: là động lực quan trọng phát triển kinh tế – xã hội.
"Nền kinh tế thị trường định hướng XHCN là mô hình kinh tế tổng quát của nước ta trong thời kỳ quá độ lên chủ nghĩa xã hội." — Văn kiện Đại hội Đảng lần thứ XIII (2021)`,
    image: "/pictures/pic9.png",
    caption: "Chợ Đồng Xuân những năm 1990-1993",
    source: "Nhiếp ảnh gia người Đức Hans-Peter Grumpe"
  },
  {
    id: "dai-hoi-vii", color: "#d7b311",
    title: "Phát Huy Sức Mạnh Đại Đoàn Kết Toàn Dân Tộc",
    content: `Đoàn kết là nguồn lực nội sinh không thể thay thế — bài học xuyên suốt lịch sử dân tộc Việt Nam. Trong thời kỳ quá độ với nhiều mâu thuẫn và xung đột lợi ích tiềm tàng, khả năng quy tụ ý chí và sức mạnh của toàn dân tộc là yếu tố quyết định thành bại.
Dân chủ XHCN: bảo đảm quyền làm chủ thực sự của nhân dân, không phải hình thức.
Công bằng xã hội: thực hiện tiến bộ và công bằng xã hội trong từng bước phát triển.
54 dân tộc anh em: phát huy sức mạnh đa dạng văn hóa, đoàn kết không phân biệt.
Con người là trung tâm: vừa là mục tiêu, vừa là động lực của sự phát triển.`,
    image: "/pictures/pic10.png",
    caption: "Khối đại đoàn kết toàn dân tộc ở Diễu binh Kỷ niệm 70 năm Chiến thắng Điện Biên Phủ",
    source: "Cổng thông tin điện tử Tỉnh Tuyên Quang"
  },
  {
    id: "dai-hoi-vii", color: "#d7b311",
    title: "Chủ Động Hội Nhập Quốc Tế, Tiếp Thu Có Chọn Lọc Tinh Hoa Nhân Loại",
    content: `Rút ngắn thời kỳ quá độ về bản chất là tận dụng tối đa những thành tựu mà nhân loại đã tích lũy qua hàng thế kỷ phát triển: vốn, công nghệ, kinh nghiệm quản trị, mô hình thể chế tiến bộ. Tuy nhiên, tiếp thu phải có chọn lọc, phù hợp với điều kiện cụ thể và không đánh mất bản sắc văn hóa dân tộc.
Hội nhập kinh tế sâu rộng: CPTPP, RCEP, EVFTA — mở cửa thị trường, thu hút đầu tư.
FDI chất lượng cao: ưu tiên chuyển giao công nghệ, không chỉ gia công lắp ráp.
Đối ngoại đa phương: "bạn bè với tất cả" — không bị cô lập, không bị lệ thuộc.
Giữ bản sắc văn hóa: hội nhập nhưng không hòa tan, tiếp thu nhưng không mất gốc.
"Việt Nam là bạn, đối tác tin cậy và là thành viên tích cực, có trách nhiệm trong cộng đồng quốc tế." — Đường lối đối ngoại Đại hội Đảng lần thứ XIII`,
    image: "/pictures/pic11.png",
    caption: "Bộ trưởng Ngoại giao Nguyễn Mạnh Cầm (thứ hai, từ trái sang) và Bộ trưởng Ngoại giao các nước ASEAN tới dự Hội nghị thường niên Bộ trưởng Ngoại giao ASEAN lần thứ 28, sáng 29/7/1995.",
    source: "Trần Sơn/TTXVN"
  }
];

export default function NoiDungPage() {
  const [chat, setChat] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!lightboxImage) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxImage(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [lightboxImage]);

  return (
    <div style={{ minHeight: "100vh", background: "#FDF6E3" }}>
      <Navbar />

      {/* Header */}
      <div style={{ position: "relative", padding: "56px 0 48px", overflow: "hidden" }}>
        <HeaderBackground />

        {/* Gradient overlay on top of video to keep text readable */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(135deg, rgba(123,26,18,0.85), rgba(169,50,38,0.75), rgba(192,57,43,0.78))" }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 800, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <div style={{
            display: "inline-block",
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontWeight: 600, fontSize: "0.72rem",
            color: "#F5C842", letterSpacing: "0.2em",
            textTransform: "uppercase", marginBottom: 14,
            borderBottom: "1px solid rgba(245,200,66,0.4)", paddingBottom: 6,
          }}>
            CHỦ NGHĨA XÃ HỘI KHOA HỌC 
          </div>
          <h1 style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontWeight: 900, fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
            color: "white", lineHeight: 1.2,
          }}>Nội Dung Học Thuật</h1>
          <p style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            color: "rgba(255,255,255,0.7)", fontSize: "1rem", marginTop: 10,
          }}>
            Việt Nam Trong Thời Kỳ Quá Độ: Đặc Điểm & Con Đường Phát Triển Rút Ngắn
          </p>
        </div>
      </div>

      {/* Quick nav */}
      <div style={{
        background: "white", borderBottom: "2px solid #e8d5a3",
        padding: "12px 0", position: "sticky", top: 64, zIndex: 40,
      }}>
        <div style={{
          maxWidth: 1000, margin: "0 auto", padding: "0 24px",
          display: "flex", gap: 10, overflowX: "auto",
        }}>
          {SECTIONS.map(s => (
            <button key={s.id} onClick={() => {
              document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
            }} style={{
              whiteSpace: "nowrap", padding: "6px 14px",
              borderRadius: 20, border: `1.5px solid ${s.color}30`,
              background: s.color + "12", color: s.color,
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontWeight: 600, fontSize: "0.8rem", cursor: "pointer",
            }}>
              {s.title.split("—")[0].replace(/^\d+\.\s/, "").trim()}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "56px 24px" }}>
        {SECTIONS.map((s, i) => (
          <article key={s.id} id={s.id} style={{ marginBottom: 72 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
              <div style={{ width: 5, height: 48, background: s.color, borderRadius: 3, flexShrink: 0 }} />
              <h2 style={{
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontWeight: 800, fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
                color: s.color, lineHeight: 1.25,
              }}>{s.title}</h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}
              className="content-grid">
              <div style={{
                fontFamily: "'Be Vietnam Pro', sans-serif",
                lineHeight: 1.85, color: "#333", fontSize: "0.97rem",
                whiteSpace: "pre-line",
              }}>{s.content}</div>

              <div>
                <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
                  <button
                    type="button"
                    onClick={() => setLightboxImage({ src: s.image, alt: s.caption })}
                    style={{
                      width: "100%",
                      padding: 0,
                      border: "none",
                      background: "transparent",
                      cursor: "zoom-in",
                    }}
                    aria-label={`Xem ảnh đầy đủ: ${s.caption}`}
                  >
                    <img src={s.image} alt={s.caption}
                      style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }}
                    />
                  </button>
                  <div style={{
                    padding: "10px 14px", background: "#f9f0d6",
                    borderTop: `3px solid ${s.color}`,
                  }}>
                    <p style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "0.78rem", color: "#444", fontStyle: "italic" }}>
                      {s.caption}
                    </p>
                    <p style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "0.7rem", color: "#888", marginTop: 4 }}>
                      Nguồn: {s.source}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {i < SECTIONS.length - 1 && (
              <>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    width: "100vw",
                    left: "50%",
                    transform: "translateX(-50%)",
                    height: 74,
                    marginTop: 32,
                    marginBottom: 20,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/bird_flap_transparent.gif"
                    alt=""
                    className={i % 2 === 0 ? "bird-fly-left-right" : "bird-fly-right-left"}
                    style={{
                      position: "absolute",
                      top: "50%",
                      width: 120,
                      height: "auto",
                      transform: "translateY(-50%)",
                      pointerEvents: "none",
                      userSelect: "none",
                    }}
                  />
                </div>
                <hr style={{ marginTop: 8, borderColor: "#e8d5a3", borderWidth: "1px 0 0" }} />
              </>
            )}
          </article>
        ))}

        {/* Kết luận */}
        <div style={{
          background: "linear-gradient(135deg, #7B1A12, #A93226)",
          borderRadius: 16, padding: "40px 36px", textAlign: "center",
        }}>
          <h3 style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontWeight: 800, fontSize: "1.5rem", color: "white", marginBottom: 14,
          }}>Ý Nghĩa Lịch Sử</h3>
          <p style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            color: "rgba(255,255,255,0.88)", lineHeight: 1.8, fontSize: "0.97rem",
            maxWidth: 600, margin: "0 auto",
          }}>
            Thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam là giai đoạn mang tính quyết định trong tiến trình phát triển của dân tộc. Với xuất phát điểm thấp nhưng con đường đúng đắn — kết hợp sức mạnh nội sinh với tinh hoa nhân loại, phát huy vai trò lãnh đạo của Đảng và sức mạnh đại đoàn kết toàn dân — Việt Nam đang từng bước hiện thực hóa mục tiêu phát triển rút ngắn, tiến tới một đất nước phồn vinh, hạnh phúc theo con đường xã hội chủ nghĩa.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes birdLeftToRight {
          0% {
            left: -140px;
          }
          100% {
            left: calc(100% + 20px);
          }
        }

        @keyframes birdRightToLeft {
          0% {
            right: -140px;
          }
          100% {
            right: calc(100% + 20px);
          }
        }

        .bird-fly-left-right {
          left: -140px;
          animation: birdLeftToRight 7.2s linear infinite;
        }

        .bird-fly-right-left {
          right: -140px;
          transform: translateY(-50%) scaleX(-1) !important;
          animation: birdRightToLeft 7.2s linear infinite;
        }

        @media (max-width: 768px) {
          .content-grid { grid-template-columns: 1fr !important; }

          .bird-fly-left-right,
          .bird-fly-right-left {
            width: 92px !important;
            animation-duration: 6.2s !important;
          }
        }
      `}</style>

      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Xem ảnh toàn màn hình"
          onClick={() => setLightboxImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 120,
            background: "rgba(0, 0, 0, 0.82)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          <button
            type="button"
            onClick={() => setLightboxImage(null)}
            aria-label="Đóng ảnh"
            style={{
              position: "absolute",
              top: 18,
              right: 18,
              width: 38,
              height: 38,
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.35)",
              background: "rgba(0,0,0,0.35)",
              color: "#fff",
              fontSize: "1.1rem",
              cursor: "pointer",
            }}
          >
            x
          </button>
          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            onClick={(event) => event.stopPropagation()}
            style={{
              width: "auto",
              maxWidth: "min(1200px, 92vw)",
              height: "auto",
              maxHeight: "88vh",
              borderRadius: 12,
              boxShadow: "0 18px 60px rgba(0,0,0,0.55)",
              objectFit: "contain",
            }}
          />
        </div>
      )}

      <ChatBox open={chat} onToggle={() => setChat(!chat)} />
    </div>
  );
}
