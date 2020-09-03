<template>
  <button class="my-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton"
}
</script>

<style scoped>
.my-button {
  padding: 1rem;
  color: white;
  background: darkblue;
  border: none;
}
</style>