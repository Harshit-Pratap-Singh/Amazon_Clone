import axios from 'axios';

const instance = axios.create({
    baseURL :'http://localhost:5001/clone-bc171/us-central1/api' //THE API (Cloud funtion)
});

export default instance;