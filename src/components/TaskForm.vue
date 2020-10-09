<template>
  <div class="task-form pl">
    <input
      class="todo-text ps"
      type="text"
      v-model="todoText"
      @keyup.enter="addHandler"/>

    <my-button @click="addHandler">Add</my-button>
  </div>
</template>

<script>
import MyButton from "./MyButton.vue";

export default {
  name: 'TaskForm',
  components: { MyButton },
  data() {
    return {
      todoText: '',
    };
  },
  methods: {
    addHandler() {
      this.$emit('add-todo', {text: this.todoText});
      this.todoText = '';
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.task-form {
  width: $default-width;
  display: flex;
  justify-content: space-between;
  .todo-text {
    color: $text-color;
    border-color: $border-color;
    flex-grow: 1;
  }
}
</style>