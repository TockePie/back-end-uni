import { UUID } from 'node:crypto'
import { Request, Response } from 'express'

import { UserService } from '../services/user'

export class UserController {
  constructor(private readonly userService: UserService) {}

  getAllUsers = (_req: Request, res: Response) => {
    res.status(200).json(this.userService.getUsers())
  }

  getUserById = (req: Request, res: Response) => {
    const user = this.userService.getUserById(req.params.id as UUID)
    res.status(200).json(user)
  }

  createUser = (req: Request, res: Response) => {
    const newUser = this.userService.createUser(req.body.name)
    res.status(201).json(newUser)
  }

  deleteUser = (req: Request, res: Response) => {
    const message = this.userService.deleteUser(req.params.id as UUID)
    res.status(200).json({ message })
  }
}
