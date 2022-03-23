<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-body">
        <div class="footer-logo-container">
          <NuxtLink :to="'/'"
            ><img class="footer-logo" src="~assets/images/logo.png"
          /></NuxtLink>
        </div>
        <div class="footer-navi-list">
          <ul class="nav-list">
            <li><NuxtLink :to="'/'">HOME</NuxtLink></li>
          </ul>
          <ul class="nav-list">
            <li><NuxtLink :to="'/about'">早稲田祭とは</NuxtLink></li>
          </ul>
          <ul class="nav-list">
            <li><NuxtLink :to="'/staff'">運スタとは</NuxtLink></li>
            <li><NuxtLink :to="'/real'">運スタの全体像をつかもう</NuxtLink></li>
          </ul>
          <ul class="nav-list">
            <li><NuxtLink :to="'/entrance'">入会方法</NuxtLink></li>
            <li><NuxtLink :to="'/events'">新歓イベント情報</NuxtLink></li>
            <li><NuxtLink :to="'/question'">よくある質問</NuxtLink></li>
            <li><NuxtLink :to="'/contact'">お問い合わせ</NuxtLink></li>
          </ul>
        </div>
      </div>
      <div class="footer-sns-title">
        <Paragraph
          :align="'center'"
          class="title"
        >
          公式SNSリンク
        </Paragraph>
      </div>
      <div class="sns-links-container">
          <!-- TODO -->
          <a href="https://twitter.com/wasedasai_new" target="_blank" rel="noopener noreferrer"><img class="sns-link" src="~assets/images/twitter.png" alt="twitterのリンク"></a>
          <a href="https://instagram.com/wasedasai_new/" target="_blank" rel="noopener noreferrer"><img class="sns-link" src="~assets/images/instagram.png" alt="instagramのリンク"></a>
          <a href="https://youtube.com/channel/UCwyXxBLHp1ku0arseLoIaGA" target="_blank" rel="noopener noreferrer"><img class="sns-link" src="~assets/images/youtube.png" alt="youtubeのリンク"></a>
          <a href="https://lin.ee/WgDcNIW" target="_blank" rel="noopener noreferrer"><img class="sns-link" src="~assets/images/line.png" alt="noteのリンク"></a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 2rem;
  width: 100%;
  background-color: #dde6cb;
  color: #fff;
  padding: 2rem 0;
}

.footer-left {
 display: inline-block;
  height: 100%;
  width: 200%;
}

.footer-inner {
  max-width: 1440px;
  margin: auto;
}

.footer-body {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.footer-logo-container {
  max-width: 300px;
}

.nav-list {
  width: 100%;
  display: block;
  align-items: center;
  padding-top: 5rem;
  gap: 2rem;
  width: 70%;
}

.footer-navi-list{
  display: flex;
  width: 100%;
  height: 100%;
  padding: .5rem;
  gap: 5px;
}

.nav-list li a {
  display: flex;
  width: 70%;
  height: 100%;
  padding: .5rem;
  color: #804b40;
  text-decoration: none;
  font-size: 16px;
}

.sns-links-container {
  display: flex;
  justify-content: center;
  gap: 6rem;
  padding-top: 2rem;
}

.sns-links-container .sns-link {
  width: 50px;
}

.footer-sns-title {
display: flex;
justify-content: center;
align-items: center;
font-size: 24px;
color: #804b40
}
</style>