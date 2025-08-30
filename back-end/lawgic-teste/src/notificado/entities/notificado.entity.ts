import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Endereco } from 'src/enderecos/entities/endereco.entity';
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

  @OneToMany(() => Endereco, (endereco) => endereco.notificado, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  enderecos: Endereco[];

  @OneToOne(() => Notificacao, (notificacao) => notificacao.notificado)
  notificacao: Notificacao;
}
