import { BadRequestError } from 'src/filters/bad-request.exception'
import { NotFoundError } from '../filters/not-found.exception'
import { CreateRecord, Record } from '../models/record.dto'
import prisma from './prisma'

export class RecordService {
  async getRecords({
    user_id,
    category_id
  }: {
    user_id?: string
    category_id?: string
  }): Promise<Record[]> {
    if (!user_id && !category_id) {
      throw new BadRequestError(
        'At least one filter (user_id or category_id) must be provided'
      )
    }

    return await prisma.record.findMany({
      where: {
        ...(user_id ? { user_id } : {}),
        ...(category_id ? { category_id } : {})
      }
    })
  }

  async getRecordById(record_id: Record['id']): Promise<Record | null> {
    return await prisma.record.findUnique({
      where: {
        id: record_id
      }
    })
  }

  async createRecord({
    user_id,
    category_id,
    amount
  }: CreateRecord): Promise<Record> {
    return await prisma.record.create({
      data: {
        user_id,
        category_id,
        amount
      }
    })
  }

  async deleteRecord(record_id: Record['id']): Promise<string> {
    const record = await prisma.record.findUnique({
      where: {
        id: record_id
      }
    })

    if (!record) {
      throw new NotFoundError(`Record ${record_id} not found`)
    }

    await prisma.record.delete({
      where: {
        id: record_id
      }
    })

    return `User ${record_id} deleted successfully`
  }
}
