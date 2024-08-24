import { User } from '../../interfaces/user.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: '1',
      name: 'Egor',
    },
    {
      id: '2',
      name: 'Victoria',
    },
  ];

  async getAllUsers(): Promise<User[]> {
    return this.users;
  }

  async getCurrentUser(userId: string): Promise<User> {
    return this.users.find(({ id }) => userId === id);
  }

  async addNewUser(name: string): Promise<void> {
    this.users.push({
      id: String(this.users.length + 1),
      name,
    });
  }
}
