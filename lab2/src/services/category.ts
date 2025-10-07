import { NotFoundError } from '../filters/not-found-error'
import { Category, CreateCategory } from '../models/category.dto'

export class CategoryService {
  categories: Category[]

  constructor() {
    this.categories = []
  }

  getCategories(): Category[] {
    return this.categories
  }

  createCategory(name: CreateCategory['name']): Category {
    const category = {
      id: crypto.randomUUID(),
      name
    }

    this.categories.push(category)
    return category
  }

  deleteCategory(category_id: Category['id']): string {
    const index = this.categories.findIndex((u) => u.id === category_id)

    if (index === -1) {
      throw new NotFoundError(`Category ${category_id} not found`)
    }

    this.categories.splice(index, 1)
    return `Category ${category_id} deleted successfully`
  }
}
