<script setup>
import { onMounted, ref } from "vue";
import BusTimes from "@/components/bus_information/BusTimes.vue";
import IconStar from "@/components/icons/IconStar.vue";

const props = defineProps({
  data: Object,
  rowIndex: Number,
  elementStyle: Object,
}); // noinspection JSUnusedGlobalSymbols
const emit = defineEmits(["RowClickedAction"]);
const isBlinking = ref(true);
const isTimesVisible = ref(false);

function ShowTime() {
  isTimesVisible.value = !isTimesVisible.value;
}

onMounted(() => {
  setInterval(() => {
    isBlinking.value = !isBlinking.value;
  }, 500); // Toggle every X milliseconds
});
</script>
<template>
  <div
    class="grid grid-rows-2 gap-0 hover:cursor-pointer py-1.5"
    :class="[
      props.elementStyle.text.description,
      props.elementStyle.background.screen,
      props.elementStyle.background.listItem.hover,
    ]"
    @click="ShowTime"
  >
    <div id="bus-number-and-firm" class="flex flex-row basis-0 ml-3.5">
      <div class="w-4">
        <IconStar v-if="props.data.isEarlier && isBlinking" />
      </div>
      <div class="font-roboto-slab text-sm font-bold flex-shrink pl-1.5">
        {{ props.data.route_short_name }}
      </div>
      <div class="text-sm pl-1.5">
        {{ props.data.agency_name }}
      </div>
    </div>
    <div class="pl-9 font-lato text-sm flex flex-row">
      {{ props.data.route_long_name }}
    </div>
  </div>
  <div>
    <BusTimes
      v-if="isTimesVisible"
      :data="props.data.arrival_time"
      :element-style="props.elementStyle"
    />
  </div>
</template>
