<script setup>
const props = defineProps({
  data: Object,
  elementStyle: Object,
});
</script>

<template>
  <div
    class="grid grid-cols-5 gap-0 px-3.5"
    :class="[
      props.elementStyle.text.description,
      props.elementStyle.background.screen,
    ]"
  >
    <div class="text-center" v-for="item in props.data">{{ item }}</div>
  </div>
</template>
