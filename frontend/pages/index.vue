<template>
  <main>
    <section class="slide-wrapper">
      <OrganismsSlide />
    </section>

    <section class="important-news-section">
      <div class="bar-wrapper">
        <div class="bar">NEWS 2022/03/25 新歓公式サイトを公開しました。</div>
      </div>
    </section>

    <section class="about-section">
      <div class="section-inner">
        <div class="box">
          <div class="content">
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
          <div class="content">
            <div>
              <h1>運営スタッフとは</h1>
              <div class="sp_only">
                <img src="~assets/images/demo_images/sample2.jpg" alt="画像" />
              </div>
              <div class="para">
                <!-- TODO: 文字 -->
                <p>
                  約600人の学生が、8個の局に分かれて早稲田祭の成功に向けて尽力します。
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
        </div>
      </div>
    </section>

    <section class="news-section">
      <div class="section-inner">
        <h1 class="section-title">NEWS</h1>
        <div class="box">
          <div class="item">
            <div class="time">2022/03/25</div>
            <div>新歓公式サイトを公開しました。</div>
          </div>
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
  padding: 40px 1rem;
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

@media screen and (max-width: 720px) {
  .entrance-section .button-wrapper {
    flex-direction: column;
    align-items: center;
  }
  .entrance-section .button-wrapper .button {
    width: 100%;
  }
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
  display: flex;
  padding: 0.5rem 0;
}

.news-section .box .item .time {
  padding-right: 1rem;
}
</style>
