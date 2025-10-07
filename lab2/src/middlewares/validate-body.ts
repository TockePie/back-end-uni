import { Request, Response, NextFunction } from 'express'
import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'

export const validateBody =
  (DtoClass: any) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.body || Object.keys(req.body).length === 0) {
        return res
          .status(400)
          .json({ error: 'Request body is missing or empty' })
      }

      const dtoInstance = plainToInstance(DtoClass, req.body)

      const errors = await validate(dtoInstance, {
        whitelist: true,
        forbidNonWhitelisted: true
      })

      if (errors.length > 0) {
        const formattedErrors = errors.map((err) => ({
          property: err.property,
          constraints: err.constraints
        }))
        return res.status(400).json({ errors: formattedErrors })
      }

      next()
    } catch (error) {
      console.error('Validation middleware error:', error)
      res.status(500).json({ error: 'Internal server error during validation' })
    }
  }
