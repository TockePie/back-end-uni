import { UUID } from 'node:crypto'
import { type Request, type Response } from 'express'

import { CategoryService } from '../services/category'

export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  getAllCategories = async (req: Request, res: Response) => {
    const userId = req.params.id
    const categories = await this.categoryService.getCategories(userId)
    res.status(200).json(categories)
  }

  createCategory = async (req: Request, res: Response) => {
    const userId = req.params.id
    const category = await this.categoryService.createCategory(userId, req.body)
    res.status(201).json(category)
  }

  deleteCategory = async (req: Request, res: Response) => {
    const userId = req.params.id
    const message = await this.categoryService.deleteCategory(
      userId,
      req.params.id
    )
    res.json({ message })
  }
}
