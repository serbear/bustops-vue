<script setup>
import DropdownList from "@/components/DropdownList.vue";
import InfoTotalNumber from "@/components/InfoTotalNumber.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import { elementStyles } from "@/ui/stopScreen.js";
import { ref, watch } from "vue";
import { GetStopDescription } from "@/services/db.js";
import InfoSheet from "@/components/infosheet/InfoSheet.vue";

const props = defineProps({
  regionName: String,
  stops: Array,
});

const emit = defineEmits(["busStopNameChanged"]);
const stopName = ref(null);
const availableStopList = ref(null);
const stopList = ref(null);
const isSpinner = ref(false);
const isStopListVisible = ref(false);
const isKeyUp = ref(false);

function SearchStops() {
  isSpinner.value = true;
  // noinspection JSValidateTypes
  GetStopDescription(stopName.value, props.regionName)
    .then((response) => (stopList.value = response))
    .then(() => (isSpinner.value = false))
    .then(() => (isStopListVisible.value = true));
}

function SearchBuses(stopId) {
  emit("busStopNameChanged", stopName.value, stopId);
}

function setStopName(value) {
  isKeyUp.value = false;

  // Show the Search button and hide the list of founded stops,
  // if user has selected another stop name.
  if (value !== stopName.value) {
    isStopListVisible.value = false;
    stopName.value = value;
  }
}

function SetIsKeyUp(value) {
  isKeyUp.value = value;
}

watch(stopName, async (value) => {
  // Filter the list of stops when the user enters a stop name in
  // the input box.
  // Filtering is from the start of the word.
  // If the input box is empty, fill the stop list with all stop names.

  // Filter data during key press event only.

  if (value === "" || isKeyUp.value === false) {
    availableStopList.value = null;
  } else {
    // noinspection JSValidateTypes
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
      data-dropdown-toggle="stop_name_dropdown"
      placeholder=""
      required
      type="text"
      v-model="stopName"
      @keyup="SetIsKeyUp(true)"
    />

    <InfoTotalNumber
      count-object="stops"
      :amount="props.stops !== null ? props.stops.length : 0"
    />

    <div class="grid grid-cols-1 gap-0">
      <button
        class="pr-5 font-bold font-lato text-base focus:outline-none h-14 w-full inline-flex items-center justify-center"
        :class="[
          elementStyles.background.searchButton.hover,
          elementStyles.text.searchButton.hover,
        ]"
        type="button"
        @click="SearchStops"
        v-if="!isStopListVisible"
      >
        <svg
          role="status"
          class="inline w-4 h-4 me-3 text-white animate-spin"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          v-if="isSpinner"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"
          />
        </svg>
        <IconSearch class="px-1" v-if="!isSpinner" />
        Search
      </button>
    </div>

    <InfoSheet
      v-if="isStopListVisible"
      :data-array="stopList"
      leadText="There are many stops with this name. Choose one:"
      itemKeyAttribute="stop_id"
      :infoTitleName="'InfoTitleStop'"
      :element-style="elementStyles"
      @row-clicked-action="SearchBuses"
    />
  </div>
</template>
