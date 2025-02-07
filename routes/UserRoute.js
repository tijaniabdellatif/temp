import { Router } from "express";
import { getUser,UserLogin,Register } from "../controllers/UserController.js";

const router = Router();

router.get("/user", getUser);
router.post('/user/login',UserLogin)
router.post('/user/register',Register)

export default router;
