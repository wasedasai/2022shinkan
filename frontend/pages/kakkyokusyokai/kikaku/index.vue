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
        <div>「」<br /></div>
        <ul class="teams">
          <li><AtomsPartTitle>プレイベントチーム</AtomsPartTitle><br /></li>
          <li><AtomsPartTitle>前夜祭チーム</AtomsPartTitle><br /></li>
          <li><AtomsPartTitle>パレードチーム</AtomsPartTitle><br /></li>
          <li><AtomsPartTitle>OFEFチーム</AtomsPartTitle><br /></li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style scoped>
@media screen and (min-width: 1024px) {
  .foto {
    width: 80%;
    border-radius: 50%;
    margin-left: 40%;
    overflow: hidden;
    object-fit: cover;
  }
  .title_all {
    margin-top: -17%;
    padding-left: 10%;
  }
  .title1 {
    font-size: 2.8rem;
    color: #4c2219;
  }
  .title2 {
    font-size: 3rem;
    color: #4c2219;
    border-bottom-width: thick;
    border-bottom-style: ridge;
  }
  .contents {
    color: #4c2219;
    display: flex;
    justify-content: space-around;
    align-content: space-around;
    width: 1200px;
  }
  .description {
    flex-direction: column;
    margin: 10%;
  }
  .teams li {
    margin-top: 50px;
    text-decoration: none;
  }
}

@media screen and (max-width: 1023px) {
  .foto {
    display: none;
  }
  .foto-wrapper {
    padding-top: 80px;
    background-color: #fff;
    width: 100%;
  }
  .title_all {
    background-image: url('~assets/images/kyokusyokai/kikaku_top.jpg');
    background-size: cover;
    background-position-y: 55%;
    padding-top: 28%;
    position: relative;
    color: #fff;
  }
  .title_all::before {
    width: 100%;
    height: 160px;
    z-index: 0;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .title1 {
    position: relative;
    font-size: 1.3rem;
    color: #4c2219;
  }
  .title2 {
    position: absolute;
    padding-left: 5px;
    font-size: 1.5rem;
    color: #4c2219;
    border-bottom-width: thick;
    border-bottom-style: dotted;
    border-color: #4c2219;
  }
  .contents {
    color: #4c2219;
    display: flex;
    justify-content: space-around;
    align-content: space-around;
    margin-top: 10%;
  }
  .description {
    flex-direction: column;
    margin: 10%;
  }
  .teams li {
    margin-top: 50px;
    text-decoration: none;
  }
}
</style>
