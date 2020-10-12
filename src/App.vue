<template>
  <div id="app">
    <h1 class="title">To-Do App</h1>
    <task-form/>
    <task-list/>
  </div>
</template>

<script>
import TaskList from './components/TaskList.vue';
import TaskForm from './components/TaskForm.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: { TaskList, TaskForm },
  created(){
    this.getTasksAPI();
  },
  methods: {
    ...mapActions('todos', ['getTasksAPI']),
  }
}
</script>

<style lang="scss" scoped>
@import "./styles/variables.scss";

#app {
  width: 600px;
  border: 4px solid $border-color;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    text-align: center;
  }
}
</style>

<style lang="scss" src="./styles/global.scss"></style>