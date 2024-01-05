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
import UserOptions from "@/components/screens/UserOptions.vue";
import UserLocation from "@/components/UserLocation.vue";
import { IsInScreenList } from "@/services/ui.js";

const ScreenVisibility = ref({
  Region: false,
  Stop: false,
  Bus: false,
  UserOptions: false,
  UserLocation: true,
});

let regionName = ref(null);
let busStopName = ref(null);

const allRegionList = ref(null);
const stopList = ref(null);
const bussesList = ref(null);

const showNavigationButtons = ref(false);

onMounted(() => {
  GetAllRegions().then((response) => {
    // noinspection JSValidateTypes
    allRegionList.value = response;
  });
});

function HideAllScreens() {
  Object.entries(ScreenVisibility.value).forEach(([key]) => {
    ScreenVisibility.value[key] = false;
  });
}

function NavigateScreen(clickedNavigationButton) {
  showNavigationButtons.value = IsInScreenList(clickedNavigationButton);
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
  NavigateScreen(ScreenNamesEnum.BUS);

  GetBusesForStopOfRegion(stopId).then((response) => {
    bussesList.value = response;
  });
}
</script>

<template>
  <main>
    <div class="h-screen flex flex-col items-center bg-bear-slate-900">
      <div class="flex-1 w-96 bg-bear-red-500">
        <Header />
        <StepNavigation
          @navigation-button-clicked="NavigateScreen"
          :show-buttons="showNavigationButtons"
        />

        <UserLocation
          v-if="ScreenVisibility.UserLocation"
          @show-busses-pressed="SearchBuses"
          @search-manually-pressed="NavigateScreen(ScreenNamesEnum.REGION)"
        />

        <UserOptions v-if="ScreenVisibility.UserOptions" />

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
