<template>
  <main>
    <div class="foto-wrapper">
      <img src="~assets/images/kyokusyokai/kaihatu_top.jpeg" class="foto" />
    </div>
    <div class="title_all">
      <h2 class="title1">局紹介</h2>
      <h2 class="title2">開発局</h2>
    </div>
    <div class="contents">
      <div class="description">
        <div>
          「創るなら開発局、変えるなら開発局」<br />
          早稲田祭の現状を分析し、斬新な発想や、今までにない企画や取り組みを通して、早稲田祭をさらに発展させていきます。早稲田祭においてできることを増やし、局が掲げる理想の早稲田祭の実現に向け活動しています。<br />
          開発局の活動は自由度が高く、1人あたりの裁量が大きいのが特徴です。その分たくさん考え、早稲田祭について学ばなくてはなりません。しかし、そうして自分が考え抜いて立案した企画や取り組みが華開いたときの達成感や感動は開発局でしか味わえないものです。今年度は早稲田祭の時間や空間のさらなる活用、早稲田祭が抱える課題の解決を通してさまざまな新領域にアプローチします。私たち開発局は本気で考え、本気で取り組み、何より本気で楽しんで活動しています。「本気になりたい」あなたを待っています！
          局員の雰囲気も、チーム同様に多種多様！局員の人数は運営スタッフの中で3番目に多い局ですが、優しく話しやすい人ばかりです！
        </div>
        <ul class="teams">
          <li>
            <AtomsPartTitle>主体開発チーム</AtomsPartTitle><br />
            「祭にさらなる彩りを。」をテーマに、多様な「ひと」を早稲田祭にお招きする活動を行っています。チームの最大の魅力は、サークル、留学生、体育会、周辺地域の方々、OBOG、YouTuberなど、早稲田が誇る多様な「ひと」たちと関わることです。「ひと」にフォーカスした企画を0から立案して、当日企画などを運営しています。新たな「ひと」を早稲田祭に招くことで、早稲田の誇る「多様性」を表現していきます！
          </li>
          <li>
            <AtomsPartTitle>時間・空間開発チーム</AtomsPartTitle><br />
            その名の通り、早稲田祭における未開拓の時間・空間にスポットを当て、それらを活用した企画を立案・実行するチームです。事前に行うフィールドワークなどをもとに0から企画を構想し、来場者をはじめとする、早稲田祭に関わるすべての主体が感動できる企画の実現を目標として活動しています。未開拓の時間・空間を魅力あるものにするって、めちゃめちゃ素敵じゃないですか？私たちと一緒により良い祭を創りましょう！
          </li>
          <li>
            <AtomsPartTitle>実践チーム</AtomsPartTitle><br />
            早稲田大学のアカデミックな一面を早稲田祭で最大限に「魅せる」ための活動を行っています！早稲田大学に所属する教授や「学術」に関係するサークルを早稲田祭にお招きして、講演や子ども向けの実験教室を開催したり、早稲田祭における混雑緩和を目的とした企画など、早稲田大学で行われている研究を実際に活用する取り組みを行ったりと、幅広い活動をしています！「学術」と聞くと難しく感じるかもしれませんが、0から企画を構想し、早稲田のアカデミックな一面をたくさんの来場者に「魅せる」ために活動できるのは、実践チームならでは！実践チームだからできる企画を一緒に創りあげてみませんか？
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
