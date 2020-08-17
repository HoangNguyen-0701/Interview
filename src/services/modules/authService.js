import { storageService } from '../storageService';
import { httpService } from '../httpService';

class Auth {
  login = async (dataLogin) => {
    try {
      const { data } = await httpService._post(`/login`, dataLogin);
      storageService.setToken(data.token);
      return Promise.resolve(data);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  register = async (dataRegister) => {
    try {
      const { data } = await httpService._post(`/register`, dataRegister);
      return Promise.resolve(data);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  logout = () => {
    storageService.romoveToken();
  };
}

export const auth = new Auth();
