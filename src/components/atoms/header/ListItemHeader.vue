<template>
  <div class="text-base flex justify-between uppercase">
    <span class="font-semibold tracking-wider">{{ abbr }}</span>
    <span>{{ $filters.UsdFormattedString(value) }}</span>
  </div>
</template>

<script>
export default {
  name: "List-Item-Header",
  props: {
    abbr: {
      required: false,
      default: "NAN",
    },
    value: {
      required: false,
      default: 0,
    },
  },
};
</script>
