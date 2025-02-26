import express ,  { Router } from 'express';
import configController from '../controller/configController';


const configRouter = Router();

configRouter.get("/:type",configController.getDefaultConfig)
configRouter.post("/edit" , configController.editConfig)

export default configRouter;