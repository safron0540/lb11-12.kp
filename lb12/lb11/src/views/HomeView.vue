<template>
  <main class="container mt-5">
    <h2 class="text-center mb-4">Главная страница</h2>
    
    <div class="row">
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
  </main>
</template>

<script setup>
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
  transform: translateY(-4px); 
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1); 
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