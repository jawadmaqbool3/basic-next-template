import { create, index } from "@/controllers/Admin/UserController";

// Handle POST requests
export async function POST(request: Request) {
  return await create(request);
}

export async function GET(request: Request) {
  return await index(request);
}
