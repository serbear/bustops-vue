<script setup>
import IconInfo from "@/components/icons/IconInfo.vue";
const props = defineProps({
  countObject: String,
  amount: Number,
});
</script>

<template>
  <p
    class="font-lato text-sm text-bear-cyan-1500 p-3.5 flex items-center justify-end gap-x-1"
  >
    <IconInfo />
    Total found {{ props.countObject }}: {{ props.amount }}
  </p>
</template>
