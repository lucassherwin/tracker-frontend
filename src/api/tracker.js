import axios from 'axios';

export default axios.create({
  baseURL: 'http://017e7881fb38.ngrok.io'
})

// npm run dev -> ngrok http 3000 to get new url