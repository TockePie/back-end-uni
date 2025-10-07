import { UUID } from 'node:crypto'
import { Request, Response } from 'express'

import { RecordService } from '../services/record'

export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  getRecords = (req: Request, res: Response) => {
    const { user_id, category_id } = req.body
    const records = this.recordService.getRecords({
      user_id: user_id as UUID,
      category_id: category_id as UUID
    })
    res.status(200).json(records)
  }

  getRecordById = (req: Request, res: Response) => {
    const record = this.recordService.getRecordById(req.params.id as UUID)
    res.status(200).json(record)
  }

  createRecord = (req: Request, res: Response) => {
    const newRecord = this.recordService.createRecord(req.body)
    res.status(201).json(newRecord)
  }

  deleteRecord = (req: Request, res: Response) => {
    const message = this.recordService.deleteRecord(req.params.id as UUID)
    res.status(200).json({ message })
  }
}
