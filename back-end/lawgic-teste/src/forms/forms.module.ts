import { Module } from '@nestjs/common';
import { FormsService } from './forms.service';
import { FormsController } from './forms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormNotificado } from './entities/formNotificado.entity';
import { FormNotificacao } from './entities/formNotificacao.entity';
@Module({
  imports: [TypeOrmModule.forFeature([FormNotificado, FormNotificacao])],
  controllers: [FormsController],
  providers: [FormsService],
})
export class FormsModule {}
