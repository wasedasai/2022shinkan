<template>
  <div class="card">
    <section class="card1">
      <img class="card-img" src="~assets/images/kyoku.png" alt="写真" />
      <p class="card-title">
        <strong>ha<slot name="eventtitle" /></strong>
      </p>
      <div class="card-footer">
        <p>
          早稲田祭や運営スタッフの魅力を、私たち運営スタッフが惜しみなく伝えます！サークルとしての基本情報から運営スタッフの大学生活まで、みなさんの気になる情報をお届けします。
          <slot name="eventcontent" />
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.card {
  background-color: rgb(239, 244, 248);
  width: 28%;
}

.card-title {
  padding: 0.1rem;
  font-size: 16px;
}

.card-footer {
  font-size: 12px;
  color: #000;
}
</style>
