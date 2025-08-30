import { Injectable } from '@nestjs/common';
import { CreateNotificadoDto } from './dto/create-notificado.dto';
import { UpdateNotificadoDto } from './dto/update-notificado.dto';

@Injectable()
export class NotificadoService {
  create(createNotificadoDto: CreateNotificadoDto) {
    return 'This action adds a new notificado';
  }

  findAll() {
    return `This action returns all notificado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notificado`;
  }

  update(id: number, updateNotificadoDto: UpdateNotificadoDto) {
    return `This action updates a #${id} notificado`;
  }

  remove(id: number) {
    return `This action removes a #${id} notificado`;
  }
}
