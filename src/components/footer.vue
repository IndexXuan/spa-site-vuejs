<template>
  <div>
    {{schoolName}} &copy {{currentYear}}
  </div>
</template>

<style lang="sass">
  
</style>

<script>

  export default {
    data() {
      return {
        schoolName: "能动外语学校",
        currentYear: new Date().getFullYear()
      }
    }
  }

</script>
