<template>

  <div class="list topN">
    <list-item 
     v-for="item in lists"
     :item="item">
    </list-item>
  </div>

</template>

<style>

</style>

<script>

  import listItem from '../components/list-item'
  import lists from '../stores/getLists'

  export default {

    name: "ItemView",

    components: { 
      listItem
    },

    data() {
      return {
        lists: {}
      }
    },

    route: {
      data({ to }) {
        return {
          lists: lists.data
        }
      }
    }

  }

</script>
