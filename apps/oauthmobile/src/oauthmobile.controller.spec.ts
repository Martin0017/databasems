import { Test, TestingModule } from '@nestjs/testing';
import { OauthmobileController } from './oauthmobile.controller';
import { OauthmobileService } from './oauthmobile.service';

describe('OauthmobileController', () => {
  let oauthmobileController: OauthmobileController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OauthmobileController],
      providers: [OauthmobileService],
    }).compile();

    oauthmobileController = app.get<OauthmobileController>(OauthmobileController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(oauthmobileController.getHello()).toBe('Hello World!');
    });
  });
});
