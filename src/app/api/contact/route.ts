import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // 환경변수 확인
    const apiKey = process.env.NOTION_API_KEY;
    const databaseId = process.env.NOTION_DATABASE_ID;

    if (!apiKey || !databaseId) {
      console.error("Missing Notion environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const notion = new Client({ auth: apiKey });

    // Notion DB에 페이지 생성
    // 주의: Notion DB의 컬럼명(속성)이 'Name', 'Email', 'Message' 여야 합니다.
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: { // 제목 속성 (Title)
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: { // 이메일 속성 (Email)
          email: email,
        },
        Message: { // 텍스트 속성 (Rich Text)
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Notion API Error:", error);
    return NextResponse.json(
      { error: "Failed to submit to Notion" },
      { status: 500 }
    );
  }
}

