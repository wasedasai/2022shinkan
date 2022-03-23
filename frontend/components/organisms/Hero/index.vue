<template>
  <div>
    <div class="hero">
      <h1 class="content"><slot /></h1>
    </div>
  </div>
</template>

<style scoped>
.hero {
  color: #fff;
  background-image: url('~assets/images/hero.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 750px) {
  .hero {
    height: 120px;
  }
}
</style>
