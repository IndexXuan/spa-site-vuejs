<template>

  <div>
      <h1>App Header</h1>
      <a v-link="{ path: '/' }">index</a>
      <a v-link="{ path: '/list/123' }">list</a>
      <a v-link="{ path: '/detail/1' }">detail</a>

      <router-view class="view" transition="test" transition-mode="out-in" keep-alive></router-view>
  </div>

</template>

<style lang="sass">

  [v-cloak] {
    display: none;
  }
  .view {
    transition: all .5s ease;
  }
  .test-enter, .test-leave {
    opacity: 0;
    transform: translate3d(10px, 0, 0);
  }
  .v-link-active {
    color: red;
  }

  // @import "./assets/scss/microsite/microsite.scss";

</style>

<script>

  export default {
    data () {
      return {

      }
    }
  }

</script>
