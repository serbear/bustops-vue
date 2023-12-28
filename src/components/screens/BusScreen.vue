<script setup>
import { elementStyles } from "@/ui/busScreen.js";
import BusCard from "@/components/bus_information/BusCard.vue";
import { ref, watch } from "vue";
// noinspection SpellCheckingInspection
import ProgreSpinner from "@/components/ProgreSpinner.vue";

const props = defineProps({
  busStopName: String,
  busses: Array,
});

let isBusCardVisible = ref(false);

watch(
  () => props.busses,
  (newVal) => {
    isBusCardVisible = newVal !== null;
  },
);
</script>

<template>
  <div>
    <ProgreSpinner v-if="!isBusCardVisible" />
  </div>
  <div v-if="isBusCardVisible" :class="elementStyles.background.screen">
    <p class="font-lato text-sm p-3.5" :class="elementStyles.text.description">
      Here are the buses for <b>{{ props.busStopName }}</b> :
    </p>

    <div v-for="item in props.busses" :key="item">
      <!--suppress JSUnresolvedReference -->
      <BusCard
        :bus-number="item.route_short_name"
        :firm-name="item.agency_name"
        :route-name="item.route_long_name"
      />
    </div>
  </div>
</template>
