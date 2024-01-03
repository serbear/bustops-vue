<script setup>
// noinspection SpellCheckingInspection
import ProgreSpinner from "@/components/ProgreSpinner.vue";
import { onMounted, ref } from "vue";
import { GetGeoLocation } from "@/services/geoloc.js";
import { GetRegionAndNearestStop } from "@/services/db.js";

const emit = defineEmits(["ShowBussesPressed"]);
const isLocatingPosition = ref(true);

let regionName = ref(null);
let stopName = ref(null);
let stopId = ref(null);

onMounted(() => {
  GetGeoLocation((coordinates) => {
    if (coordinates.hasOwnProperty("error")) {
      isLocatingPosition.value = false;
      // todo: show error message
      console.log(coordinates.error);
    } else {
      GetRegionAndStop(coordinates);
    }
  });
});
function GetRegionAndStop(coordinates) {
  GetRegionAndNearestStop(coordinates).then((response) => {
    isLocatingPosition.value = false;
    // noinspection JSUnresolvedReference
    regionName.value = response[0].stop_area;
    stopName.value = response[0].stop_name;
    stopId.value = response[0].stop_id;
  });
}
function ShowBussesPressed() {
  emit("ShowBussesPressed", stopName.value, stopId.value);
}
</script>

<template>
  <div>
    <ProgreSpinner v-if="isLocatingPosition" />
  </div>
  <div>
    <p>Your region:</p>
    <p>{{ regionName }}</p>
    <p>Nearest stop:</p>
    <p>{{ stopName }}</p>
    <button @click="ShowBussesPressed">Show Buses</button>
  </div>
</template>
