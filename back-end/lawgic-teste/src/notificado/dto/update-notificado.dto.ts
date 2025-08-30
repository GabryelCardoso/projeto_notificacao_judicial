import { PartialType } from '@nestjs/mapped-types';
import { CreateNotificadoDto } from './create-notificado.dto';

export class UpdateNotificadoDto extends PartialType(CreateNotificadoDto) {}
