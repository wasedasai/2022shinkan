<template>
  <main>
    <div class="foto-wrapper">
      <img src="~assets/images/kyokusyokai/kikaku_top.jpg" class="foto" />
    </div>
    <div class="title_all">
      <h2 class="title1">局紹介</h2>
      <h2 class="title2">企画局</h2>
    </div>
    <div class="contents">
      <div class="description">
        <div>
          <p>「祭を彩る華となれ」</p>
          <p>
            「祭の節目を彩る企画」の演出を考え、運営する局です！
            私たちの担う企画はどれも高い知名度と集客率を誇り、局員はそれぞれが携わる企画への自信と愛を持って活動しています。
            自らの手で1から創りあげたステージを見て盛り上がる来場者や参加団体の方々を間近で見る経験は、あなたにとってかけがえのないものになるはず！
            祭を彩る華となれ！企画局で待ってます！
          </p>
        </div>
        <ul class="teams">
          <li>
            <AtomsPartTitle>プレイベントチーム</AtomsPartTitle>
            <p>
              早稲田祭の直前週に実施する「Countdown
              Event」と早稲田祭2日目の朝に実施する「中間決起」という2つの企画の立案・運営を行っているチームです！Countdown
              Eventは、祭当日へのカウントダウンを行うことで「祭の訪れ」を感じてもらう企画です。早稲田祭へ向けて高揚感・活力が一気に高まります！中間決起は、眠気も疲労も吹き飛ぶような企画で「祭2日目の始まり」を宣言します！あなたの思い描くアイデアがみんなの力でかたちになる瞬間に、鳥肌ものの感動と達成感を味わえること間違いなし！プレイベントチームで共に楽しみ、共に企画を創りませんか？
            </p>
          </li>
          <li>
            <AtomsPartTitle>前夜祭チーム</AtomsPartTitle>
            <p>
              早稲田祭前日の夕方から夜にかけて行われる「前夜祭」企画の立案・運営を行います。前夜祭企画は、企画時間が長くストーリー性があることが特徴です。チームの活動は、前夜祭企画の演出を考えること、出演団体の対応、当日の警備、動線を考えることなどがあります。チーム全体で話し合って行う活動が多く、仲が深まります！
            </p>
          </li>
          <li>
            <AtomsPartTitle>パレードチーム</AtomsPartTitle>
            <p>
              Start Fes.・ Parade・ Goal Fes.
              からなる「パレード企画」の運営・演出を行います！新型コロナウイルスの影響で2年連続パレード企画を実施することは叶いませんでしたが、パレード企画は戸山キャンパス、大学構外、早稲田キャンパスを繋げる花形企画であり、早稲田祭1日目の閉幕企画として祭を彩ることができる点でやりがいを感じることができます！またチーム員の仲が非常に良く、アットホームな雰囲気があふれているのもチームの魅力です！
            </p>
          </li>
          <li>
            <AtomsPartTitle>OFEFチーム</AtomsPartTitle>
            <p>
              早稲田祭の開幕を彩るOpening Festival
              （通称・OF）及び閉幕を告げるEnding Festival
              （通称・EF）。これら2つの企画・演出を行います。出演団体さんと打ち合わせを重ね、最高のものにすることが、私たちOFEFチームの主な仕事です！OFとEFは、早大生を含む来場者に向けてその年の早稲田祭のテーマや早稲田文化を表現することを目的としています。まさに、OFEFなくして早稲田祭なし！
              です。
            </p>
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
    background-image: url('~assets/images/kyokusyokai/kikaku_top.jpg');
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
