import axios from 'axios';
import AsyncStorage from "@react-native-community/async-storage";

const instance = axios.create({
  baseURL: 'http://2c3e634e8417.ngrok.io'
});

instance.interceptors.request.use(
  async (config) => {
    // this gets called automatically any time we make a request
    const token = await AsyncStorage.getItem('token');
    if(token)
    {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    // this gets called any time there is an error with our request (before the request i.e no internet)
    return Promise.reject(err);
    // take whatever error and reject it with the error
  }
);

export default instance;

// npm run dev -> ngrok http 3000 to get new url
