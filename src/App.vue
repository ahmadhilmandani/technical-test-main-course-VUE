<script setup>
import { ref, onMounted } from 'vue';
import axios from "axios";
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue';
import Card from './components/Card.vue';

const foodsList = ref(null)
const isLoading = ref(true)
const isSidebarOpen = ref(false)
const orderQuantity = ref(0)
const orderList = ref({
  "nominal_diskon": 0,
  "nominal_pesanan": 0,
  "items": []
})

function openSidebar() {
  isSidebarOpen.value = true
}

function closeSidebar() {
  isSidebarOpen.value = false
}

function addOrder(foodData) {
  if (orderList.value.items.length == 0) {
    orderQuantity.value = ++orderList.value.items.length
    orderList.value.items[0] = { id: foodData.id, gambar:foodData.gambar, nama:foodData.nama,  harga: foodData.harga, catatan: "" }
    console.log(orderList.value)
  }
  else {
    orderList.value.items.push({ id: foodData.id, gambar:foodData.gambar, nama:foodData.nama,  harga: foodData.harga, catatan: "" })
    orderQuantity.value = orderList.value.items.length
    console.log(orderList.value)
  }

  orderList.value.nominal_pesanan = orderList.value.nominal_pesanan + foodData.harga
}


onMounted(() => {
  axios.get('https://tes-mobile.landa.id/api/menus')
    .then((response) => {
      foodsList.value = response.data.datas
    }).catch((error) => {
      console.log(error)
    }).finally(() => {
      isLoading.value = false
    })
})


</script>

<template>
  <div class="bg-cust-white w-full min-h-screen relative">
    <Navbar @openSidebar="openSidebar" :orderQuantity="orderQuantity" />
    <main class="pt-24 w-full flex px-10 gap-4">
      <div v-if="isLoading" class="animate-pulse flex gap-4">
        <div class="w-[240px] h-[380px] rounded-lg bg-slate-200">
        </div>
        <div class="w-[240px] h-[380px] rounded-lg bg-slate-200">
        </div>
        <div class="w-[240px] h-[380px] rounded-lg bg-slate-200">
        </div>
        <div class="w-[240px] h-[380px] rounded-lg bg-slate-200">
        </div>
      </div>
      <Card v-else v-for="foodList in foodsList" :foodData="foodList" @addOrder="addOrder" />
    </main>

    <Sidebar :orderList="orderList" v-if="isSidebarOpen" @closeSidebar="closeSidebar" />
    <div v-if="isSidebarOpen" class="bg-gray-950/50 absolute top-0 left-0 right-0 bottom-0 w-full min-h-full z-[90]">
    </div>
  </div>
</template>