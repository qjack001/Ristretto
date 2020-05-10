import Vue from 'vue'
import App from './App.vue'
import Storage from './storage.js'

const globalUtil = 
{
    install () 
    {
        Vue.storage = Storage;
        Vue.prototype.$storage = Storage;
    }
}

Vue.use(globalUtil);

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')
