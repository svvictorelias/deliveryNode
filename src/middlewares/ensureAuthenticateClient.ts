import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayLoad {
  sub: string;
}

export async function ensureAuthenticateClient(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: 'Token missing'
    });
  }

  const [, token] = authHeader.split(' ');
  try {
    const { sub } = verify(
      token,
      'be54f7b05295445d5e1198df397bb6cd'
    ) as IPayLoad;

    request.id_client = sub;

    return next();
  } catch (error) {
    return response.status(401).json({
      message: 'Invalid token'
    });
  }
}
