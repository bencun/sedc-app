<template>
  <div class="task-form">
    <input type="text" v-model="todoText"/>
    <button @click="addHandler">Add</button>
  </div>
</template>

<script>
export default {
  name: 'TaskForm',
  data() {
    return {
      todoText: '',
    };
  },
  methods: {
    addHandler() {
      this.$emit('add-todo', {text: this.todoText});
    }
  }
}
</script>

<style>

</style>