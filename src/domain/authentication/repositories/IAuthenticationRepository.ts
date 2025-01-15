import { User } from "../entities/User";

export interface IAuthenticationRepository {
  getByUsername(username: string): Promise<User | null>;
  save(user: User): Promise<User>;
  getCurrentUser(): Promise<User | null>;
}
