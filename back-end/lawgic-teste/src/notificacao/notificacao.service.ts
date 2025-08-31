import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateNotificacaoDto } from './dto/create-notificacao.dto';
import { UpdateNotificacaoDto } from './dto/update-notificacao.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notificacao } from './entities/notificacao.entity';
import { Notificado } from 'src/notificado/entities/notificado.entity';
import { Endereco } from 'src/enderecos/entities/endereco.entity';
import { Status } from './entities/notificacao.entity';
import { HttpException } from '@nestjs/common';
import { ServiceSuccessResponse } from 'src/common/success/service-success-response';
import { DataSource, In } from 'typeorm';

@Injectable()
export class NotificacaoService {
  constructor(
    @InjectRepository(Notificacao)
    private notificacaoRepository: Repository<Notificacao>,
    private dataSource: DataSource,
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
      throw new HttpException(
        {
          message: 'Erro ao criar notificação',
          details: error.message,
          data: notificacaoData,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      const notificacoes = await this.notificacaoRepository.find();
      return notificacoes;
    } catch (error: any) {
      throw new HttpException(
        {
          message: 'Erro ao listar notificações',
          details: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id_notificacao: number) {
    const notificacao = await this.notificacaoRepository.findOne({
      where: { id_notificacao },
      relations: {
        notificado: {
          enderecos: true,
        },
      },
    });

    if (!notificacao) {
      throw new HttpException(
        {
          message: 'Notificação não encontrada',
          code: HttpStatus.NOT_FOUND,
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return notificacao;
  }

  async update(
    id_notificacao: number,
    updateNotificacaoDto: UpdateNotificacaoDto,
  ) {
    await this.findOne(id_notificacao);
    try {
      const notificacaoAtualizada = {
        ...updateNotificacaoDto,
        status: Status.VALIDACAO,
      };

      await this.notificacaoRepository.update(
        id_notificacao,
        notificacaoAtualizada,
      );

      return new ServiceSuccessResponse(
        'Notificação atualizada com sucesso',
        200,
      );
    } catch (error: any) {
      throw new HttpException(
        {
          message: 'Erro ao atualizar notificação',
          details: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id_notificacao: number) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const notificacao = await this.findOne(id_notificacao);

      const notificado = notificacao.notificado;

      //Esse bloco verifica se existe um notificado e se existir itera sobre seus endrereços para remover eles do banco e remove o notificado
      if (notificado) {
        if (notificado.enderecos && notificado.enderecos.length > 0) {
          await queryRunner.manager.delete(Endereco, {
            id_endereco: In(notificado.enderecos.map((e) => e.id_endereco)),
          });
        }
        await queryRunner.manager.delete(Notificado, notificado.id_notificado);
      }

      await queryRunner.manager.delete(Notificacao, id_notificacao);

      await queryRunner.commitTransaction();

      return new ServiceSuccessResponse(
        'Notificação removida com sucesso',
        200,
      );
    } catch (error: any) {
      await queryRunner.rollbackTransaction();
      throw new HttpException(
        {
          message: 'Erro ao remover notificação',
          details: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    } finally {
      await queryRunner.release();
    }
  }

  async setStatusEmAndamento(id_notificacao: number) {
    try {
      const notificacao = await this.findOne(id_notificacao);

      notificacao.status = Status.EM_ANDAMENTO;
      await this.notificacaoRepository.save(notificacao);

      return new ServiceSuccessResponse(
        'Status alterado para Em Andamento',
        200,
      );
    } catch (error: any) {
      throw new HttpException(
        {
          message: 'Erro ao alterar status da notificação',
          details: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async setStatusConcluido(id_notificacao: number) {
    try {
      const notificacao = await this.findOne(id_notificacao);

      notificacao.status = Status.CONCLUIDO;
      await this.notificacaoRepository.save(notificacao);

      return new ServiceSuccessResponse(
        'Status alterado para Em Andamento',
        200,
      );
    } catch (error: any) {
      throw new HttpException(
        {
          message: 'Erro ao alterar status da notificação',
          details: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
