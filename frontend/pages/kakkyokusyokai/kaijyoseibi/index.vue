<template>
  <main>
    <div class="base">
      <img src="~assets/images/kyokusyokai/kaijyoseibi_top.jpg" class="foto">
    </div>
    <div class="title_all">
      <h2 class="title1">
        局紹介
      </h2>
      <h2 class="title2">
        会場整備局
      </h2>
    </div>
    <div class="content">
      「ここが祭の最前線」<br/>
      会場整備局は「ここが祭の最前線」というキャッチコピーが表すように、早稲田祭当日の会場で活躍することができる局です！
      局の特徴の1つとして、チームによって活動内容が大きく変わるということがあります。来場者案内・参加団体対応・制作活動・環境整備・警備活動・備品管理......多岐にわたって活動を行っています。
      また、各チームの人数は20人前後で構成されているため、たくさんの人と関わりを持つことができます。自分のチーム以外と活動することも多く、運営スタッフ内での交流を深められることも特徴です！
      局員の雰囲気も、チーム同様に多種多様！局員の人数は運営スタッフの中で3番目に多い局ですが、優しく話しやすい人ばかりです！
    </div>
    <div>
      <PartTitle>
        会場案内チーム
      </PartTitle>
    </div>
  </main>
</template>

<style scoped>
.content{
  display: flex;
  justify-content:space-between;
  align-items: center;
  height: 50vh;
}

@media screen and (min-width: 1024px) {
  .foto{
    width: 85%;
    border-radius: 50%;
    margin-left: 35%;
    overflow: hidden;
    object-fit: cover;
  }
  .title_all{
    margin-top: -17%;
    padding-left: 10%;
  }
  .title1{
    font-size: 2.8rem;
    color: #4c2219;
  }
  .title2{
    font-size: 3rem;
    color: #4c2219;
    border-bottom-width: thick;
    border-bottom-style: ridge;
  }
}
</style>