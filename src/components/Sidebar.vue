<script setup>
const props = defineProps({
  orderList: Object
})
import { ref, toRefs } from 'vue';
import axios from "axios";

const isLoading = ref(true)

const { orderList } = toRefs(props);

function orderFunction() {
  console.log(orderList.value)
  axios.post('https://tes-mobile.landa.id/api/order',
    {
      "nominal_diskon": orderList.value.nominal_diskon,
      "nominal_pesanan": orderList.value.nominal_pesanan,
      "items": orderList.value.items
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
    .then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    }).finally(() => {
      isLoading.value = false
    })
}
</script>


<template>
  <aside class="w-96 h-screen fixed top-0 right-0 bottom-0 z-[99] bg-white p-5 overflow-auto">
    <div class="flex justify-between border-b border-cust-black/30 pb-5 cursor-pointer mb-10">
      <h1 class="text-cust-blue font-semibold">🍉 Main Course</h1>
      <div @click="$emit('closeSidebar')">
        ✖️
      </div>
    </div>
    <div v-for="value in orderList.items" class="mt-3">
      <div class="flex gap-3">
        <div class="w-20 mt-2">
          <div class="rounded-xl w-full aspect-square mb-3 bg-cust-blue/5">
            <div class="w-full h-full rounded-lg bg-contain bg-center bg-no-repeat"
              :style="`background-image: url(${value.gambar})`"></div>
          </div>
        </div>
        <div class="flex-1">
          <div class="font-medium text-cust-black">
            {{ value.nama }}
          </div>
          <div class="font-medium text-cust-blue">
            Rp. {{ value.harga }}
          </div>
        </div>
        <div class="flex justify-between items-center self-end justify-self-end place-self-end gap-3">
          <button class="bg-cust-blue rounded-md h-fit text-white pb-1 px-2">
            -
          </button>
          1
          <button class="bg-cust-blue rounded-md h-fit text-white pb-1 px-2">
            +
          </button>
        </div>
      </div>
      <div>
        {{ value.catatan }}
      </div>
      <input type="text" class="mt-3 border px-4 py-1 text-xs rounded-md block w-full"
        placeholder="Tulis catatan disini.." v-model="value.catatan" >
    </div>
    <div class="border-t text-cust-black mt-7">
      <div class="w-full rounded text-xs bg-gray-100 mt-3 p-2 flex justify-between">
        <div>Total</div>
        <div>
          {{ orderList.nominal_pesanan }}
        </div>
      </div>
    </div>
    <button @click="orderFunction"
      class="block w-full text-xs font-medium text-white text-center px-3 py-2 rounded-md bg-cust-blue hover:bg-cust-blue/90 hover:shadow-cust-blue hover:shadow-xl hover:-translate-y-1 transition-all mt-3">
      Buat Pesanan
    </button>
  </aside>
</template>