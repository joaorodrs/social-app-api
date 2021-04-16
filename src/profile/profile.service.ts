import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  async create(profile: Profile): Promise<Profile> {
    await this.profileRepository.save(profile);
    return profile;
  }

  async update(profile: Profile, id: Profile['uid']): Promise<Profile> {
    await this.profileRepository.update(id, profile);
    return profile;
  }
}
