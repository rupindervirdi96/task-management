import { EntityRepository } from 'typeorm';
import { User } from './user.entity';

@EntityRepository(User)
export class UsersRespository extends Repository<User> {}
