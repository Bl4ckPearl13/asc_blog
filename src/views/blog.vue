<template>
  <div class="blog">
    <h1>Blog works</h1>
    <Entry />
    <Entry />
  </div>
</template>

<script>
import Entry from "@/components/entry.vue";

export default {
  name: "blog",
  components: {
    Entry,
  },
  data() {
      return {
          entry: ['01.02.1234']
      }
  }
};
</script>