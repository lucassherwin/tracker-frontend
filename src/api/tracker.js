import axios from 'axios';

export default axios.create({
  baseURL: 'http://1ef181eeaa19.ngrok.io'
})

// npm run dev -> ngrok http 3000 to get new url
