import { Test, TestingModule } from '@nestjs/testing';
import { SocialPostService } from './social-post.service';

describe('SocialPostService', () => {
  let service: SocialPostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocialPostService],
    }).compile();

    service = module.get<SocialPostService>(SocialPostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
