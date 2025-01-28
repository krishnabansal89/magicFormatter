import { query, Request, Response } from "express";
import { smartChunker, uIdGenerator } from "../utils/utilsFunc";
import LlmHandler from "../utils/llm";
import { QueryModel } from "../models/queryModel";
import { UserModel } from "../models/userModel";

const userController = {
  format: async (req: Request, res: Response) => {
    const { rawText } = req.body;
    const chunks = smartChunker(rawText);
    const process_Id = uIdGenerator();
    const userEmail = req.headers.email;
    const user = await UserModel.findOne({ email: userEmail });

    const query = {
      processId: process_Id,
      status: "Processing",
      userId: user.id,
      result: {},
    };
    const newQuery = new QueryModel(query);
    await newQuery.save();

    res.status(200).send({ processId: process_Id });

    let prevRes = {};
    const formattedText = [];

    for await (const chunk of chunks) {
      let formatterJSON = await LlmHandler(chunk, prevRes);
      prevRes = formatterJSON;
      formattedText.push(formatterJSON);
  }

    newQuery.status = "Completed";
    newQuery.result = formattedText;
    await newQuery.save();

    await UserModel.updateOne(
      { email: userEmail },
      { $push: { queries: process_Id } }
    );

    
  },

  query: async (req: Request, res: Response) => {
    const { processId } = req.params;
    const query = await QueryModel.findOne({ processId });
    if (!query) {
      res.status(404).send("Query not found");
    }
    res.status(200).send(query);
  },

  getUser: async (req: Request, res: Response) => {
    const { email } = req.params;
    const user = await UserModel.findOne({ email });
    if (!user) {
      res.status(404).send("User not found");
    }
    const queries = await QueryModel.find({ userId: user.id });
    res.status(200).json({ email: user.email, name: user.name , queries });
  },
  
  registerUser : async (req: Request, res: Response) => {
    const { email, name } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      res.status(400).send("User already exists");
    }
    const newUser = new UserModel({ email, name });
    await newUser.save();
    res.status(201).send("User created");
  }
};

export default userController;
