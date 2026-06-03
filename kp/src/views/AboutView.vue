<template>
  <main class="container my-4 text-start main-container">
    
    <div class="text-center mb-4">
      <h2 class="fw-bold text-dark">О магазине</h2>
      <p class="text-muted small">Спорт товары — твой гид в мире спорта с 2026 года</p>
    </div>

    <div class="mb-4 image-wrapper">
      <img
        src="@/assets/photo/photo-1461896836934-ffe607ba8211.jpg"
        alt="Спортивный магазин"
        class="img-fluid w-100 shadow-sm about-main-img"
      />
    </div>

    <div class="mb-4 fs-6 text-secondary about-text">
      <p>
        Приветствуем в Спорт товары! Мы помогаем начинающим спортсменам и профессионалам находить качественную экипировку, обувь и аксессуары для любых тренировок. Наша цель — сделать спорт доступным и комфортным для каждого.
      </p>
       <p>
        Мы тщательно отбираем товары, представленные в каталоге, сотрудничая только с проверенными брендами. У нас вы найдете все необходимое для фитнеса, бега, баскетбола и других активностей.
      </p>
    </div>

    <hr class="my-4">

    <h4 class="fw-bold mb-3 text-dark text-center">Почему выбирают нас?</h4>
    
    <div class="row">
      <div class="col-12 col-md-6 mb-3">
        <div class="p-3 bg-light border feature-box">
          <h6 class="fw-bold text-primary">Качество товара</h6>
          <p class="small text-muted mb-0">Вся продукция проходит проверку и полностью соответствует международным стандартам.</p>
        </div>
      </div>

      <div class="col-12 col-md-6 mb-3">
        <div class="p-3 bg-light border feature-box">
          <h6 class="fw-bold text-primary">Быстрая доставка</h6>
          <p class="small text-muted mb-0">Доставляем заказы в кратчайшие сроки прямо к вам домой или в удобный пункт выдачи.</p>
        </div>
      </div>
    </div>

  </main>
</template>

<script setup>
</script>

<style scoped>
.main-container {
  max-width: 800px;
}

.about-main-img {
  height: 280px; 
  object-fit: cover; 
  border-radius: var(--radius);
}

.about-text {
  line-height: 1.6;
}

.feature-box {
  border-radius: var(--radius);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-box:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}
</style>