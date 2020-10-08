<template>
  <div id="app">
    <h1 class="title">To-Do App</h1>
    <task-form @add-todo="addTodoHandler"/>
    <task-list :todos="todoData"/>
  </div>
</template>

<script>
import TaskList from './components/TaskList.vue';
import TaskForm from './components/TaskForm.vue';

let idCounter = 0;
const generateId = function() {
  idCounter += 1;
  return idCounter;
}

export default {
  name: 'App',
  components: { TaskList, TaskForm },
  data() {
    return {
      todoData: [
        {id: generateId(), text: 'Buy milk', done: false},
        {id: generateId(), text: 'Buy milk', done: false},
        {id: generateId(), text: 'Walk the dog', done: true},
        {id: generateId(), text: 'Wash the dishes', done: false},
      ],
    };
  },
  methods: {
    addTodoHandler(info) {
      const newTodo = {
        id: generateId(), text: info.text, done: false,
      };
      this.todoData.push(newTodo);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./styles/variables.scss";

#app {
  width: 600px;
  border: 4px solid $border-color;
  margin: auto;

  .title {
    text-align: center;
  }
}
</style>

<style lang="scss" src="./styles/global.scss"></style>