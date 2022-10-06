

require('./bootstrap');

window.Vue = require('vue');

import router from './router';
import App from './components/App.vue';

const root = new Vue({
    router,
    el: '#root',
    components: {
        App,
    },
    render: h => h(App)
});

