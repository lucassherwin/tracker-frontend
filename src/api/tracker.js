import axios from 'axios';

export default axios.create({
  baseURL: 'http://941767da3c58.ngrok.io'
})

// npm run dev -> ngrok http 3000 to get new url