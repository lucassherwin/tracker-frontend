import axios from 'axios';

export default axios.create({
  baseURL: 'http://34082640fa8e.ngrok.io'
})

// npm run dev -> ngrok http 3000 to get new url
