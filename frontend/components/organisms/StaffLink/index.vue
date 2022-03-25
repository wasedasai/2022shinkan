<script>
export default {
  props: {
    url: { type: String, default: '' },
    name: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <nuxt-link :to="url" class="link">
    <img
      src="~assets/images/demo_images/sample1.jpg"
      alt="staffinterviewの画像"
      class="link-image"
    />
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
  max-width: 100%;
  border-radius: 12px;
  filter: drop-shadow(4px 4px 2px rgb(0 0 0 / 0.4));
  transition-duration: 0.4s;
  transition-timing-function: ease-out;
}
.link-image:hover {
  filter: drop-shadow(8px 8px 4px rgb(0 0 0 / 0.4));
}

.name {
  font-weight: 600;
  padding: 8px 0;
}
</style>
