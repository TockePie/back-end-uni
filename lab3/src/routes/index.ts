import express from 'express'

import CategoryRoutes from '../routes/category'
import RecordRoutes from '../routes/record'
import UserRoutes, { userController } from '../routes/user'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send('This is the API root!')
})

router.get('/users', userController.getAllUsers)
router.use('/user', UserRoutes)
router.use('/category', CategoryRoutes)
router.use('/record', RecordRoutes)

export default router
