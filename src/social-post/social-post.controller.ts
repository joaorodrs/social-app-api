import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
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
    if (!id)
      throw new HttpException('Insufficient fields', HttpStatus.BAD_REQUEST);
    return await this.socialPostService.findById(id);
  }

  @Get('/owner/:id')
  async indexByOwnerId(@Param('id') ownerId: SocialPost['owner_id']) {
    if (!ownerId)
      throw new HttpException('Insufficient fields', HttpStatus.BAD_REQUEST);
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
      throw new HttpException('Insufficient fields', HttpStatus.BAD_REQUEST);
    }

    return await this.socialPostService.create(socialPost);
  }

  @Post('upvote/:id')
  async addUpVote(@Param('id') id: SocialPost['id']) {
    if (!id)
      throw new HttpException('Insufficient Fields', HttpStatus.BAD_REQUEST);

    return await this.socialPostService.upVote(id);
  }

  @Post('disupvote/:id')
  async removeUpVote(@Param('id') id: SocialPost['id']) {
    if (!id)
      throw new HttpException('Insufficient Fields', HttpStatus.BAD_REQUEST);

    return await this.socialPostService.disUpVote(id);
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
      throw new HttpException('Insufficient fields', HttpStatus.BAD_REQUEST);
    }

    return await this.socialPostService.update(id, socialPost);
  }

  @Delete(':id')
  async delete(@Param('id') id: SocialPost['id']) {
    if (!id)
      throw new HttpException('Insufficient Field', HttpStatus.BAD_REQUEST);
    return this.socialPostService.delete(id);
  }
}
