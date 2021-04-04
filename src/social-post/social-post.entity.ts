import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class SocialPost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  owner_email: string;

  @Column()
  owner_id: string;

  @Column()
  owner_name: string;

  @Column()
  owner_photo_url: string;

  @Column()
  post_content: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
