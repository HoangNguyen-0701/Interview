import { storageService } from '../storageService';
import { httpService } from '../httpService';

class Auth {
  login = async (dataLogin) => {
    try {
      const { data } = await httpService._post(`/login`, dataLogin);
      storageService.setToken(data.token);
      return data;
    } catch (error) {
      return error;
    }
  };

  logout = () => {
    storageService.romoveToken();
  };
}

export const auth = new Auth();
