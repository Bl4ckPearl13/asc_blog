<template>
  <div class="header">
    <div id="nav">
      <div class="logo">
        <img alt="asc logo" src="../assets/asc_logo_alt.png" />
      </div>
      <div class="menu">
        <router-link to="/blog">Blog</router-link> |
        <router-link to="/getstarted">get started</router-link> |
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <router-view />
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "blogHeader",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 200px;
}

.logo {
  height: 200px;
  width: 200px;
  float: left;
}

.menu {
  height: 200px;
  width: 500px;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;
}

#nav {
  background-color: rgb(187, 199, 192);
  font-size: 20px;
  box-sizing: border-box;
  margin-bottom: 50px;
}

#nav a {
  font-weight: bold;
  color: #000000;
}

#nav a.router-link-exact-active {
  color: #1f9410;
}
</style>