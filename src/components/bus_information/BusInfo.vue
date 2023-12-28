<script setup>
const props = defineProps({
  busNumber: String,
  firmName: String,
  routeName: String,
});
function BusClickedAction(id) {}
</script>

<template>
  <div
    class="grid grid-rows-2 gap-0 hover:bg-bear-sand-800 hover:cursor-pointer"
    @click="BusClickedAction(null)"
  >
    <div id="bus-number-and-firm" class="grid grid-cols-5 gap-0">
      <div class="px-3.5">{{ props.busNumber }}</div>
      <div class="col-span-4">{{ props.firmName }}</div>
    </div>
    <div class="px-3.5">{{ props.routeName }}</div>
  </div>
</template>
