import { Router } from "express";
import { SignUp } from "@/controllers/auth-controllers";

const router = Router();

router.route("/signup").post(SignUp);

export default router;
