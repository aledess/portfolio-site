// app/api/preview/route.ts
import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug") || "/";

  if (secret !== process.env.SANITY_PREVIEW_SECRET) {
    return new NextResponse("Invalid secret", { status: 401 });
  }

  (await draftMode()).enable();

  return NextResponse.redirect(new URL(slug, req.url));
}
