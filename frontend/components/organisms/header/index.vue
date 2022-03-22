<script>
export default {
  props: {
    hasHeader: {
      type: Boolean,
      default: true,
    },
    isInternal: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      isHeaderOpen: false,
      path: ''
    }
  },
  mounted () {
    this.path = this.$route.path
  }
}
</script>

<template>
  <header
    class="header"
    :class="{
      hasHeader,
    }"
  >
    <div
      class="pc"
      :class="{
        hasHeader,
      }"
    >
      <h1>
        <img
          class="logo_with_catch"
          src="~assets/images/logo_with_catch.png"
          alt="headerロゴ"
        />
      </h1>
      <nav>
        <ul class="main-nav">
          <li v-show="hasHeader">
            <NuxtLink
              v-if="isInternal"
              :to="'/'"
              class="current"
              :class="{
                underline: path == '/',
              }"
            >
              HOME
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
            v-if="isInternal"
            :to="'/about-waedasai-link'"
             class="current"
            :class="{
            underline: path == '/wasedasaitoha',
            }"
             >
             早稲田祭とは
             </NuxtLink>
          </li>
          <li>
            <NuxtLink
             v-if="isInternal"
             :to="'/about-unsta-link'"
             class="current"
            :class="{
            underline: path == '/unstatoha',
            }"
             >
             運スタとは
             </NuxtLink>
          </li>
          <li>
            <NuxtLink
            v-if="isInternal"
            :to="'/admission-link'"
            class="current"
            :class="{
            underline: path == '/nyuukaihouhou',
            }"
            >
            入会方法
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
            v-if="isInternal"
            :to="'/event-link'"
            :class="{
            underline: path == '/eventichiran',
            }"
            >
            新歓イベント
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
            v-if="isInternal"
            :to="'/contact'"
            :class="{
            underline: path == '/contact',
            }"
            >
            お問い合わせ
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <div
      class="sp"
      :class="{
        hasHeader,
      }"
    >
      <h1 v-show="hasHeader">
        <img
          class="logo_with_catch_sp"
          src="~assets/images/logo_with_catch.png"
          alt="headerロゴ"
        />
      </h1>

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
              <NuxtLink :to="'/unstatoha'">運スタとは</NuxtLink>
            </li>
            <li @click="isHeaderOpen = false">
              <NuxtLink :to="'/nyuukaihouhou'">入会方法</NuxtLink>
            </li>
            <li @click="isHeaderOpen = false">
              <NuxtLink :to="'/eventichiran'">新歓イベント</NuxtLink>
            </li>
            <li @click="isHeaderOpen = false">
              <NuxtLink :to="'/contact'">お問い合わせ</NuxtLink>
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
  z-index: 990;
  width: 100%;
  background: #dde6cb;
}
.header.hasHeader {
  background: #dde6cb;
  cursor: pointer;
}
.logo_with_catch {
  width: 250px;
  margin-left: 5rem;
}
.header .pc {
  padding: 0.5rem;
  max-width: 1440px;
  margin: auto;
}
.header .sp {
  display: flex;
  padding: 0 1rem;
  height: 80px;
  justify-content: flex-end;
}
.header .sp.hasHeader {
  justify-content: space-between;
}
.logo_with_catch_sp {
  width: 150px;
  margin-left: 1rem;
  margin-top: -3rem;
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
}

.open-button_container .open-button span {
  width: 40px;
  height: 4px;
  padding: 0rem;
  margin-right: 3rem;
  background-color: #804b40;
}
.menu-bg {
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  z-index: 990;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background: #dde6cd;
  padding-bottom: 4rem;
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
  background-color: #804b40;
}

.close-button_container .close-button span:last-child {
  transform: rotate(-45deg);
  background-color: #804b40;
}
.sp-nav li {
  text-align: center;
}

.sp-nav li a {
  color: #804b40;
  text-decoration: none;
  font-weight: bold;
  display: block;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
}

@media screen and (min-width: 1024px) {
  .header .sp {
    display: none;
  }

  .header .pc {
    height: 80px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .header .pc.hasHeader {
    justify-content: space-between;
  }

  .main-nav {
    display: flex;
    font-size: 1.5rem;
    padding-right: 5rem;
  }

  .underline {
    text-decoration: underline;
    position: relative;
  }

  .underline::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: #804b40;
    position: absolute;
    bottom: 0;
    left: 10px;
  }

  .main-nav li a {
    display: block;
    width: 100%;
    padding: 1rem;
    transition: all 0.2s;
    color: #804b40;
    text-decoration: none;
    font-weight: bold;
  }

  .main-nav li a:hover {
    color: #4c2219;
  }
}
</style>
