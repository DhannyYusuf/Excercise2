import { Router } from "express";
import user from "../controller/user.js";

const router = Router();

router.post("/createuser", user.createuser);
router.post("/loginuser", user.loginuser);
router.get("/about", user.about);
router.post("/createposting", user.createposting);

export default router;