import { NotFoundError } from '@/filters/not-found-error'

import { Category } from './category.dto'

class CategoryModel {
  categories: Category[]

  constructor() {
    this.categories = []
  }

  getCategories(): Category[] {
    return this.categories
  }

  createCategory(name: Category['name']): Category {
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

const categoryModel = new CategoryModel()

export default categoryModel
