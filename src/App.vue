<template>
    <BlogHeader></BlogHeader>
</template>

<script>
import BlogHeader from '@/components/blogHeader.vue'

export default {
  name: 'app',
  components: {
    BlogHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
</style>
