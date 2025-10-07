import { IsString, IsUUID } from 'class-validator'
import { UUID } from 'node:crypto'

export class CreateCategory {
  @IsString()
  name: string
}

export class Category extends CreateCategory {
  @IsUUID()
  id: UUID
}
