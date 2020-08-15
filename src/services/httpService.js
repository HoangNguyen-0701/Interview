import axios from 'axios';
import { storageService } from './storageService';

const API_URL = 'https://cyb06ylby6.execute-api.ap-southeast-1.amazonaws.com/v1';
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8', 'Access-Control-Allow-Origin': '*' },
  /* other custom settings */
});
class HttpService {
  constructor() {
    axiosInstance.interceptors.request.use(
      (config) => {
        const { origin } = new URL(config.baseURL + config.url);
        const allowedOrigins = [API_URL];
        const token = storageService.getToken();
        if (allowedOrigins.includes(origin)) {
          config.headers.authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return error;
      }
    );
  }

  _get(endpoint, contentType) {
    return new Promise(async (resolve, reject) => {
      axiosInstance
        .get(endpoint)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(this.handleError(error));
        });
    });
  }

  _post(endpoint, _data, contentType) {
    return new Promise(async (resolve, reject) => {
      axiosInstance
        .post(endpoint, _data)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(this.handleError(error));
        });
    });
  }

  handleError(error) {
    console.error(error);
    // if (error.data.error.code === 401) {
    //   alert(error.data.error.message);
    // }
    // return error;
  }
}
const httpService = new HttpService();
export { httpService, API_URL };
