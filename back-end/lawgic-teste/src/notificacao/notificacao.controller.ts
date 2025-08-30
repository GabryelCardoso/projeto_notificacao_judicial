import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { NotificacaoService } from './notificacao.service';
import { CreateNotificacaoDto } from './dto/create-notificacao.dto';
import { UpdateNotificacaoDto } from './dto/update-notificacao.dto';

@Controller('notificacao')
export class NotificacaoController {
  constructor(private readonly notificacaoService: NotificacaoService) {}

  @Post()
  create(@Body() createNotificacaoDto: CreateNotificacaoDto) {
    return this.notificacaoService.create(createNotificacaoDto);
  }

  @Get()
  findAll() {
    return this.notificacaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notificacaoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNotificacaoDto: UpdateNotificacaoDto,
  ) {
    return this.notificacaoService.update(+id, updateNotificacaoDto);
  }

  @Put(':id')
  updateStatusAndamento(@Param('id') id: string) {
    return this.notificacaoService.setStatusEmAndamento(+id);
  }

  @Put(':id')
  updateStatusConcluido(@Param('id') id: string) {
    return this.notificacaoService.setStatusConcluido(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificacaoService.remove(+id);
  }
}
