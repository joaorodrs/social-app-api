import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SocialPost } from './social-post.entity';

@Injectable()
export class SocialPostService {
  constructor(private socialPostRepository: Repository<SocialPost>) {}

  async create(socialPost: SocialPost): Promise<SocialPost> {
    await this.socialPostRepository.save(socialPost);
    return socialPost;
  }

  async findRecent(): Promise<SocialPost[]> {
    return this.socialPostRepository.find({ order: { created_at: 'ASC' } });
  }

  async findByOwnerId(ownerId: SocialPost['owner_id']): Promise<SocialPost[]> {
    return this.socialPostRepository.find({ owner_id: ownerId });
  }

  async findById(id: SocialPost['id']): Promise<SocialPost[]> {
    return this.socialPostRepository.find({ where: { id } });
  }

  async update(
    id: SocialPost['id'],
    socialPost: SocialPost,
  ): Promise<SocialPost> {
    await this.socialPostRepository.update(id, socialPost);
    return socialPost;
  }

  async delete(id: SocialPost['id']): Promise<any> {
    return await this.socialPostRepository.delete(id);
  }
}
