import { Request, Response } from "express";
import {
  FORMAL_STYLE_CONFIG,
  ACADEMIC_STYLE_CONFIG,
  REGULAR_STYLE_CONFIG,
} from "../utils/styleConfig";
import { UserModel, User } from "../models/userModel";
import { updateStyleConfig , StyleConfig } from "../utils/utilsFunc";



const configController = {
  getDefaultConfig: async (req: Request, res: Response) => {
    const { type } = req.params;
    switch (type.toUpperCase()) {
      case "FORMAL":
        res.json(FORMAL_STYLE_CONFIG).status(200);
        break;
      case "ACADEMIC":
        res.json(ACADEMIC_STYLE_CONFIG).status(200);
        break;
      case "REGULAR":
        res.json(REGULAR_STYLE_CONFIG).status(200);
        break;
      case "CUSTOM":
        const userEmail = req.headers.email;
        try {
          const user: User = await UserModel.findOne({ email: userEmail });
          if (!user) throw new Error("No User found");
          const customConfig = user.styleConfig;
          res.send(customConfig).status(200);
        } catch (err) {
          res.status(400).send("Error:- " + err);
        }

        break;
      default:
        res.json(REGULAR_STYLE_CONFIG).status(200);
        break;
    }
  },

  editConfig: async (req: Request, res: Response) => {
    try{
    const user = await UserModel.findOne({ email: req.headers.email });

    if (!user) res.status(400).send("user not found");
    const {customConfig} = req.body
    const baseConfig = user.styleConfig;
    const updatedConfig = updateStyleConfig(baseConfig as StyleConfig , customConfig)
    console.log("Original Config \n",baseConfig , "\nUpdated Config\n", updatedConfig)
    user.styleConfig = updatedConfig;
    await user.save();
    console.log("Config Updated");
    res.send("Config Updated").status(200); 
  }
  catch(e)
  {
    res.status(400).send("Error occured :- "+e)
  }
  },
};

export default configController;
