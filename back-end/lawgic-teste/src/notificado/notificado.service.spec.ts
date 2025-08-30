import { Test, TestingModule } from '@nestjs/testing';
import { NotificadoService } from './notificado.service';

describe('NotificadoService', () => {
  let service: NotificadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificadoService],
    }).compile();

    service = module.get<NotificadoService>(NotificadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
