<script setup>
import { ref } from "vue";
import BusTimes from "@/components/bus_information/BusTimes.vue";

const props = defineProps({
  data: Object,
  rowIndex: Number,
  elementStyle: Object,
});

// noinspection JSUnusedGlobalSymbols
const emit = defineEmits(["RowClickedAction"]);

const isTimesVisible = ref(false);

function ShowTime() {
  isTimesVisible.value = !isTimesVisible.value;
}
</script>
<template>
  <div
    class="grid grid-rows-2 gap-0 hover:cursor-pointer"
    :class="[
      props.elementStyle.text.description,
      props.elementStyle.background.screen,
      props.elementStyle.background.listItem.hover,
    ]"
    @click="ShowTime"
  >
    <div id="bus-number-and-firm" class="grid grid-cols-5 gap-0">
      <div class="px-3.5">{{ props.data.route_short_name }}</div>
      <div class="col-span-4">{{ props.data.agency_name }}</div>
    </div>
    <div class="px-3.5">{{ props.data.route_long_name }}</div>
  </div>
  <div>
    <BusTimes
      v-if="isTimesVisible"
      :data="null"
      :element-style="props.elementStyle"
    />
  </div>
</template>
