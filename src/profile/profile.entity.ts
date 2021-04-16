import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  uid: string;

  @Column()
  up_cotes_count: number;
}
