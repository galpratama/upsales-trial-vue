import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SignUpView from '@/views/Auth/SignUpView.vue'
import AddProductView from '@/views/Auth/AddProductView.vue'
import AddProductPhotoView from '@/views/Auth/AddProductPhotoView.vue'
import DashboardView from '@/views/Dashboard/DashboardView.vue'
import ProductIndexView from '@/views/Dashboard/Product/ProductIndexView.vue'
import ProductAddView from '@/views/Dashboard/Product/ProductAddView.vue'
import TransactionIndexView from '@/views/Dashboard/Transaction/TransactionIndexView.vue'
import TransactionAddView from '@/views/Dashboard/Transaction/TransactionAddView.vue'
import TransactionQRCodeView from '@/views/Dashboard/Transaction/TransactionQRCodeView.vue'
import TransactionDetailsView from '@/views/Dashboard/Transaction/TransactionDetailsView.vue'

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
      component: SignUpView
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
      component: ProductIndexView
      },
    {
      path: '/dashboard/products/add',
      name: 'dashboard-product-add',
      component: ProductAddView
      },
    {
      path: '/dashboard/transactions',
      name: 'dashboard-transaction-index',
      component: TransactionIndexView
      },
    {
      path: '/dashboard/transactions/add',
      name: 'dashboard-transaction-add',
      component: TransactionAddView
    },
    {
      path: '/dashboard/transactions/:id/pay',
      name: 'dashboard-transaction-pay',
      component: TransactionQRCodeView
      },
    {
      path: '/dashboard/transactions/:id/detail',
      name: 'dashboard-transaction-detail',
      component: TransactionDetailsView
    },
  ]
})

export default router
