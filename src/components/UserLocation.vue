<script setup>
// noinspection SpellCheckingInspection
import ProgreSpinner from "@/components/ProgreSpinner.vue";
import { onMounted, ref } from "vue";
import { GetGeoLocation } from "@/services/geoloc.js";
import { GetRegionAndNearestStop } from "@/services/db.js";
import { elementStyles } from "@/ui/userLocation.js";
import IconBus from "@/components/icons/IconBus.vue";
import Message from "@/components/Message.vue";
import IconSearch from "@/components/icons/IconSearch.vue";

const emit = defineEmits(["ShowBussesPressed"]);
const isLocatingPosition = ref(true);
const isError = ref(false);

let errorMessage = ref(null);
let regionName = ref(null);
let stopName = ref(null);
let stopId = ref(null);

onMounted(() => {
  GetGeoLocation((coordinates) => {
    if (coordinates.hasOwnProperty("error")) {
      // todo: show error message
      errorMessage.value = coordinates.error;
      isError.value = true;
      isLocatingPosition.value = false;
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
function SearchManuallyPressed() {}
</script>

<template>
  <div>
    <ProgreSpinner v-if="isLocatingPosition" />
  </div>
  <!--  Cannot determine location -->
  <div v-if="isError">
    <Message
      :message-text="errorMessage"
      :message-caption="'Navigator failure'"
      :message-type="'error'"
      :element-style="elementStyles"
    />
    <button
      class="bg-bear-red-800 pr-5 font-bold font-lato text-base focus:outline-none h-14 w-full inline-flex items-center justify-center"
      :class="[
        elementStyles.text.showBussesButton.normal,
        elementStyles.text.showBussesButton.hover,
        elementStyles.background.showBussesButton.normal,
      ]"
      type="button"
      @click="SearchManuallyPressed"
    >
      <IconSearch class="px-1" />
      Search Manually
    </button>
  </div>
  <!--  Can determine location -->
  <div v-if="!isError">
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
