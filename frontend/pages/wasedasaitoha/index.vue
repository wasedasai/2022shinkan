<script>
export default {
  head: {
    title: '早稲田祭とは',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '早稲田祭の歴史、規模、当日の様子が掲載されています',
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '新歓、早稲田祭運営スタッフ、運スタ、早稲田、早稲田大学、早稲田祭',
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:title', property: 'og:title', content: '早稲田祭とは' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '早稲田祭の歴史、規模、当日の様子が掲載されています',
      },
      { hid: 'og:url', property: 'og:url', content: 'wasedasaitoha' },
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
        content: '早稲田祭運営スタッフ2022新歓 早稲田祭とは',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: '早稲田祭の歴史、規模、当日の様子が掲載されています',
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
    <div class="hero-wrapper">
      <OrganismsHero>早稲田祭とは</OrganismsHero>
    </div>
    <section class="history-section">
      <div class="section-inner">
        <h1>早稲田祭の歴史</h1>
        <div class="box">
          <div class="item">
            <div>1953年</div>
            <div>第1回統一早稲田祭</div>
          </div>
          <div class="item">
            <div>1955年</div>
            <div>早稲田祭委員会設置</div>
          </div>
          <div class="item">
            <div>2000年</div>
            <div>早稲田祭したくスタッフ結成</div>
          </div>
          <div class="item">
            <div><strong>2002年</strong></div>
            <div><strong>早稲田祭運営スタッフ結成</strong></div>
          </div>
          <div class="item">
            <div>2019年</div>
            <div>わせだサイくん誕生</div>
          </div>
          <div class="item">
            <div>2020年</div>
            <div>初のオンライン開催</div>
          </div>
          <div class="item">
            <div>2021年</div>
            <div>初のハイブリッド開催</div>
          </div>
        </div>
      </div>
    </section>
    <section class="data-section">
      <div class="section-inner">
        <div class="box">
          <div class="item">
            <h2>来場者数（例年）</h2>
            <p class="number">約20万人</p>
            <p>早稲田祭2020での総再生回数</p>
            <p>約35万回</p>
          </div>
          <div class="item">
            <h2>企画数</h2>
            <p>オフライン開催</p>
            <p class="number">約450企画</p>
            <p>オンライン開催</p>
            <p class="number">約300企画</p>
          </div>
          <div class="item">
            <h2>運営予算規模</h2>
            <p>オフライン開催</p>
            <p class="number">約3800万円</p>
            <p>オンライン開催</p>
            <p class="number">約2000万円</p>
          </div>
        </div>
      </div>
    </section>
    <section class="photos-section">
      <div class="wrapper">
        <h1 class="section-title">フォトギャラリー</h1>
        <div class="container">
          <div class="item item1">
            <img src="~assets/images/photos/photo1.jpg" />
          </div>
          <div class="item item2">
            <img src="~assets/images/photos/photo4.jpg" />
          </div>
          <div class="item item3">
            <img src="~assets/images/photos/photo2.jpg" />
          </div>
          <div class="item item4">
            <img src="~assets/images/photos/photo8.jpg" />
          </div>
          <div class="item item5 pc_only">
            <img src="~assets/images/photos/photo3.jpg" />
          </div>
          <div class="item item6">
            <img src="~assets/images/photos/photo6.jpg" />
          </div>
          <div class="item item7">
            <img src="~assets/images/photos/photo7.jpg" />
          </div>
          <div class="item"><img src="~assets/images/photos/photo5.jpg" /></div>
          <div class="item"><img src="~assets/images/photos/photo9.jpg" /></div>
          <div class="item">
            <img src="~assets/images/photos/photo10.jpg" />
          </div>
          <div class="item">
            <img src="~assets/images/photos/photo11.jpg" />
          </div>
          <div class="item">
            <img src="~assets/images/photos/photo12.jpg" />
          </div>
          <div class="item">
            <img src="~assets/images/photos/photo13.jpg" />
          </div>
          <div class="item">
            <img src="~assets/images/photos/photo14.jpg" />
          </div>
          <div class="item item15">
            <img src="~assets/images/photos/photo15.jpg" />
          </div>
          <div class="item">
            <img src="~assets/images/photos/photo16.jpg" />
          </div>
        </div>
      </div>
    </section>
    <section class="flowers-section">
      <div class="section-inner">
        <div class="flowers_box1"></div>
        <div class="flowers_box2"></div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.photos-section .container {
  padding-top: 1rem;
  display: grid;
  gap: 4px;
  grid-template-columns: 1.5fr 1fr 1.5fr 2fr 1fr 1.5fr;
  grid-template-rows: 200px 160px 120px 180px;
}
.item1 {
  grid-row: 1/3;
  grid-column: 1/3;
}
.item2 {
  grid-row: 1/2;
  grid-column: 3/5;
}
.item3 {
  grid-row: 2/4;
  grid-column: 3/5;
}
.item7 {
  grid-row: 4/5;
  grid-column: 2/4;
}
@media screen and (max-width: 720px) {
  .photos-section .container {
    grid-template-columns: 1.5fr 1fr 1.5fr;
  }
  .item1,
  .item2,
  .item3,
  .item7 {
    grid-row: auto;
    grid-column: auto;
  }
}

.photos-section .container .item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.wrapper {
  padding: 80px 0;
}

.hero-wrapper {
  padding-top: 80px;
  background-color: #dde6cb;
}

.section-inner {
  max-width: 1024px;
  padding: 80px 1rem;
  margin: auto;
}

.history-section .item {
  display: flex;
  padding: 0.5rem 0;
  gap: 1rem;
}

.data-section {
  background: #dde6cb;
}

.data-section .box {
  display: flex;
  justify-content: space-around;
  gap: 2rem;
}

@media screen and (min-width: 1200px) {
  .data-section {
    position: relative;
  }

  .data-section::before {
    content: '';
    width: 80px;
    height: 80px;
    position: absolute;
    top: 40px;
    left: 40px;
    background-image: url('~assets/images/flowers/pink_green_orange.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .data-section::after {
    content: '';
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: 40px;
    right: 40px;
    background-image: url('~assets/images/flowers/green_cha_orange.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}

.data-section .box .item {
  background: #4f9236;
  width: 100%;
  border-radius: 12px;
  color: white;
  text-align: center;
  padding: 1rem;
}

.data-section .box .item h2 {
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: normal;
}

.data-section .box .item .number {
  font-size: 24px;
  font-weight: 600;
}

@media screen and (max-width: 720px) {
  .data-section .box {
    display: flex;
    flex-direction: column;
  }
}

.photos-section .section-title {
  text-align: center;
}

.flowers-section .section-inner {
  display: none;
}

@media screen and (min-width: 1200px) {
  .flowers-section .section-inner {
    display: flex;
  }
  .flowers-section .flowers_box1,
  .flowers_box2 {
    position: relative;
    width: 100%;
  }

  .flowers-section .flowers_box1::before {
    content: '';
    width: 120px;
    height: 120px;
    position: absolute;
    top: -80px;
    left: 0;
    background-image: url('~assets/images/flowers/pink_green_orange.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .flowers-section .flowers_box1::after {
    content: '';
    width: 100px;
    height: 100px;
    position: absolute;
    top: -40px;
    right: 10%;
    background-image: url('~assets/images/flowers/green_cha_orange.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .flowers-section .flowers_box2::before {
    content: '';
    width: 120px;
    height: 120px;
    position: absolute;
    top: -80px;
    left: 0;
    background-image: url('~assets/images/flowers/pink_green_orange.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .flowers-section .flowers_box2::after {
    content: '';
    width: 100px;
    height: 100px;
    position: absolute;
    top: -40px;
    right: 10%;
    background-image: url('~assets/images/flowers/orange_green_red.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
