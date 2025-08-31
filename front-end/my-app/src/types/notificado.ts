export interface Endereco {
  id_endereco: number;

  logradouro: string;

  numero: number;

  bairro: string;

  cidade: string;

  estado: string;

  CEP: string;
}

export class Notificado {
  id_notificado: number;

  nome: string;

  email: string;

  telefone: string;

  enderecos: Endereco[];

  constructor(obj?: any) {
    this.id_notificado = obj.id_notificado;
    this.nome = obj.nome;
    this.email = obj.email;
    this.telefone = obj.telefone;
    this.enderecos = obj.enderecos;
  }
}
