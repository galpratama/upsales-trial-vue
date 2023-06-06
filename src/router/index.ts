import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SignUpViewVue from '@/views/Auth/SignUpView.vue'
import AddProductView from '@/views/Auth/AddProductView.vue'
import AddProductPhotoView from '@/views/Auth/AddProductPhotoView.vue'
import DashboardView from '@/views/Dashboard/DashboardView.vue'
import ProductIndexViewVue from '@/views/Dashboard/Product/ProductIndexView.vue'
import ProductAddViewVue from '@/views/Dashboard/Product/ProductAddView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpViewVue
    },
    {
      path: '/add-product',
      name: 'add-product',
      component: AddProductView
    },
    {
      path: '/add-product-photo',
      name: 'add-product-photo',
      component: AddProductPhotoView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/dashboard/products',
      name: 'dashboard-product-index',
      component: ProductIndexViewVue
      },
    {
      path: '/dashboard/products/add',
      name: 'dashboard-product-add',
      component: ProductAddViewVue
    },
    
  ]
})

export default router
