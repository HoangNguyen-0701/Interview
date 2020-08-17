import { httpService } from '../httpService';
class UsersService {
  async getUser() {
    const { data } = await httpService._get('/users');
    return data;
  }
}

export const usersService = new UsersService();
