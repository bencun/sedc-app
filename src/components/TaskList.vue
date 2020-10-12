<template>
  <!-- TODO: Add search -->
  <div class="task-list">
    <single-task
      v-for="todo in filteredTodos"
      :key="todo.id"
      :task="todo"
      @delete="deleteTask"
      />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SingleTask from './SingleTask.vue';

export default {
  name: 'TaskList',
  components: {SingleTask},
  computed: {
    ...mapGetters('todos', ['filteredTodos']),
  },
  methods: {
    deleteTask(taskId) {
      this.$emit('delete', taskId);
    }
  }
}
</script>

<style>

</style>