import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://us-central1-clone-bc171.cloudfunctions.net/api'
    // 'http://localhost:5001/clone-bc171/us-central1/api' //THE API (Cloud funtion)
});

export default instance;