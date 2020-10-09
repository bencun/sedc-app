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
        v-model="search.searchText"/>

      <label class="filter"> 
        <input type="checkbox" v-model="search.hideCompleted">
        Hide
      </label>
    </div>

  </div>
</template>

<script>
import MyButton from "./MyButton.vue";

export default {
  name: 'TaskForm',
  components: { MyButton },
  props: {
    search: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      todoText: '',
      showSearch: false,
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