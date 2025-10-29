import express from 'express'

import { RecordController } from '../controllers/record'
import { validateBody } from '../middlewares/validation.middleware'
import { CreateRecord } from '../models/record.dto'
import { RecordService } from '../services/record'

const recordService = new RecordService()
const recordController = new RecordController(recordService)

const router = express.Router()

router.get('/', recordController.getRecords)
router.get('/:id', recordController.getRecordById)
router.post('/', validateBody(CreateRecord), recordController.createRecord)
router.delete('/:id', recordController.deleteRecord)

export default router
