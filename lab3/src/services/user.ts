import { NotFoundError } from '../filters/not-found.exception'
import { CreateUser, User } from '../models/user.dto'
import prisma from './prisma'

export class UserService {
  async getUsers(): Promise<User[]> {
    return await prisma.user.findMany()
  }

  async getUserById(user_id: User['id']): Promise<User | null> {
    return await prisma.user.findUnique({
      where: {
        id: user_id
      }
    })
  }

  async createUser(name: CreateUser['name']): Promise<User> {
    return await prisma.user.create({
      data: {
        name: name
      }
    })
  }

  async deleteUser(user_id: string): Promise<string> {
    const user = await prisma.user.findUnique({
      where: { id: user_id }
    })

    if (!user) {
      throw new NotFoundError(`User with id ${user_id} not found`)
    }

    await prisma.user.delete({
      where: { id: user_id }
    })

    return `User ${user_id} deleted successfully`
  }
}
