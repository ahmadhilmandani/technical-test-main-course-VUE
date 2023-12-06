<script setup>
defineProps({
  foodData: Object
})
</script>

<template>
  <div class="w-[240px] h-[380px] bg-white p-4 flex flex-col justify-between rounded-lg">
    <div>
      <div class="rounded-xl w-full aspect-square mb-3 bg-cust-blue/5">
        <div class="w-full h-full rounded-lg bg-contain bg-center bg-no-repeat"
          :style="`background-image: url(${foodData.gambar})`"></div>
      </div>
      <h2 class="line-clamp-1 mb-1 text-cust-black font-semibold">{{ foodData.nama }}</h2>
      <h2 class="font-semibold mb-1 text-cust-blue">Rp. {{ foodData.harga }}</h2>
    </div>
    <div class="flex gap-3">
      <button @click="$emit('addOrder', foodData)"
        class="block w-full text-sm font-medium text-white text-center px-12 py-1 rounded-md bg-cust-blue hover:bg-cust-blue/90 hover:shadow-cust-blue hover:shadow-xl hover:-translate-y-1 transition-all">
        + Tambahkan ke Keranjang
      </button>
    </div>
  </div>
</template>