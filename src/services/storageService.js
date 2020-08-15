class StorageService {
  setToken(token) {
    localStorage.setItem('TOKEN', token);
  }
  getToken() {
    return localStorage.getItem('TOKEN');
  }
  romoveToken() {
    localStorage.removeItem('TOKEN');
  }
}

export const storageService = new StorageService();
