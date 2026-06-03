<template>
  <main class="container my-4 text-start">
    
    <div class="p-4 mb-4 text-white text-center" 
         :style="{
           borderRadius: 'var(--radius)',
           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('/photo.jpg')`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           height: '280px'
         }">
      
      <div class="py-4">
        <h1 class="display-6 fw-bold text-white">Спорт товары</h1>
        <p class="col-lg-8 mx-auto lead text-muted small mt-2 text-white-50" style="max-width: 600px;">
          Открой для себя качественный спортивный инвентарь и обувь для любых видов тренировок.
          Мы поможем поднять твои результаты на новый уровень!
        </p>
        <div class="mt-3">
          <button type="button" class="btn btn-primary btn-sm px-4 me-2" @click="goToCatalog">В каталог</button>
          <RouterLink to="/about" class="btn btn-outline-light btn-sm px-3">О нас</RouterLink>
        </div>
      </div>

    </div>

    <div class="row text-center px-2 mb-5">
      <div class="my-column">
        <div class="bg-primary-subtle p-4 border rounded">
          <h4 class="text-primary fw-bold mb-2">Наш ассортимент</h4>
          <p class="mb-0">Добро пожаловать в наш современный каталог! Мы собрали лучшие товары от проверенных поставщиков в одном месте для вашего удобства.</p>
        </div>
      </div>
      
      <div class="my-column">
        <div class="bg-primary p-4 border rounded text-white shadow-sm">
          <h4 class="fw-bold mb-2">Быстрая доставка</h4>
          <p class="mb-0">Все заказы обрабатываются в автоматическом режиме через единую систему. Доставляем в кратчайшие сроки прямо до вашего дома.</p>
        </div>
      </div>
      
      <div class="my-column">
        <div class="bg-primary-subtle p-4 border rounded">
          <h4 class="text-primary fw-bold mb-2">Онлайн поддержка</h4>
          <p class="mb-0">Возникли вопросы по заказам? Наша служба поддержки всегда на связи через форму обратной связи, чтобы помочь вам в любую минуту.</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-md-4 mb-4" v-for="item in store.items.slice(0, 3)" :key="item.id">
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

    <div class="text-center mt-2 mb-5">
      <button type="button" class="btn btn-outline-dark px-4 py-2 btn-sm fw-medium" @click="goToCatalog">
        Показать больше товаров
      </button>
    </div>

  </main>
</template>

<script>
import { useCounterStore } from '@/store/store'

export default {
  name: 'HomeView',
  data() {
    return {
      store: useCounterStore()
    }
  },
  computed: {
    featuredItems() {
      return this.store.items ? this.store.items.slice(0, 3) : []
    }
  },
  mounted() {
    this.store.getApidata()
  },
  methods: {
    goToCatalog() {
      this.$router.push('/products')
    }
  }
}
</script>

<style scoped>
.my-column {
  width: 33%;
  padding: 15px;
}

.my-column > div {
  height: 100%; 
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.my-column > div:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}
</style>