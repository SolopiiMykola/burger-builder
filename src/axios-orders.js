import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-c93a1-default-rtdb.firebaseio.com/'
});

export default instance;