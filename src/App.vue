<script setup>
import { onMounted, ref } from "vue";
import RegionScreen from "@/components/screens/RegionScreen.vue";
import StopScreen from "@/components/screens/StopScreen.vue";
import BusScreen from "@/components/screens/BusScreen.vue";
import Header from "@/components/Header.vue";
import StepNavigation from "@/components/StepNavigation.vue";
import {
  GetAllRegions,
  GetRegionStops,
  GetBusesForStopOfRegion,
} from "@/services/db.js";
import { ScreenNamesEnum } from "@/enums.js";

const ScreenVisibility = ref({
  Region: false,
  Stop: false,
  Bus: false,
});

let regionName = ref(null);
let busStopName = ref(null);

const allRegionList = ref(null);
const stopList = ref(null);
const bussesList = ref(null);

onMounted(() => {
  GetAllRegions().then((response) => {
    allRegionList.value = response;
  });
});

function HideAllScreens() {
  Object.entries(ScreenVisibility.value).forEach(([key]) => {
    ScreenVisibility.value[key] = false;
  });
}

function NavigateScreen(clickedNavigationButton) {
  HideAllScreens();
  ScreenVisibility.value[clickedNavigationButton] = true;
}

function SearchStops(value) {
  regionName.value = value;
  // Find stops in the region.
  GetRegionStops(value).then((response) => (stopList.value = response));
  // Switch to the Stops Screen.
  NavigateScreen(ScreenNamesEnum.STOP);
}
function SearchBuses(stopName, stopId) {
  busStopName.value = stopName;
  GetBusesForStopOfRegion(stopId).then((response) => {
    bussesList.value = response;
  });
  NavigateScreen(ScreenNamesEnum.BUS);
}
</script>

<template>
  <main>
    <div class="h-screen flex flex-col items-center bg-bear-slate-900">
      <div class="flex-1 w-96 bg-bear-red-500">
        <Header />
        <StepNavigation @navigation-button-clicked="NavigateScreen" />

        <RegionScreen
          v-if="ScreenVisibility.Region"
          :regions="allRegionList"
          @region-name-changed="SearchStops"
        />

        <StopScreen
          v-if="ScreenVisibility.Stop"
          :regionName="regionName"
          :stops="stopList"
          @bus-stop-name-changed="SearchBuses"
        />

        <BusScreen
          v-if="ScreenVisibility.Bus"
          :bus-stop-name="busStopName"
          :busses="bussesList"
        />
      </div>
    </div>
  </main>
</template>
