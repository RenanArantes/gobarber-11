import AppError from '@shared/errors/AppError';

import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUserRepository';

import UpdateProfileService from '@modules/users/services/UpdateProfileService';

let fakeUserRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let updateProfile: UpdateProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    updateProfile = new UpdateProfileService(
      fakeUserRepository,
      fakeHashProvider,
    );
  });

  it('should be able to update the profile', async () => {
    const user = await fakeUserRepository.create({
      name: 'Irineu',
      email: 'irineu@email.com',
      password: '123456789',
    });

    const updatedUser = await updateProfile.execute({
      user_id: user.id,
      name: 'Irinois',
      email: 'irinois@email.com',
    });

    expect(updatedUser.name).toBe('Irinois');
    expect(updatedUser.email).toBe('irinois@email.com');
  });

  it('should not be able to update a non-existent profile', async () => {
    expect(
      updateProfile.execute({
        user_id: 'non-existing-user-id',
        name: 'Irineu',
        email: 'irineu@email.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update the email to another user email', async () => {
    await fakeUserRepository.create({
      name: 'Irineu',
      email: 'irineu@email.com',
      password: '123456789',
    });

    const user = await fakeUserRepository.create({
      name: 'Irinois',
      email: 'irinois@email.com',
      password: '123456789',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'Irinois',
        email: 'irineu@email.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update the password', async () => {
    const user = await fakeUserRepository.create({
      name: 'Irineu',
      email: 'irineu@email.com',
      password: '123456789',
    });

    const updatedUser = await updateProfile.execute({
      user_id: user.id,
      name: 'Irinois',
      email: 'irinois@email.com',
      old_password: '123456789',
      password: '123123',
    });

    expect(updatedUser.password).toBe('123123');
  });

  it('should not be able to update the password without the old password', async () => {
    const user = await fakeUserRepository.create({
      name: 'Irineu',
      email: 'irineu@email.com',
      password: '123456789',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'Irinois',
        email: 'irinois@email.com',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update the password with wrong the old password', async () => {
    const user = await fakeUserRepository.create({
      name: 'Irineu',
      email: 'irineu@email.com',
      password: '123456789',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'Irinois',
        email: 'irinois@email.com',
        old_password: 'wrong_old_password',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
