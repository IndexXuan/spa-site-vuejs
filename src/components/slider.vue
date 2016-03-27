<template>

  <!-- slider start -->
  <div id="slider">
    <div v-for="slider in sliders">
      <a :href="'/detail/' + slider._id"><img :src="slider.image" /></a>
      <p>{{slider.title}}</p>
    </div>
  </div>
  <!-- slider end -->
  
</template>

<style lang="sass">
  
    @import "../assets/scss/base/"
    .slider {

    }

</style>

<script>

  export default {
    data() {
      return {
         
      }
    }
  }

</script>
