const APIURL = 'http://localhost:3000';

export default {
  namespaced: true,
  state: {
    searchParams: {
      searchText: '',
      hideCompleted: false,
    },
    todoData: [],
  },
  // dispatchuju se
  actions: {
    async getTasksAPI(context) {
      const response = await fetch(`${APIURL}/tasks`);
      if (response.ok) {
        const parsedJSON = await response.json();
        context.commit('setAllTasks', parsedJSON);
      }
    },
    async deleteTask(context, taskId) {
      const response = await fetch(`${APIURL}/tasks/${taskId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        context.dispatch('getTasksAPI');
      }
    },
    async addTask(context, text) {
      const newTodo = { text, done: false };
      const response = await fetch(`${APIURL}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo)
      });
      if (response.ok) {
        context.dispatch('getTasksAPI');
      }

    },
    setSearchParams(context, params) {
      context.commit('setParams', params);
    }
  },
  // commituju se
  mutations: {
    spliceTask(state, idx) {
      state.todoData.splice(idx, 1);
    },
    pushTask(state, todoObject) {
      state.todoData.push(todoObject);
    },
    setParams(state, params) {
      state.searchParams = params;
    },
    setAllTasks(state, tasks) {
      state.todoData = tasks;
    }
  },
  getters: {
    filteredTodos(state) {
      // first search by text
      const searchedTodos = state.todoData
        .filter(todo => {
          const todoTextLowercase = todo.text.toLowerCase();
          const searchTextLowercase = state.searchParams.searchText.toLowerCase();
          const hasSearchText = todoTextLowercase.indexOf(searchTextLowercase) >= 0;

          return hasSearchText;
        });

      // then remove any completed todos if checkbox is active
      if (state.searchParams.hideCompleted) {
        const notCompleted = searchedTodos.filter(todo => !todo.done);
        return notCompleted;
      }
      // else return filtered by search only
      else {
        return searchedTodos;
      }
    }
  },
};