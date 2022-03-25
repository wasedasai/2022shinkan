<script>
export default {
  head: {
    title: '運営スタッフとは',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '早稲田祭運営スタッフ2022代表挨拶や各局紹介はこちら！',
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '新歓、早稲田祭運営スタッフ、運スタ、早稲田、早稲田大学、早稲田祭',
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:title', property: 'og:title', content: '運営スタッフとは' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '早稲田祭運営スタッフ2022代表挨拶や各局紹介はこちら！',
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
      <OrganismsHero>運営スタッフとは</OrganismsHero>
    </div>

    <section class="daihyo-section">
      <div class="section-inner">
        <div class="img-wrapper">
          <img src="~assets/images/daihyo.jpg" alt="画像" />
        </div>
        <div class="content">
          <p>はじめまして。</p>
          <p>早稲田祭2022運営スタッフ代表の高山都と申します。</p>
          <p>
            早大生は、自分がときめく「何か」を追い求めて、常にまだ見ぬ先へと進み続けています。
          </p>
          <p>
            そんな彼らの本気と情熱があふれんばかりに詰まった日本最大級の祭が、早稲田祭です。
          </p>
          <p>「春に出会う、秋に咲く」</p>
          <p>春に運営スタッフと出会ったみなさん。</p>
          <p>早稲田文化が一斉に花開くあの景色を夢見て。</p>
          <p>
            一歩ずつ進み続けたその先には、立派な運営スタッフの1人として秋の大舞台で花を咲かせる瞬間が待っています。
          </p>
          <p>
            えんじのはっぴを背負って、みなさんと共に活動できる日を楽しみにしています。
          </p>
          <p></p>
          <p>早稲田祭2022運営スタッフ 代表<br />高山都</p>
        </div>
      </div>
    </section>

    <section class="departs-section">
      <div class="section-inner">
        <h1 class="section-title">局紹介</h1>
        <p>早稲田祭2022運営スタッフには、全部で8つの局があります。</p>
        <p>みなさんが新規入会したら、必ずいずれかの局に所属します。</p>
        <div class="button-wrapper">
          <AtomsButton :url="'zentaizowotukamou'"
            >運スタの全体像をつかもう</AtomsButton
          >
        </div>
        <OrganismsKyokuLinkList />
      </div>
    </section>

    <section class="staff-section">
      <div class="section-inner">
        <h1>スタッフインタビュー</h1>
        <div class="staff_links">
          <OrganismsStaffLink :name="'A.T'" />
          <OrganismsStaffLink :name="'K.I'" />
          <OrganismsStaffLink :name="'K.M'" />
          <OrganismsStaffLink :name="'A.K'" />
        </div>
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

.daihyo-section .section-inner {
  display: flex;
  justify-content: start;
  gap: 1rem;
}

.daihyo-section .img-wrapper {
  max-width: 240px;
  margin: 0;
}

.daihyo-section .img-wrapper img {
  border-radius: 12px;
}

@media screen and (max-width: 750px) {
  .daihyo-section .section-inner {
    flex-direction: column;
  }

  .daihyo-section .img-wrapper {
    max-width: 100%;
    margin: 0;
  }
}

.departs-section {
  text-align: center;
  background: #dde6cb;
}

.departs-section .section-title {
  text-align: center;
}

.departs-section .box {
  max-width: 1200px;
  margin: auto;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.departs-section .button-wrapper {
  margin: auto;
  max-width: 320px;
  padding: 1rem;
}

@media screen and (max-width: 750px) {
  .departs-section .box {
    padding: 1rem 0;
  }
}

.staff-section .staff_links {
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

@media screen and (max-width: 750px) {
  .staff-section .staff_links {
    flex-wrap: wrap;
  }
}
</style>
