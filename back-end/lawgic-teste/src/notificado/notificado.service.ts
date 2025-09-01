import { HttpException, Injectable } from '@nestjs/common';
import { CreateNotificadoDto } from './dto/create-notificado.dto';
import { UpdateNotificadoDto } from './dto/update-notificado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Notificado } from './entities/notificado.entity';

import { Repository } from 'typeorm';

import { ServiceSuccessResponse } from 'src/common/success/service-success-response';
import { HttpStatus } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { NotificacaoService } from 'src/notificacao/notificacao.service';
@Injectable()
export class NotificadoService {
  constructor(
    @InjectRepository(Notificado)
    private notificadoRepository: Repository<Notificado>,
    private dataSource: DataSource,
    private notificacaoService: NotificacaoService,
  ) {}
  async create(createNotificadoDto: CreateNotificadoDto) {
    const notificacao = await this.notificacaoService.findOne(
      createNotificadoDto.notificacaoId,
    );

    try {
      const notificado = this.notificadoRepository.create({
        ...createNotificadoDto,
        notificacao,
      });
      await this.notificadoRepository.save(notificado);
      await this.notificacaoService.setStatusValidacao(
        createNotificadoDto.notificacaoId,
      );
      return new ServiceSuccessResponse(
        'Notificado e endereços criados com sucesso',
        201,
      );
    } catch (error: any) {
      throw new HttpException(
        {
          message: 'Erro ao criar notificado e endereços',
          details: error.message,
          data: createNotificadoDto,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      const notificados = await this.notificadoRepository.find();
      return notificados;
    } catch (error: any) {
      throw new HttpException(
        {
          message: 'Erro ao listar notificados',
          details: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id_notificado: number) {
    const notificacao = await this.notificadoRepository.findOne({
      where: { id_notificado },
      relations: {
        notificacao: true,
      },
    });

    if (!notificacao) {
      throw new HttpException(
        {
          message: 'Notificado não encontrado',
          code: HttpStatus.NOT_FOUND,
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return notificacao;
  }

  async update(
    id_notificado: number,
    updateNotificadoDto: UpdateNotificadoDto,
  ) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    const notificado = await this.findOne(id_notificado);

    try {
      Object.assign(notificado, updateNotificadoDto);

      await queryRunner.manager.save(notificado);

      await queryRunner.commitTransaction();

      return new ServiceSuccessResponse(
        'Notificado e endereços atualizados com sucesso',
        200,
      );
    } catch (error: any) {
      await queryRunner.rollbackTransaction();
      throw new HttpException(
        {
          message: 'Erro ao atualizar notificação',
          details: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    } finally {
      await queryRunner.release();
    }
  }
}
