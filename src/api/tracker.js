import axios from 'axios';

export default axios.create({
  baseURL: 'http://83e470d5a850.ngrok.io'
})

// npm run dev -> ngrok http 3000 to get new url
