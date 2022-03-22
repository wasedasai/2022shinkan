<template>
  <div>
    <div class="QA">
      <h1 class="QAbox">
        <h2 class="Q">Q</h2>
      </h1>
      <h1 class="head-border"></h1>
      <h1 class="plusbutton"></h1>
    </div>
  </div>
</template>

<style scoped>
.QAbox {
  color: #4c2219;
  background-color: #dde6cd;
  width: 90%;
  margin: 5% 5% 5% 5%;
  border-radius: 10px;
  padding: 10px 10px 80px;
  border-width: 90%;
}
.Q {
  font-size: 24px;
  font-weight: bold;
  color: #4c2219;
  position: relative;
}
.Q::after {
  content: '';
  width: 80%;
  height: 1%;
  background-color: #4c2219;
  bottom: 0;
  display: inline-block;
  align-items: center;
}
</style>
