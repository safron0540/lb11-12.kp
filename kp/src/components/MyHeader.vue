<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top py-2">
    <div class="container">
      
      <button class="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#myNav">
        <span class="navbar-toggler-icon" style="width: 20px; height: 20px;"></span>
      </button>

      <RouterLink to="/" class="navbar-brand fw-bold text-dark m-0">
        Спорт товары
      </RouterLink>

      <div class="collapse navbar-collapse" id="myNav">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-1">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link style-link px-3" active-class="active-link">Главная</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/products" class="nav-link style-link px-3" active-class="active-link">Каталог</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link style-link px-3" active-class="active-link">О нас</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/contact" class="nav-link style-link px-3" active-class="active-link">Контакты</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/profile" class="nav-link style-link px-3" active-class="active-link">Профиль</RouterLink>
          </li>
        </ul>
      </div>

      <RouterLink to="/cart" class="position-relative d-flex align-items-center text-decoration-none cart-icon-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" class="cart-svg">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        
        <span v-if="store.cartCnt > 0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cart-badge">
          {{ store.cartCnt }}
        </span>
      </RouterLink>

    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useCounterStore } from '../store/store'

const store = useCounterStore()
</script>

<style scoped>

.style-link {
  color: var(--muted-foreground);
  font-weight: 500;
  transition: color 0.3s ease, transform 0.2s ease;
}

.style-link:hover {
  color: var(--primary);
  transform: translateY(-1px);
}

.active-link {
  color: var(--primary) !important;
  font-weight: 700;
  border-bottom: 2px solid var(--primary);
}

.cart-icon-wrapper {
  transition: transform 0.2s ease;
}

.cart-icon-wrapper:hover {
  transform: scale(1.05);
}

.cart-svg {
  color: var(--primary);
}

.cart-badge {
  font-size: 0.65rem;
}
</style>