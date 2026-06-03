<template>
  <div class="bg-light py-4 flex-grow-1 text-start">
    <div class="container" style="max-width: 700px;">
      
      <h2 class="fw-bold mb-3">Личный кабинет</h2>

      <div class="card p-3 border bg-white shadow-sm mb-3" style="border-radius: var(--radius);">
        <div class="d-flex align-items-center gap-3 mb-3">
          <div class="rounded-circle d-flex align-items-center justify-content-center bg-primary text-white" 
               style="width: 65px; height: 65px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
            </svg>
          </div>
          <div class="flex-grow-1">
            <div v-if="isEditingInfo">
              <input type="text" class="form-control form-control-sm mb-1 fw-bold" v-model="user.name">
              <input type="text" class="form-control form-control-sm" v-model="user.email">
            </div>
            <div v-else>
              <h4 class="fw-bold m-0" style="font-size: 1.25rem;">{{ user.name }}</h4>
              <p class="m-0 text-muted small">{{ user.email }}</p>
            </div>
          </div>
        </div>

        <div class="row g-2 border-top pt-2">
          <div class="col-12 col-md-6">
            <span class="small text-muted d-block">Телефон:</span>
            <input v-if="isEditingInfo" type="text" class="form-control form-control-sm" v-model="user.phone">
            <span v-else class="fw-medium text-dark small">{{ user.phone }}</span>
          </div>
          <div class="col-12 col-md-6">
            <span class="small text-muted d-block">Регистрация:</span>
            <span class="fw-medium text-dark small">{{ user.joined }}</span>
          </div>
        </div>

        <div class="mt-3 text-end">
          <button v-if="isEditingInfo" type="button" class="btn btn-sm btn-success px-3" @click="isEditingInfo = false">
            Сохранить изменения
          </button>
          <button v-else type="button" class="btn btn-sm btn-outline-secondary px-3" @click="isEditingInfo = true">
            Редактировать профиль
          </button>
        </div>
      </div>

      <div class="card p-3 border bg-white shadow-sm mb-3" style="border-radius: var(--radius);">
        <h5 class="fw-bold mb-2" style="font-size: 1.1rem;">Адрес доставки</h5>
        
        <div v-if="isEditingAddress" class="d-flex flex-column gap-1">
          <input type="text" class="form-control form-control-sm" v-model="user.address.street" placeholder="Улица, дом">
          <input type="text" class="form-control form-control-sm" v-model="user.address.city" placeholder="Город, индекс">
          <input type="text" class="form-control form-control-sm" v-model="user.address.country" placeholder="Страна">
        </div>
        <p v-else class="text-secondary m-0 small" style="line-height: 1.5;">
          {{ user.address.street }}<br />
          {{ user.address.city }}<br />
          {{ user.address.country }}
        </p>

        <div class="mt-3">
          <button v-if="isEditingAddress" type="button" class="btn btn-sm btn-success px-3" @click="isEditingAddress = false">
            Сохранить изменения
          </button>
          <button v-else type="button" class="btn btn-sm btn-outline-secondary px-3" @click="isEditingAddress = true">
            Изменить адрес
          </button>
        </div>
      </div>

      <div class="card p-3 border bg-white shadow-sm" style="border-radius: var(--radius);">
        <h5 class="fw-bold mb-2" style="font-size: 1.1rem;">Настройки аккаунта</h5>
        <div class="d-flex flex-column gap-2 mt-2">
          
          <button type="button" class="btn btn-sm btn-outline-secondary text-start p-2 custom-btn">
            Изменить текущий пароль
          </button>
          
          <button type="button" class="btn btn-sm btn-outline-danger text-start p-2 custom-btn-danger">
            Выйти из аккаунта
          </button>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { useCounterStore } from '@/store/store'

export default {
  name: 'ProfileView',
  data() {
    return {
      store: useCounterStore(),
      isEditingInfo: false,
      isEditingAddress: false
      }
  },
  computed: {
    user() {
      return this.store.user
    }
  }
}
</script>

<style scoped>
.custom-btn {
  color: var(--primary);
  border-color: #dee2e6;
  font-weight: 500;
}
.custom-btn:hover {
  background-color: var(--muted);
  color: var(--primary);
}

.custom-btn-danger {
  font-weight: 500;
}
.custom-btn-danger:hover {
  background-color: #fdf2f2;
  color: #dc2626 !important;
}

.btn-xs {
  font-size: 0.75rem;
  padding: 2px 8px;
}
</style>