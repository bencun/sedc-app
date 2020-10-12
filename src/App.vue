<template>
  <div id="app">
    <h1 class="title">To-Do App</h1>
    <task-form :search="searchParams"/>
    <task-list/>
  </div>
</template>

<script>
import TaskList from './components/TaskList.vue';
import TaskForm from './components/TaskForm.vue';

export default {
  name: 'App',
  components: { TaskList, TaskForm },
  data() {
    return {
      searchParams: {
        searchText: '',
        hideCompleted: false,
      },
    };
  },
  methods: {
    /* addTodoHandler(info) {
      const newTodo = {
        id: generateId(), text: info.text, done: false,
      };
      this.todoData.push(newTodo);
    }, */
    /* deleteTaskHandler(taskId) {
      const taskIdx = this.todoData.findIndex(t => t.id === taskId);
      if (taskIdx >= 0) {
        this.todoData.splice(taskIdx, 1);
      }
    } */
  },
  computed: {
    /* filteredTodos() {
      // first search by text
      const searchedTodos = this.todoData
        .filter(todo => {
          const todoTextLowercase = todo.text.toLowerCase();
          const searchTextLowercase = this.searchParams.searchText.toLowerCase();
          const hasSearchText = todoTextLowercase.indexOf(searchTextLowercase) >= 0;

          return hasSearchText;
        });

      // then remove any completed todos if checkbox is active
      if (this.searchParams.hideCompleted) {
        const notCompleted = searchedTodos.filter(todo => !todo.done);
        return notCompleted;
      }
      // else return filtered by search only
      else {
       return searchedTodos;
      }
    } */
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