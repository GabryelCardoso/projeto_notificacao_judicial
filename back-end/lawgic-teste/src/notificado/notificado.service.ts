import { HttpException, Injectable } from '@nestjs/common';
import { CreateNotificadoDto } from './dto/create-notificado.dto';
import { UpdateNotificadoDto } from './dto/update-notificado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Notificado } from './entities/notificado.entity';
import { Endereco } from 'src/enderecos/entities/endereco.entity';
import { In, Repository } from 'typeorm';

import { ServiceSuccessResponse } from 'src/common/success/service-success-response';
import { HttpStatus } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { NotificacaoService } from 'src/notificacao/notificacao.service';
@Injectable()
export class NotificadoService {
  constructor(
    @InjectRepository(Notificado)
    private notificadoRepository: Repository<Notificado>,
    @InjectRepository(Endereco)
    private enderecoRepository: Repository<Endereco>,
    private dataSource: DataSource,
    private notificacaoService: NotificacaoService,
  ) {}
  async create(createNotificadoDto: CreateNotificadoDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    const notificacao = await this.notificacaoService.findOne(
      createNotificadoDto.notificacaoId,
    );

    try {
      const { enderecos, ...notificadoData } = createNotificadoDto;

      const notificado = this.notificadoRepository.create({
        ...notificadoData,
        notificacao,
      });

      await queryRunner.manager.save(notificado);

      if (enderecos && Array.isArray(enderecos)) {
        for (const enderecoDto of enderecos) {
          const endereco = this.enderecoRepository.create({
            ...enderecoDto,
            notificado,
          });
          await queryRunner.manager.save(endereco);
        }
      }

      await queryRunner.commitTransaction();
      return new ServiceSuccessResponse(
        'Notificado e endereços criados com sucesso',
        201,
      );
    } catch (error: any) {
      await queryRunner.rollbackTransaction();
      throw new HttpException(
        {
          message: 'Erro ao criar notificado e endereços',
          details: error.message,
          data: createNotificadoDto,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    } finally {
      await queryRunner.release();
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
        enderecos: true,
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

      //A atualização de endereços exclui os atuais para criar novos no lugar
      if (notificado.enderecos && Array.isArray(notificado.enderecos)) {
        for (const enderecoDto of notificado.enderecos) {
          if (enderecoDto.id_endereco) {
            await queryRunner.manager.update(
              Endereco,
              enderecoDto.id_endereco,
              {
                ...enderecoDto,
                notificado,
              },
            );
          } else {
            // Cria novo endereço se não tiver ID
            const novoEndereco = this.enderecoRepository.create({
              ...enderecoDto,
              notificado,
            });
            await queryRunner.manager.save(novoEndereco);
          }
        }
      }

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
