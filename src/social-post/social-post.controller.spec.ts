import { Test, TestingModule } from '@nestjs/testing';
import { SocialPostController } from './social-post.controller';

describe('SocialPostController', () => {
  let controller: SocialPostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SocialPostController],
    }).compile();

    controller = module.get<SocialPostController>(SocialPostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
