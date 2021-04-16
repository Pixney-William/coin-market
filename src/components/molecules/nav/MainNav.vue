<template>
  <nav class="c-nav">
    <ul>
      <li>
        <router-link to="/">
          <img src="/svgs/logo.svg" alt="" />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style>
.c-nav {
  @apply my-16 xl:my-24;
}
.c-nav ul {
  @apply flex justify-center text-center text-3xl lg:text-3xl font-extralight tracking-wide;
}
</style>
