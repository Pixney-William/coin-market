<template>
  <router-link class="a-button-link" :to="to"> {{ text }} </router-link>
</template>

<script lang="ts">
export default {
  name: "ButtonLink",
  props: {
    to: {
      required: false,
      type: String,
      default: "/",
    },
    text: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped>
.a-button-link {
  @apply bg-blue-300 hover:bg-blue-400 transition-all duration-500 rounded-full p-8 py-2 mx-auto block text-center uppercase tracking-wider font-medium text-white;
}
</style>
