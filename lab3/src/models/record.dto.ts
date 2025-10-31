import { IsDateString, IsNumber, IsUUID, Min } from 'class-validator'

export class CreateRecord {
  @IsUUID()
  user_id: string

  @IsUUID()
  category_id: string

  @IsNumber()
  @Min(0)
  amount: number
}

export class Record extends CreateRecord {
  @IsUUID()
  id: string

  @IsDateString()
  created_at: Date
}
