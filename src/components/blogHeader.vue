<template>
  <div class="header">
    <img alt="asc logo" src="../assets/asc_logo_alt.png">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'blogHeader',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>