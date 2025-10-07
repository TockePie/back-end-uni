import { NotFoundError } from '@/filters/not-found-error'

import { Category } from './category.dto'
import { CreateRecord, Record } from './record.dto'
import { User } from './user.dto'

class RecordModel {
  records: Record[]

  constructor() {
    this.records = []
  }

  getRecords({
    user_id,
    category_id
  }: {
    user_id: User['id']
    category_id: Category['id']
  }): Record[] {
    if (!user_id && !category_id) {
      return []
    }

    return this.records.filter((rec) => {
      const matchesUser = user_id !== undefined ? rec.user_id === user_id : true
      const matchesCategory =
        category_id !== undefined ? rec.category_id === category_id : true
      return matchesUser && matchesCategory
    })
  }

  getRecordById(record_id: Record['id']): Record {
    const record = this.records.find((record) => record.id === record_id)

    if (!record) {
      throw new NotFoundError(`Record ${record_id} not found`)
    }

    return record
  }

  createRecord({ user_id, category_id, amount }: CreateRecord): Record {
    const date = new Date()

    const record = {
      id: crypto.randomUUID(),
      user_id,
      category_id,
      amount,
      created_at: date.toISOString() as unknown as Date
    }

    this.records.push(record)

    return record
  }

  deleteRecord(record_id: Record['id']): string {
    const index = this.records.findIndex((u) => u.id === record_id)

    if (index === -1) {
      throw new NotFoundError(`Record ${record_id} not found`)
    }

    this.records.splice(index, 1)
    return `User ${record_id} deleted successfully`
  }
}

const recordModel = new RecordModel()

export default recordModel
