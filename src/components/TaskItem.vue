<template>
  <div class="w-full p-3 flex flex-row font-semibold items-center">
    <span 
      class="cursor-pointer mr-5" 
      @click="toggle">
      <svg 
        class="text-grey-darker hover:text-green fill-current" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        width="24" 
        height="24">
        <path 
          class="heroicon-ui" 
          d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"/>
      </svg>
    </span>
    <span 
      :class="{ 'text-grey line-through font-normal' : task.completed }" 
      class="text-lg" 
      v-text="task.body"/>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  props: {
    task: { type: Object, required: true }
  },
  methods: {
    toggle() {
      this.$store.commit("toggle", this.task);
    }
  }
};
</script>
