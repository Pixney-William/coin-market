<template>
  <MainNav />

  <router-view />
</template>

<script lang="ts">
import { onMounted } from "vue";
import MainNav from "@/components/molecules/nav/MainNav.vue";
export default {
  components: {
    MainNav,
  },
  setup(): void {
    onMounted(() => {
      try {
        const el: HTMLElement | null = document.querySelector(".c-glass");
        if (el) {
          const definitelyAnElement: HTMLElement = el;
          definitelyAnElement.style.display = "block";
          definitelyAnElement.style.opacity = "1";
        }
      } catch (error) {
        console.warn(error);
      }
    });
  },
};
</script>
<style>
.c-nav {
  @apply my-16 xl:my-24;
}
.c-nav ul {
  @apply flex justify-center text-center text-3xl lg:text-3xl font-extralight tracking-wide;
}
.c-glass {
  @apply fixed top-0 w-screen h-screen;
  z-index: -1;
}
.c-glass__svg,
.c-glass__blur {
  @apply w-screen h-screen absolute top-0 left-0;
}
.c-glass__svg {
  filter: blur(200px);
}
.c-glass__blur {
  @apply bg-white opacity-50;
}
</style>
