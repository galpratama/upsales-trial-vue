<template>
  <div
    class="flex flex-col items-center text-center max-w-[285px] m-auto h-full w-full"
    id="warningSection"
  >
    <h4 class="text-[26px] text-dark font-bold">No Transaction</h4>
    <p class="text-[16px] leading-[26px] text-dark mb-5 mt-4">
      Please create at least one transaction to learn about our report tools
    </p>
    <RouterLink :to="{ name: 'dashboard-transaction-add' }" class="btn-primary md:px-12">
      Add New
    </RouterLink>
  </div>
</template>
