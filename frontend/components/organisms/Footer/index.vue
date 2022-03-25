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
          <hr />
          <ul class="nav-list">
            <li><NuxtLink :to="'/wasedasaitoha'">早稲田祭とは</NuxtLink></li>
          </ul>
          <hr />
          <ul class="nav-list">
            <li><NuxtLink :to="'/uneistafftoha'">運スタとは</NuxtLink></li>
            <li>
              <NuxtLink :to="'/zentaizowotukamou'"
                >運スタの全体像をつかもう</NuxtLink
              >
            </li>
            <li>
              <NuxtLink :to="'/kakkyokusyokai'">各局紹介</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/staffinterview'">スタッフインタビュー</NuxtLink>
            </li>
          </ul>
          <hr />
          <ul class="nav-list">
            <li><NuxtLink :to="'/nyuukaihouhou'">入会方法</NuxtLink></li>
            <li><NuxtLink :to="'/eventichiran'">新歓イベント情報</NuxtLink></li>
            <li><NuxtLink :to="'/yokuarushitumon'">よくある質問</NuxtLink></li>
            <li><NuxtLink :to="'/otoiawase'">お問い合わせ</NuxtLink></li>
          </ul>
        </div>
      </div>
      <div class="footer-sns-title">
        <h2 class="title">公式SNSリンク</h2>
      </div>
      <div class="sns-links-container">
        <a
          href="https://twitter.com/wasedasai_new"
          target="_blank"
          rel="noopener noreferrer"
          ><img
            class="sns-link"
            src="~assets/images/twitter.png"
            alt="twitterのリンク"
        /></a>
        <a
          href="https://instagram.com/wasedasai_new/"
          target="_blank"
          rel="noopener noreferrer"
          ><img
            class="sns-link"
            src="~assets/images/instagram.png"
            alt="instagramのリンク"
        /></a>
        <a
          href="https://youtube.com/channel/UCwyXxBLHp1ku0arseLoIaGA"
          target="_blank"
          rel="noopener noreferrer"
          ><img
            class="sns-link"
            src="~assets/images/youtube.png"
            alt="youtubeのリンク"
        /></a>
        <a
          href="https://lin.ee/WgDcNIW"
          target="_blank"
          rel="noopener noreferrer"
          ><img
            class="sns-link"
            src="~assets/images/line.png"
            alt="noteのリンク"
        /></a>
      </div>
      <div class="text">
        <img src="~assets/images/footer_white.png" class="etunenlogo" />
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  background-color: #dde6cb;
  color: #fff;
  padding: 3rem 1rem;
  position: relative;
}

.footer-inner {
  max-width: 1200px;
  margin: auto;
}

.footer-body {
  display: flex;
  justify-content: center;
}

.footer-logo-container {
  max-width: 240px;
}

.footer-navi-list {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
}

hr {
  display: none;
}

.nav-list {
  width: 100%;
}

.nav-list li a {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0.5rem 1rem;
  color: #4c2219;
  text-decoration: none;
}

.nav-list li a:hover {
  color: #804b40;
}

.footer-sns-title {
  text-align: center;
  color: #4c2219;
  padding-top: 1rem;
}

.sns-links-container {
  display: flex;
  justify-content: center;
  gap: 4rem;
  padding-top: 1rem;
  flex-wrap: wrap;
}

.sns-links-container .sns-link {
  width: 48px;
  filter: drop-shadow(4px 4px 2px rgb(0 0 0 / 0.4));
  transition-duration: 0.4s;
}
.sns-links-container .sns-link:hover {
  filter: drop-shadow(8px 8px 4px rgb(0 0 0 / 0.4));
}
.text {
  display: flex;
  justify-content: center;
}
.etunenlogo {
  width: 36%;
  object-fit: cover;
}

@media screen and (max-width: 720px) {
  .footer-logo-container {
    display: none;
  }

  .footer-navi-list {
    max-width: 420px;
    flex-direction: column;
  }

  .nav-list {
    display: flex;
    flex-wrap: wrap;
  }

  .sns-links-container {
    gap: 2rem;
  }

  hr {
    display: block;
    height: 1px;
    background-color: #804b40;
    border: none;
    margin: 0;
  }
  .etunenlogo {
    width: 90%;
    padding-top: 6%;
    object-fit: cover;
  }
}
</style>
