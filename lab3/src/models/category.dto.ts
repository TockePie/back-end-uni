import { IsBoolean, IsOptional, IsString, IsUUID } from 'class-validator'

export class CreateCategory {
  @IsString()
  name: string

  @IsBoolean()
  is_global: boolean

  @IsUUID()
  @IsOptional()
  user_id?: string
}

export class Category extends CreateCategory {
  @IsUUID()
  id: string
}
