<template>
  <div class="entry">
    <p>{{ this.getDateFromDB() }}</p>
    <h3>{{ this.getHeadlineFromDb() }}</h3>
    <p>{{ this.getTextFromDB() }}</p>
  </div>
</template>

<script>
export default {
  name: "Entry",
  props: {
    entryFromDb: [],
  },
  methods: {
    getDateFromDB() {
      return '01.01.1999';
    },
    getHeadlineFromDb() {
        return "Ich bin eine Headline"
    },
    getTextFromDB() {
        return "Ich bin der Text"
    }
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.entry {
    border: black 1px;
    background-color: rgb(121, 212, 121);
    margin: 5px;
    padding: 5px;
}
</style>