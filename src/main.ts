import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import {
    Document,
    Menu as IconMenu,
    Location,
    Cloudy,
    Setting,
    Watermelon,
} from '@element-plus/icons-vue'
import router from './router'
import 'element-plus/dist/index.css'
import './styles/themeDefault.scss'
import * as component from './layout'
import 'animate.css'


const app = createApp(App)

app.use(ElementPlus)
    .use(router)
    .component('Header', component.Header)
    .component('Aside', component.Aside)
    .component('watermelon', Watermelon)
    .component('cloudy', Cloudy)
    .mount('#app')
