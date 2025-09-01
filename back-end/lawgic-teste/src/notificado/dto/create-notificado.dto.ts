import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsNumber,
} from 'class-validator';

export class CreateNotificadoDto {
  @ApiProperty({
    example: 'João Silva',
    description: 'Nome completo do notificado',
  })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    example: 'joao.silva@email.com',
    description: 'E-mail do notificado',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '79912345678',
    description: 'Telefone do notificado',
  })
  @IsString()
  @IsNotEmpty()
  telefone: string;

  @ApiProperty({
    example: 'Rua das Flores',
    description: 'Logradouro do endereço',
  })
  @IsString()
  @IsNotEmpty()
  logradouro: string;

  @ApiProperty({
    example: 123,
    description: 'Número do endereço',
  })
  @IsNumber()
  @IsNotEmpty()
  numero: number;

  @ApiProperty({
    example: 'Centro',
    description: 'Bairro do endereço',
  })
  @IsString()
  @IsNotEmpty()
  bairro: string;

  @ApiProperty({
    example: 'São Paulo',
    description: 'Cidade do endereço',
  })
  @IsString()
  @IsNotEmpty()
  cidade: string;

  @ApiProperty({
    example: 'SP',
    description: 'Estado do endereço',
  })
  @IsString()
  @IsNotEmpty()
  estado: string;

  @ApiProperty({
    example: '01001-000',
    description: 'CEP do endereço',
  })
  @IsString()
  @IsNotEmpty()
  CEP: string;

  @ApiProperty({
    example: 1,
    description: 'ID da notificação relacionada',
    required: false,
    type: Number,
  })
  @IsNotEmpty()
  @IsNumber()
  notificacaoId: number;
}
