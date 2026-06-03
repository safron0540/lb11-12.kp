<template>
  <div class="wrapper">
    <MyHeader />
    
    <router-view class="main-content" />
    
    <MyFooter />
  </div>
</template>

<script setup>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1; 
}
</style>