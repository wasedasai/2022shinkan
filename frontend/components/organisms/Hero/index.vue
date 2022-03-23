<template>
  <div>
    <div class="hero">
      <h1 class="content">
        <slot/>
      </h1>
    </div>
  </div>
</template>

<style scoped>
.hero {
  color: #fff;
  text-align: center;
  padding-top: 24%;
  background-image: url('~assets/images/hero.JPG');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: auto;
  position: relative;
  margin-top: 80px;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

@media screen and (max-width: 375px) {
  .content {
    font-size: 10px;
  }
}
</style>
