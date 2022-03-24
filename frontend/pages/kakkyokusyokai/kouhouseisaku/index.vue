<template>
  <main>
    <div class="foto-wrapper">
      <img src="~assets/images/kyokusyokai/pac_top.jpeg" class="foto" />
    </div>
    <div class="title_all">
      <h2 class="title1">局紹介</h2>
      <h2 class="title2">広報制作局</h2>
    </div>
    <div class="contents">
      <div class="description">
        <div>
          「祭を魅せるプロフェッショナル。」<br />
          広報制作局は、早稲田祭を「魅せる」局です。<br />
          「魅せる」とは、人の心を動かすこと。私たちは「早稲田祭の魅力を引き出す表現」と「効果的な情報発信」を追求して、早稲田祭をより多くの人の心に届けるために活動しています！<br />
          広報制作局の魅力は、なんといってもアイデアを自らの手で一から実現できることです。<br />
          公式サイト、動画、デザイン、装飾物、広報企画、SNS投稿など、アプローチ方法はさまざまです。仲間と手がけた企画や文章、制作物が世に出て、人に届くときのえも言われぬ感覚は、ここにしかありません。<br />
          春に新しい仲間を迎えると、広報制作局は約140人の大所帯になります。広報制作局には本当にいろいろな人がいます。生涯の友人にだって出会えるかもしれません。<br />
          個性豊かな仲間と共に、あなたのその手で祭を魅せませんか。<br />
          広報制作局でお待ちしています！
        </div>
        <ul class="teams">
          <li>
            <AtomsPartTitle>Webチーム</AtomsPartTitle><br />
            1番大きな仕事は、やはり早稲田祭公式サイトの制作です。非常に多くの人の目に触れる公式サイトは、まさに早稲田祭の「顔」と言えます。大変なこともありますが、プログラミング初心者も多いため学習も制作も楽しく活動しているチームです！試行錯誤しながら自分たちでつくり上げたページを無事に公開できたときは、とても大きなやりがいを感じます！
          </li>
          <li>
            <AtomsPartTitle>広報企画チーム</AtomsPartTitle><br />
            早大生をはじめとした「早稲田祭と密接に関わっている主体」に向けて、早稲田祭に対してより興味関心を抱いてもらえるような広報企画を実施しています。早稲田祭のことは知っているけど、興味がなかった層を引き込めるような広報を目指し、「ワセメシコラボ」や「公式テーマソング」などの企画を手がけています。
          </li>
          <li>
            <AtomsPartTitle>装飾チーム</AtomsPartTitle><br />
            「今年も早稲田祭の季節がやってきた！」と感じてもらえるよう、キャンパスや早稲田周辺地域を彩ることで早稲田祭らしい雰囲気の創出を行っています。具体的には、多くの文化祭と同じようにペンキを塗ったり、ものを組み立てたりすることによって装飾物をつくったりしています。夏休みから毎日活動があるのでとても大変ですが、チームみんなで作業をするのはすごく楽しいです！そして早稲田祭当日は、大変な分感動もとても大きいです。
          </li>
          <li>
            <AtomsPartTitle>デザインチーム</AtomsPartTitle><br />
            デザインの力で運スタの想いをかたちとして表現し、人々に届けることで祭を彩ります。早稲田祭におけるグラフィックデザインの全てに私たちデザインチームが関わっているといっても過言ではありません！早稲田祭のロゴやポスター、SNSに流れる画像など、たくさんの人の目に触れる制作物をつくっています。私たちと共に、デザインを通して早稲田祭のイメージを演出しませんか？
          </li>
          <li>
            <AtomsPartTitle>動画チーム</AtomsPartTitle><br />
            早稲田祭に関する映像制作を専門に活動するチームです。YouTuberも使用するAdobeのAfter
            EffectsやPremiere
            Proを用いて動画をつくります。つくった動画は、TwitterやInstagram、YouTubeなどの早稲田祭公式SNSを通じて世界中の人々に発信されます！祭当日にはステージに設置された大きなスクリーンに自分のつくった動画が映ることも！
          </li>
          <li>
            <AtomsPartTitle>メディア広報チーム</AtomsPartTitle><br />
            さまざまなSNS媒体を用いて早稲田祭の広報を行うチームです。他の局やチームから依頼を受けて早稲田祭公式SNSに投稿をしたり、自分たちでどうすれば人を惹きつけられる広報ができるかを考えて企画を立案したりしています！早稲田祭公式SNSを扱うため大きな責任が伴う半面、活動はとてもやりがいがあります！
          </li>
        </ul>
      </div>
    </div>
    <div class="kyokusyoukai">
      <h2>各局紹介</h2>
      <OrganismsKyokuLinkList />
    </div>
  </main>
</template>

<style scoped>
.kyokusyoukai {
  padding: 0 0 40px;
}

.kyokusyoukai h2 {
  text-align: center;
}

main {
  overflow: hidden;
}

@media screen and (min-width: 1024px) {
  .foto {
    width: 80%;
    border-radius: 50%;
    margin-left: 40%;
    object-fit: cover;
  }
  .title_all {
    margin-top: -17%;
    padding-left: 10%;
  }
  .title1 {
    font-size: 40px;
    padding: 0;
    color: #4c2219;
  }
  .title2 {
    font-size: 48px;
    padding: 0;
    color: #4c2219;
    border-bottom-width: thick;
    border-bottom-style: ridge;
  }
  .contents {
    color: #4c2219;
    padding: 10% 10% 40px;
    width: 1200px;
  }
  .description {
    flex-direction: column;
  }
  .teams li {
    margin-top: 50px;
    text-decoration: none;
  }
}

@media screen and (max-width: 1023px) {
  main {
    padding-top: 80px;
  }
  .foto {
    display: none;
  }
  .title_all {
    background-image: url('~assets/images/kyokusyokai/kaijyoseibi_top.jpg');
    background-size: cover;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .title_all::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.6);
    top: 0;
    left: 0;
    z-index: 20;
  }
  .title1 {
    position: relative;
    color: #4c2219;
    z-index: 30;
    padding: 0;
  }
  .title2 {
    position: relative;
    color: #4c2219;
    border-bottom-width: none;
    z-index: 30;
    padding: 0;
  }
  .contents {
    color: #4c2219;
    padding: 40px 1rem;
  }
  .description {
    flex-direction: column;
  }
  .teams li {
    margin-top: 40px;
    text-decoration: none;
  }
}
</style>
