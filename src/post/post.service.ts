import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async findRecents(): Promise<Post[]> {
    return await this.postRepository.find({ order: { updatedAt: 'ASC' } });
  }

  async findAll(): Promise<Post[]> {
    return await this.postRepository.find();
  }

  async findByOwnerId(ownerId: Post['ownerId']): Promise<Post[]> {
    return await this.postRepository.find({ ownerId });
  }

  async findById(id): Promise<Post[]> {
    return await this.postRepository.find(id);
  }

  async create(post: Post): Promise<Post> {
    await this.postRepository.save(post);
    return post;
  }

  async update(post: Post): Promise<Post> {
    await this.postRepository.update(post.id, post);
    return post;
  }

  async delete(id: Post['id']): Promise<any> {
    return await this.postRepository.delete(id);
  }
}
