<script>
export default {
  head: {
    title: '局紹介　財務局',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          '財政面から早稲田祭を俯瞰し、予算・決算というかたちで祭の設計図を描く局です。財務局の紹介はこちら',
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '新歓、局紹介、財務局、早稲田祭運営スタッフ、運スタ、早稲田、早稲田大学、早稲田祭',
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:title', property: 'og:title', content: '局紹介　財務局' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '財政面から早稲田祭を俯瞰し、予算・決算というかたちで祭の設計図を描く局です。財務局の紹介はこちら',
      },
      { hid: 'og:url', property: 'og:url', content: 'kakkyokusyokai/zaimu' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://wasedasai.github.io/2022shinkan/images/tree_logo.png',
      },
      // Twitter
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: '早稲田祭運営スタッフ2022新歓 局紹介　財務局',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          '財政面から早稲田祭を俯瞰し、予算・決算というかたちで祭の設計図を描く局です。財務局の紹介はこちら',
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
        content: 'https://wasedasai.github.io/2022shinkan/images/tree_logo.png',
      },
    ],
  },
}
</script>

<template>
  <main>
    <div class="foto-wrapper">
      <img src="~assets/images/kyokusyokai/zaimu_top.jpg" class="foto" />
    </div>
    <div class="title_all">
      <h2 class="title1">局紹介</h2>
      <h2 class="title2">財務局</h2>
    </div>
    <div class="contents">
      <div class="description">
        <div>
          「祭の設計者であれ」<br />
          運営スタッフの中で1番人数が少なく、まさに少数精鋭の局です。他の局とは違ってチームがないため、新規スタッフも2年目も3年目もみんなで一緒に活動して仲良くなれるのが特徴です。<br />
          ｢財務｣という名前のため、お堅い局なのではと思われがちですが、実は朗らかな局員ばかりで、ゆるゆるのんびりな雰囲気です。しかし全ての仕事がお金に関わること！そのため、活動するときは責任感を持って真面目に取り組むメリハリもあります。<br />
          財務局の仕事は、財政面から早稲田祭を俯瞰し、予算・決算というかたちで祭の設計図を描く、とてもやりがいのあるものです。私たちの努力は周りからは見えにくいですが、お金の面から早稲田祭を支える仕事、格好良いと思いませんか？財務局でお待ちしています！
        </div>
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
    background-image: url('~assets/images/kyokusyokai/zaimu_top.jpg');
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
