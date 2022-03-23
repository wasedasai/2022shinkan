<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <div><slot /></div>
  </div>
</template>
