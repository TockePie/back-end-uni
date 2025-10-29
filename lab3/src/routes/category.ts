import express from 'express'

import { CategoryController } from '../controllers/category'
import { validateBody } from '../middlewares/validation.middleware'
import { CreateCategory } from '../models/category.dto'
import { CategoryService } from '../services/category'

const categoryService = new CategoryService()
const categoryController = new CategoryController(categoryService)

const router = express.Router()

router.get('/:id', categoryController.getAllCategories)
router.post(
  '/:id',
  validateBody(CreateCategory),
  categoryController.createCategory
)
router.delete('/:id', categoryController.deleteCategory)

export default router
