<script setup>
import IconSearch from "@/components/icons/IconSearch.vue";
import DropdownList from "@/components/DropdownList.vue";
import InfoTotalNumber from "@/components/InfoTotalNumber.vue";
import { elementStyles } from "@/ui/regionScreen.js";
import { ref } from "vue";

const emit = defineEmits(["regionNameChanged"]);
const props = defineProps({
  regions: Array,
});
let regionName = ref(null);

function SearchRegion() {
  emit("regionNameChanged", regionName.value);
}

function setRegionName(value) {
  regionName.value = value;
}
</script>

<template>
  <DropdownList
    inputBoxId="region_name"
    :list-data="props.regions"
    :element-style="elementStyles"
    @item-select-action="setRegionName"
  />
  <!--  <div class="bg-bear-cyan-500">-->
  <div :class="elementStyles.background.screen">
    <p class="font-lato text-sm p-3.5" :class="elementStyles.text.description">
      Enter the name of the region or select a region from the list, please.
    </p>

    <input
      id="region_name"
      class="h-9 text-sm border-0 focus:ring-0 w-full p-3.5"
      :class="[elementStyles.text.inputBox, elementStyles.background.inputBox]"
      data-dropdown-offset-distance="0"
      data-dropdown-placement="bottom"
      data-dropdown-toggle="dropdownList"
      placeholder=""
      required
      type="text"
      v-model="regionName"
    />

    <InfoTotalNumber count-object="regions" amount="-999" />

    <div class="grid grid-cols-1 gap-0">
      <button
        class="pr-5 font-bold font-lato text-base focus:outline-none h-14 w-full inline-flex items-center justify-center"
        :class="[
          elementStyles.background.searchButton.hover,
          elementStyles.text.searchButton.hover,
        ]"
        type="button"
        @click="SearchRegion"
      >
        <IconSearch class="px-1" />
        Search
      </button>
    </div>
  </div>
</template>