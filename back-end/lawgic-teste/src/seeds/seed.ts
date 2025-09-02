import { DataSource } from 'typeorm';
import { FormNotificacao } from '../forms/entities/formNotificacao.entity';
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT!),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [FormNotificacao],
  synchronize: true,
  logging: false,
});

export async function seedFormNotificacao(dataSource: DataSource) {
  const repo = dataSource.getRepository(FormNotificacao);

  const campos = [
    {
      nome: 'Título',
      tipo: 'text',
      obrigatorio: true,
      chave: 'titulo',
    },
    {
      nome: 'Descrição',
      tipo: 'textarea',
      obrigatorio: true,
      chave: 'descricao',
    },
    {
      nome: 'Data da Audiência',
      tipo: 'date',
      obrigatorio: true,
      chave: 'data_audiencia',
    },
  ];

  for (const campo of campos) {
    const exists = await repo.findOne({ where: { chave: campo.chave } });
    if (!exists) {
      await repo.save(repo.create(campo));
    }
  }

  console.log('Seed de campos do formulário executada com sucesso!');
}
