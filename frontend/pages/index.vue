<script>
export default {
  head: {
    title: '早稲田祭2022運営スタッフ 新歓公式サイト',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '早稲田祭運営スタッフ2022新歓サイトです',
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '新歓、早稲田祭運営スタッフ、運スタ、早稲田、早稲田大学、早稲田祭、2022',
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '早稲田祭運営スタッフ2022新歓',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '早稲田祭運営スタッフ2022新歓サイトです',
      },
      { hid: 'og:url', property: 'og:url', content: 'wasemeshi' },
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
        content: '早稲田祭運営スタッフ2022新歓',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: '早稲田祭運営スタッフ2022新歓サイトです',
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
    <section class="slide-wrapper">
      <OrganismsSlide />
    </section>

    <section class="important-news-section">
      <div class="bar-wrapper">
        <div class="bar">
          <strong>NEWS</strong> 2022/04/21
          入会フォームの受け付けは終了しました。
        </div>
      </div>
    </section>

    <section class="about-section">
      <div class="section-inner">
        <div class="box">
          <div class="content content1">
            <div>
              <h1>早稲田祭とは</h1>
              <div class="sp_only">
                <img src="~assets/images/demo_images/sample1.jpg" alt="画像" />
              </div>
              <div class="para">
                <p>
                  年に1度、早稲田キャンパス、戸山キャンパスとその周辺地域で行われる日本最大級の学園祭。
                </p>
                <p>早稲田文化を最もアツく感じることができる祭。</p>
                <p>それが、早稲田祭。</p>
              </div>
            </div>
            <div class="button-wrapper">
              <AtomsButton :url="'wasedasaitoha'">詳しく知る</AtomsButton>
            </div>
          </div>
          <div class="pc_only img_wrapper">
            <img src="~assets/images/demo_images/sample1.jpg" alt="画像" />
          </div>
        </div>

        <div class="box">
          <div class="pc_only">
            <img src="~assets/images/demo_images/sample2.jpg" alt="画像" />
          </div>
          <div class="content content2">
            <div>
              <h1>運営スタッフとは</h1>
              <div class="sp_only">
                <img src="~assets/images/demo_images/sample2.jpg" alt="画像" />
              </div>
              <div class="para">
                <p>年に1度の早大生たちの大舞台、早稲田祭。</p>
                <p>
                  祭の開催と成功のため、1年をかけてアツく楽しく準備を進めているのが、私たち「早稲田祭運営スタッフ」です！
                </p>
                <p>例年、約600人の早大生が在籍しています。</p>
                <p>
                  そんな「運スタ」にはどのような人たちがいるのか、実際どのような活動をしているのか、ここから詳しくご説明します。
                </p>
              </div>
            </div>
            <div class="button-wrapper">
              <AtomsButton :url="'uneistafftoha'">詳しく知る</AtomsButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="entrance-section">
      <div class="section-inner">
        <h1 class="section-title">入会を考えている君へ</h1>
        <div class="button-wrapper">
          <AtomsButton :url="'nyuukaihouhou'">入会方法</AtomsButton>
          <AtomsButton :url="'yokuarushitumon'">よくある質問</AtomsButton>
        </div>
        <div class="events_list">
          <h1>新歓イベント</h1>
          <div class="box">
            <div>
              <nuxt-link to="/eventichiran#welcome"
                ><img src="~assets/images/events_link/welcome.png" alt="画像"
              /></nuxt-link>
            </div>
            <div>
              <nuxt-link to="/eventichiran#setsumeikai"
                ><img
                  src="~assets/images/events_link/setsumeikai.png"
                  alt="画像"
              /></nuxt-link>
            </div>
            <div>
              <nuxt-link to="/eventichiran#shabereku"
                ><img src="~assets/images/events_link/shabereku.png" alt="画像"
              /></nuxt-link>
            </div>
            <div>
              <nuxt-link to="/eventichiran#kyokushindan"
                ><img src="~assets/images/events_link/shindan.png" alt="画像"
              /></nuxt-link>
            </div>
            <div>
              <nuxt-link to="/eventichiran#tour"
                ><img src="~assets/images/events_link/tour.png" alt="画像"
              /></nuxt-link>
            </div>
            <div>
              <nuxt-link to="/eventichiran#zeronenn"
                ><img src="~assets/images/events_link/zeronenn.png" alt="画像"
              /></nuxt-link>
            </div>
            <div>
              <nuxt-link to="/eventichiran#hokenshitsu"
                ><img
                  src="~assets/images/events_link/hokenshitsu.png"
                  alt="画像"
              /></nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="news-section">
      <div class="section-inner">
        <h1 class="section-title">NEWS</h1>
        <div class="box">
          <ul class="item">
            <li class="time">
              2022/04/21
              <div>入会フォームの受け付けは終了しました。</div>
            </li>
            <hr />
            <li class="time">
              2022/04/14
              <div class="news_content">
                <a
                  href="https://drive.google.com/file/d/1vmLtlrxyfA5sC4eMlBheTqNQgLBTz6vD/view?usp=sharing"
                >
                  PDF版フリーペーパー</a
                >をぜひご覧ください。
              </div>
            </li>
            <hr />
            <li class="time">
              2022/04/14
              <div class="news_content">
                「運スタの日常」予告編は<a href="https://youtu.be/JH5R2EG-F4M">
                  こちら</a
                >から！
              </div>
            </li>
            <hr />
            <li class="time">
              2022/04/09
              <div class="news_content">
                説明会動画の第2弾を公式<a href="https://youtu.be/qYKAqgpKSXg"
                  >YouTube</a
                >にて公開しました。
              </div>
            </li>
            <hr />
            <li class="time">
              2022/04/06
              <div class="news_content">
                説明会動画の第1弾を公式<a href="https://youtu.be/Z-2U9o9QBNc"
                  >YouTube</a
                >にて公開しました。
              </div>
            </li>
            <hr />
            <li class="time">
              2022/04/02
              <div>
                <a href="https://wasedasai.github.io/2022shinkan/nyuukaihouhou"
                  >入会方法</a
                >を公開しました。
              </div>
            </li>
            <hr />
            <li class="time">
              2022/03/25
              <div>新歓公式サイトを公開しました。</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.slide-wrapper {
  padding-top: 80px;
  background-color: #dde6cb;
}

.section-inner {
  max-width: 1200px;
  padding: 80px 1rem;
  margin: auto;
}

.important-news-section {
  padding: 24px 0;
  background: #dde6cb;
}

.important-news-section .bar {
  background: white;
  display: inline-block;
  padding: 0.5rem 1rem;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  filter: drop-shadow(4px 4px 2px rgb(0 0 0 / 0.4));
  color: #4c2219;
}

/* News */
.box ul {
  overflow-y: scroll;
  height: 185px;
  padding: 0;
}

.box ul::-webkit-scrollbar {
  background: #fff;
  width: 12px;
  cursor: pointer;
}

.box ul::-webkit-scrollbar-thumb {
  background: #804b40;
  border-radius: 3px;
}

@media screen and (min-width: 1200px) {
  .important-news-section .bar-wrapper {
    max-width: 1200px;
    margin: auto;
  }

  .important-news-section .bar {
    border-radius: 12px;
  }
}

@media screen and (max-width: 720px) {
  .important-news-section .bar-wrapper {
    padding: 0 1rem;
  }
  .important-news-section .bar {
    width: 100%;
    border-radius: 12px;
  }
}

.about-section {
  background: #dde6cb;
  overflow: hidden;
}

.about-section .box {
  max-width: 1024px;
  margin: auto;
  display: flex;
  align-items: center;
}

.about-section .box > div {
  width: 100%;
  padding: 2rem 2rem;
}

.about-section .box .button-wrapper {
  display: flex;
  justify-content: end;
}

.about-section .box img {
  border-radius: 12px;
}

.about-section .box .para {
  padding: 1rem 0;
}

.about-section .box .sp_only {
  display: none;
}

@media screen and (min-width: 1200px) {
  .about-section .content1,
  .about-section .content2 {
    position: relative;
  }

  .about-section .content1::before {
    content: '';
    width: 80px;
    height: 80px;
    position: absolute;
    top: -40px;
    left: -60px;
    background-image: url('~assets/images/flowers/pink_green_orange.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .about-section .content2::after {
    content: '';
    width: 80px;
    height: 80px;
    position: absolute;
    bottom: -60px;
    right: -60px;
    background-image: url('~assets/images/flowers/green_cha_orange.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}

@media screen and (max-width: 720px) {
  .about-section .box > div {
    padding: 1rem 0;
  }

  .about-section .box .pc_only {
    display: none;
  }

  .about-section .box .sp_only {
    display: block;
  }
}

.entrance-section .section-title {
  text-align: center;
}

.entrance-section .button-wrapper {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: auto;
  padding: 1rem;
}

.entrance-section .events_list {
  padding: 1rem 0;
}

.entrance-section .events_list .box {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.entrance-section .events_list .box > div {
  max-width: 240px;
  filter: drop-shadow(4px 4px 2px rgb(0 0 0 / 0.4));
  transition-duration: 0.4s;
  border-radius: 12px;
  overflow: hidden;
}

.entrance-section .events_list .box > div:hover {
  filter: drop-shadow(8px 8px 4px rgb(0 0 0 / 0.4));
}

@media screen and (max-width: 720px) {
  .entrance-section .button-wrapper {
    flex-direction: column;
    align-items: center;
  }
  .entrance-section .button-wrapper .button {
    width: 100%;
  }

  .entrance-section .events_list .box > div {
    max-width: 100%;
  }
}

.news-section .section-inner {
  padding-top: 0;
}

.news-section .section-title {
  text-align: center;
  padding-bottom: 1rem;
}

.news-section .box {
  max-width: 720px;
  padding: 1rem;
  margin: auto;
  background: #dde6cb;
  border-radius: 12px;
}

.news-section .box .item {
  padding: 0.5rem 0;
}

.news-section .box .item .time {
  padding-right: 1rem;
}

@media screen and (min-width: 1200px) {
  .news-section {
    position: relative;
  }

  .news-section::before {
    content: '';
    width: 80px;
    height: 80px;
    position: absolute;
    top: 0px;
    left: 60px;
    background-image: url('~assets/images/flowers/pink_green_orange.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .news-section::after {
    content: '';
    width: 80px;
    height: 80px;
    position: absolute;
    top: 20px;
    right: 80px;
    background-image: url('~assets/images/flowers/green_cha_orange.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .news-section .box::after {
    content: '';
    width: 80px;
    height: 80px;
    position: absolute;
    bottom: 20px;
    right: 160px;
    background-image: url('~assets/images/flowers/orange_green_red.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
