import { Module } from '@nestjs/common';
import { NotificacaoService } from './notificacao.service';
import { NotificacaoController } from './notificacao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notificacao } from './entities/notificacao.entity';
import { Notificado } from 'src/notificado/entities/notificado.entity';
import { Endereco } from 'src/enderecos/entities/endereco.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Notificacao, Notificado, Endereco])],
  controllers: [NotificacaoController],
  providers: [NotificacaoService],
})
export class NotificacaoModule {}
