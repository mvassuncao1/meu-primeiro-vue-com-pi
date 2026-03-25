const rotas = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    name: 'EmissaoCertidoes',
    path: '/emissao-certidoes',
    component: () => import('@/views/CertidoesEmissoes.vue'),
    meta: { requiresAuth: true },
  },
  {
    name: 'CertidaoEmissao',
    path: '/emissao-certidoes/:certidao',
    component: () => import('@/views/CertidaoEnvio.vue'),
    meta: { requiresAuth: true },
  },
  {
    name: 'AutenticarCertidao',
    path: '/autenticar-certidao',
    component: () => import('@/views/AutenticarCertidao.vue'),
  },
  {
    name: 'ConsultarCertidao',
    path: '/consultar-certidao',
    component: () => import('@/views/ConsultarCertidao.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import('@/components/Molecules/PageNotFound.vue'),
  },
]

export default rotas
