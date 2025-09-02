import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FormsService } from './forms.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';

@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Post('notificacao')
  createFormNotificacao(@Body() createFormDto: CreateFormDto) {
    return this.formsService.createFormNotificacao(createFormDto);
  }

  @Post('notificado')
  createFormNotificado(@Body() createFormDto: CreateFormDto) {
    return this.formsService.createFormNotificado(createFormDto);
  }

  @Get('notificacao')
  findAllNotificacao() {
    return this.formsService.getAllFormNotificacao();
  }

  @Get('notificado')
  findAllNotificado() {
    return this.formsService.getAllFormNotificado();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFormDto: UpdateFormDto) {
    return this.formsService.update(+id, updateFormDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formsService.remove(+id);
  }
}
