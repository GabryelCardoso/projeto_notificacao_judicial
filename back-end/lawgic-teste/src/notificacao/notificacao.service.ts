import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateNotificacaoDto } from './dto/create-notificacao.dto';
import { UpdateNotificacaoDto } from './dto/update-notificacao.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notificacao } from './entities/notificacao.entity';
import { Status } from './entities/notificacao.entity';
import { ServiceErrorException } from 'src/common/errors/service-error.exception';
import { ServiceSuccessResponse } from 'src/common/sucess/service-sucess-response';
@Injectable()
export class NotificacaoService {
  constructor(
    @InjectRepository(Notificacao)
    private notificacaoRepository: Repository<Notificacao>,
  ) {}
  async create(createNotificacaoDto: CreateNotificacaoDto) {
    const notificacaoData = {
      ...createNotificacaoDto,
      status: Status.EM_ANDAMENTO,
    };
    try {
      await this.notificacaoRepository.save(notificacaoData);
      return new ServiceSuccessResponse('Notificação criada com sucesso', 201);
    } catch (error: any) {
      throw new ServiceErrorException(
        'Erro ao criar notificação',
        error,
        notificacaoData,
      );
    }
  }

  async findAll() {
    try {
      const notificacoes = await this.notificacaoRepository.find();
      return notificacoes;
    } catch (error: any) {
      throw new ServiceErrorException('Erro ao buscar notificações', error);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} notificacao`;
  }

  update(id: number, updateNotificacaoDto: UpdateNotificacaoDto) {
    return `This action updates a #${id} notificacao`;
  }

  remove(id: number) {
    return `This action removes a #${id} notificacao`;
  }
}
