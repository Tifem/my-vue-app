import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js"
import { createApp } from 'vue';
import { createStore } from "vuex";
import './style.css'
import router from './router/index';

import App from './App.vue'

const store = new createStore({
    state : {
        selectedRepo : {}
    },
    mutations:{
        SET_REPO(state, repo) {
            state.selectedRepo = repo;
        },
    }
})

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')