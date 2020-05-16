import { Router } from 'express';

import UserRepository from '@modules/users/infra/typeorm/repositories/UserRepository';
import AuthenticationUserService from '@modules/users/services/AuthenticationUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const userRepository = new UserRepository();
  const authenticatorUser = new AuthenticationUserService(userRepository);

  const { user, token } = await authenticatorUser.execute({
    email,
    password,
  });

  return response.json({ user, token });
});

export default sessionsRouter;
