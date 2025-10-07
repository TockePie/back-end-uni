import { IsDateString, IsNumber, IsUUID } from 'class-validator'
import { UUID } from 'node:crypto'

export class CreateRecord {
  @IsUUID()
  user_id: UUID

  @IsUUID()
  category_id: UUID

  @IsNumber()
  amount: number
}

export class Record extends CreateRecord {
  @IsUUID()
  id: UUID

  @IsDateString()
  created_at: Date
}
