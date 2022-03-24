<template>
  <div class="box">
    <OrganismsKyokuLink
      :bg-type="'bgType1'"
      :url="'/kakkyokusyokai/kaijyoseibi'"
      >会場整備局</OrganismsKyokuLink
    >
    <OrganismsKyokuLink :bg-type="'bgType2'" :url="'/kakkyokusyokai/kaihatu'"
      >開発局</OrganismsKyokuLink
    >
    <OrganismsKyokuLink :bg-type="'bgType3'" :url="'/kakkyokusyokai/kikaku'"
      >企画局</OrganismsKyokuLink
    >
    <OrganismsKyokuLink
      :bg-type="'bgType4'"
      :url="'/kakkyokusyokai/kouhouseisaku'"
      >広報制作局</OrganismsKyokuLink
    >
    <OrganismsKyokuLink :bg-type="'bgType5'" :url="'/kakkyokusyokai/zaimu'"
      >財務局</OrganismsKyokuLink
    >
    <OrganismsKyokuLink :bg-type="'bgType6'" :url="'/kakkyokusyokai/sankataiou'"
      >参加対応局</OrganismsKyokuLink
    >
    <OrganismsKyokuLink :bg-type="'bgType7'" :url="'/kakkyokusyokai/syogai'"
      >渉外局</OrganismsKyokuLink
    >
    <OrganismsKyokuLink :bg-type="'bgType8'" :url="'/kakkyokusyokai/soumu'"
      >総務局</OrganismsKyokuLink
    >
  </div>
</template>

<style scoped>
.box {
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
