<template>
  <div>

    <h1>
      {{ title }}
    </h1>

    <input v-model="text" type="text">

    <p class="super-text">
      {{ text }}
    </p>

    <p>
      {{ counter }}
    </p>

    <button @click="coutnUp">
      Click!
    </button>

  </div>
</template>

<script>
export default {
  name: 'CatalogPage',
  data() {
    return {
      title: 'Hello catalog page!',
      counter: 0,
      text: 'Текст'
    };
  },
  methods: {
    coutnUp() {
      this.counter += 1;
    }
  }
};
</script>

<style scoped>
  .super-text {
    color: green;
    background-color: rgba(0, 0, 0, 0.05);
    margin: 0 auto;
    width: 400px;
    padding: 15px;
    margin-top: 15px;
  }
</style>
