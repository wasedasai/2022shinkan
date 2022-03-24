<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>

<template>
  <div>
    <div class="QA">
      <div class="q_box">
        <h2 class="Q">
          <div>Q.&nbsp;</div>
          <div>
            <slot name="question" />
          </div>
        </h2>
        <div class="button" @click="isOpen = !isOpen">
          <AtomsIconsPlus v-if="!isOpen" class="icon" fill="#804b40" />
          <AtomsIconsMinus v-if="isOpen" class="icon" fill="#804b40" />
        </div>
      </div>
      <transition name="fade">
        <div v-if="isOpen" class="a_box">
          <hr />
          <div class="A">
            <div>
              <slot name="answer" />
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.q_box {
  color: #4c2219;
  background-color: #dde6cd;
  width: 100%;
  max-width: 720px;
  margin: auto;
  padding: 1rem 2rem;
  filter: drop-shadow(4px 4px 2px rgb(0 0 0 / 0.4));
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.Q {
  color: #4c2219;
  position: relative;
  padding: 0;
  display: flex;
  font-size: 16px;
}

.button {
  background: #000;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
}

.icon {
  width: 32px;
  height: 32px;
  filter: drop-shadow(2px 2px 1px rgb(0 0 0 / 0.4));
}

.fade-enter-active,
.fade-leave-active {
  will-change: opacity;
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

hr {
  height: 2px;
  background-color: #804b40;
  border: none;
  margin: 0;
}

.a_box {
  color: #4c2219;
  background-color: #dde6cd;
  width: 100%;
  max-width: 720px;
  margin: auto;
  padding: 0px 2rem 1rem;
  filter: drop-shadow(4px 4px 2px rgb(0 0 0 / 0.4));
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.A {
  padding: 8px 0;
  display: flex;
}

.A h2 {
  padding: 0;
}
</style>
