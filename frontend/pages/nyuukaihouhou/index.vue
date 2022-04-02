<script>
export default {
  head: {
    title: '入会方法',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '早稲田祭2022運営スタッフへの入会方法はこちらから',
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '新歓、入会、入会方法、早稲田祭運営スタッフ、運スタ、早稲田、早稲田大学、早稲田祭',
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:title', property: 'og:title', content: '入会方法' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '早稲田祭2022運営スタッフへの入会方法はこちらから',
      },
      { hid: 'og:url', property: 'og:url', content: 'nyuukaihouhou' },
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
        content: '早稲田祭運営スタッフ2022新歓 入会方法',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: '早稲田祭2022運営スタッフへの入会方法はこちらから',
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
      <OrganismsHero>入会方法</OrganismsHero>
    </div>

    <section>
      <div class="section-inner">
        入会受付期間中に、<strong>入会申し込みフォーム</strong>を提出してください。<br />
        定員を上回った場合、提出いただいたフォームをもとに、運営スタッフによる選考を行います。<br />
        結果は、入会の可否にかかわらずメールにて全員にご連絡いたします。
      </div>
      <div class="contents">
        <ul>
          <li>
            <AtomsPartTitle>フォーム受付期間</AtomsPartTitle>
            4月18日(月) 12:00〜4月21日(木) 23:59
          </li>
          <li class="list">
            <AtomsPartTitle>結果通知メール</AtomsPartTitle>
            〜4月27日(水) 12:00
          </li>
          <li class="list">
            <AtomsPartTitle>入会申し込みフォームの記入事項</AtomsPartTitle>
            ・個人プロフィール<br />
            ・志望理由（300字〜500字）<br />
            ・自己アピール文（300字〜500字）<br />
            ・その他情報
          </li>
        </ul>
      </div>
      <div class="section-inner">
        入会に関する詳細な情報は、<a
          href="https://drive.google.com/file/d/1LNdDspz03iqG-OLnokmauKe1RrlMGvsW/view"
          >こちらの募集要項</a
        >からご確認ください
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
  padding: 70px 1rem;
  margin: auto;
  text-align: center;
}

.contents {
  display: flex;
  justify-content: center;
}

.list {
  padding-top: 5%;
}
</style>
