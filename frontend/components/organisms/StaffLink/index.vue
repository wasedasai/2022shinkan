<script>
export default {
  props: {
    url: { type: String, default: '' },
    type: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <nuxt-link :to="url" class="link">
    <img class="link-image" :class="type" />
  </nuxt-link>
</template>

<style scoped>
.link {
  display: block;
  text-decoration: none;
  color: #190808;
  width: 100%;
  max-width: 320px;
}

.link-image {
  width: 100%;
  height: 120px;
  border-radius: 12px;
  transition-duration: 0.4s;
  transition-timing-function: ease-out;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.link-image:hover {
  filter: drop-shadow(8px 8px 4px rgb(0 0 0 / 0.4));
}

@media screen and (max-width: 720px) {
  .link-image {
    height: 180px;
  }
}

.s {
  background-image: url('~assets/images/staff_link/staff_s.png');
}
.m {
  background-image: url('~assets/images/staff_link/staff_m.png');
}
.n {
  background-image: url('~assets/images/staff_link/staff_n.png');
}
.j {
  background-image: url('~assets/images/staff_link/staff_j.png');
}

.name {
  font-weight: 600;
  padding: 8px 0;
}
</style>
