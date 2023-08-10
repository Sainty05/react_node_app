import Axios from 'axios';
const baseURL = process.env.NODE_ENV === 'production'
  ? 'https://64d4aadc54554f46ae80c5fa--melodious-taiyaki-60da5a.netlify.app/api' // Replace with your production API URL
  : 'http://localhost:5000/api/'; // Use local development API URL

const axiosBaseURL = Axios.create({
    baseURL: baseURL
});
export default axiosBaseURL
