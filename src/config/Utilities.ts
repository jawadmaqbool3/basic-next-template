
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
export async function hashPassword(password: string) {
    
  const salt: string = await bcrypt.genSalt(10);
  const hash: string = await bcrypt.hash(password, salt);
  return hash;
  
}
export async function comparePassword(
  password: string,
  hash: string
): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}

export function generateToken(payload: object): string {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
}
