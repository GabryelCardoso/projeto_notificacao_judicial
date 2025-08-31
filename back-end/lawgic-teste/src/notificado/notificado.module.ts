import { Module } from '@nestjs/common';
import { NotificadoService } from './notificado.service';
import { NotificadoController } from './notificado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notificado } from './entities/notificado.entity';
import { Endereco } from 'src/enderecos/entities/endereco.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Notificado, Endereco])],
  controllers: [NotificadoController],
  providers: [NotificadoService],
})
export class NotificadoModule {}
