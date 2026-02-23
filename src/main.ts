import { createApp } from 'vue';
import "flag-icons/css/flag-icons.min.css";
import './styles/style.scss';

import App from './App.vue';
import { router } from './router';

const app = createApp(App);

app.use(router);
app.mount('#app');
