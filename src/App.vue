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
import UserLocation from "@/components/UserLocation.vue";
import { IsInScreenList } from "@/services/ui.js";

const ScreenVisibility = ref({
  Region: false,
  Stop: false,
  Bus: false,
  UserLocation: true,
});
const regionName = ref(null);
const busStopName = ref(null);
const currentScreen = ref(ScreenNamesEnum.REGION);
const openScreens = ref([ScreenNamesEnum.REGION]);
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

function NavigateScreen(screenName) {
  showNavigationButtons.value = IsInScreenList(screenName);
  HideAllScreens();
  ScreenVisibility.value[screenName] = true;

  if (openScreens.value.indexOf(screenName) === -1) {
    openScreens.value.push(screenName);
  }
  currentScreen.value = screenName;
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

onMounted(() => {
  document.body.style.backgroundColor = "#433E3E";
});
</script>

<template>
  <main>
    <div class="h-screen flex flex-col items-center bg-bear-slate-900">
      <div class="flex-1 w-96 bg-bear-red-500">
        <Header />

        <StepNavigation
          @navigation-button-clicked="NavigateScreen"
          :show-buttons="showNavigationButtons"
          :open-screens="openScreens"
          :current-screen="currentScreen"
        />

        <div v-show="ScreenVisibility.UserLocation">
          <UserLocation
            @show-busses-pressed="SearchBuses"
            @search-manually-pressed="NavigateScreen(ScreenNamesEnum.REGION)"
          />
        </div>

        <div v-show="ScreenVisibility.Region">
          <RegionScreen
            :regions="allRegionList"
            @region-name-changed="SearchStops"
          />
        </div>

        <div v-show="ScreenVisibility.Stop">
          <StopScreen
            :regionName="regionName"
            :stops="stopList"
            @bus-stop-name-changed="SearchBuses"
          />
        </div>

        <div v-show="ScreenVisibility.Bus">
          <BusScreen :bus-stop-name="busStopName" :busses="bussesList" />
        </div>
      </div>
    </div>
  </main>
</template>
