import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsNumber,
} from 'class-validator';
import { CreateEnderecoDto } from 'src/enderecos/dto/create-endereco.dto';

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
    example: [
      {
        logradouro: 'Av. Chanceler Osvaldo Aranha',
        numero: 123,
        bairro: 'Siqueira Campos',
        cidade: 'Aracaju',
        estado: 'SE',
        CEP: '01001-000',
      },
    ],
    description: 'Endereços do notificado',
    type: [CreateEnderecoDto],
  })
  enderecos?: CreateEnderecoDto[];

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
