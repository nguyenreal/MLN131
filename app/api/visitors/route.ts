import { NextResponse } from "next/server";

const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

async function redis(command: unknown[]) {
  const res = await fetch(`${UPSTASH_URL}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${UPSTASH_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
    cache: "no-store",
  });
  const data = await res.json();
  return data.result;
}

export async function POST(req: Request) {
  try {
    const { sessionId } = await req.json();
    if (!sessionId) return NextResponse.json({ online: 1 });

    if (!UPSTASH_URL || !UPSTASH_TOKEN) {
      return NextResponse.json({ online: 1 });
    }

    // Lưu key riêng mỗi người, TTL 60 giây
    await redis(["SET", `online:${sessionId}`, "1", "EX", "60"]);

    // Đếm tất cả key online:*
    const keys: string[] = await redis(["KEYS", "online:*"]);
    return NextResponse.json({ online: keys ? keys.length : 1 });
  } catch {
    return NextResponse.json({ online: 1 });
  }
}

export async function GET() {
  try {
    if (!UPSTASH_URL || !UPSTASH_TOKEN) {
      return NextResponse.json({ online: 1 });
    }
    const keys: string[] = await redis(["KEYS", "online:*"]);
    return NextResponse.json({ online: keys ? keys.length : 0 });
  } catch {
    return NextResponse.json({ online: 0 });
  }
}
