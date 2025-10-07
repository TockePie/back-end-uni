import { UUID } from 'node:crypto'
import { NextFunction, type Request, type Response } from 'express'

import { CategoryService } from '@/services/category'

export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  getAllCategories = (_req: Request, res: Response) => {
    const categories = this.categoryService.getCategories()
    res.status(200).json(categories)
  }

  createCategory = (req: Request, res: Response) => {
    const newCategory = this.categoryService.createCategory(req.body.name)
    res.status(201).json(newCategory)
  }

  deleteCategory = (req: Request, res: Response) => {
    const message = this.categoryService.deleteCategory(req.params.id as UUID)
    res.status(200).json({ message })
  }
}
