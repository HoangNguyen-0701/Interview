import { httpService } from '../httpService';
class UsersService {
  async getUser() {
    const users = await httpService._get('/users');
    return users.data;
  }
}

export const usersService = new UsersService();
