import axios from 'axios';

export default axios.create({
  baseURL: 'http://c2334166a95f.ngrok.io'
})

// npm run dev -> ngrok http 3000 to get new url