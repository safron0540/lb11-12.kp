<template>
  <main class="container mt-5">
    <h2 class="text-center mb-4">Форма обратной связи</h2>

    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" v-model="store.email">
        <div id="emailHelp" class="form-text">Тут ваш адрес электронной почты</div>
      </div>

      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Сообщение</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" v-model="store.message"></textarea>
      </div>

      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="store.subscribe">
        <label class="form-check-label" for="exampleCheck1">Подписаться на рассылку</label>
      </div>

      <button type="submit" @click.prevent="store.sendmessage()" class="btn btn-primary w-100 py-2">
        Отправить
      </button>

      <div v-if="store.Status" class="alert alert-success mt-4 mb-0 text-center">
        {{ store.Status }}
      </div>
    </form>
  </main>
</template>

<script setup>
import { useCounterStore } from '@/store/store'
const store = useCounterStore()
</script>

<style scoped>
form {
  max-width: 650px;
  margin: 0 auto;
  padding: 30px;
  background-color: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}
</style>