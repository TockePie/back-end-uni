import { Request, Response, NextFunction } from 'express'

import { NotFoundError } from '@/filters/not-found-error'
import { BadRequestError } from '@/filters/bad-request-error'

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof NotFoundError || err instanceof BadRequestError) {
    return res.status(err.status).json({ error: err.message })
  } else {
    next(err)
  }

  console.error(err)
  res.status(500).json({ error: 'Internal server error' })
}
