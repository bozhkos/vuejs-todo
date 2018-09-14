import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      { body: "Task A", completed: false },
      { body: "Task B", completed: false },
      { body: "Task C", completed: false },
      { body: "Task D", completed: false },
      { body: "Task E", completed: false },
      { body: "Completed task", completed: true }
    ]
  },
  mutations: {
    add(state, todo) {
      state.tasks.push(todo);
    },
    toggle(state, task) {
      task.completed = !task.completed;
    }
  },
  actions: {}
});
