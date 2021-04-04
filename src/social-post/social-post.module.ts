import { Module } from '@nestjs/common';
import { SocialPostService } from './social-post.service';
import { SocialPostController } from './social-post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocialPost } from './social-post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SocialPost])],
  providers: [SocialPostService],
  controllers: [SocialPostController],
})
export class SocialPostModule {}
