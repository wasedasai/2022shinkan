<script>
export default {
  props: {
    url: {
      type: String,
      default: '/',
    },
  },
}
</script>

<template>
  <div class="button">
    <nuxt-link :to="url" class="link"
      ><div class="content"><slot /></div
    ></nuxt-link>
  </div>
</template>

<style scoped>
.button {
  min-width: 200px;
  height: 54px;
  background-color: #fff;
  border-color: #804b40;
  border-style: solid;
  border-width: 4px;
  border-radius: 12px;
  padding: 0.5rem;
  transition: all 0.3s;
  box-shadow: 4px 4px 2px gray;
}

.button:hover {
  filter: drop-shadow(8px 8px 4px rgb(0 0 0 / 0.4));
}

.link {
  text-decoration: none;
}

.content {
  color: #4c2219;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
