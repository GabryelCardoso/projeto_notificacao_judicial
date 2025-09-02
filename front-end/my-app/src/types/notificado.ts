export class Notificado {
  id_notificado: number;

  nome: string;

  email: string;

  telefone: string;

  logradouro: string;

  numero: number;

  bairro: string;

  cidade: string;

  estado: string;

  CEP: string;

  constructor(obj?: any) {
    this.id_notificado = obj.id_notificado;
    this.nome = obj.nome;
    this.email = obj.email;
    this.telefone = obj.telefone;
    this.logradouro = obj.logradouro;
    this.numero = obj.numero;
    this.bairro = obj.bairro;
    this.cidade = obj.cidade;
    this.estado = obj.estado;
    this.CEP = obj.CEP;
  }
}
