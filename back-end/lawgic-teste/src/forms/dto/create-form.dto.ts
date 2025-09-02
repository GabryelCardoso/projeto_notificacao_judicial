import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateFormDto {
  @ApiProperty({
    example: 'nome',
    description: 'Nome do campo do formulário',
    required: true,
  })
  @IsString({ message: 'Nome deve ser uma string' })
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  nome: string;

  @ApiProperty({
    example: 'text',
    description:
      'Tipo do campo (text, email, number, date, textarea, select, etc.)',
    required: true,
  })
  @IsString({ message: 'Tipo deve ser uma string' })
  @IsNotEmpty({ message: 'Tipo é obrigatório' })
  tipo: string;

  @ApiProperty({
    example: 'nome',
    description: 'chave do campo no banco',
    required: true,
  })
  @IsString({ message: 'Chave deve ser uma string' })
  @IsNotEmpty({ message: 'Chave é obrigatória' })
  chave: string;

  @ApiProperty({
    example: true,
    description: 'Se o campo é obrigatório ou não',
    required: true,
    type: Boolean,
  })
  @IsBoolean({ message: 'Obrigatório deve ser um valor booleano (true/false)' })
  obrigatorio: boolean;
}
