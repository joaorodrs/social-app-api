import { Controller, Get } from '@nestjs/common';

@Controller('post')
export class PostController {
  @Get()
  index(): string {
    return 'Post Controller!';
  }
}
