<template>
  <main>
    <div class="hero-wrapper">
      <OrganismsHero>各局紹介</OrganismsHero>
    </div>

    <section class="departs-section">
      <div class="section-inner">
        <p>早稲田祭2022運営スタッフには、全部で8つの局があります。</p>
        <p>みなさんが新規入会したら、必ずいずれかの局に所属します。</p>
        <div class="button-wrapper">
          <AtomsButton :url="'zentaizowotukamou'"
            >運スタの全体像をつかもう</AtomsButton
          >
        </div>
        <OrganismsKyokuLinkList />
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

.departs-section {
  text-align: center;
  background: white;
}

.departs-section .section-title {
  text-align: center;
}

.departs-section .button-wrapper {
  margin: auto;
  max-width: 320px;
  padding: 1rem;
}

@media screen and (max-width: 750px) {
  .departs-section .box {
    padding: 1rem 0;
  }
}
</style>
