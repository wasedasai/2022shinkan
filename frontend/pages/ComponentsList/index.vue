<template>
  <div>
    <h1>ComponentsList</h1>
    <p>このページではコンポーネントをすべて表示します</p>
    <section>
      <OrganismsHero />
      <OrganismsQA />
    </section>
    <section>
      <AtomsButton />
      <AtomsPartTitle>Webチーム</AtomsPartTitle>
      <AtomsPartTitle>動画チーム</AtomsPartTitle>
    </section>
    <section>
      <h1>スタッフインタビュー</h1>
      <div class="staff_links">
        <OrganismsStaffLink :name="'A.T'" />
        <OrganismsStaffLink :name="'K.I'" />
        <OrganismsStaffLink :name="'K.M'" />
        <OrganismsStaffLink :name="'A.K'" />
      </div>
    </section>
    <section>
      <h1>局紹介リンク</h1>
      <div class="kyoku_links">
        <OrganismsKyokuLink :bg-type="'bgType1'">会場整備局</OrganismsKyokuLink>
        <OrganismsKyokuLink :bg-type="'bgType1'">開発局</OrganismsKyokuLink>
        <OrganismsKyokuLink :bg-type="'bgType1'">企画局</OrganismsKyokuLink>
        <OrganismsKyokuLink :bg-type="'bgType1'">広報制作局</OrganismsKyokuLink>
        <OrganismsKyokuLink :bg-type="'bgType1'">財務局</OrganismsKyokuLink>
        <OrganismsKyokuLink :bg-type="'bgType1'">参加対応局</OrganismsKyokuLink>
        <OrganismsKyokuLink :bg-type="'bgType1'">渉外局</OrganismsKyokuLink>
        <OrganismsKyokuLink :bg-type="'bgType1'">総務局</OrganismsKyokuLink>
      </div>
    </section>
    <section>
      <h1>Slide</h1>
      <OrganismsSlide />
    </section>
  </div>
</template>

<style scoped>
section {
  padding: 40px 0;
}

.staff_links {
  max-width: 1200px;
  margin: auto;
  padding: 1rem;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.kyoku_links {
  max-width: 1200px;
  margin: auto;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}
</style>
