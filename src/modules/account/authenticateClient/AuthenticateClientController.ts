import { Request, Response } from 'express';
import { AuthenticateClientUseCase } from './AuthenticateClientUseCase';

export class AuthenticateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;
    const authenticateClientUseClient = new AuthenticateClientUseCase();
    const result = await authenticateClientUseClient.execute({ username, password });

    return response.json(result);
  }
}
