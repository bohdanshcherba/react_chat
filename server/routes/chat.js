import {Router} from "express";
import {getAll,getById} from "../conrollers/messages.js";

const router = Router()


router.get('/chat/messages', getAll)

router.get('/chat/message/:id',getById )

router.post('/chat/message', (req, res) => {
    res.send("/chat/message")
})

router.put('/chat/message/:id', (req, res) => {
    res.send(req.params.id)
})

router.delete('/chat/message/:id', (req, res) => {
    res.send(req.params.id)
})


export default router
