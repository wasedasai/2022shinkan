<script>
export default {
  props: {
    hasHeader: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      isHeaderOpen: false
    }
  }
}
</script>

<template>
  <header>
    <div>
      <nav>
      <h1></h1>
        <ul>
          <li><NuxtLink :to="'/'">リンク１</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
