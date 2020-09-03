<template>
  <article class="the-card">
    <h2>{{title}}</h2>
    <slot>I'm a Card</slot>
    <MyButton>Read More</MyButton>
  </article>
</template>

<script>
import MyButton from '@/components/MyButton'

export default {
  name: "TheCard",

  components: {
    MyButton
  },

  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.the-card {
  margin-bottom: 1rem;
  padding: 2rem;
  max-width: 200px;
  background: black;
  color: white;
}
</style>