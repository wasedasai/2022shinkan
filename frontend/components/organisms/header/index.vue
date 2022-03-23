<script>
export default {
  data() {
    return {
      isHeaderOpen: false,
    }
  },
}
</script>

<template>
  <header class="header">
    <div class="pc">
      <NuxtLink :to="'/'">
        <h1 class="logo_with_catch-wrapper">
          <div class="logo_with_catch" />
        </h1>
      </NuxtLink>
      <nav>
        <ul class="main-nav">
          <li>
            <NuxtLink :to="'/'"> HOME </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="'/wasedasaitoha'"> 早稲田祭とは </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="'/uneistafftoha'"> 運スタとは </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="'/nyuukaihouhou'"> 入会方法 </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="'/eventichiran'"> 新歓イベント </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="'/otoiawase'"> お問い合わせ </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <div class="sp">
      <NuxtLink :to="'/'">
        <h1 class="logo_with_catch-wrapper">
          <div class="logo_with_catch_sp" />
        </h1>
      </NuxtLink>

      <div class="open-button_container">
        <button class="open-button" @click="isHeaderOpen = true">
          <span />
          <span />
          <span />
        </button>
      </div>

      <div class="menu-bg" :class="{ open: isHeaderOpen }">
        <div class="sp-nav_header">
          <div class="close-button_container">
            <button class="close-button" @click="isHeaderOpen = false">
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
        <nav class="sp-nav_contents">
          <ul class="sp-nav">
            <li @click="isHeaderOpen = false">
              <NuxtLink :to="'/'">HOME</NuxtLink>
            </li>
            <li @click="isHeaderOpen = false">
              <NuxtLink :to="'/wasedasaitoha'">早稲田祭とは</NuxtLink>
            </li>
            <li @click="isHeaderOpen = false">
              <NuxtLink :to="'/uneistafftoha'">運スタとは</NuxtLink>
            </li>
            <li @click="isHeaderOpen = false">
              <NuxtLink :to="'/nyuukaihouhou'">入会方法</NuxtLink>
            </li>
            <li @click="isHeaderOpen = false">
              <NuxtLink :to="'/eventichiran'">新歓イベント</NuxtLink>
            </li>
            <li @click="isHeaderOpen = false">
              <NuxtLink :to="'/otoiawase'">お問い合わせ</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  z-index: 900;
  width: 100%;
  background: #dde6cb;
  filter: drop-shadow(0px 4px 2px rgb(0 0 0 / 0.4));
}

.logo_with_catch-wrapper {
  padding: 0;
}

.header .pc {
  display: none;
}

.header .sp {
  display: flex;
  padding: 0 1rem;
  height: 80px;
  justify-content: space-between;
}

.logo_with_catch_sp {
  width: 180px;
  height: 80px;
  background-image: url('~assets/images/logos/logo_with_catch.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.open-button_container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.open-button_container .open-button {
  width: 40px;
  height: 28px;
  border: none;
  background: transparent;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
}
.open-button_container .open-button span {
  width: 40px;
  height: 4px;
  padding: 0rem;
  margin-right: 3rem;
  background-color: #4c2219;
}

.menu-bg {
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #dde6cd;
  padding-bottom: 4rem;
  z-index: 910;
}
.menu-bg.open {
  display: block;
}

.sp-nav_header {
  display: flex;
  padding: 0 1rem;
  height: 80px;
  justify-content: flex-end;
}
.close-button_container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.close-button_container .close-button {
  width: 40px;
  height: 28px;
  border: none;
  background: transparent;
  padding: 0;
  position: relative;
  cursor: pointer;
}

.close-button_container .close-button span {
  position: absolute;
  top: 12px;
  left: 0;
  width: 40px;
  height: 4px;
  background-color: transparent;
}

.close-button_container .close-button span:first-child {
  transform: rotate(45deg);
  background-color: #4c2219;
}

.close-button_container .close-button span:last-child {
  transform: rotate(-45deg);
  background-color: #4c2219;
}
.sp-nav li {
  text-align: center;
}
.sp-nav li a {
  color: #4c2219;
  text-decoration: none;
  font-weight: bold;
  display: block;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
}

.sp-nav li a:hover {
  color: #4c2219;
}

@media screen and (min-width: 1024px) {
  .header .sp {
    display: none;
  }

  .header .pc {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    height: 80px;
    margin: auto;
    padding: 0.5rem;
  }

  .header .pc .logo_with_catch {
    width: 200px;
    height: 80px;
    background-image: url('~assets/images/logos/logo_with_catch.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .main-nav {
    display: flex;
  }

  .main-nav .nuxt-link-exact-active {
    position: relative;
  }

  .main-nav .nuxt-link-exact-active::after {
    content: '';
    display: block;
    width: 40px;
    height: 2px;
    background-color: #4c2219;
    position: absolute;
    bottom: 12px;
    left: calc(50% - 20px);
  }

  .main-nav li a {
    display: block;
    width: 100%;
    padding: 1rem;
    transition: all 0.2s;
    color: #4c2219;
    text-decoration: none;
    font-weight: bold;
  }

  .main-nav li a:hover {
    color: #190808;
  }
}
</style>
