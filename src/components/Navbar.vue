<script setup>
defineProps({
  orderQuantity: Number
})
</script>

<template>
  <nav class="w-full h-20 bg-cust-white px-10 py-5 flex justify-between items-center fixed top-0 left-0 right-0 z-10">
    <h1 class="text-cust-blue text-xl font-semibold">🍉 Main Course</h1>
    <button @click="$emit('openSidebar')"
      class="flex justify-center gap-2 px-4 py-2 rounded-md border-2 border-cust-blue relative">
      🛒 Keranjang
      <div v-if="orderQuantity"
        class="w-5 h-5 rounded-full bg-cust-red absolute -top-2 -right-2 text-white text-[10px] flex justify-center items-center font-semibold">
        {{ orderQuantity }}
      </div>
    </button>
  </nav>
</template>
