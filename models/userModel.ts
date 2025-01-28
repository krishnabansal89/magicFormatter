import { Schema, model } from "mongoose";

export interface User {
  name: string;
  email: string;
  plan: string;
  timesUsed: number;
  planExpiry: Date;
  createdAt: Date;
  queries?: string[];
}

const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  plan: { type: String, required: true, default: "free" },
  timesUsed: { type: Number, required: true, default: 0 },
  planExpiry: { type: Date },
  createdAt: { type: Date, required: true, default: Date.now },
  queries: { type: [String] },
});

export const UserModel = model<User>("User", userSchema);
