import { Test, TestingModule } from '@nestjs/testing';
import { NotificadoController } from './notificado.controller';
import { NotificadoService } from './notificado.service';

describe('NotificadoController', () => {
  let controller: NotificadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificadoController],
      providers: [NotificadoService],
    }).compile();

    controller = module.get<NotificadoController>(NotificadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
