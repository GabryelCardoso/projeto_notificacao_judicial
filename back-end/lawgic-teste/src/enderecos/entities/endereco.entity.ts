import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Notificado } from 'src/notificado/entities/notificado.entity';
@Entity()
export class Endereco {
  @PrimaryGeneratedColumn()
  id_endereco: number;

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

  @ManyToOne(() => Notificado, (notificado) => notificado.enderecos)
  notificado: Notificado;
}
