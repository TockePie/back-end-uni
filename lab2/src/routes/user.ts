import express from 'express'

import { UserController } from '@/controllers/user'
import { validateBody } from '@/middlewares/validate-body'
import { CreateUser } from '@/models/user.dto'
import { UserService } from '@/services/user'

const router = express.Router()

const userService = new UserService()
const userController = new UserController(userService)

router.get('/:id', userController.getUserById)
router.post('/', validateBody(CreateUser), userController.createUser)
router.delete('/:id', userController.deleteUser)

export { userController }
export default router
