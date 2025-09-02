import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class FormNotificacao {
  @PrimaryGeneratedColumn()
  id_campo: number;

  @Column()
  nome: string;

  @Column()
  tipo: string;
  @Column()
  obrigatorio: boolean;
}
