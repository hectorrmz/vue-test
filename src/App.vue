<template>
  <div id="app">
    <ul id="nav">
      <router-link to="/">
        <li class="nav-item">Home</li>
      </router-link>
      <router-link to="/about">
        <li class="nav-item">About</li>
      </router-link>
      <router-link to="/contact">
        <li class="nav-item">Contact</li>
      </router-link>
    </ul>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
@import "./styles/styles.scss";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
