<template>
  <main class="container mt-4 text-start">
    <h2 class="text-center mb-4 fw-bold">Каталог товаров</h2>

    <div class="row">
      <div class="col-12 col-md-4 mb-4" v-for="item in store.items.slice(0, limit)" :key="item.id">
        <div class="card h-100 bg-white border shadow-sm">
          <img class="card-img-top p-2" :src="item.img" :alt="item.title" style="height: 190px; object-fit: contain;">
          
          <div class="card-body d-flex flex-column justify-content-between">
            <div class="mb-3">
              <h6 class="fw-bold text-dark mb-2" style="font-size: 0.95rem;">{{ item.title }}</h6>
              <p class="text-muted small mb-0" style="font-size: 0.85rem; line-height: 1.4;">
                {{ item.desc }}
              </p>
            </div>

            <div class="d-flex justify-content-between align-items-center pt-2 border-top">
              <div>
                <span class="fs-6 fw-bold text-success">${{ item.price }}</span>
              </div>
              <button type="button" class="btn btn-primary btn-sm px-3" @click="store.cart.push(item)" style="font-size: 0.8rem;">
                Купить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center mt-3 mb-5" v-if="limit < store.items.length">
      <button type="button" class="btn btn-outline-dark px-4 py-2 btn-sm fw-medium" @click="addMore">
        Показать еще
      </button>
    </div>
  </main>
</template>

<script>
import { useCounterStore } from '@/store/store'

export default {
  name: 'ProductsView',
  data() {
    return {
      store: useCounterStore(),
      limit: 9 
    }
  },
  mounted() {
    this.store.getApidata()
  },
  methods: {
    addMore() {
      this.limit += 9
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: var(--radius);
  transition: transform 0.2s ease;
}
.card:hover {
  transform: translateY(-2px);
}
</style>