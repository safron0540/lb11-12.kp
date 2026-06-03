<template>
  <main class="container my-5 flex-grow-1 text-start">
    <div class="mb-4">
      <h2 class="fw-bold m-0" style="color: var(--primary);">Оформление заказа</h2>
      <p class="small mt-2 text-muted">
        Пожалуйста, проверьте состав вашего заказа и подтвердите данные для доставки курьером.
      </p>
    </div>

    <div v-if="success" class="alert alert-success p-4 text-center my-4" style="border-radius: var(--radius);">
      <h4 class="fw-bold">Заказ успешно оформлен!</h4>
      <p class="small mb-0 text-secondary">Спасибо за покупку. Курьер свяжется с вами по указанному телефону.</p>
      <RouterLink to="/" class="btn btn-primary btn-sm mt-3 px-4" style="border-radius: var(--radius);">
        На главную
      </RouterLink>
    </div>

    <div v-else class="row g-4">
      <div class="col-lg-7">
        <div class="card border p-4 shadow-sm" style="border-radius: var(--radius);">
          <h5 class="fw-bold mb-3" style="color: var(--primary);">Информация о доставке</h5>

          <form class="row g-3" @submit.prevent="makeOrder" novalidate>
            
            <div class="col-12">
              <label class="form-label small fw-medium">ФИО Получателя</label>
              <input type="text" class="form-control" v-model="store.user.name" placeholder="Иван Иванов" required style="border-radius: var(--radius);" />
            </div>

            <div class="col-12">
              <label class="form-label small fw-medium">Email адрес</label>
              <input type="text" class="form-control" v-model="store.user.email" placeholder="name@example.com" required style="border-radius: var(--radius);" />
            </div>

            <div class="col-12">
              <label class="form-label small fw-medium">Телефон</label>
              <input type="text" class="form-control" v-model="store.user.phone" placeholder="+7 (999) 123-4567" required style="border-radius: var(--radius);" />
            </div>

            <div class="col-12">
              <label class="form-label small fw-medium">Адрес (улица, дом, квартира)</label>
              <input type="text" class="form-control" v-model="store.user.address.street" placeholder="ул. Вершинина, д. 39А" required style="border-radius: var(--radius);" />
            </div>

            <div class="col-md-6">
              <label class="form-label small fw-medium">Город</label>
              <input type="text" class="form-control" v-model="store.user.address.city" placeholder="Томск" required style="border-radius: var(--radius);" />
            </div>

            <div class="col-md-6">
              <label class="form-label small fw-medium">Страна</label>
              <input type="text" class="form-control" v-model="store.user.address.country" placeholder="Россия" required style="border-radius: var(--radius);" />
            </div>

            <div class="col-12 mt-4">
              <button
                type="submit"
                class="btn text-white w-100 py-2 fw-medium btn-primary"
                style="border-radius: var(--radius);"
                :disabled="store.cart.length === 0"
              >
                Подтвердить и заказать
              </button>
            </div>

          </form>
        </div>
      </div>

      <div class="col-lg-5">
        <div class="card border p-4 shadow-sm" style="border-radius: var(--radius); background-color: var(--background);">
          <h5 class="fw-bold mb-3" style="color: var(--primary);">Состав заказа</h5>

          <div v-if="store.cart.length === 0" class="small text-muted">
            Ваша корзина пуста. Добавьте товары из каталога перед оформлением.
          </div>

          <div v-else>
            <div
              v-for="item in checkoutList"
              :key="item.id"
              class="d-flex justify-content-between gap-3 mb-2"
            >
              <span class="small text-truncate" style="max-width: 240px;">
                {{ item.title }} <b class="text-primary">x{{ item.cnt }}</b>
              </span>
              <span class="fw-medium">${{ (item.price * item.cnt).toFixed(2) }}</span>
            </div>

            <hr style="color: var(--muted);" />

            <div class="d-flex justify-content-between fw-bold text-dark" style="font-size: 1.1rem;">
              <span>Итого к оплате</span>
              <span style="color: var(--primary);">${{ totalPrice }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { useCounterStore } from '@/store/store'

export default {
  name: 'CheckoutView',
  data() {
    return {
      store: useCounterStore(),
      success: false 
    }
  },
  computed: {
    checkoutList() {
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
    totalPrice() {
      let total = 0
      this.store.cart.forEach(item => {
        total += Number(item.price || 0)
      })
      return total.toFixed(2)
    }
  },
  methods: {
    makeOrder() {
      if (this.store.cart.length > 0) {
        this.success = true
        this.store.cart = [] 
      }
    }
  }
}
</script>