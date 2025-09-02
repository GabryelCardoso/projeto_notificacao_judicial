import { AppDataSource, seedFormNotificacao } from './seed';

AppDataSource.initialize()
  .then(async () => {
    await seedFormNotificacao(AppDataSource);
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
