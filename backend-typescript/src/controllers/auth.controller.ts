import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { RequestWithUser } from '@interfaces/auth.interface';
import AuthService from '@services/auth.service';
import { User } from '@interfaces/users.interface';

class AuthController {
  public authService = new AuthService();

  public signUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: CreateUserDto = req.body;
      const signUpUserData: User = await this.authService.signup(userData);

      res.status(201).json({ data: signUpUserData, message: 'signup' });
    } catch (error) {
      next(error);
    }
  };

  public logIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateUserDto = req.body;
      const userAgent: string = req.headers["user-agent"];
      const { cookie, findUser, token } = await this.authService.login(userData,userAgent);
      res.setHeader('Set-Cookie', [cookie]);
      res.status(200).json({ data: {findUser,token}, message: 'login' });
    } catch (error) {
      next(error);
    }
  };

}

export default AuthController;
