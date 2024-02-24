import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "vuetify/styles";
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import DateFnsAdapter from '@date-io/date-fns'
import es from 'date-fns/locale/es'
import svSE from 'date-fns/locale/sv'
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App)
const vuetify = createVuetify({
    components, directives, date: {
        adapter: DateFnsAdapter,
        locale: {
            en: es,
            sv: svSE,
        },
    },
})
app.use(router)
app.use(vuetify)
app.mount('#app')
