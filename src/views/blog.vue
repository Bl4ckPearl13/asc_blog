<template>
  <div class="blog">
    <BlogHeader></BlogHeader>
  </div>
</template>

<script>
// @ is an alias to /src
import BlogHeader from '@/components/blogHeader.vue'

export default {
  name: 'blog',
  components: {
    BlogHeader
  }
}
</script>