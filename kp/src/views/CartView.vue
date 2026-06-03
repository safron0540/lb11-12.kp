<template>
  <main class="container my-4 text-start">
    <h2 class="fw-bold mb-3">Корзина товаров</h2>

    <div v-if="store.cart.length === 0" class="text-center py-5 border bg-white rounded" style="padding: 40px 0;">
      <div class="mb-2 text-muted opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
        </svg>
      </div>
      <p class="text-muted small">Ваша корзина пуста. Добавьте что-нибудь из каталога.</p>
    </div>

    <div v-else class="row g-3">
      
      <div class="col-12 col-md-8">
        <div class="card p-3 mb-2 bg-white border shadow-sm" v-for="item in cList" :key="item.id">
          <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
            
            <img :src="item.img" style="width: 55px; height: 55px; object-fit: contain;">
            
            <div class="ms-2 flex-grow-1">
              <h6 class="fw-bold mb-1 text-dark" style="font-size: 0.95rem;">{{ item.title }}</h6>
              <span class="text-success small fw-bold">${{ item.price }}</span>
            </div>
            
            <div class="d-flex align-items-center gap-2">
              <button type="button" class="btn btn-sm btn-outline-secondary px-2 py-0" @click="minus(item)">-</button>
              <span class="fw-bold px-1" style="font-size: 0.9rem;">{{ item.cnt }}</span>
              <button type="button" class="btn btn-sm btn-outline-secondary px-2 py-0" @click="plus(item)">+</button>
              
              <button type="button" class="btn btn-sm btn-danger ms-3 py-1 px-2 small" @click="delAll(item.id)">
                Удалить
              </button>
            </div>

          </div>
        </div>
      </div>

      <div class="col-12 col-md-4">
        <div class="p-3 border bg-light" style="border-radius: var(--radius); margin-top: 2px;">
          <h5 class="fw-bold mb-3 text-dark" style="font-size: 1.1rem;">Информация о заказе</h5>
          <hr class="my-2">
          
          <div class="d-flex justify-content-between mb-2 small text-secondary">
            <span>Товары:</span>
            <span>${{ sum }}</span>
          </div>
          
          <div class="d-flex justify-content-between mb-2 small text-secondary">
            <span>Доставка:</span>
            <span>$10.00</span>
          </div>
          
          <hr class="my-2">
          
          <div class="d-flex justify-content-between fw-bold text-dark" style="font-size: 1.05rem;">
            <span>Итого к оплате:</span>
            <span>${{ (parseFloat(sum) + 10).toFixed(2) }}</span>
          </div>
          
          <button type="button" class="btn btn-primary w-100 mt-3 py-2 btn-sm fw-medium" @click="goToCheckout">
            Оформить заказ
          </button>
        </div>
      </div>

    </div>
  </main>
</template>

<script>
import { useCounterStore } from '@/store/store'

export default {
  name: 'CartView',
  data() {
    return {
      store: useCounterStore()
    }
  },
  computed: {
    cList() {
      let res = []
      this.store.cart.forEach(x => {
        let found = false
        for (let i = 0; i < res.length; i++) {
          if (res[i].id === x.id) {
            res[i].cnt++
            found = true
            break
          }
        }
        if (!found) {
          res.push({ ...x, cnt: 1 })
        }
      })
      return res
    },
    sum() {
      let total = 0
      this.store.cart.forEach(x => {
        total += x.price
      })
      return total.toFixed(2)
    }
  },
  methods: {
    plus(p) {
      let clean = { ...p }
      delete clean.cnt
      this.store.cart.push(clean)
    },
    minus(p) {
      let idx = this.store.cart.findIndex(x => x.id === p.id)
      if (idx !== -1) {
        this.store.cart.splice(idx, 1)
      }
    },
    delAll(id) {
      this.store.cart = this.store.cart.filter(x => x.id !== id)
    },
  
    goToCheckout() {
      window.scrollTo(0, 0)
    }
  }
}
</script>