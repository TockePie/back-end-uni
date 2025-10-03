import express from 'express'

import UserController from '@/controllers/user'

const router = express.Router()

router.get('/:id', UserController.getUserById)
router.post('/', UserController.createUser)
router.delete('/:id', UserController.deleteUser)

export default router
