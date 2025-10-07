import express from 'express'

import RecordController from '@/controllers/record'

const router = express.Router()

router.get('/', RecordController.getRecords)
router.get('/:id', RecordController.getRecordById)
router.post('/', RecordController.createRecord)
router.delete('/:id', RecordController.deleteRecord)

export default router
