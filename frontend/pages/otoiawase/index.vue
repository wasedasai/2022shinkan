<script>
export default {
  head: {
    title: 'お問い合わせ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          '早稲田祭2022運営スタッフや新歓企画などについて、何かご質問がございましたらこちらまで',
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '新歓、お問い合わせ、早稲田祭運営スタッフ、運スタ、早稲田、早稲田大学、早稲田祭',
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:title', property: 'og:title', content: 'お問い合わせ' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '早稲田祭2022運営スタッフや新歓企画などについて、何かご質問がございましたらこちらまで',
      },
      { hid: 'og:url', property: 'og:url', content: 'otoiawase' },
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
        content: '早稲田祭運営スタッフ2022新歓 お問い合わせ',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          '早稲田祭2022運営スタッフや新歓企画などについて、何かご質問がございましたらこちらまで',
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
      <OrganismsHero>お問い合わせ</OrganismsHero>
    </div>

    <section>
      <div class="section-inner">
        早稲田祭2022運営スタッフや新歓企画などについて、何かご質問がございましたら<br />
        shinkan@wasedasai.net<br />
        までお気軽にお問い合わせください。
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
  text-align: center;
}
</style>
