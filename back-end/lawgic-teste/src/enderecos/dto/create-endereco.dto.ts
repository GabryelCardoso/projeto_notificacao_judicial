import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateEnderecoDto {
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
    description: 'ID do notificado relacionado',
    type: Number,
  })
  @IsNumber()
  @IsNotEmpty()
  notificadoId: number;
}
