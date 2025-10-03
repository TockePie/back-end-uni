import { NotFoundError } from '@/filters/not-found-error'

import { User } from './user.dto'

class UsersModel {
  users: User[]

  constructor() {
    this.users = []
  }

  getUsers(): User[] {
    return this.users
  }

  getUserById(user_id: User['id']): User {
    const user = this.users.find((user) => user.id === user_id)

    if (!user) {
      throw new NotFoundError(`User ${user_id} not found`)
    }

    return user
  }

  createUser(name: User['name']): User {
    const user = {
      id: crypto.randomUUID(),
      name
    }

    this.users.push(user)

    return user
  }

  deleteUser(user_id: User['id']): string {
    const index = this.users.findIndex((u) => u.id === user_id)

    if (index === -1) {
      throw new NotFoundError(`User ${user_id} not found`)
    }

    this.users.splice(index, 1)
    return `User ${user_id} deleted successfully`
  }
}

const usersModel = new UsersModel()

export default usersModel
