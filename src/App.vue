<template>
  <nav class="c-nav">
    <ul>
      <li>
        <router-link to="/">Husleie Coin Market</router-link>
      </li>
    </ul>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    onMounted(() => {
      // Todo: Transition it .
      const el: HTMLElement | null = document.querySelector(".c-glass");
      if (el) {
        const definitelyAnElement: HTMLElement = el;
        definitelyAnElement.style.display = "block";
        definitelyAnElement.style.opacity = "1";
      }
    });
  },
};
</script>
<style>
.c-nav {
  @apply my-16 xl:my-24;
  background: rgba(255, 255, 255, 0.5);
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
/* background-image: url("/svgs/bg.svg");
  background-position: center;
  background-attachment: fixed; */
</style>
