<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
    <div class="container">
      <span class="navbar-brand fw-bold text-uppercase">Store</span>
      <div class="navbar-nav ms-auto align-items-center">
        <RouterLink to="/" class="nav-link px-3" active-class="active">Главная</RouterLink>
        <RouterLink to="/products" class="nav-link px-3" active-class="active">Каталог</RouterLink>
        <RouterLink to="/contact" class="nav-link px-3" active-class="active">Контакты</RouterLink>
        
        <slot></slot>
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>
<style scoped>

.nav-link.active {
  color: blue !important; 
  font-weight: bold;   
}
</style>