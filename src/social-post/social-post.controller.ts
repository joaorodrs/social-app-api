import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SocialPost } from './social-post.entity';
import { SocialPostService } from './social-post.service';

const insufficientDataError = {
  error: {
    code: HttpStatus.BAD_REQUEST,
    message: 'Insufficient fields',
  },
};

@Controller('social-post')
export class SocialPostController {
  constructor(private socialPostService: SocialPostService) {}

  @Get()
  async indexRecent() {
    return await this.socialPostService.findRecent();
  }

  @Get(':id')
  async indexById(@Param('id') id: SocialPost['id']) {
    if (!id) return insufficientDataError;
    return await this.socialPostService.findById(id);
  }

  @Get('/owner/:id')
  async indexByOwnerId(@Param('id') ownerId: SocialPost['owner_id']) {
    if (!ownerId) return insufficientDataError;
    return await this.socialPostService.findByOwnerId(ownerId);
  }

  @Post()
  async create(@Body() socialPost: SocialPost) {
    if (
      !socialPost.owner_email ||
      !socialPost.owner_id ||
      !socialPost.owner_name ||
      !socialPost.post_content ||
      !socialPost.owner_photo_url
    ) {
      return insufficientDataError;
    }

    return await this.socialPostService.create(socialPost);
  }

  @Put(':id')
  async update(
    @Body() socialPost: SocialPost,
    @Param('id') id: SocialPost['id'],
  ) {
    if (
      !socialPost.owner_email ||
      !socialPost.owner_id ||
      !socialPost.owner_name ||
      !socialPost.post_content ||
      !socialPost.owner_photo_url
    ) {
      return insufficientDataError;
    }

    return await this.socialPostService.update(id, socialPost);
  }

  @Delete(':id')
  async delete(@Param('id') id: SocialPost['id']) {
    if (!id) return insufficientDataError;
    return this.socialPostService.delete(id);
  }
}
