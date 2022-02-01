import {Router} from "express";
import {getAll,sendMessage,updateMessage,deleteMessage} from "../conrollers/messages.js";

const router = Router()

router.get('/chat/messages', getAll)

router.post('/chat/message', sendMessage)

router.put('/chat/message/:id',updateMessage)

router.delete('/chat/message/:id', deleteMessage)

export default router
