import storage from "./util/storage.js";

const init = {
  todos: storage.get(),
  filter: "all",
  filters: {
    all: () => true,
    active: (todo) => !todo.completed,
    completed: (todo) => todo.completed,
  },
  editTodo: null,
};

const acctions = {
  add({ todos }, title) {
    if (title) {
      todos.push({ title, completed: false });
      storage.set(todos);
    }
  },
  toggle({ todos }, index) {
    const todo = todos[index];
    todo.completed = !todo.completed;
    storage.set(todos);
  },
  toggleAll({ todos }, completed) {
    todos.forEach((todo) => (todo.completed = completed));
    storage.set(todos);
  },
  destroy({ todos }, index) {
    todos.splice(index, 1);
    storage.set(todos);
  },
  switchFilter(state, filter) {
    state.filter = filter;
  },
  clearCompleted(state) {
    state.todos = state.todos.filter(state.filters.active);
    storage.set(state.todos);
  },
  startEdit(state, index) {
    state.editTodo = index;
  },
  endEdit(state, title) {
    if (state.editTodo !== null) {
      if (title) {
        state.todos[state.editTodo].title = title;
      } else {
        this.destroy(state, state.editTodo);
      }
      state.editTodo = null;
      storage.set(state.todos);
    }
  },
  cancelEdit(state) {
    state.editTodo = null;
  },
};

export default function reducer(state = init, action, args) {
  acctions[action] && acctions[action](state, ...args);

  return state;
}
