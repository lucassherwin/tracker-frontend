import axios from 'axios';

export default axios.create({
  baseURL: 'http://db3d9a2ae7a6.ngrok.io'
})

// npm run dev -> ngrok http 3000 to get new url
