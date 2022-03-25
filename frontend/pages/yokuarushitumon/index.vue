<script>
export default {
  head: {
    title: 'よくある質問',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'よくある質問はこちらからご覧いただけます',
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '新歓、質問、早稲田祭運営スタッフ、運スタ、早稲田、早稲田大学、早稲田祭',
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:title', property: 'og:title', content: 'よくある質問' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'よくある質問はこちらからご覧いただけます',
      },
      { hid: 'og:url', property: 'og:url', content: 'yokuarushitumon' },
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
        content: '早稲田祭運営スタッフ2022新歓 よくある質問',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'よくある質問はこちらからご覧いただけます',
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
      <OrganismsHero>よくある質問</OrganismsHero>
    </div>

    <section>
      <div class="section-inner">
        <OrganismsQA
          ><template #question
            >運スタに入会したいのですがどうしたらいいですか？</template
          >
          <template #answer
            ><p>
              入会方法は<nuxt-link :to="'/otoiawase'">こちら</nuxt-link
              >からご確認ください。
            </p></template
          ></OrganismsQA
        >

        <OrganismsQA
          ><template #question>新入生でなくても入れますか？</template>
          <template #answer
            ><p>入ることができます！</p>
            <p>
              毎年2年生から入会するスタッフもたくさんいます！入会した学年にかかわらずみんなで楽しく活動しています！
            </p></template
          ></OrganismsQA
        >

        <OrganismsQA
          ><template #question>例年何人程度が入会していますか？</template>
          <template #answer
            ><p>例年約270〜300人程が入会しています。</p></template
          ></OrganismsQA
        >

        <OrganismsQA
          ><template #question>他のサークルと兼任できますか？</template>
          <template #answer
            ><p>できます！</p>
            <p>
              運スタの中にはスポーツサークルやパフォーマンスサークルと掛け持ちしているスタッフもたくさんいます。早稲田祭に参加するサークルと掛け持ちしていても、当日運営スタッフの活動を抜けたい時間がある場合は、事前に申告していただければ考慮してシフトを組むことができます。
            </p></template
          ></OrganismsQA
        >

        <OrganismsQA
          ><template #question>アルバイトとの両立は可能ですか？</template>
          <template #answer
            ><p>可能です！</p>
            <p>
              多くのスタッフがアルバイトをしています。その種類は塾講師、飲食店、企業インターンなどさまざまです。
            </p></template
          ></OrganismsQA
        >

        <OrganismsQA
          ><template #question
            >留学に行きたいのですが、入会しても大丈夫ですか？</template
          >
          <template #answer
            ><p>大丈夫です！</p>
            <p>
              留学後、再び活動に参加することができます。また過去には留学中に活動しているスタッフもいました。国際教養学部をはじめとして、留学を予定しているスタッフは多く在籍しています。
            </p></template
          ></OrganismsQA
        >

        <OrganismsQA
          ><template #question>男女比はどれくらいですか？</template>
          <template #answer
            ><p>既存のスタッフの男女比は約4:6です。</p></template
          ></OrganismsQA
        >

        <OrganismsQA
          ><template #question>早稲田祭当日はどんな仕事をしますか？</template>
          <template #answer
            ><p>
              構内の警備から企画の運営、来場者の案内など、さまざまな仕事をしています。当日はキャンパス内から周辺地域にいたるまで、あらゆるところで活躍しています。
              <nuxt-link :to="'/wasedasaitoha'">詳しくはこちら</nuxt-link>
            </p></template
          ></OrganismsQA
        >

        <OrganismsQA
          ><template #question>活動日はいつですか？</template>
          <template #answer
            ><p>
              基本的に毎週月曜日と木曜日の18:30から活動しています。早稲田祭直前期には活動が増えることもあります。
            </p></template
          ></OrganismsQA
        >

        <OrganismsQA
          ><template #question
            >早稲田祭に行ったことがないのですが入会できますか？</template
          >
          <template #answer
            ><p>できます！</p>
            <p>
              早稲田祭に行ったことがない状態で入会したスタッフも多く、当日の様子を知らなくても既存スタッフから教わることができます。活動に支障をきたすことはないので安心してください！
            </p></template
          ></OrganismsQA
        >

        <OrganismsQA
          ><template #question>どの程度費用が掛かりますか？</template>
          <template #answer
            ><p>
              費用の内訳は主に運営費とはっぴの購入費です。
              参考程度になりますが、昨年度は運営費が13,000円、はっぴが6,500円でした。
            </p></template
          ></OrganismsQA
        >
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
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
