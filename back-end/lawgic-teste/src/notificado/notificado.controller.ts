import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NotificadoService } from './notificado.service';
import { CreateNotificadoDto } from './dto/create-notificado.dto';
import { UpdateNotificadoDto } from './dto/update-notificado.dto';

@Controller('notificado')
export class NotificadoController {
  constructor(private readonly notificadoService: NotificadoService) {}

  @Post()
  create(@Body() createNotificadoDto: CreateNotificadoDto) {
    return this.notificadoService.create(createNotificadoDto);
  }

  @Get()
  findAll() {
    return this.notificadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notificadoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNotificadoDto: UpdateNotificadoDto,
  ) {
    return this.notificadoService.update(+id, updateNotificadoDto);
  }
}
