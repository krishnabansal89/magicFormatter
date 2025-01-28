import { Mixed, Schema , model , Types } from "mongoose";

export interface Query {
    processId: string;
    status : string;
    userId: Types.ObjectId;
    createdAt: Date;
    result:Array<Mixed>;
}

const querySchema = new Schema<Query>({
    processId: { type: String, required: true ,unique:true},
    status: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId , ref:"User" ,required: true },
    createdAt: { type: Date, required: true, default: Date.now },
    result: { type: [Schema.Types.Mixed] },
});

export const QueryModel = model<Query>("Query", querySchema);