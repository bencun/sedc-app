<template>
  <div class="mainContainer">
    <h1 class="title">To-Do App</h1>
    <router-view name="helper"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'MainContainer',
  created(){
    this.getTasksAPI();
  },
  methods: {
    ...mapActions('todos', ['getTasksAPI']),
  }
}
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
}
</style>