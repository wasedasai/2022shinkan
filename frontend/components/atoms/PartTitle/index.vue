<template>
  <div class="PartTitle">
    <img class="image" src="~assets/images/flowers/green_cha_orange.png" />
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
  padding: 0; /* h2のデフォルトのpaddingを上書き */
}
.image {
  width: 40px;
  height: auto;
}
</style>
