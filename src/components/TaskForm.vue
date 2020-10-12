<template>
  <div class="task-form pl">

    <div class="form-add">
      <input
        class="todo-text ps"
        type="text"
        placeholder="Add a new todo"
        v-model="todoText"
        @keyup.enter="addHandler"/>

      <my-button @click="addHandler">Add</my-button>
      <my-button @click="showSearch = !showSearch">
        <span v-show="!showSearch">></span>
        <span v-show="showSearch">v</span>
      </my-button>
    </div>

    <div class="form-search" v-if="showSearch">
      <input
        type="text"
        placeholder="Search..."
        class="todo-text search-text ps"
        v-model="searchText"/>

      <label class="filter"> 
        <input type="checkbox" v-model="hideCompleted">
        Hide
      </label>

      <my-button @click="startSearch">Search</my-button>
    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex';
import MyButton from "./MyButton.vue";

export default {
  name: 'TaskForm',
  components: { MyButton },
  data() {
    return {
      todoText: '',
      showSearch: false,
      searchText: '',
      hideCompleted: false,
    };
  },
  methods: {
    ...mapActions('todos', ['addTask', 'setSearchParams']),
    startSearch() {
      this.setSearchParams({
        searchText: this.searchText,
        hideCompleted: this.hideCompleted,
      });
    },
    addHandler() {
      this.addTask(this.todoText);
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
  flex-wrap: wrap;
  justify-content: space-between;


  .todo-text {
    color: $text-color;
    border-color: $border-color;
    flex-grow: 1;
  }

  .form-add,
  .form-search {
    width: 100%;
    display: flex;
  }

  .form-add {
    margin-bottom: $padding-l;
  }

  .form-search {
    align-items: center;
  }
}
</style>