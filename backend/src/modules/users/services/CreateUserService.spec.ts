import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUserRepository';
import CreateUserService from '@modules/users/services/CreateUserService';
import AppError from '@shared/errors/AppError';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUserRepository = new FakeUsersRepository();
    const createUserService = new CreateUserService(fakeUserRepository);

    const user = await createUserService.execute({
      name: 'Irineu',
      email: 'irineu@email.com',
      password: '123456789',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with an existing email', async () => {
    const fakeUserRepository = new FakeUsersRepository();
    const createUserService = new CreateUserService(fakeUserRepository);

    await createUserService.execute({
      name: 'Irineu',
      email: 'irineu@email.com',
      password: '123456789',
    });

    expect(
      createUserService.execute({
        name: 'Irineu',
        email: 'irineu@email.com',
        password: '123456789',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
