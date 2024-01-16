import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

var headerHeight = document.getElementById('header').offsetHeight;

document.body.style.marginTop = headerHeight + 'px';
document.querySelector('.dropdownmenu').style.paddingTop = headerHeight + 'px';