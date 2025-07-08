 import { NextResponse } from "next/server";
import { scanReceipt } from "@/actions/transaction";

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file");

  if (!file || !(file instanceof Blob)) {
    return NextResponse.json({ error: "Invalid file" }, { status: 400 });
  }

  try {
    const result = await scanReceipt(file);
    return NextResponse.json({ success: true, data: result });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
