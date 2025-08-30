import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsDateString,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateNotificacaoDto {
  @ApiProperty({
    example: 'Intimação para audiência',
    description: 'Título ou assunto da notificação',
  })
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @ApiProperty({
    example:
      'Você está intimado para comparecer à audiência no dia 10/09/2025.',
    description: 'Conteúdo da notificação',
  })
  @IsString()
  @IsNotEmpty()
  descricao: string;

  @ApiProperty({
    example: '2025-09-10',
    description: 'Data da notificação',
  })
  @IsDateString()
  @IsNotEmpty()
  data_audiencia: string;

  @ApiHideProperty()
  @IsNumber()
  @IsOptional()
  notificadoId?: number;
}
