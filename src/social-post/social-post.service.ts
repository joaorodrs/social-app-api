import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SocialPost } from './social-post.entity';

@Injectable()
export class SocialPostService {
  constructor(
    @InjectRepository(SocialPost)
    private socialPostRepository: Repository<SocialPost>,
  ) {}

  async create(socialPost: SocialPost): Promise<SocialPost> {
    await this.socialPostRepository.save(socialPost);
    return socialPost;
  }

  async findRecent(): Promise<SocialPost[]> {
    return this.socialPostRepository.find({ order: { created_at: 'DESC' } });
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

  async upVote(id: SocialPost['id']): Promise<any> {
    const postsById = await this.socialPostRepository.find({
      where: { id },
    });
    const currentPost = postsById[0];

    const newUpvoteCount = currentPost.up_votes + 1;

    return await this.socialPostRepository.update(id, {
      ...currentPost,
      up_votes: newUpvoteCount,
    });
  }

  async disUpVote(id: SocialPost['id']): Promise<any> {
    const postsById = await this.socialPostRepository.find({
      where: { id },
    });
    const currentPost = postsById[0];

    if (currentPost.up_votes === 0) {
      return;
    }

    const newUpvoteCount = currentPost.up_votes - 1;

    return await this.socialPostRepository.update(id, {
      ...currentPost,
      up_votes: newUpvoteCount,
    });
  }
}
