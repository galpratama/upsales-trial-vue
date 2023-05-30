import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // State
  const count = ref(0)

  // Getters (Global Computed Properties)
  const doubleCount = computed(() => count.value * 2)

  // Actions (Global Methods)
  function increment() {
    count.value++
  }
  function decrement() {
    count.value--
  }
  function alertCount() {
    alert(count.value)
  };

  return { count, doubleCount, increment, decrement, alertCount }
})
