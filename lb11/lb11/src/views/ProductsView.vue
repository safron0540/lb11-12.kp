<template>
  <main class="container mt-5">
    <h2 class="text-center mb-4">Наши товары</h2>

    <div class="row">
      <div class="my-column" v-for="item in fetchdata" :key="item.id">
        <div class="card" style="width: 100%;">
          <img class="card-img-top" :src="item.image" :alt="item.title">

          <div class="card-body d-flex flex-column justify-content-between">
            <div>
              <h5 class="card-title fw-bold text-dark text-truncate">{{ item.title }}</h5>
            </div>

            <div class="d-flex justify-content-between align-items-center mt-3">
              <span class="fs-5 fw-bold text-success">${{ item.price }}</span>
              <button type="button" class="btn btn-primary">Купить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const fetchdata = ref(null)

onMounted(async () => {
  const response = await fetch('https://fakestoreapi.com/products?limit=6')

  const result = await response.json()
  fetchdata.value = result

  console.log(fetchdata.value)
})
</script>

<style scoped>
.my-column {
  width: 33%;
  padding: 15px;
}

.card .btn-primary {
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.card .btn-primary:hover {
  background-color: #004ad6 !important;
  transform: scale(1.03);
  box-shadow: 0 4px 8px rgba(13, 110, 253, 0.3);
}

.card {
  height: 100%;
}

.card-img-top {
  height: 220px;
  object-fit: contain;
  background-color: #fff;
  padding: 10px;
}

@media screen and (max-width: 1240px) {
  .my-column {
    width: 50%;
  }
}

@media screen and (max-width: 768px) {
  .my-column {
    width: 100%;
  }
}
</style>