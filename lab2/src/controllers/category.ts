import { NextFunction, type Request, type Response } from 'express'

import { NotFoundError } from '@/filters/not-found-error'
import categoryModel from '@/models/category'
import { Category } from '@/models/category.dto'

function getAllCategories(_req: Request, res: Response): void {
  const categories = categoryModel.getCategories()

  res.status(200).json(categories)
}

function createCategory(req: Request, res: Response) {
  const { name } = req.body

  const newCategory = categoryModel.createCategory(name)
  res.status(201).json(newCategory)
}

function deleteCategory(req: Request, res: Response, next: NextFunction): void {
  try {
    const category = categoryModel.deleteCategory(
      req.params.id as Category['id']
    )

    res.status(200).json(category)
  } catch (err) {
    if (err instanceof NotFoundError) {
      res.status(err.status).json({ error: err.message })
    } else {
      next(err)
    }
  }
}

export default {
  getAllCategories,
  createCategory,
  deleteCategory
}
