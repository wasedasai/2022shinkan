<template>
  <main>
    <div class="foto-wrapper">
      <img src="~assets/images/kyokusyokai/kaijyoseibi_top.jpg" class="foto">
    </div>
    <div class="title_all">
      <h2 class="title1">
        局紹介
      </h2>
      <h2 class="title2">
        会場整備局
      </h2>
    </div>
    <div class="contents">
      <div class="description">
        <div>
          「ここが祭の最前線」<br/>
           会場整備局は「ここが祭の最前線」というキャッチコピーが表すように、早稲田祭当日の会場で活躍することができる局です！<br/>
           局の特徴の1つとして、チームによって活動内容が大きく変わるということがあります。来場者案内・参加団体対応・制作活動・環境整備・警備活動・備品管理......多岐にわたって活動を行っています。<br/>
           また、各チームの人数は20人前後で構成されているため、たくさんの人と関わりを持つことができます。自分のチーム以外と活動することも多く、運営スタッフ内での交流を深められることも特徴です！<br/>
           局員の雰囲気も、チーム同様に多種多様！局員の人数は運営スタッフの中で3番目に多い局ですが、優しく話しやすい人ばかりです！
        </div>
        <ul class="teams">
          <li>
            <AtomsPartTitle>会場案内チーム</AtomsPartTitle><br/>
            主にインフォメーションの運営、設備や場所を伝えるための案内物の制作・設置、入退構管理を行います。来場者や参加団体・参加者が快適に早稲田祭を楽しめるよう、情報を提供するのが仕事です。専用のソフトを使った案内物の作成、インフォメーションの色塗り作業など、夏休みからほぼ毎日楽しく活動できます！
          </li>
          <li>
            <AtomsPartTitle>環境チーム</AtomsPartTitle><br/>
            環境チームは、早稲田祭のエコに関わる活動を主導しています。早稲田祭の特設ごみ箱である「エコステーション」の制作・運営や飲食屋台で用いるエコ容器の仲介販売、毎年大量にでるごみの処理など、環境チームの活動は多岐にわたります。例年多くの人が来場する早稲田祭の「きれい」を守るために欠かせないチームです！
          </li>
          <li>
            <AtomsPartTitle>動線管理チーム</AtomsPartTitle><br/>
            早稲田祭に関わる全ての人の動きやキャンパスに入る車両の動きを管理するチームです。早稲田祭当日に来場者の誘導・安全の管理を行う警備班、キャンパスを祭仕様に整えて早稲田祭の土台をつくる整備班、キャンパスへ入構する全ての車両を管理する車両班の3班に分かれています。活動するときは互いに尊敬しあい、楽しむときは全力で楽しむ、メリハリのあるチームです！
          </li>
          <li>
            <AtomsPartTitle>備品電力チーム</AtomsPartTitle><br/>
            早稲田祭全体の電力や、動線をつくるためのコーンなどの備品管理を行っており、早稲田祭のインフラにおいて重要な役割を担うチームです。地味な仕事かもしれませんが、早稲田祭の運営には必要不可欠であるためやりがいがあります。たくさんの人と関わることができるので交友関係も広がりやすいです！備品電力チームでみなさんのことをお待ちしています！！
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style scoped>
@media screen and (min-width: 1024px) {
  .foto{
    width: 80%;
    border-radius: 50%;
    margin-left: 40%;
    overflow: hidden;
    object-fit: cover;
  }
  .title_all{
    margin-top: -17%;
    padding-left: 10%;
  }
  .title1{
    font-size: 2.8rem;
    color: #4c2219;
  }
  .title2{
    font-size: 3rem;
    color: #4c2219;
    border-bottom-width: thick;
    border-bottom-style: ridge;
  }
  .contents{
    color: #4c2219;
    display: flex;
    justify-content:space-around;
    align-content: space-around;
    width: 1200px;
    }
  .description{
    flex-direction: column;
    margin: 10%;
    }
    .teams li{
      margin-top: 50px;
      text-decoration: none;
      }
}

@media screen and (max-width: 1023px) {
  .foto{
    display: none;
  }
  .foto-wrapper{
    padding-top: 80px;
    background-color: #fff;
    width: 100%;
  }
  .title_all{
    background-image: url('~assets/images/kyokusyokai/kaijyoseibi_top.jpg');
    background-size: cover;
    padding-top: 28%;
    position: relative;
    color:#fff;
  }
  .title_all::before{
    width: 100%;
    height: 155px;
    z-index: 0;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .title1{
    position: relative;
    font-size: 1.3rem;
    color: #4c2219;
  }
  .title2{
    position: absolute;
    padding-left: 5px;
    font-size: 1.5rem;
    color: #4c2219;
    border-bottom-width: thick;
    border-bottom-style: dotted;
    border-color: #4c2219;
  }
  .contents{
    color: #4c2219;
    display: flex;
    justify-content:space-around;
    align-content: space-around;
    margin-top: 10%;
    }
  .description{
    flex-direction: column;
    margin: 10%;
    }
    .teams li{
      margin-top: 50px;
      text-decoration: none;
      }
}
</style>
