import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUserRepository';
import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';

import AuthenticationUserService from '@modules/users/services/AuthenticationUserService';
import CreateUserService from '@modules/users/services/CreateUserService';

describe('AuthenticateUser', () => {
  it('should be able to be authenticate', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
    const authenticationUser = new AuthenticationUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    const user = await createUser.execute({
      name: 'Irineu',
      email: 'irineu@email.com',
      password: '123456789',
    });

    const response = await authenticationUser.execute({
      email: 'irineu@email.com',
      password: '123456789',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to be authenticate with non existing user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const authenticationUser = new AuthenticationUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    await expect(
      authenticationUser.execute({
        email: 'irineu@email.com',
        password: '123456789',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to be authenticate with wrong password', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
    const authenticationUser = new AuthenticationUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    await createUser.execute({
      name: 'Irineu',
      email: 'irineu@email.com',
      password: '123456789',
    });

    await expect(
      authenticationUser.execute({
        email: 'irineu@email.com',
        password: 'wrong-password',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
