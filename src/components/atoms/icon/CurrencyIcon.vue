<template>
  <img
    :width="width"
    :height="height"
    :src="$filters.makeImageSrc(src)"
    :alt="alt"
    loading="lazy"
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
  },
};
</script>
