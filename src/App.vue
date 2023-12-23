<script setup>
import {ref} from "vue"
import RegionScreen from "@/components/RegionScreen.vue"
import StopScreen from "@/components/StopScreen.vue"
import BusScreen from "@/components/BusScreen.vue";
import Header from "@/components/Header.vue";
import StepNavigation from "@/components/StepNavigation.vue";

const ScreenVisibility = ref({
  Region: false,
  Stop: false,
  Bus: false
})

let regionName = ref(null)
let busStopName = ref(null)

function HideAllScreens() {
  Object.entries(ScreenVisibility.value).forEach(([key]) => {
    ScreenVisibility.value[key] = false
  });
}

function NavigateScreen(clickedNavigationButton) {
  HideAllScreens()
  ScreenVisibility.value[clickedNavigationButton] = true
}

</script>

<template>
  <main>

    <div class="h-screen flex flex-col items-center bg-bear-slate-900">
      <div class="flex-1 w-96 bg-bear-red-500">

        <Header/>
        <StepNavigation @navigation-button-clicked="NavigateScreen"/>

        <RegionScreen v-if="ScreenVisibility.Region"/>
        <!-- @found-region-name-changed="ShowBusStopSearchScreen" />-->

        <StopScreen v-if="ScreenVisibility.Stop" :regionName="regionName"/>
        <!--                @navigate-back-action="ShowRegionSearchScreen"-->
        <!--                @bus-stop-name-changed="ShowBusesSearchScreen"-->

        <BusScreen v-if="ScreenVisibility.Bus" :bus-stop-name="busStopName"/>
        <!--                @navigate-back-action="ShowBusStopSearchScreen"-->

      </div>
    </div>


    <!--    <div class="container" >-->

    <!--      <div class="row d-flex justify-content-center">-->
    <!--        <div  class="col-md-6 bg-light">-->
    <!--          <RegionSearchBox />-->
    <!--        </div>-->
    <!--      </div>-->


    <!--    </div>-->

    <!--    <div class="dropdown">-->
    <!--      <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">Dropdown <span class="caret"></span></button>-->
    <!--      <ul class="dropdown-menu">-->
    <!--        <li class="dropdown-item"><a href="#">Item</a></li>-->
    <!--        <li class="dropdown-item"><a href="#">Item</a></li>-->
    <!--        <li class="dropdown-item"><a href="#">Item</a></li>-->
    <!--        <li class="dropdown-item"><a href="#">Item</a></li>-->
    <!--        <li class="dropdown-item"><a href="#">Item</a></li>-->
    <!--        <li class="dropdown-item"><a href="#">Item</a></li>-->
    <!--        <li class="dropdown-item"><a href="#">Item</a></li>-->
    <!--        <li class="dropdown-item"><a href="#">Item</a></li>-->
    <!--        <li class="dropdown-item"><a href="#">Item</a></li>-->
    <!--        <li class="dropdown-item"><a href="#">Item</a></li>-->
    <!--        <li class="dropdown-item"><a href="#">Item</a></li>-->
    <!--        <li class="dropdown-item"><a href="#">Item</a></li>-->
    <!--      </ul>-->
    <!--    </div>-->


  </main>
</template>


