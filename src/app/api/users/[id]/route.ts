import { show, update } from "@/controllers/Admin/UserController";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return await show(request);
}

export async function PUT(request: NextRequest) {
  return await update(request);
}
