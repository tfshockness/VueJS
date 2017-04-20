import App from './components/App.vue';

export const eventBus = new Vue();

const app = new Vue({
    el: '#app',
    render: h => h(App)
});