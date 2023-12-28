<script setup>
import BusInfo from "@/components/bus_information/BusInfo.vue";
import { ref } from "vue";
import BusTimes from "@/components/bus_information/BusTimes.vue";
import SeparatorCircle from "@/components/bus_information/SeparatorCircle.vue";

const props = defineProps({
  busNumber: String,
  firmName: String,
  routeName: String,
  times: Array,
});
const isTimesVisible = ref(false);

function ShowTime() {
  isTimesVisible.value = !isTimesVisible.value;
}
</script>

<template>
  <div class="flex flex-col">
    <BusInfo
      :firm-name="props.firmName"
      :route-name="props.routeName"
      :bus-number="props.busNumber"
      @click="ShowTime"
    />
  </div>
  <div>
    <BusTimes v-if="isTimesVisible" />
  </div>
  <SeparatorCircle />
</template>
