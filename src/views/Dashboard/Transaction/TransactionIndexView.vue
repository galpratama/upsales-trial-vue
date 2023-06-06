<script setup lang="ts">
import DashboardSidebar from '@/components/Layout/DashboardSidebar.vue'
import DashboardTopBar from '@/components/Dashboard/DashboardTopBar.vue'
import TransactionTable from '@/components/Dashboard/Transaction/TransactionTable.vue'
</script>

<template>
  <DashboardSidebar activeMenu="transaction" />
  <main class="lg:pt-[50px] lg:px-[50px] p-4 w-full lg:border-l lg:border-l-borderLight">
    <DashboardTopBar />
    <div class="flex flex-wrap items-center justify-between gap-6 mb-[30px]">
      <header class="text-dark">
        <h1 class="text-2xl md:text-[32px] md:leading-9 font-bold">Transactions</h1>
        <p class="mt-1 text-sm md:mt-2 md:text-base">Making fortune from goods thing</p>
      </header>
      <RouterLink :to="{ name: 'dashboard-transaction-add' }" class="btn-primary md:px-9">
        Add New
      </RouterLink>
    </div>

    <section class="min-h-[90vh] p-4 bg-subtleGrey rounded-2xl flex flex-col">
      <TransactionTable />
    </section>
  </main>
</template>
