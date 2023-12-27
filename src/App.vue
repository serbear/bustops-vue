<script setup>
import { onMounted, ref, watch } from "vue";
import RegionScreen from "@/components/screens/RegionScreen.vue";
import StopScreen from "@/components/screens/StopScreen.vue";
import BusScreen from "@/components/screens/BusScreen.vue";
import Header from "@/components/Header.vue";
import StepNavigation from "@/components/StepNavigation.vue";
import { GetAllRegions } from "@/services/db.js";

const ScreenVisibility = ref({
  Region: false,
  Stop: false,
  Bus: false,
});

let regionName = ref(null);
let busStopName = ref(null);

const allRegionList = ref(null);
const availableRegionList = ref(null);
const stopList = ref([
  "Stop 1",
  "Stop 2",
  "Stop 3",
  "Stop 4",
  "Stop 5",
  "Stop 6",
]);

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
  // todo: implement
  console.log(`:: region name : ${value} ::`);
  console.log(":: Search stops and switch to the Stops Screen");
}
</script>

<template>
  <main>
    <div class="h-screen flex flex-col items-center bg-bear-slate-900">
      <div class="flex-1 w-96 bg-bear-red-500">
        <Header />
        <StepNavigation @navigation-button-clicked="NavigateScreen" />

        <!--        const availableRegionList = ref(null);-->
        <RegionScreen
          v-if="ScreenVisibility.Region"
          :regions="allRegionList"
          @region-name-changed="SearchStops"
        />

        <StopScreen
          v-if="ScreenVisibility.Stop"
          :regionName="regionName"
          :stops="stopList"
        />
        <!--                @navigate-back-action="ShowRegionSearchScreen"-->
        <!--                @bus-stop-name-changed="ShowBusesSearchScreen"-->

        <BusScreen v-if="ScreenVisibility.Bus" :bus-stop-name="busStopName" />
        <!--                @navigate-back-action="ShowBusStopSearchScreen"-->
      </div>
    </div>
  </main>
</template>
