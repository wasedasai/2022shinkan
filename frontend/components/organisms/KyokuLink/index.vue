<script>
export default {
  props: {
    url: { type: String, default: '' },
    bgType: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <div class="kyokulink-wrapper">
    <div class="kyokulink" :class="bgType">
      <nuxt-link :to="url" class="link"
        ><div class="img_filter">
          <h2><slot /></h2></div
      ></nuxt-link>
    </div>
  </div>
</template>

<style scoped>
.kyokulink-wrapper {
  width: 40%;
  height: 180px;
  overflow: hidden;
  border-radius: 12px;
  filter: drop-shadow(4px 4px 2px rgb(0 0 0 / 0.4));
  transition-duration: 0.4s;
  transition-timing-function: ease-out;
}
.kyokulink-wrapper:hover {
  filter: drop-shadow(8px 8px 4px rgb(0 0 0 / 0.4));
}

.kyokulink {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 12px;
  transition-duration: 0.4s;
  transition-timing-function: ease-out;
}
.kyokulink:hover {
  transform: scale(1.2);
}
.bgType1 {
  background-image: url('~assets/images/kyoku_link/bgType1.jpg');
}
.bgType2 {
  background-image: url('~assets/images/kyoku_link/bgType2.jpg');
}
.bgType3 {
  background-image: url('~assets/images/kyoku_link/bgType3.jpg');
}
.bgType4 {
  background-image: url('~assets/images/kyoku_link/bgType4.jpg');
}
.bgType5 {
  background-image: url('~assets/images/kyoku_link/bgType5.jpg');
}
.bgType6 {
  background-image: url('~assets/images/kyoku_link/santai_top.jpg');
}
.bgType7 {
  background-image: url('~assets/images/kyoku_link/bgType7.jpg');
}
.bgType8 {
  background-image: url('~assets/images/kyoku_link/bgType8.jpg');
}

.link {
  width: 100%;
  height: 100%;
  color: white;
  text-decoration: none;
}

.img_filter {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
}

@media screen and (max-width: 750px) {
  .kyokulink-wrapper {
    width: 100%;
    height: 180px;
  }
}
</style>
