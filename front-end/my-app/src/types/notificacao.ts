import { Notificado } from "./notificado";

export enum Status {
  EM_ANDAMENTO = "Em Andamento",
  VALIDACAO = "Validação",
  CONCLUIDO = "Concluído",
}

export class Notificacao {
  id_notificacao: number;

  titulo: string;

  descricao: string;

  data_audiencia: Date;

  status: Status;

  notificado?: Notificado;

  constructor(obj?: any) {
    this.id_notificacao = obj.id_notificacao;
    this.titulo = obj.titulo;
    this.descricao = obj.descricao;
    this.data_audiencia = obj.data_audiencia;
    this.status = obj.status;
    this.notificado = obj.notificado
      ? new Notificado(obj.notificado)
      : undefined;
  }
}
