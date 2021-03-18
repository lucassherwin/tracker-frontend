import axios from 'axios';

export default axios.create({
  baseURL: 'http://eddad9f8d24f.ngrok.io'
})

// npm run dev -> ngrok http 3000 to get new url