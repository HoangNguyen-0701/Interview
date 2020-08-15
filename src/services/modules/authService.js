import { storageService } from '../storageService';
import { httpService } from '../httpService';

class Auth {
  login = async (dataLogin) => {
    const { data } = await httpService._post(`/login`, dataLogin);
    storageService.setToken(data.token);
    return data;
  };

  logout = () => {
    storageService.romoveToken();
  };
}

export const auth = new Auth();
