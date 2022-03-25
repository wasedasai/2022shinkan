<script>
export default {
  head: {
    title: '局紹介　総務局',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '運営スタッフ内部の資源を取り扱う局です！総務局の紹介はこちら',
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '新歓、局紹介、総務局、早稲田祭運営スタッフ、運スタ、早稲田、早稲田大学、早稲田祭',
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:title', property: 'og:title', content: '局紹介　総務局' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '運営スタッフ内部の資源を取り扱う局です！総務局の紹介はこちら',
      },
      { hid: 'og:url', property: 'og:url', content: 'kakkyokusyokai/soumu' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://wasedasai.github.io/2022shinkan/images/tree_logo.png',
      },
    ],
  },
}
</script>

<template>
  <main>
    <div class="foto-wrapper">
      <img src="~assets/images/kyokusyokai/somu_top.jpg" class="foto" />
    </div>
    <div class="title_all">
      <h2 class="title1">局紹介</h2>
      <h2 class="title2">総務局</h2>
    </div>
    <div class="contents">
      <div class="description">
        <div>
          「『はっぴの背中』を想う場所」<br />
          総務局は、人的資源管理チーム・物的資源管理チーム・情報資源管理チームという3つのチームで構成されています。各チームにはそれぞれ10人前後が所属しており、チームに所属しない3年目を含めて例年30人程度で活動しています。このように人数規模が大きくないため、局単位で活動やレクをすることが多く、他の局に比べてもチームの垣根を超えた関係が強い温和な雰囲気を持っています。運営スタッフ内部の資源を取り扱う局であることから、局やチームの活動を通じて他部署のスタッフと幅広く交流できることが、総務局全体に共通する魅力です。総務局では活動を通じて運営スタッフ各部署の取り組みやそこに懸ける想いを知り、そして支えることができます。
        </div>
        <ul class="teams">
          <li>
            <AtomsPartTitle>情報資源管理チーム</AtomsPartTitle><br />
            「情報？ 資源？ 管理？
            よくわからないし難しいし楽しくなさそう」、そう思ったら大間違い！私たち情報資源管理チームが行うのは、運営スタッフが使うアカウントを管理したり、内部向けの有用な資料を載せたサイトを作ったり、運営スタッフの㊙を載せた情報誌を作ったりして、1番近くで運営スタッフに寄り添うこと！全部の局の活動を知ることができて、少人数アットホームな雰囲気の楽しいチームです！
          </li>
          <li>
            <AtomsPartTitle>人的資源管理チーム</AtomsPartTitle><br />
            このチームは主に2つの役割を担っています。1つ目は早稲田祭期間のシフト作成です。早稲田祭当日における運スタ一人ひとりの動きを決めるシフトを作成します。約600人分のシフト作りはとても大変ですが、その分やりがいにあふれた仕事です！
            2つ目は、運スタ全体の福利厚生です。運スタにはレクや合宿をはじめとしたたくさんの全体福利厚生があります！何百人も参加するような全体福利厚生の企画・運営はやることがとても多いですが、楽しんでいる仲間を見れることがやりがいです。
          </li>
          <li>
            <AtomsPartTitle>物的資源管理チーム</AtomsPartTitle><br />
            運営スタッフが使用する膨大な備品や部室、倉庫の管理・運用を担当しているチームです。企画や広報などに使用する備品の貸出や購入、倉庫の整理を行います。運営スタッフ一人ひとりの希望を聞いたり相談に乗ったり、早稲田祭に関わる活動を環境整備を通じて全力で支えています！
          </li>
        </ul>
      </div>
    </div>
    <div class="kyokusyoukai">
      <h2>各局紹介</h2>
      <OrganismsKyokuLinkList />
    </div>
  </main>
</template>

<style scoped>
.kyokusyoukai {
  padding: 0 0 40px;
}

.kyokusyoukai h2 {
  text-align: center;
}

main {
  overflow: hidden;
}

@media screen and (min-width: 1024px) {
  .foto {
    width: 80%;
    border-radius: 50%;
    margin-left: 40%;
    object-fit: cover;
  }
  .title_all {
    margin-top: -17%;
    padding-left: 10%;
  }
  .title1 {
    font-size: 40px;
    padding: 0;
    color: #4c2219;
  }
  .title2 {
    font-size: 48px;
    padding: 0;
    color: #4c2219;
    border-bottom-width: thick;
    border-bottom-style: ridge;
  }
  .contents {
    color: #4c2219;
    padding: 10% 10% 40px;
    width: 1200px;
  }
  .description {
    flex-direction: column;
  }
  .teams li {
    margin-top: 50px;
    text-decoration: none;
  }
}

@media screen and (max-width: 1023px) {
  main {
    padding-top: 80px;
  }
  .foto {
    display: none;
  }
  .title_all {
    background-image: url('~assets/images/kyokusyokai/somu_top.jpg');
    background-size: cover;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .title_all::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.6);
    top: 0;
    left: 0;
    z-index: 20;
  }
  .title1 {
    position: relative;
    color: #4c2219;
    z-index: 30;
    padding: 0;
  }
  .title2 {
    position: relative;
    color: #4c2219;
    border-bottom-width: none;
    z-index: 30;
    padding: 0;
  }
  .contents {
    color: #4c2219;
    padding: 40px 1rem;
  }
  .description {
    flex-direction: column;
  }
  .teams li {
    margin-top: 40px;
    text-decoration: none;
  }
}
</style>
