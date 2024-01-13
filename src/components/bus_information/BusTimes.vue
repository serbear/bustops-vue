<script setup>
import IconClock from "@/components/icons/IconClock.vue";

const props = defineProps({
  data: Object,
  elementStyle: Object,
});
</script>

<template>
  <div
    class="flex px-9 py-1.5"
    :class="[
      props.elementStyle.text.description,
      props.elementStyle.background.screen,
    ]"
  >
    <div
      class="text-center font-lato text-sm px-0.5 pr-2"
      v-for="item in props.data"
    >
      <IconClock class="inline flex-none mb-0.5" /> {{ item }}
    </div>
  </div>
</template>
