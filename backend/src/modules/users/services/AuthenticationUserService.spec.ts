import AppError from '@shared/errors/AppError';

import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUserRepository';
import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';

import AuthenticationUserService from '@modules/users/services/AuthenticationUserService';
import CreateUserService from '@modules/users/services/CreateUserService';

let fakeCacheProvider: FakeCacheProvider;
let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;
let authenticationUser: AuthenticationUserService;

describe('AuthenticateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    fakeCacheProvider = new FakeCacheProvider();

    createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
      fakeCacheProvider,
    );
    authenticationUser = new AuthenticationUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to be authenticate', async () => {
    const user = await fakeUsersRepository.create({
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
    await expect(
      authenticationUser.execute({
        email: 'irineu@email.com',
        password: '123456789',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to be authenticate with wrong password', async () => {
    await fakeUsersRepository.create({
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
