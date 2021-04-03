import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post as PostMethod,
  Put,
} from '@nestjs/common';
import { Post } from './post.entity';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  index(): Promise<Post[]> {
    return this.postService.findAll();
  }

  @Get('recents')
  indexRecents(): Promise<Post[]> {
    return this.postService.findRecents();
  }

  @Get(':id')
  indexById(@Param('id') id: Post['id']): Promise<Post[]> {
    return this.postService.findById(id);
  }

  @Get('owner/:ownerId')
  indexByOwnerId(@Param('id') ownerId: Post['ownerId']): Promise<Post[]> {
    return this.postService.findByOwnerId(ownerId);
  }

  @PostMethod()
  async create(@Body() postData: Post): Promise<Post> {
    return this.postService.create(postData);
  }

  @Put(':id')
  async update(
    @Param('id') id: Post['id'],
    @Body() postData: Post,
  ): Promise<Post> {
    return this.postService.update(postData);
  }

  @Delete(':id')
  async delete(@Param('id') id: Post['id']): Promise<any> {
    return this.postService.delete(id);
  }
}
