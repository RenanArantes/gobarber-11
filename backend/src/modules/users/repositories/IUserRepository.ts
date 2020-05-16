import User from '@modules/users/infra/typeorm/entities/User';
import IUserCreateDTO from '@modules/users/dtos/ICreateUserDTO';

export default interface IUserRepository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: IUserCreateDTO): Promise<User | undefined>;
  save(user: User): Promise<User>;
}
