import { IsString, IsUUID } from 'class-validator'
import { UUID } from 'crypto'

export class CreateUser {
  @IsString()
  name: string
}

export class User extends CreateUser {
  @IsUUID()
  id: UUID
}
