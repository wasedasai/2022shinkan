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
  <div class="kyokulink" :class="bgType">
    <nuxt-link :to="url" class="link"
      ><div class="img_filter">
        <h2><slot /></h2></div
    ></nuxt-link>
  </div>
</template>

<style scoped>
.kyokulink {
  width: 40%;
  height: 240px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 12px;
  filter: drop-shadow(4px 4px 2px rgb(0 0 0 / 0.4));
  transition-duration: 0.4s;
  transition-timing-function: ease-out;
}
.kyokulink:hover {
  filter: drop-shadow(8px 8px 4px rgb(0 0 0 / 0.4));
}
.bgType1 {
  background-image: url('~assets/images/kyoku_link/sample.jpg');
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
  .kyokulink {
    width: 100%;
    height: 120px;
  }
}
</style>
