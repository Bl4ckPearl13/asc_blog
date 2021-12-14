<template>
  <div class="header">
    <img alt="asc logo" src="../assets/asc_logo_alt.png">
    <div id="nav"> 
    <router-link to="/blog">Blog</router-link> | 
    <router-link to="/getstarted">get started</router-link> | 
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
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
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #1f9410;
}
</style>