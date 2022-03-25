<script>
export default {
  head: {
    title: '局紹介',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          '早稲田祭2022運営スタッフには、全部で8つの局があります。各局の紹介はこちら',
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '新歓、局紹介、、早稲田祭運営スタッフ、運スタ、早稲田、早稲田大学、早稲田祭',
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:title', property: 'og:title', content: '局紹介' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '早稲田祭2022運営スタッフには、全部で8つの局があります。各局の紹介はこちら',
      },
      { hid: 'og:url', property: 'og:url', content: 'kakkyokusyokai' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://wasedasai.github.io/2022shinkan/images/tree_logo.png',
      },
      // Twitter
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: '早稲田祭運営スタッフ2022新歓 局紹介',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          '早稲田祭2022運営スタッフには、全部で8つの局があります。各局の紹介はこちら',
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
    <div class="hero-wrapper">
      <OrganismsHero>各局紹介</OrganismsHero>
    </div>

    <section class="departs-section">
      <div class="section-inner">
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

.departs-section {
  text-align: center;
  background: white;
}

.departs-section .section-title {
  text-align: center;
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
</style>
