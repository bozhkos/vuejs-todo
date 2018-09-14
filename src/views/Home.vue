<template>
  <div class="w-1/2 bg-white shadow-md">
    <div class="p-4 border-b flex flex-row justify-between items-center">
      <h2 class="font-semibold">Your tasks</h2>
      <button class="bg-red-dark text-white px-3 py-2 shadow rounded font-medium">New task</button>
    </div>
    <div class="p-4">
      <div 
        v-if="tasks.length < 1" 
        class="text-center">
        <p class="text-lg font-medium">You have no tasks in this list.</p>
      </div>
      <TaskItem 
        v-for="task in tasks" 
        v-else 
        :task="task" 
        :key="task.id"/>  
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
    tasks: []
  })
};
</script>
