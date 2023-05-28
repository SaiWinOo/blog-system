import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import formatDate from '@/helpers/formatDate.js';
import fetchData from '@/helpers/fetchData.js';

window.axios = axios;

axios.defaults.baseURL = 'http://localhost:8000/api';

let app = createApp(App);
app
    .use(router)
    .provide('$formatDate', formatDate)
    .provide('fetchData', fetchData)
    .mount('#app');
