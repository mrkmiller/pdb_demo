<template>
  <div class="app">
    Here is the Reusable Button.
    <MyButton>Click Me!</MyButton>

    <TheCard title="I'm a Card"></TheCard>

    <HelloWorld msg="Welcome to Your Hello World PDB Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyButton from '@/components/MyButton'
import TheCard from '@/components/TheCard'

export default {
  name: 'app',
  components: {
    HelloWorld,
    MyButton,
    TheCard
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
