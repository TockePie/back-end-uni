import { Request, Response } from 'express'

import { UserService } from '../services/user'

export class UserController {
  constructor(private readonly userService: UserService) {}

  getAllUsers = async (_req: Request, res: Response) => {
    const responce = await this.userService.getUsers()
    res.status(200).json(responce)
  }

  getUserById = async (req: Request, res: Response) => {
    const user = await this.userService.getUserById(req.params.id)

    if (!user) {
      res.status(404).json({
        message: 'This user not found.'
      })
    }

    res.status(200).json(user)
  }

  createUser = async (req: Request, res: Response) => {
    const newUser = await this.userService.createUser(req.body.name)
    res.status(201).json(newUser)
  }

  deleteUser = async (req: Request, res: Response) => {
    const message = await this.userService.deleteUser(req.params.id)
    res.status(200).json({ message })
  }
}
