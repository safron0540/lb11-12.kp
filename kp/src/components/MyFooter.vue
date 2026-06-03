<template>
  <footer class="bg-dark text-light mt-5 py-4 border-top border-secondary">
    <div class="container">
      
      <div class="row text-start mt-2">
        
        <div class="col-12 col-md-4 mb-3">
          <h5 class="text-white fw-bold">Спорт товары</h5>
          <p class="small text-muted mt-2">
            Твой лучший выбор качественного спортивного инвентаря и обуви для любых тренировок.
          </p>
        </div>

        <div class="col-12 col-md-4 mb-3">
          <h5 class="text-white fw-bold">Навигация</h5>
          <ul class="list-unstyled mt-2">
            <li class="mb-2"><RouterLink to="/products" class="f-link small">Каталог</RouterLink></li>
            <li class="mb-2"><RouterLink to="/profile" class="f-link small">Профиль</RouterLink></li>
            <li class="mb-2"><RouterLink to="/cart" class="f-link small">Корзина</RouterLink></li>
          </ul>
        </div>

        <div class="col-12 col-md-4 mb-3">
          <h5 class="text-white fw-bold">Поддержка</h5>
          <ul class="list-unstyled mt-2">
            <li class="mb-2"><RouterLink to="/contact" class="f-link small">Написать нам</RouterLink></li>
            <li class="mb-2"><RouterLink to="/about" class="f-link small">О компании</RouterLink></li>
          </ul>
        </div>

      </div>

    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>

.f-link {
  color: var(--muted-foreground);
  text-decoration: none;
  transition: color 0.2s ease, padding-left 0.2s ease;
}

.f-link:hover {
  color: #ffffff;
  padding-left: 4px;
}
</style>