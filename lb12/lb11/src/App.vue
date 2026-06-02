<template>
  <div class="d-flex flex-column min-vh-100 bg-light">
    
    <MyHeader>
      <span class="badge bg-primary ms-2">Допусти авторизирован</span>
    </MyHeader>

    <main class="container my-5 flex-grow-1">
      <RouterView />
    </main>

    <MyFooter />
  </div>
</template>

<script setup>
// Импортируем оба компонента из папки компонентов
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
</script>