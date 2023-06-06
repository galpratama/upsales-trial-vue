<script setup lang="ts">
import DashboardSidebar from '@/components/Layout/DashboardSidebar.vue'
import DashboardTopBar from '@/components/Dashboard/DashboardTopBar.vue'
import ProductTable from '@/components/Dashboard/Product/ProductTable.vue'
</script>

<template>
  <DashboardSidebar activeMenu="product" />
  <main class="lg:pt-[50px] lg:px-[50px] p-4 w-full lg:border-l lg:border-l-borderLight">
    <DashboardTopBar />
    <div class="flex flex-wrap items-center justify-between gap-6 mb-[30px]">
      <header class="text-dark">
        <h1 class="text-2xl md:text-[32px] md:leading-9 font-bold">Products</h1>
        <p class="mt-1 text-sm md:mt-2 md:text-base">Selling the good things only</p>
      </header>
      <RouterLink :to="{ name: 'dashboard-product-add' }" class="btn-primary md:px-9">
        Add Product
      </RouterLink>
    </div>

    <section class="min-h-[90vh] p-4 bg-subtleGrey rounded-2xl flex flex-col">
      <ProductTable />
    </section>
  </main>
</template>
