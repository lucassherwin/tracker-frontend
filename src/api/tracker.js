import axios from 'axios';

export default axios.create({
  baseURL: 'http://c3ae16fe14ce.ngrok.io'
})

// npm run dev -> ngrok http 3000 to get new url