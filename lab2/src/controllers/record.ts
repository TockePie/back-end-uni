import { NextFunction, Request, Response } from 'express'

import { BadRequestError } from '@/filters/bad-request-error'
import { NotFoundError } from '@/filters/not-found-error'
import recordModel from '@/models/record'
import { Record } from '@/models/record.dto'

function getRecords(req: Request, res: Response, next: NextFunction): void {
  try {
    if (!req.body) {
      throw new BadRequestError(
        "Request body doesn't have user_id or category_id values"
      )
    }

    const { user_id, category_id } = req.body
    if (!user_id && !category_id) {
      throw new BadRequestError(
        'You need to put at least one parameter: user_id or category_id'
      )
    }

    const records = recordModel.getRecords({ user_id, category_id })
    res.status(200).json(records)
  } catch (err) {
    if (err instanceof BadRequestError) {
      res.status(err.status).json({ error: err.message })
    } else {
      next(err)
    }
  }
}

function getRecordById(req: Request, res: Response, next: NextFunction): void {
  try {
    if (!req.body) {
      throw new BadRequestError("Request body doesn't have an id value")
    }

    const record = recordModel.getRecordById(req.params.id as Record['id'])

    res.status(200).json(record)
  } catch (err) {
    if (err instanceof NotFoundError) {
      res.status(err.status).json({ error: err.message })
    } else {
      next(err)
    }
  }
}

function createRecord(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.body) {
      throw new BadRequestError("Request body doesn't have any value")
    }

    const { user_id, category_id, amount } = req.body

    if (!user_id || !category_id) {
      throw new BadRequestError(
        "Request body doesn't have user_id or category_id values"
      )
    }

    const newUser = recordModel.createRecord({ user_id, category_id, amount })
    res.status(201).json(newUser)
  } catch (err) {
    if (err instanceof BadRequestError) {
      res.status(err.status).json({ error: err.message })
    } else {
      next(err)
    }
  }
}

function deleteRecord(req: Request, res: Response, next: NextFunction): void {
  try {
    if (!req.params.id) {
      throw new BadRequestError("Request param doesn't have any value")
    }

    const record = recordModel.deleteRecord(req.params.id as Record['id'])

    res.status(200).json(record)
  } catch (err) {
    if (err instanceof NotFoundError || err instanceof BadRequestError) {
      res.status(err.status).json({ error: err.message })
    } else {
      next(err)
    }
  }
}

export default {
  getRecords,
  getRecordById,
  createRecord,
  deleteRecord
}
