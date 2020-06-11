import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import AuthenticationUserService from '@modules/users/services/AuthenticationUserService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticatorUser = container.resolve(AuthenticationUserService);

    const { user, token } = await authenticatorUser.execute({
      email,
      password,
    });

    return response.json({ user: classToClass(user), token });
  }
}
