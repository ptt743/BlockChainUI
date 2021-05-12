
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/signUp.vue') }
    ]
  },
  {
    path: '/mainpage',
    component: () => import('layouts/MenuLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/mainPage.vue') }
    ]
  },
  {
    path: '/transactionHistory',
    component: () => import('layouts/MenuLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/TransactionHistory.vue') }
    ]
  },
  {
    path: '/blockHistory',
    component: () => import('layouts/MenuLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/BlockHistory.vue') }
    ]
  },
  {
    path: '/signin',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/signIn.vue') }
    ]
  },
  {
    path: '/welcome',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/WelcomePage.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
