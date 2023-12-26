<script setup>
import IconSearch from "@/components/icons/IconSearch.vue";
import DropdownList from "@/components/DropdownList.vue";
import { onMounted, ref } from "vue";
import InfoTotalNumber from "@/components/InfoTotalNumber.vue";

const emit = defineEmits(["foundRegionNameChanged"]);

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

onMounted(() => {
  // GetAllRegions().then((response) => {
  //   availableRegionList.value = response;
  //   allRegionList.value = response;
  // });
});

function SearchRegion() {
  emit("foundRegionNameChanged", "region-name");
}
</script>

<template>
  <DropdownList inputBoxId="region_name" :list-data="regionList" />
  <div class="bg-bear-cyan-500">
    <p class="font-lato text-sm text-bear-cyan-1500 p-3.5">
      Enter the name of the region or select a region from the list, please.
    </p>

    <input
      id="region_name"
      class="h-9 text-sm text-bear-slate-900 bg-bear-slate-200 border-0 focus:ring-0 w-full p-3.5"
      data-dropdown-offset-distance="0"
      data-dropdown-placement="bottom"
      data-dropdown-toggle="dropdownList"
      placeholder="Region Name"
      required
      type="text"
    />
    <!--v-model="selectedRegionName"-->
    <!-- @focusin="SearchInputBoxOnFocus"-->

    <InfoTotalNumber count-object="regions" amount="-999" />

    <div class="grid grid-cols-1 gap-0">
      <button
        class="pr-5 hover:bg-bear-cyan-800 hover:text-bear-slate-200 font-bold font-lato text-base focus:outline-none h-14 w-full inline-flex items-center justify-center"
        type="button"
        @click=""
      >
        <IconSearch class="px-1" />
        Search
      </button>
      <!-- @click="SearchRegion"-->
    </div>
  </div>
</template>
