import { Router } from "express";
import { checkLoginResponse } from "../controllers/userLogin/checkLoginResponse.js";
import { checkLogin } from "../middlewares/AJV_schema/checkLogin.js";

export const router = Router()

router.post('/login/verify', checkLogin, checkLoginResponse);