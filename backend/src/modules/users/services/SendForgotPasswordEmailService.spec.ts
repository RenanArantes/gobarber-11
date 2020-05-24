import AppError from '@shared/errors/AppError';

import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUserRepository';
import FakeUserTokenRepository from '@modules/users/repositories/fakes/FakeUserTokensRepository';
import SendForgotPasswordEmailService from '@modules/users/services/SendForgotPasswordEmailService';

let fakeUserRepository: FakeUsersRepository;
let fakeUserTokenRepository: FakeUserTokenRepository;
let fakeMailProvider: FakeMailProvider;

let sendForgotPasswordEmail: SendForgotPasswordEmailService;

describe('SendForgotPasswordEmail', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUsersRepository();
    fakeMailProvider = new FakeMailProvider();
    fakeUserTokenRepository = new FakeUserTokenRepository();

    sendForgotPasswordEmail = new SendForgotPasswordEmailService(
      fakeUserRepository,
      fakeMailProvider,
      fakeUserTokenRepository,
    );
  });

  it('should generate a forgot password token', async () => {
    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

    await fakeUserRepository.create({
      name: 'Irineu',
      email: 'irineu@email.com',
      password: '123456789',
    });

    await sendForgotPasswordEmail.execute({
      email: 'irineu@email.com',
    });

    expect(sendMail).toHaveBeenCalled();
  });

  it('should not to be able to recover the password of a non-existing user', async () => {
    await expect(
      sendForgotPasswordEmail.execute({
        email: 'irineu@email.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to recover the password using the email', async () => {
    const generateToken = jest.spyOn(fakeUserTokenRepository, 'generate');

    const user = await fakeUserRepository.create({
      name: 'Irineu',
      email: 'irineu@email.com',
      password: '123456789',
    });

    await sendForgotPasswordEmail.execute({
      email: 'irineu@email.com',
    });

    expect(generateToken).toHaveBeenCalledWith(user.id);
  });
});
