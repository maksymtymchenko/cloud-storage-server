import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'test@test.com',
  })
  email: string;

  @ApiProperty({
    default: 'Maksym',
  })
  fullName: string;

  @ApiProperty({
    default: 'password',
  })
  password: string;
}
