import { Request, Response } from 'express'

import { RecordService } from '../services/record'

export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  getRecords = async (req: Request, res: Response) => {
    const { user_id, category_id } = req.body
    const records = await this.recordService.getRecords({
      user_id: user_id,
      category_id: category_id
    })
    res.status(200).json(records)
  }

  getRecordById = async (req: Request, res: Response) => {
    const record = await this.recordService.getRecordById(req.params.id)
    res.status(200).json(record)
  }

  createRecord = async (req: Request, res: Response) => {
    const newRecord = await this.recordService.createRecord(req.body)
    res.status(201).json(newRecord)
  }

  deleteRecord = async (req: Request, res: Response) => {
    const message = await this.recordService.deleteRecord(req.params.id)
    res.status(200).json({ message })
  }
}
