import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-c41bb.firebaseio.com/'
});

export default instance;