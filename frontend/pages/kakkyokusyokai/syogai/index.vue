<template>
  <main>
    <div class="foto-wrapper">
      <img src="~assets/images/kyokusyokai/syogai_top.jpg" class="foto">
    </div>
    <div class="title_all">
      <h2 class="title1">
        局紹介
      </h2>
      <h2 class="title2">
        渉外局
      </h2>
    </div>
    <div class="contents">
      <div class="description">
        <div>
          「想いと想いをつなぐ架け橋」<br/>
          企業や校友、地域といった大学外部の主体とコミュニケーションをとり、早稲田祭の開催に必要なご支援やご協力をいただくために活動する部署です！社会で活躍する大人と交渉する仕事は、普通の大学生活では味わうことのできないとても貴重な経験です。自分たちの力で早稲田祭の開催に直接寄与することのできる渉外局での活動は、とてもやりがいがあります。大人との接し方やビジネスマナーも詳しく学べるため、社会人0年目のような経験ができる点も大きな魅力です。また局員が50人ほどの比較的少人数の局であるため、局員同士の仲が良くたくさんの友達ができる上に、先輩後輩の距離感も近くアットホームな雰囲気です！局全体としては、1年を通して活動が安定していることが特徴で、忙しすぎず暇すぎず、充実した活動ができます。
        </div>
        <ul class="teams">
          <li>
            <AtomsPartTitle>企業チーム</AtomsPartTitle><br/>
          「早稲田祭を運営するための財源を獲得する」ことが仕事です。実際に企業の方とコンタクトをとり、広告費として協賛をいただきます。責任は大きいですが、大学生のうちに社会人のような経験ができる、とてもやりがいのあるチームです！ 最初は誰もが初心者なのでご心配なく。既存スタッフが新規スタッフのみなさんを万全の体制でサポートします！
          </li>
          <li>
            <AtomsPartTitle>校友チーム</AtomsPartTitle><br/>
          早稲田大学の卒業生である校友の方に、早稲田祭へのご支援・ご理解をいただくために活動しています。校友の方が開催している稲門会に参加し、はっぴを着てスピーチをしたり、校友の方を招いて親睦を深めたりと、さまざまな方法で信頼関係を築いています。校友チームでの活動を通して、名刺の渡し方から目上の方との話し方まで、社会に出てから役立つビジネスマナーを習得できます。
          </li>
          <li>
            <AtomsPartTitle>地域チーム</AtomsPartTitle><br/>
          私たちは人と人とのつながりを大切にし、早稲田周辺地域の方々との信頼関係を構築することに尽力しています！ 例年は、早稲田のまちで開催されるさまざまなイベントに参加したり、地域の方との親睦会を開催したりして、早稲田祭と早稲田というまちの架け橋となる役割を担っています。早稲田祭を開催するには、早稲田のまちにお住まいの方々のご理解やご協力が不可欠です。 早稲田祭や早稲田というまちが大好きになる地域チームで、祭を支えてみませんか？
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
    background-image: url('~assets/images/kyokusyokai/syogai_top.jpg');
    background-size: cover;
    background-position-y: 55%;
    padding-top: 28%;
    position: relative;
    color:#fff;
  }
  .title_all::before{
    width: 100%;
    height: 160px;
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
