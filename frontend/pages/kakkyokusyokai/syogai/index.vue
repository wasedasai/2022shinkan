<script>
export default {
  head: {
    title: '局紹介　渉外局',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          '企業や校友、地域といった大学外部の主体とコミュニケーションをとり、早稲田祭の開催に必要なご支援やご協力をいただくために活動する部署です！渉外局の紹介はこちら',
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '新歓、局紹介、渉外局、早稲田祭運営スタッフ、運スタ、早稲田、早稲田大学、早稲田祭',
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:title', property: 'og:title', content: '局紹介　渉外局' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '企業や校友、地域といった大学外部の主体とコミュニケーションをとり、早稲田祭の開催に必要なご支援やご協力をいただくために活動する部署です！渉外局の紹介はこちら',
      },
      { hid: 'og:url', property: 'og:url', content: 'kakkyokusyokai/syogai' },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://wasedasai.github.io/2022shinkan/images/logo_with_catch_green.png',
      },
      // Twitter
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: '早稲田祭運営スタッフ2022新歓 局紹介　渉外局',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          '企業や校友、地域といった大学外部の主体とコミュニケーションをとり、早稲田祭の開催に必要なご支援やご協力をいただくために活動する部署です！渉外局の紹介はこちら',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: 'https://wasedasai.github.io/2022shinkan/',
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content:
          'https://wasedasai.github.io/2022shinkan/images/logo_with_catch_green.png',
      },
    ],
  },
}
</script>

<template>
  <main>
    <div class="foto-wrapper">
      <img src="~assets/images/kyokusyokai/syogai_top.jpg" class="foto" />
    </div>
    <div class="title_all">
      <h2 class="title1">局紹介</h2>
      <h2 class="title2">渉外局</h2>
    </div>
    <div class="contents">
      <div class="description">
        <div>
          「想いと想いをつなぐ架け橋」<br />
          企業や校友、地域といった大学外部の主体とコミュニケーションをとり、早稲田祭の開催に必要なご支援やご協力をいただくために活動する部署です！社会で活躍する大人と交渉する仕事は、普通の大学生活では味わうことのできないとても貴重な経験です。自分たちの力で早稲田祭の開催に直接寄与することのできる渉外局での活動は、とてもやりがいがあります。大人との接し方やビジネスマナーも詳しく学べるため、社会人0年目のような経験ができる点も大きな魅力です。また局員が50人ほどの比較的少人数の局であるため、局員同士の仲が良くたくさんの友達ができる上に、先輩後輩の距離感も近くアットホームな雰囲気です！局全体としては、1年を通して活動が安定していることが特徴で、忙しすぎず暇すぎず、充実した活動ができます。
        </div>
        <ul class="teams">
          <li>
            <AtomsPartTitle>企業チーム</AtomsPartTitle><br />
            「早稲田祭を運営するための財源を獲得する」ことが仕事です。実際に企業の方とコンタクトをとり、広告費として協賛をいただきます。責任は大きいですが、大学生のうちに社会人のような経験ができる、とてもやりがいのあるチームです！
            最初は誰もが初心者なのでご心配なく。既存スタッフが新規スタッフのみなさんを万全の体制でサポートします！
          </li>
          <li>
            <AtomsPartTitle>校友チーム</AtomsPartTitle><br />
            早稲田大学の卒業生である校友の方に、早稲田祭へのご支援・ご理解をいただくために活動しています。校友の方が開催している稲門会に参加し、はっぴを着てスピーチをしたり、校友の方を招いて親睦を深めたりと、さまざまな方法で信頼関係を築いています。校友チームでの活動を通して、名刺の渡し方から目上の方との話し方まで、社会に出てから役立つビジネスマナーを習得できます。
          </li>
          <li>
            <AtomsPartTitle>地域チーム</AtomsPartTitle><br />
            私たちは人と人とのつながりを大切にし、早稲田周辺地域の方々との信頼関係を構築することに尽力しています！
            例年は、早稲田のまちで開催されるさまざまなイベントに参加したり、地域の方との親睦会を開催したりして、早稲田祭と早稲田というまちの架け橋となる役割を担っています。早稲田祭を開催するには、早稲田のまちにお住まいの方々のご理解やご協力が不可欠です。
            早稲田祭や早稲田というまちが大好きになる地域チームで、祭を支えてみませんか？
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
    background-image: url('~assets/images/kyokusyokai/syogai_top.jpg');
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
