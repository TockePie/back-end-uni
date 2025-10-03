import { NextFunction, type Request, type Response } from 'express'

import { NotFoundError } from '@/filters/not-found-error'
import usersModel from '@/models/user'
import { User } from '@/models/user.dto'

function getAllUsers(_req: Request, res: Response): void {
  const users = usersModel.getUsers()

  res.status(200).json(users)
}

function getUserById(req: Request, res: Response, next: NextFunction): void {
  try {
    const user = usersModel.getUserById(req.params.id as User['id'])

    res.status(200).json(user)
  } catch (err) {
    if (err instanceof NotFoundError) {
      res.status(err.status).json({ error: err.message })
    } else {
      next(err)
    }
  }
}

function createUser(req: Request, res: Response) {
  const { name } = req.body

  const newUser = usersModel.createUser(name)
  res.status(201).json(newUser)
}

function deleteUser(req: Request, res: Response, next: NextFunction): void {
  try {
    const user = usersModel.deleteUser(req.params.id as User['id'])

    res.status(200).json(user)
  } catch (err) {
    if (err instanceof NotFoundError) {
      res.status(err.status).json({ error: err.message })
    } else {
      next(err)
    }
  }
}

export default {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser
}
