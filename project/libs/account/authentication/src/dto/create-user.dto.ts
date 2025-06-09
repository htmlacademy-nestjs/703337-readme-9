import { ApiProperty } from '@nestjs/swagger';

import {IsEmail, IsISO8601, IsString} from 'class-validator';
import { AuthenticationValidateMessage } from '../authentication-module/authentication.constant';

export class CreateUserDto {
  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru'
  })
  @IsEmail({}, { message: AuthenticationValidateMessage.EmailNotValid })
  public email: string;

  @ApiProperty({
    description: 'User name',
    example: 'Keks',
  })
  @IsString()
  public name: string;

  @ApiProperty({
    description: 'User avatarUrl',
    example: 'ddd.png'
  })
  @IsString()
  public avatarUrl?: string;

  @ApiProperty({
    description: 'User password',
    example: 'I4252576'
  })
  @IsString()
  public password: string;
}
