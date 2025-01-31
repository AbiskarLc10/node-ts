import { Router } from "express";
import { SignUp } from "@/actions/auth-actions";

const router = Router();

router.route("/auth").post(SignUp);

export default router;
