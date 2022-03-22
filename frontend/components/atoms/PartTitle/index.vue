<template>
  <div class="PartTitle">
    <img
      class="image"
      src="~assets/images/PartTitle_image/花緑茶オレンジ.png"
    />
    <h2 class="content"><slot /></h2>
  </div>
</template>

<style scoped>
.PartTitle {
  display: flex;
  align-items: center;
}
.content {
  color: #4c2219;
  padding: 0;
  position: relative;
}
.image {
  width: 25px;
  height: 25px;
}
</style>
