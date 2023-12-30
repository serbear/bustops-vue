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
    <div class="text-center">11:11</div>
    <div class="text-center">22:22</div>
    <div class="text-center">33:33</div>
    <div class="text-center">44:44</div>
    <div class="text-center">55:55</div>
  </div>
</template>
