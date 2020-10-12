
let idCounter = 0;
const generateId = function() {
  idCounter += 1;
  return idCounter;
}

export default {
  namespaced: true,
  state: {
    searchParams: {
      searchText: '',
      hideCompleted: false,
    },
    todoData: [
      {id: generateId(), text: 'Buy milk', done: false},
      {id: generateId(), text: 'Buy milk', done: false},
      {id: generateId(), text: 'Walk the dog', done: true},
      {id: generateId(), text: 'Wash the dishes', done: false},
    ],
  },
  // dispatchuju se
  actions: {
    deleteTask(context, taskId) {
      const taskIdx = context.state.todoData.findIndex(t => t.id === taskId);
      if (taskIdx >= 0) {
        context.commit('spliceTask', taskIdx);
      }
    },
    addTask(context, text) {
      const newTodo = {
        id: generateId(), text, done: false,
      };
      context.commit('pushTask', newTodo);
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