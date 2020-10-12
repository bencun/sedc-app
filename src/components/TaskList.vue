<template>
  <!-- TODO: Add search -->
  <div class="task-list">
    <single-task
      v-for="todo in todoData"
      :key="todo.id"
      :task="todo"
      />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SingleTask from './SingleTask.vue';

export default {
  name: 'TaskList',
  components: {SingleTask},
  computed: {
    ...mapState('todos', ['todoData']),
  },
}
</script>

<style>

</style>