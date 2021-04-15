<template>
  <img
    :width="width"
    :height="height"
    :src="src"
    :alt="alt"
    loading="lazy"
    :class="styling"
  />
</template>

<script lang="ts">
export default {
  props: {
    alt: {
      type: String,
      required: false,
    },
    src: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      required: false,
      default: 128,
    },
    height: {
      type: Number,
      required: false,
      default: 128,
    },
    styling: {
      type: String,
      required: false,
      default: "mx-auto",
    },
  },
};
</script>
