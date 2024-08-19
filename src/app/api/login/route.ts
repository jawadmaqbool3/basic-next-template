import { login } from "@/controllers/Auth/AuthController";

// Handle POST requests
export async function POST(request: Request) {
  return await login(request);
}
