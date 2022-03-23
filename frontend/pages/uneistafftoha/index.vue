<template>
  <main>
    <div class="hero-wrapper">
      <OrganismsHero>運営スタッフとは</OrganismsHero>
    </div>

    <section class="departs-section">
      <div class="section-inner">
        <h1 class="section-title">局紹介</h1>
        <p>早稲田祭2022運営スタッフには、全部で8つの局があります。</p>
        <p>みなさんが新規入会したら、必ずいずれかの局に所属します。</p>
        <div class="box">
          <OrganismsKyokuLink :bg-type="'bgType1'"
            >会場整備局</OrganismsKyokuLink
          >
          <OrganismsKyokuLink :bg-type="'bgType2'">開発局</OrganismsKyokuLink>
          <OrganismsKyokuLink :bg-type="'bgType3'">企画局</OrganismsKyokuLink>
          <OrganismsKyokuLink :bg-type="'bgType4'"
            >広報制作局</OrganismsKyokuLink
          >
          <OrganismsKyokuLink :bg-type="'bgType5'">財務局</OrganismsKyokuLink>
          <OrganismsKyokuLink :bg-type="'bgType6'"
            >参加対応局</OrganismsKyokuLink
          >
          <OrganismsKyokuLink :bg-type="'bgType7'">渉外局</OrganismsKyokuLink>
          <OrganismsKyokuLink :bg-type="'bgType8'">総務局</OrganismsKyokuLink>
        </div>
      </div>
    </section>

    <section class="staff-section">
      <div class="section-inner">
        <h1>スタッフインタビュー</h1>
        <div class="staff_links">
          <OrganismsStaffLink :name="'A.T'" />
          <OrganismsStaffLink :name="'K.I'" />
          <OrganismsStaffLink :name="'K.M'" />
          <OrganismsStaffLink :name="'A.K'" />
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

.departs-section {
  text-align: center;
}

.departs-section .section-title {
  text-align: center;
}

.departs-section .box {
  max-width: 1200px;
  margin: auto;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

@media screen and (max-width: 750px) {
  .departs-section .box {
    padding: 1rem 0;
  }
}

.staff-section .staff_links {
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

@media screen and (max-width: 750px) {
  .staff-section .staff_links {
    flex-wrap: wrap;
  }
}
</style>
