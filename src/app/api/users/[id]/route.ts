import { show } from "@/controllers/Admin/UserController";
import { NextRequest } from "next/server";


export async function GET(request: NextRequest) {
  return await show(request);
}