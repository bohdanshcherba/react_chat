import {Router} from "express";
import {getAll, login, createUser, updateUser, deleteUser} from '../conrollers/users.js'

const router = Router()


router.get('/users', getAll)

router.post('/login', login)

router.post('/user', createUser)

router.put('/user/:id', updateUser)

router.delete('/user/:id', deleteUser)


export default router
