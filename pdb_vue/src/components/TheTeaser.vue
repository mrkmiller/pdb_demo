<template>
  <article class="the-teaser">
    <h2>{{title}}</h2>
    <slot>I'm a Teaser</slot>
  </article>
</template>

<script>
export default {
  name: "TheTeaser",
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.the-teaser {
  margin-bottom: 1rem;
}
</style>