<template>
  <div class="w-full lg:w-1/2 md:w-1/3 sm:w-screen sm:h-screen bg-white sm:shadow-none shadow-md">
    <div class="p-4 border-b flex flex-row justify-between items-center">
      <h2 class="font-semibold">Your tasks</h2>
    </div>
    <div class="p-4">
      <form 
        class="w-full mb-4 flex flex-row items-center" 
        @submit.prevent="save">
        <input 
          v-model="body"
          aria-label="New task body" 
          type="text" 
          class=" flex-1 flex rounded py-2 px-3 border-b text-grey-darker" 
          placeholder="New task">
        <button 
          type="submit" 
          aria-label="Submit task"
          class="flex mx-3">
          <svg 
            class="text-green-dark fill-current" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width="24" 
            height="24"><path 
              class="heroicon-ui" 
              d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-9h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2z"/></svg>
        </button>
      </form>
      <div class="min-h-full h-64 sm:h-full overflow-auto">
        <div
          v-if="tasks.length < 1" 
          class="text-center">
          <p class="text-lg font-medium">You have no tasks in this list.</p>
        </div>
        <TaskItem 
          v-for="(task,index) in tasks" 
          v-else 
          :task="task" 
          :key="index"/>  
      </div>
    </div>
  </div>
</template>

<script>
import TaskItem from "@/components/TaskItem.vue";

export default {
  name: "Home",
  components: {
    TaskItem
  },
  data: () => ({
    body: "",
    hideCompleted: true
  }),
  computed: {
    tasks() {
      return this.$store.state.tasks;
    }
  },
  methods: {
    save() {
      this.$store.commit("add", this.body);
      this.body = "";
    }
  }
};
</script>
