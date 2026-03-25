import { Pi, PiApp } from '@ti-arquitetura-corporativa/pi-vue'
import { createApp, h } from 'vue'
import App from './App.vue'
import '@ti-arquitetura-corporativa/pi-vue/dist/style.css'

// .............. PiApp ↴ .......... App da aplicação ↴
const app = createApp(h(PiApp, {}, { default: () => h(App) }))

// Configura a aplicação Pi.
app.use(Pi, {
  path: '/',
  sistema: {
    nomeSistema: 'Teste (Nome do Sistema)',
    siglaSistema: 'TESTE',
    orgao: 'Empresa de informática e informação',
    siglaOrgao: 'Prodabel',
    versao: '',
  },
  //routes: rotas,
})

app.mount('#app')
