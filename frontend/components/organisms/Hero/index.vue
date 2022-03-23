<template>
  <div>
    <div class="hero">
      <h1 class="content"><slot /></h1>
    </div>
  </div>
</template>

<style scoped>
.hero {
  background-image: url('~assets/images/hero.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
}

.content {
  color: #fff;
}

@media screen and (max-width: 750px) {
  .hero {
    height: 120px;
  }
}
</style>
