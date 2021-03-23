import axios from 'axios';

export default axios.create({
  baseURL: 'http://0bcd45d12ad3.ngrok.io'
})

// npm run dev -> ngrok http 3000 to get new url
