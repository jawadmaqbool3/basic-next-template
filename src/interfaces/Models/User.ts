import { Document } from "mongoose";

interface User extends Document {
  _id?: unknown;
  first_name: string;
  last_name: string | null;
  email: string;
  password: string;
  createdAt?: Date;
}

export default User;
