import { NotFoundError } from '../filters/not-found.exception'
import { Category, CreateCategory } from '../models/category.dto'
import prisma from './prisma'

export class CategoryService {
  async getCategories(user_id: Category['id']): Promise<Category[]> {
    return await prisma.category.findMany({
      where: {
        OR: [{ is_global: true }, { user_id }]
      }
    })
  }

  async createCategory(
    user_id: string,
    data: CreateCategory
  ): Promise<Category> {
    return await prisma.category.create({
      data: {
        ...data,
        user_id,
        is_global: false
      }
    })
  }

  async deleteCategory(
    user_id: CreateCategory['user_id'],
    category_id: Category['id']
  ): Promise<string> {
    const category = await prisma.category.findUnique({
      where: { id: category_id }
    })

    if (!category) throw new NotFoundError(`Category ${category_id} not found`)
    if (category.is_global) throw new Error(`Cannot delete global category`)
    if (category.user_id !== user_id)
      throw new Error(`Cannot delete other user's category`)

    await prisma.category.delete({ where: { id: category_id } })
    return `Category ${category_id} deleted successfully`
  }
}
