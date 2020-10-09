<template>
  <!-- TODO: Add search -->
  <div class="task-list">
    <single-task
      v-for="todo in todos"
      :key="todo.id"
      :task="todo"
      @delete="deleteTask"
      />
  </div>
</template>

<script>
import SingleTask from './SingleTask.vue';

export default {
  name: 'TaskList',
  components: {SingleTask},
  props: {
    todos: {
      type: Array,
    }
  },
  methods: {
    deleteTask(taskId) {
      const taskIdx = this.todos.findIndex(t => t.id === taskId);
      if (taskIdx >= 0) {
        this.todos.splice(taskIdx, 1);
      }
    }
  }
}
</script>

<style>

</style>