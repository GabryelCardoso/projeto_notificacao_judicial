import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificacaoModule } from './notificacao/notificacao.module';
import { NotificadoModule } from './notificado/notificado.module';
import { FormNotificado } from './forms/entities/formNotificado.entity';
import { FormNotificacao } from './forms/entities/formNotificacao.entity';
import { Notificacao } from './notificacao/entities/notificacao.entity';
import { Notificado } from './notificado/entities/notificado.entity';
import { FormsModule } from './forms/forms.module';

import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT!),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Notificacao, Notificado, FormNotificado, FormNotificacao],
      synchronize: true,
    }),
    NotificacaoModule,
    NotificadoModule,
    FormsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
