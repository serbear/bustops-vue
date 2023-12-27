<script setup>
import DropdownList from "@/components/DropdownList.vue";
import InfoTotalNumber from "@/components/InfoTotalNumber.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import { elementStyles } from "@/ui/stopScreen.js";
import { ref, watch } from "vue";

const props = defineProps({
  regionName: String,
  stops: Array,
});

const emit = defineEmits(["busStopNameChanged"]);
let stopName = ref(null);
const availableStopList = ref(null);

function SearchBuses() {
  emit("busStopNameChanged", stopName.value);
}

function setStopName(value) {
  stopName.value = value;
}

watch(stopName, async (value) => {
  // Filter the list of stops when the user enters a stop name in
  // the input box.
  // Filtering is from the start of the word.
  // If the input box is empty, fill the stop list with all stop names.

  if (value === "") {
    availableStopList.value = null;
  } else {
    availableStopList.value = props.stops.filter((s) =>
      s.stop_name.startsWith(value),
    );
  }
});
</script>

<template>
  <DropdownList
    inputBoxId="stop_name"
    :list-data="availableStopList === null ? props.stops : availableStopList"
    list-item-text-attribute="stop_name"
    :element-style="elementStyles"
    @item-select-action="setStopName"
  />
  <div :class="elementStyles.background.screen">
    <p class="font-lato text-sm p-3.5" :class="elementStyles.text.description">
      Enter the name of the bus stop or select a bus stop from the list, please.
    </p>

    <input
      id="stop_name"
      class="h-9 text-sm border-0 focus:ring-0 w-full p-3.5"
      :class="[elementStyles.text.inputBox, elementStyles.background.inputBox]"
      data-dropdown-offset-distance="0"
      data-dropdown-placement="bottom"
      data-dropdown-toggle="dropdownList"
      placeholder=""
      required
      type="text"
      v-model="stopName"
    />

    <InfoTotalNumber count-object="stops" amount="-888" />

    <div class="grid grid-cols-1 gap-0">
      <button
        class="pr-5 font-bold font-lato text-base focus:outline-none h-14 w-full inline-flex items-center justify-center"
        :class="[
          elementStyles.background.searchButton.hover,
          elementStyles.text.searchButton.hover,
        ]"
        type="button"
        @click="SearchBuses"
      >
        <IconSearch class="px-1" />
        Search
      </button>
      <!-- @click="SearchStops"-->
    </div>
  </div>

  <!--  <div class="bg-bear-yellow-500">-->
  <!--    -->
  <!--    <p class="font-lato text-sm text-bear-yellow-1500">-->
  <!--      Enter the name of the bus stop or select a bus stop from the list, please.-->
  <!--    </p>-->
  <!--  </div>-->
  <!--  <h1>Bus Stop Search</h1>-->
  <!--  <p>Region: {{regionName}}</p>-->

  <!--  <button type="button" @click="NavigateBack" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Go Back</button>-->
  <!--  <button type="button" @click="SearchBusStop" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Search Bus Stop</button>-->
  <!--  <button type="button" @click="GetBuses" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">:: pick up bus ::</button>-->
</template>
