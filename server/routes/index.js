import {Router} from "express";
import chat from "./chat.js";
import users from "./users.js";

export const router = Router()

router.use(chat)
router.use(users)



export default router
