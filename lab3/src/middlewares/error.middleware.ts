import { Request, Response, NextFunction } from 'express'

import { NotFoundError } from '../filters/not-found.exception'
import { BadRequestError } from '../filters/bad-request.exception'

export default function errorHandler(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error(err)

  if (err instanceof NotFoundError || err instanceof BadRequestError) {
    return res.status(err.status).json({ error: err.message })
  }

  res.status(500).json({ error: 'Internal server error' })
}
