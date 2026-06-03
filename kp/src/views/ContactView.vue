<template>
  <main class="container my-4 text-start" style="max-width: 900px;">
    
    <div class="text-center mb-4">
      <h2 class="fw-bold text-dark">Обратная связь</h2>
      <p class="text-muted">Есть вопросы или предложения? Напишите нам прямо сейчас!</p>
    </div>

    <div class="row g-4">
      
      <div class="col-12 col-md-6">
        <div class="p-4 border bg-white shadow-sm" style="border-radius: var(--radius);">
          <h5 class="fw-bold mb-3 text-dark">Написать нам</h5>
          
          <form @submit.prevent="store.sendmessage()">
            
            <div class="mb-3">
              <label class="form-label small fw-medium">Ваш Email</label>
              <input type="email" class="form-control" v-model="store.email" placeholder="example@mail.ru" required style="border-radius: var(--radius);">
            </div>

            <div class="mb-3">
              <label class="form-label small fw-medium">Текст сообщения</label>
              <textarea class="form-control" rows="4" v-model="store.msg" placeholder="Введите ваше сообщение..." required style="border-radius: var(--radius);"></textarea>
            </div>

            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="checkSub" v-model="store.sub">
              <label class="form-check-label small text-muted" for="checkSub">Подписаться на спортивные новости</label>
            </div>

            <button type="submit" class="btn btn-primary w-100 py-2" style="border-radius: var(--radius);">
              Отправить сообщение
            </button>

            <div v-if="store.status" class="alert alert-success mt-3 text-center small py-2">
              Данные отправлены!
            </div>

          </form>
        </div>
      </div>

      <div class="col-12 col-md-6 d-flex flex-column gap-3">
        
        <div class="p-3 border bg-light" style="border-radius: var(--radius);">
          <h6 class="fw-bold text-dark mb-1">Наш адрес</h6>
          <p class="small text-muted mb-0">г. Томск, ул. Вершинина, д. 39А</p>
        </div>

        <div class="p-3 border bg-light" style="border-radius: var(--radius);">
          <h6 class="fw-bold text-dark mb-1">Телефон и Email</h6>
          <p class="small text-muted mb-0">
            Тел: +7 (0000) 00-00-00<br>
            Почта: support@store.ru
          </p>
        </div>

        <div class="p-3 border text-center" style="border-radius: var(--radius); background-color: #f0f4ff;">
          <h6 class="fw-bold text-primary mb-1">Нужна помощь с заказом?</h6>
          <p class="small text-secondary mb-0">Наша служба поддержки работает ежедневно с 9:00 до 21:00.</p>
        </div>

      </div>

    </div>
  </main>
</template>

<script>
import { useCounterStore } from '@/store/store'

export default {
  name: 'ContactView',
  data() {
    return {
      store: useCounterStore()
    }
  }
}
</script>