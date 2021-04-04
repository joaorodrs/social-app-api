import { SocialPostController } from './social-post.controller';
import { SocialPost } from './social-post.entity';
import { SocialPostService } from './social-post.service';

describe('SocialPost Controller', () => {
  let socialPostController: SocialPostController;
  let socialPostService: SocialPostService;

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    socialPostService = new SocialPostService();
    socialPostController = new SocialPostController(socialPostService);
  });

  describe('findRecent', () => {
    it('should return the most recent posts', async () => {
      const result: SocialPost[] = [
        {
          id: 1,
          owner_id: 'something',
          created_at: new Date(),
          updated_at: new Date(),
          owner_email: 'joao@joao.com',
          owner_name: 'Joao',
          owner_photo_url: 'https://github.com/joaorodrs.png',
          post_content: 'This is a very good post',
        },
      ];

      jest
        .spyOn(socialPostService, 'findRecent')
        .mockImplementation(async () => result);

      expect(await socialPostController.indexRecent()).toBe(result);
    });
  });
});
