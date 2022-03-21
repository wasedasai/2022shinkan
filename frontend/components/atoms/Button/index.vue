<template>
  <div class="button">
    <h2 class="content">ボタン</h2>
  </div>
</template>

<style scoped>
.button {
  width: 200px;
  height: 72px;
  background-color: #fff;
  border-color: #804b40;
  border-style: solid;
  border-width: 4px;
  border-radius: 30px;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 2px 2px 4px gray;
}

.button:hover {
  filter: drop-shadow(8px 8px 4px rgb(0 0 0 / 0.4));
}

.content {
  color: #804b40;
  text-decoration: none;
  font-size: 16px;
  text-align: center;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
