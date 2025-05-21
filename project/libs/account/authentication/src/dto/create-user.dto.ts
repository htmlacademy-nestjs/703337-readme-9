import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru'
  })
  public email: string;

  @ApiProperty({
    description: 'User name',
    example: 'Keks',
  })
  public name: string;

  @ApiProperty({
    description: 'User avatarUrl',
    example: 'ddd.png'
  })
  public avatarUrl: string;

  @ApiProperty({
    description: 'User password',
    example: 'I4252576'
  })
  public password: string;
}
