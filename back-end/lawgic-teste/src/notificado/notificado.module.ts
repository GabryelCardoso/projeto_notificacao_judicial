import { Module } from '@nestjs/common';
import { NotificadoService } from './notificado.service';
import { NotificadoController } from './notificado.controller';

@Module({
  controllers: [NotificadoController],
  providers: [NotificadoService],
})
export class NotificadoModule {}
