<template>
  <main class="container mt-5">
    <h2 class="text-center mb-4">Форма обратной связи</h2>
    
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input 
          type="email" 
          class="form-control" 
          id="exampleInputEmail1" 
          aria-describedby="emailHelp"
          v-model="email"
        >
        <div id="emailHelp" class="form-text">Тут ваш адрес электронной почты</div>
      </div>
      
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Сообщение</label>
        <textarea 
          class="form-control" 
          id="exampleFormControlTextarea1" 
          rows="4"
          v-model="message"
        ></textarea>
      </div>
      
      <div class="mb-3 form-check">
        <input 
          type="checkbox" 
          class="form-check-input" 
          id="exampleCheck1"
          v-model="subscribe"
        >
        <label class="form-check-label" for="exampleCheck1">Подписаться на рассылку</label>
      </div>
      
      <button type="submit" @click.prevent="sendmessage()" class="btn btn-primary w-100 py-2">
        Отправить
      </button>

      <div v-if="Status" class="alert alert-success mt-4 mb-0 text-center">
        {{ Status }}
      </div>
    </form>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const message = ref('')
const subscribe = ref(false)
const Status = ref('')

const sendmessage = () => {
  let ContactForm = {
    title: email.value,
    body: message.value,
    subscribe: subscribe.value,
    userId: 1
  }

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({ ContactForm }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json()) 
  .then((j) => {
    Status.value = `Успешно`
    
    email.value = ''
    message.value = ''
    subscribe.value = false
  })
}
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