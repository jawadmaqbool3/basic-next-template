import mongoose from "mongoose";

 export default new mongoose.Schema({
  first_name: { type: String, required: [true, "Please provide your first name"] },
  last_name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: [true, "Please provide your password"] }
})