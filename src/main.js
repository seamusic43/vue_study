import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import mixins from './mixins';

createApp(App).use(store).use(router).mixin(mixins).mount('#app');

window.Kakao.init('d483602e7da72f943d47b1fc1769eb83');
