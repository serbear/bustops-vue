<script setup>
// noinspection SpellCheckingInspection
import ProgreSpinner from "@/components/ProgreSpinner.vue";
import { onMounted, ref } from "vue";
import { GetGeoLocation } from "@/services/geoloc.js";
import { GetRegionAndNearestStop } from "@/services/db.js";
import { elementStyles } from "@/ui/userLocation.js";
import IconBus from "@/components/icons/IconBus.vue";

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
    <p
      class="text-sm text-center py-3.5"
      :class="elementStyles.text.description"
    >
      Your region:
    </p>
    <p
      class="text-lg text-center font-bold"
      :class="elementStyles.text.regionAndStop.normal"
    >
      {{ regionName }}
    </p>
    <p
      class="text-sm text-center py-3.5"
      :class="elementStyles.text.description"
    >
      Nearest stop:
    </p>
    <p
      class="text-lg text-center font-bold"
      :class="elementStyles.text.regionAndStop.normal"
    >
      {{ stopName }}
    </p>
    <div class="pt-7">
      <button
        class="bg-bear-red-800 pr-5 font-bold font-lato text-base focus:outline-none h-14 w-full inline-flex items-center justify-center"
        :class="[
          elementStyles.text.showBussesButton.normal,
          elementStyles.text.showBussesButton.hover,
          elementStyles.background.showBussesButton.normal,
        ]"
        type="button"
        @click="ShowBussesPressed"
      >
        <IconBus class="px-1" />
        Show Buses
      </button>
    </div>
  </div>
</template>
