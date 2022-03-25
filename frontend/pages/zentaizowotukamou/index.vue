<script>
export default {
  head: {
    title: '運営スタッフの全体像つかもう',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '運営スタッフのさまざまな情報が掲載されています',
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '新歓、早稲田祭運営スタッフ、運スタ、早稲田、早稲田大学、早稲田祭',
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '運営スタッフの全体像をつかもう',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '運営スタッフのさまざまな情報が掲載されています',
      },
      { hid: 'og:url', property: 'og:url', content: 'wasemeshi' },
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
    <div class="hero-wrapper">
      <OrganismsHero>運スタの全体像をつかもう</OrganismsHero>
    </div>

    <section>
      <div class="section-inner">
        <img src="~assets/images/zentaizo_page/soshikizu.jpg" alt="組織図" />
      </div>
      <div>
        <ul class="container">
          <li>
            01.性別
            <img
              src="~assets/images/zentaizo_page/seibetu.jpg"
              class="image1"
              alt="性別"
            />
          </li>
          <li>
            02.学部
            <img
              src="~assets/images/zentaizo_page/gakubu.jpg"
              class="image1"
              alt="学部"
            />
          </li>
          <li>
            03.第二外国語
            <img
              src="~assets/images/zentaizo_page/nigai.jpg"
              class="image1"
              alt="二外"
            />
          </li>
          <li>
            04.GPA
            <img
              src="assets/images/zentaizo_page/gpa.jpg"
              class="image1"
              alt="gpa"
            />
          </li>
          <li>
            05.受験方式
            <img
              src="~assets/images/zentaizo_page/jyukenhoho.jpg"
              class="image1"
              alt="受験方法"
            />
          </li>
          <li>
            06.出身地
            <img
              src="~assets/images/zentaizo_page/syussin.jpg"
              class="image1"
              alt="出身地"
            />
          </li>
          <li>
            07.居住形態
            <img
              src="~assets/images/zentaizo_page/kyojyukeitai.jpg"
              class="image1"
              alt="居住形態"
            />
          </li>
          <li>
            08.バイトをしていますか？
            <img
              src="~assets/images/zentaizo_page/baito.jpg"
              class="image1"
              alt="バイトの有無"
            />
          </li>
          <li>
            09.バイトの種類
            <img
              src="~assets/images/zentaizo_page/baito_type.jpg"
              class="image1"
              alt="バイトの種類"
            />
          </li>
          <li>
            10.バイトの月収
            <img
              src="~assets/images/zentaizo_page/baito_gessyu.jpg"
              class="image1"
              alt="バイトの月収"
            />
          </li>
          <li>
            11.兼サ―していますか？
            <img
              src="~assets/images/zentaizo_page/kensa.jpg"
              class="image1"
              alt="兼サー"
            />
          </li>
          <li>
            12.兼サーの種類
            <img
              src="~assets/images/zentaizo_page/kensa_type.jpg"
              class="image1"
              alt="兼サ―種類"
            />
          </li>
          <li>
            13.タスクは忙しいですか？
            <img
              src="~assets/images/zentaizo_page/tasuku.jpg"
              class="image1"
              alt="タスク"
            />
          </li>
          <li>
            14.運スタに入った理由
            <img
              src="~assets/images/zentaizo_page/reason.jpg"
              class="image1"
              alt="入会理由"
            />
          </li>
          <li>
            15.運スタに満足してますか？
            <img
              src="~assets/images/zentaizo_page/manzokudo.jpg"
              class="image1"
              alt="満足度"
            />
          </li>
          <li>
            16.何年生の時に運スタに入りましたか？
            <img
              src="~assets/images/zentaizo_page/nyukaijiki.jpg"
              class="image1"
              alt="入会時期"
            />
          </li>
          <li>
            17.22であなたは何年目？
            <img
              src="~assets/images/zentaizo_page/nannenme.jpg"
              class="image1"
              alt="何年目"
            />
          </li>
          <li>
            18.恋人はいますか？
            <img
              src="~assets/images/zentaizo_page/renai.jpg"
              class="image1"
              alt="恋人の有無"
            />
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero-wrapper {
  padding-top: 80px;
  background-color: #dde6cb;
}

.section-inner {
  max-width: 1024px;
  padding: 80px 1rem;
  margin: auto;
}

.conteiner {
  list-style: none;
  display: flex;
  justify-content: space-around;
}

.conteiner li {
  color: #4c2219;
}

.image1 {
  width: 40%;
  object-fit: cover;
}
</style>
