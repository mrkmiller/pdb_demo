<template>
  <div class="app">
    Here is the Reusable Button.
    <MyButton>Click Me!</MyButton>

    <TheTeaser title="Teaser 1"></TheTeaser>
    <TheTeaser title="Teaser 2">I'm the second Teaser</TheTeaser>
  </div>
</template>

<script>
import MyButton from '@/components/MyButton'
import TheTeaser from '@/components/TheTeaser'

export default {
  name: 'app',
  components: {
    MyButton,
    TheTeaser
  },
  data () {
    return {
      instanceId: ''
    }
  },
  beforeMount () {
    // Get the ID tag containing the drupal instance id.
    this.instanceId = this.$parent.$el.id
  }
}
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
