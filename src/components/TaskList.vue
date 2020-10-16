<template>
  <!-- TODO: Add search -->
  <div class="task-list">
    <single-task
      v-for="todo in todoData"
      :key="todo.id"
      :id="todo.id"
      />
    <my-button @click="openNewTodo">Add new todo</my-button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SingleTask from './SingleTask.vue';
import MyButton from './MyButton.vue';

export default {
  name: 'TaskList',
  components: {SingleTask, MyButton},
  computed: {
    ...mapState('todos', ['todoData']),
  },
  methods: {
    openNewTodo() {
      this.$router.push({name: 'TaskAdd'})
    }
  },
}
</script>

<style>

</style>