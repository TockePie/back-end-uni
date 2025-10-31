import { IsString, IsUUID } from 'class-validator'

export class CreateUser {
  @IsString()
  name: string
}

export class User extends CreateUser {
  @IsUUID()
  id: string
}
