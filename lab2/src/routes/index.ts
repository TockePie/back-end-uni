import express from 'express'

import UserController from '@/controllers/user'
import CategoryRoutes from '@/routes/category'
import UserRoutes from '@/routes/user'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send('This is the API root!')
})

router.get('/users', UserController.getAllUsers)
router.use('/user', UserRoutes)
router.use('/category', CategoryRoutes)

export default router
