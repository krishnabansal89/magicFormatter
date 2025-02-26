import { Schema, model , Mixed } from "mongoose";
import { REGULAR_STYLE_CONFIG } from "../utils/styleConfig";
export interface User {
  name: string;
  email: string;
  plan: string;
  timesUsed: number;
  planExpiry: Date;
  createdAt: Date;
  queries?: string[];
  styleConfig: Object;
}

const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  plan: { type: String, required: true, default: "free" },
  timesUsed: { type: Number, required: true, default: 0 },
  planExpiry: { type: Date },
  createdAt: { type: Date, required: true, default: Date.now },
  queries: { type: [String] },
  styleConfig:{type: Schema.Types.Mixed, default: REGULAR_STYLE_CONFIG}
});

export const UserModel = model<User>("User", userSchema);
