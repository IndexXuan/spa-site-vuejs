<template>

  <div>

      <site-nav></site-nav>

      <h1>App Header</h1>
      <a v-link="{ path: '/index' }">index</a>
      <a v-link="{ path: '/list/123' }">list</a>
      <a v-link="{ path: '/detail/1' }">detail</a>

      <router-view 
        class="view" 
        transition="illy" 
        transition-mode="out-in" 
        keep-alive> 
      </router-view>

      <site-footer :school-name></site-footer>

  </div>

</template>

<style lang="sass">

  [v-cloak] {
    display: none;
  }

  .view {
    transition: all .5s ease;
  }
  .illy-enter, .illy-leave {
    opacity: 0;
    transform: translate3d(10px, 0, 0);
  }
  .v-link-active {
    color: #ccc;
  }

  @import "./assets/scss/variables";
  @import "./assets/scss/base/base";

</style>

<script>
  
  import siteNav from "./components/navigator"
  import siteFooter from "./components/footer"
  import info from "./stores/getInfo"

  export default {

    data() {
      return {
        schoolName: info.schoolName
      }
    },

    components: {
      siteNav,
      siteFooter
    } 
  }

</script>
