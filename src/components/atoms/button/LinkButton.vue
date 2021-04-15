<template>
  <router-link
    class="bg-blue-300 hover:bg-blue-400 transition-all duration-500 rounded-full p-8 py-2 mx-auto block text-center uppercase tracking-wider font-medium text-white"
    :to="to"
  >
    View Statistics
  </router-link>
</template>

<script lang="ts">
export default {
  name: "LinkButton",
  props: {
    to: {
      required: false,
      default: "/",
    },
  },
};
</script>
