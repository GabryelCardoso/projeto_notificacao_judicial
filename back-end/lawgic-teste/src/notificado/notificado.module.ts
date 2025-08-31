import { Module } from '@nestjs/common';
import { NotificadoService } from './notificado.service';
import { NotificadoController } from './notificado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notificado } from './entities/notificado.entity';
import { Endereco } from 'src/enderecos/entities/endereco.entity';
import { NotificacaoService } from 'src/notificacao/notificacao.service';
import { Notificacao } from 'src/notificacao/entities/notificacao.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Notificado, Notificacao, Endereco])],
  controllers: [NotificadoController],
  providers: [NotificadoService, NotificacaoService],
})
export class NotificadoModule {}
