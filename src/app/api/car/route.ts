import { NextResponse } from "next/server";

export const GET = async () => {
    try {
      const data = await fetch("https://sanity-nextjs-application.vercel.app/api/hackathon/template7");
      return NextResponse.json(data, { status: data.status });
    } catch (error) {
      return NextResponse.json({ error: "Error in GET request." },{ status: 500 });
    }
  }