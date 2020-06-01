import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUserRepository';

import ListProvidersService from '@modules/appointments/services/ListProvidersService';

let fakeUserRepository: FakeUsersRepository;
let listProviders: ListProvidersService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUsersRepository();

    listProviders = new ListProvidersService(fakeUserRepository);
  });

  it('should be able to list the providers', async () => {
    const user1 = await fakeUserRepository.create({
      name: 'Irineu',
      email: 'irineu@email.com',
      password: '123456789',
    });

    const user2 = await fakeUserRepository.create({
      name: 'Irinois',
      email: 'irinois@email.com',
      password: '123456789',
    });

    const logged_user = await fakeUserRepository.create({
      name: 'Irinires',
      email: 'irinires@email.com',
      password: '123456789',
    });

    const providers = await listProviders.execute({
      user_id: logged_user.id,
    });

    expect(providers).toEqual([user1, user2]);
  });
});
