<style>

#detail {
  background-color: #333 
}

</style>

<template>

  <div id="detail">
    <h1>Header</h1>
    {{ data }}
  </div>

</template>

<script>

  export default {
    data () {
      return {
        data: 'data fron detail.vue'
      }
    }
  }

</script>
