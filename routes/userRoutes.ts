import express ,  { Router } from 'express';
import userController from '../controller/userController';
import { isAuthenticated } from '../middlewares/auth';

const router = Router();
// TBD: Chechking Pricing Plan and Free plan limit

router.post('/format', isAuthenticated ,  userController.format);
router.get('/query/:processId' ,  userController.query);
router.get('/getUser/:email' ,  userController.getUser);
router.post('/registerUser' ,  userController.registerUser);

export default router;