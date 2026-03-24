import type { Metadata } from "next";
import HomeClient from "./components/HomeClient";

export const metadata: Metadata = {
  title: "Việt Nam Thời Kỳ Quá Độ — Đặc Điểm & Con Đường Phát Triển Rút Ngắn",
  description: "Khám phá đặc điểm nổi bật và các yếu tố then chốt để Việt Nam rút ngắn thời kỳ quá độ lên chủ nghĩa xã hội.",
  openGraph: {
    title: "Việt Nam Thời Kỳ Quá Độ — Đặc Điểm & Con Đường Phát Triển Rút Ngắn",
    description: "Khám phá đặc điểm nổi bật và các yếu tố then chốt để Việt Nam rút ngắn thời kỳ quá độ lên chủ nghĩa xã hội.",
    url: "https://vnr-website.onrender.com",
  },
};

export default function Home() {
  return <HomeClient />;
}