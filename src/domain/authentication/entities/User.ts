// src/domain/authentication/entities/User.ts
export class User {
    id: string;
    username: string;
    password: string;
  
    constructor(id: string, username: string, password: string) {
      this.id = id;
      this.username = username;
      this.password = password;
    }
  
    validatePassword(password: string): boolean {
      return this.password === password;
    }
  }
  