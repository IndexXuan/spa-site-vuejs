<style>

#index {
  background-color: #333 
}

</style>

<template>

  <div id="index">
    <h1>Header</h1>
    {{ data }}
  </div>

</template>

<script>

  export default {
    data () {
      return {
        data: 'data fron index.vue'
      }
    }
  }

</script>
