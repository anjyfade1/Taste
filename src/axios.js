import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://taste-clan-default-rtdb.firebaseio.com/'
});

export default instance; 