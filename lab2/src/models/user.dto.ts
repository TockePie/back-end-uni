import { IsString, IsUUID } from 'class-validator'
import { UUID } from 'crypto'

export class User {
  @IsUUID()
  id: UUID

  @IsString()
  name: string
}
