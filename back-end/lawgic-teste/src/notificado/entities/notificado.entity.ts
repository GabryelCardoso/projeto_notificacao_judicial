import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

import { Notificacao } from 'src/notificacao/entities/notificacao.entity';
@Entity()
export class Notificado {
  @PrimaryGeneratedColumn()
  id_notificado: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @Column()
  logradouro: string;

  @Column()
  numero: number;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  CEP: string;

  @OneToOne(() => Notificacao, (notificacao) => notificacao.notificado)
  notificacao: Notificacao;
}
