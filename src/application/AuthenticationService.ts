// src/application/AuthenticationService.ts
import { IAuthenticationRepository } from '@/domain/authentication/repositories/IAuthenticationRepository';
import { User } from '@/domain/authentication/entities/User';

export class AuthenticationService {
  private authenticationRepository: IAuthenticationRepository;

  constructor(authenticationRepository: IAuthenticationRepository) {
    this.authenticationRepository = authenticationRepository;
  }

  async login(username: string, password: string): Promise<User | null> {
    const user = await this.authenticationRepository.getByUsername(username);
    if (user && user.validatePassword(password)) {
      return user;
    }
    return null;
  }

  async register(user: User): Promise<User> {
    return await this.authenticationRepository.save(user);
  }

  async isAuthenticated(): Promise<boolean> {
    const user = await this.authenticationRepository.getCurrentUser();
    return !!user;
  }
}
