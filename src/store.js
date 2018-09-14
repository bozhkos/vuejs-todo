import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

const vuexPersist = new VuexPersist({
  key: "todo-app",
  storage: localStorage
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    add(state, todo) {
      state.tasks.push(todo);
    },
    toggle(state, task) {
      state.tasks.splice(task, 1);
    }
  },
  actions: {},
  plugins: [vuexPersist.plugin]
});
