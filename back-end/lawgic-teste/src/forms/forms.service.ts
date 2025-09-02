import { ServiceSuccessResponse } from 'src/common/success/service-success-response';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { FormNotificacao } from './entities/formNotificacao.entity';
import { FormNotificado } from './entities/formNotificado.entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class FormsService {
  constructor(
    @InjectRepository(FormNotificacao)
    private formNotificacaoRepository: Repository<FormNotificacao>,
    @InjectRepository(FormNotificado)
    private formNotificadoRepository: Repository<FormNotificado>,
  ) {}
  async createFormNotificacao(createFormDto: CreateFormDto) {
    try {
      const novoForm = this.formNotificacaoRepository.create({
        ...createFormDto,
      });

      const formSalvo = await this.formNotificacaoRepository.save(novoForm);

      return new ServiceSuccessResponse(
        'campo criado com sucesso',
        201,
        formSalvo,
      );
    } catch (error) {
      throw new HttpException(
        {
          message: 'Erro ao criar campo de formulário',
          details: error.message,
          data: createFormDto,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async createFormNotificado(createFormDto: CreateFormDto) {
    try {
      const novoForm = this.formNotificadoRepository.create({
        ...createFormDto,
      });

      const formSalvo = await this.formNotificadoRepository.save(novoForm);

      return new ServiceSuccessResponse(
        'campo criado com sucesso',
        201,
        formSalvo,
      );
    } catch (error) {
      throw new HttpException(
        {
          message: 'Erro ao criar campo de formulário',
          details: error.message,
          data: createFormDto,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getAllFormNotificacao() {
    try {
      const campos = await this.formNotificacaoRepository.find({
        order: { id_campo: 'ASC' }, // Ordenar por ID crescente
      });

      return new ServiceSuccessResponse(
        'Campos de notificação encontrados',
        200,
        campos,
      );
    } catch (error) {
      throw new HttpException(
        {
          message: 'Erro ao buscar campos de formulário de notificação',
          details: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getAllFormNotificado() {
    try {
      const campos = await this.formNotificadoRepository.find({
        order: { id_campo: 'ASC' }, // Ordenar por ID crescente
      });

      return new ServiceSuccessResponse(
        'Campos de notificado encontrados',
        200,
        campos,
      );
    } catch (error) {
      throw new HttpException(
        {
          message: 'Erro ao buscar campos de formulário de notificado',
          details: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  findAll() {
    return `This action returns all forms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} form`;
  }

  update(id: number, updateFormDto: UpdateFormDto) {
    return `This action updates a #${id} form`;
  }

  remove(id: number) {
    return `This action removes a #${id} form`;
  }
}
