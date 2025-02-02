import { Router } from "express";
import { SignUp } from "@/actions/auth-actions";

const router = Router();

router.route("/signup").post(SignUp);

export default router;
