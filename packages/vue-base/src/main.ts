
// import 'zone.js'; // zone.js要放在最上面，不然页面卡死
import { createApp } from 'vue'
import App from './App.vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import './style.css'
//     import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//     import { createPinia } from 'pinia'
//  import router from './router'
import './qiankun'
const app = createApp(App)
//     for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//       app.component(key, component)
//     }
//     app.use(ElementPlus , { size: 'small', zIndex: 3000 })
//     app.use(createPinia())
//     app.use(router)
app.mount('#app')
createApp(App).mount('#app')
