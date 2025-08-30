import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Notificado } from 'src/notificado/entities/notificado.entity';
export enum Status {
  EM_ANDAMENTO = 'Em Andamento',
  VALIDACAO = 'Validação',
  CONCLUIDO = 'Concluído',
}

@Entity()
export class Notificacao {
  @PrimaryGeneratedColumn()
  id_notificacao: number;

  @Column()
  titulo: string;

  @Column()
  descricao: string;

  @Column({ type: 'date' })
  data_audiencia: Date;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.EM_ANDAMENTO,
  })
  status: Status;

  @OneToOne(() => Notificado, { nullable: true })
  @JoinColumn()
  notificado?: Notificado;
}
