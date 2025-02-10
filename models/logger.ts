import { Schema, model } from "mongoose";

export interface Logger {
    text: string;
    status: string;
    error?: string;
    createdAt: Date;
} 

const loggerSchema = new Schema<Logger>({
    text: { type: String, required: true },
    status: { type: String, required: true },
    error: { type: String },
    createdAt: { type: Date, required: true, default: Date.now },
});

export const LoggerModel = model<Logger>("Logger", loggerSchema);