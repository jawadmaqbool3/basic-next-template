import { ObjectId } from "mongoose";

export default interface User {
    _id?: ObjectId;
    first_name: string;
    last_name: string | null | undefined;
    email: string;
    password: string;
    createdAt?: Date;
  }