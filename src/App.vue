<script setup>
import { onMounted, ref } from "vue";
import RegionScreen from "@/components/screens/RegionScreen.vue";
import StopScreen from "@/components/screens/StopScreen.vue";
import BusScreen from "@/components/screens/BusScreen.vue";
import Header from "@/components/Header.vue";
import StepNavigation from "@/components/StepNavigation.vue";

const ScreenVisibility = ref({
  Region: false,
  Stop: false,
  Bus: false,
});

let regionName = ref(null);
let busStopName = ref(null);

const regionList = ref([
  "Region 1",
  "Region 2",
  "Region 3",
  "Region 4",
  "Region 5",
  "Region 6",
  "Region 7",
  "Region 8",
  "Region 9",
  "Region 10",
  "Region 11",
  "Region 12",
  "Region 13",
  "Region 14",
]);
const stopList = ref([
  "Stop 1",
  "Stop 2",
  "Stop 3",
  "Stop 4",
  "Stop 5",
  "Stop 6",
]);

onMounted(() => {
  console.log("Retrieving of regions from data base... todo");
  // GetAllRegions().then((response) => {
  //   availableRegionList.value = response;
  //   allRegionList.value = response;
  // });
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
</script>

<template>
  <main>
    <div class="h-screen flex flex-col items-center bg-bear-slate-900">
      <div class="flex-1 w-96 bg-bear-red-500">
        <Header />
        <StepNavigation @navigation-button-clicked="NavigateScreen" />

        <RegionScreen v-if="ScreenVisibility.Region" :regions="regionList" />
        <!-- @found-region-name-changed="ShowBusStopSearchScreen" />-->

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
