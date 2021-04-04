import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SocialPost } from './social-post.entity';
import { SocialPostService } from './social-post.service';

@Controller('social-post')
export class SocialPostController {
  constructor(private socialPostService: SocialPostService) {}

  @Get()
  async indexRecent() {
    return await this.socialPostService.findRecent();
  }

  @Get(':id')
  async indexById(@Param('id') id: SocialPost['id']) {
    return await this.socialPostService.findById(id);
  }

  @Get('/owner/:id')
  async indexByOwnerId(@Param('id') ownerId: SocialPost['owner_id']) {
    return await this.socialPostService.findByOwnerId(ownerId);
  }

  @Post()
  async create(@Body() socialPost: SocialPost) {
    return await this.socialPostService.create(socialPost);
  }

  @Put(':id')
  async update(
    @Body() socialPost: SocialPost,
    @Param('id') id: SocialPost['id'],
  ) {
    return await this.socialPostService.update(id, socialPost);
  }

  @Delete(':id')
  async delete(@Param('id') id: SocialPost['id']) {
    return this.socialPostService.delete(id);
  }
}
