<script setup>
import BusInfo from "@/components/bus_information/BusInfo.vue";
import { ref } from "vue";
import BusTimes from "@/components/bus_information/BusTimes.vue";

const props = defineProps({
  busNumber: String,
  firmName: String,
  routeName: String,
  times: Array,
});
const isTimesVisible = ref(false);
</script>

<template>
  <BusInfo
    :bus-number="props.busNumber"
    :firm-name="props.firmName"
    :route-name="props.routeName"
  />
  <BusTimes v-if="isTimesVisible" />
</template>
