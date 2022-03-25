<script>
export default {
  head: {
    title: '新歓イベント一覧',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          '早稲田祭や運営スタッフの魅力を惜しみなく伝えます！サークルとしての基本情報から運営スタッフの大学生活まで、みなさんの気になる情報をお届けします。詳細はこちら！！',
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '新歓、新歓イベント、早稲田祭運営スタッフ、運スタ、早稲田、早稲田大学、早稲田祭',
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:title', property: 'og:title', content: '新歓イベント一覧' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '早稲田祭や運営スタッフの魅力を惜しみなく伝えます！サークルとしての基本情報から運営スタッフの大学生活まで、みなさんの気になる情報をお届けします。詳細はこちら！！',
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
      <OrganismsHero>新歓イベント</OrganismsHero>
    </div>
    <section>
      <div class="section-inner">
        <div class="item">
          <div id="setsumeikai" class="event-linker" />
          <h1>説明会</h1>
          <div class="content">
            <div class="image_wrapper">
              <img src="~assets/images/events/setsumeikai.jpg" alt="画像" />
            </div>
            <div class="description">
              <p>
                早稲田祭や運営スタッフの魅力を、私たち運営スタッフが惜しみなく伝えます！サークルとしての基本情報から運営スタッフの大学生活まで、みなさんの気になる情報をお届けします。
              </p>
              <ul>
                <li>4月5日(火) 17:00～18:00 @学生会館 W403～W405</li>
                <li>4月8日(金) 17:00～18:00 @新宿コズミックセンター大会議室</li>
                <li>4月9日(土) 17:00～18:00 @Zoom</li>
                <li>4月11日(月) 17:00～18:00 @学生会館 W403～W405</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="item">
          <div id="shabereku" class="event-linker" />
          <h1>しゃべレク007</h1>
          <div class="content">
            <div class="image_wrapper">
              <img src="~assets/images/events/shabereku.jpg" alt="画像" />
            </div>
            <div class="description">
              <p>
                運営スタッフ入会にあたっての不安はもちろん、大学生活の不安も同じ学部の先輩に聞けば解決すること間違いなしです。運営スタッフと遊びも交えながら楽しく雑談しましょう！レクの内容もお楽しみに！
              </p>
              <ul>
                <li>4月6日(水) 14:45～16:15 @学生会館W403～W405</li>
                <li>4月9日(土) 18:15～19:45 @学生会館W403～W405</li>
                <li>4月10日(日) 14:45～16:15 @学生会館W406～W407</li>
                <li>4月14日(木) 16:30～18:00 @学生会館W403～W405</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="item">
          <div id="kyokushindan" class="event-linker" />
          <h1>運スタ相性診断ー君にぴったりな局は！？ー</h1>
          <div class="content">
            <div class="image_wrapper">
              <img src="~assets/images/events/kyokushindan.jpg" alt="画像" />
            </div>
            <div class="description">
              <p>
                事前にあなたにピッタリな局を選んでくれるフローチャートに回答してもらい、その結果をもとにしてグループに分かれます。運営スタッフが実際にどんな活動をしているのか、より詳しく知りたい方は必見です！
              </p>
              <ul>
                <li>4月7日(木) 14:45～16:15 @学生会館W403～W405</li>
                <li>4月10日(日) 13:00～14:30 @学生会館W406～W407</li>
                <li>4月12日(火) 14:45～16:15 @学生会館W406～W407</li>
                <li>4月16日(土) 14:45～16:15 @学生会館W403～W405</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="item">
          <div id="tour" class="event-linker" />
          <h1>早稲田祭ツアー</h1>
          <div class="content">
            <div class="image_wrapper">
              <img src="~assets/images/events/tour.jpg" alt="画像" />
            </div>
            <div class="description">
              <p>
                早稲田大学の構内やキャンパス構外をめぐります。早稲田祭当日の話などを交えながら、運スタの先輩と対面で交流を深めるチャンスです！何より運営スタッフ視点のキャンパスツアーは一味違います！
              </p>
              <ul>
                <li>
                  4月9日(土) 16:30～18:00 @早稲田キャンパス・戸山キャンパス周辺
                </li>
                <li>
                  4月12日(火) 16:30～18:00 @早稲田キャンパス・戸山キャンパス周辺
                </li>
                <li>
                  4月13日(水) 16:30～18:00 @早稲田キャンパス・戸山キャンパス周辺
                </li>
                <li>
                  4月15日(金) 16:30～18:00 @早稲田キャンパス・戸山キャンパス周辺
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="item">
          <div id="welcome" class="event-linker" />
          <h1>ウェルカムステージ</h1>
          <div class="content">
            <div class="image_wrapper">
              <img src="~assets/images/events/welcome.jpg" alt="画像" />
            </div>
            <div class="description">
              <p>
                早稲田祭2022運営スタッフの魅力についてちょこっとだけお話しします。
                たった5分で聞ける説明だからこそ、気軽にご参加が可能です。
                運営スタッフに少しでも興味ある方はぜひ！
              </p>
              <ul>
                <li>
                  4月2日(土) 15:00〜15:30 @早稲田キャンパス 15号館 101教室
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="item">
          <div id="zeronenn" class="event-linker" />
          <h1>運スタ0年生教室</h1>
          <div class="content">
            <div class="image_wrapper">
              <img src="~assets/images/events/zeronenn.jpg" alt="画像" />
            </div>
            <div class="description">
              <p>
                Zoomだからこそ気軽におうちから参加できるのが、この運スタ0年生教室。わからないことだらけの0年生。たくさん質問して運営スタッフの雰囲気をZoom上でも体感してください！
              </p>
              <ul>
                <li>4月8日(金) 16:30〜17:30, 19:00〜20:00</li>
                <li>4月10日(日) 16:30〜17:30, 19:00〜20:00</li>
                <li>4月11日(月) 17:30〜18:30, 20:00〜21:00</li>
                <li>4月17日(日) 16:30〜17:30, 19:00〜20:00</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="item">
          <div id="hokenshitsu" class="event-linker" />
          <h1>運スタ保健室</h1>
          <div class="content">
            <div class="image_wrapper">
              <img src="~assets/images/events/hokenshitsu.jpg" alt="画像" />
            </div>
            <div class="description">
              <p>
                1対1で相談ができる運スタ保健室は、入会まであと一押しが欲しい方におすすめです！あなたの担当になった運営スタッフが、Zoom後もメールを通して親身に相談にのってくれます。
              </p>
              <p>
                4月13日(水), 14日(木), 15日(金), 18日(月), 19日(火), 20日(水),
                21日(木)
              </p>
              <p>各日16:30〜17:30, 17:30〜18:30, 19:00〜20:00, 20:00〜21:00</p>
            </div>
          </div>
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

.item {
  padding-bottom: 3rem;
  position: relative;
}

.event-linker {
  position: absolute;
  top: -100px;
}

.item h1 {
  font-size: 28px;
}

.content {
  display: flex;
  gap: 1rem;
}

.image_wrapper {
  max-width: 300px;
}

.image_wrapper img {
  border-radius: 12px;
}

li {
  padding: 4px 0;
}

li + li {
  border-top: 1px solid black;
}

@media screen and (max-width: 420px) {
  .image_wrapper {
    max-width: 100%;
  }

  .content {
    display: flex;
    flex-direction: column;
  }
}
</style>
