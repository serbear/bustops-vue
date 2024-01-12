<script setup>
import IconSearch from "@/components/icons/IconSearch.vue";
import DropdownList from "@/components/DropdownList.vue";
import InfoTotalNumber from "@/components/InfoTotalNumber.vue";
import { elementStyles } from "@/ui/regionScreen.js";
import { ref, watch } from "vue";
import IconTrashBin from "@/components/icons/IconTrashBin.vue";

const emit = defineEmits(["regionNameChanged"]);
const props = defineProps({
  regions: Array,
});
let regionName = ref(null);
const availableRegionList = ref(null);
const isSearchButtonDisabled = ref(true);

function SearchRegion() {
  emit("regionNameChanged", regionName.value);
}

function setRegionName(value) {
  regionName.value = value;
  isSearchButtonDisabled.value = value === "" || value === null;
}

watch(regionName, async (value) => {
  // Filter the list of regions when the user enters a region name in
  // the input box.
  // Filtering is from the start of the word.
  // If the input box is empty, fill the region list with all region names.

  if (value === "") {
    availableRegionList.value = null;
  } else {
    // noinspection JSValidateTypes,JSUnresolvedReference
    availableRegionList.value = props.regions.filter((s) =>
      s.stop_area.toLowerCase().startsWith(value.toLowerCase()),
    );
  }
});
</script>

<template>
  <DropdownList
    inputBoxId="region_name"
    :list-data="
      availableRegionList === null ? props.regions : availableRegionList
    "
    list-item-text-attribute="stop_area"
    :element-style="elementStyles"
    @item-select-action="setRegionName"
  />
  <div :class="elementStyles.background.screen">
    <p class="font-lato text-sm p-3.5" :class="elementStyles.text.description">
      Enter the name of the region or select a region from the list, please.
    </p>

    <div class="relative">
      <input
        id="region_name"
        class="h-9 text-sm border-0 focus:ring-0 w-full p-3.5"
        :class="[
          elementStyles.text.inputBox,
          elementStyles.background.inputBox,
        ]"
        data-dropdown-offset-distance="0"
        data-dropdown-placement="bottom"
        data-dropdown-toggle="stop_area_dropdown"
        placeholder=""
        required
        type="text"
        v-model="regionName"
      />
      <button
        class="bg-bear-slate-200 absolute inset-y-0 right-1.5"
        type="button"
        @click="setRegionName('')"
      >
        <IconTrashBin />
      </button>
    </div>

    <InfoTotalNumber
      count-object="regions"
      :amount="props.regions !== null ? props.regions.length : 0"
    />

    <div class="grid grid-cols-1 gap-0">
      <button
        class="pr-5 font-bold font-lato text-base focus:outline-none h-14 w-full inline-flex items-center justify-center"
        :disabled="isSearchButtonDisabled"
        :class="
          isSearchButtonDisabled
            ? [elementStyles.text.searchButton.disabled]
            : [
                elementStyles.background.searchButton.hover,
                elementStyles.text.searchButton.hover,
                elementStyles.text.searchButton.normal,
              ]
        "
        type="button"
        @click="SearchRegion"
      >
        <IconSearch class="px-1" />
        Search
      </button>
    </div>
  </div>
</template>
