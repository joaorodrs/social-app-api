import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocialPostModule } from './social-post/social-post.module';
import { ProfileService } from './profile/profile.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'social_app_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    SocialPostModule,
  ],
  controllers: [],
  providers: [ProfileService],
})
export class AppModule {}
