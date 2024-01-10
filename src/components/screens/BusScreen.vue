<script setup>
import { elementStyles } from "@/ui/busScreen.js";
import { ref, watch } from "vue";
// noinspection SpellCheckingInspection
import ProgreSpinner from "@/components/ProgreSpinner.vue";
import InfoSheet from "@/components/infosheet/InfoSheet.vue";

const props = defineProps({
  busStopName: String,
  busses: Array,
});

let isBusCardVisible = ref(false);
let isSpinnerVisible = ref(true);

watch(
  () => props.busses,
  (newVal) => {
    console.log(newVal);
    isSpinnerVisible = newVal === null;

    if (newVal !== null) {
      isBusCardVisible = newVal.length > 0;
    }
  },
);
</script>

<template>
  <div v-if="isSpinnerVisible">
    <ProgreSpinner
      :class="[elementStyles.background.screen, elementStyles.text.description]"
      class="pb-3.5 pt-7"
    />
    <p
      class="font-lato text-sm p-3.5 text-center"
      :class="[elementStyles.background.screen, elementStyles.text.description]"
    >
      Retrieving the bus list...
    </p>
  </div>
  <InfoSheet
    v-if="isBusCardVisible && !isSpinnerVisible"
    :data-array="props.busses"
    :lead-text="`Here are the buses for ${props.busStopName}:`"
    :item-key-attribute="null"
    :infoTitleName="'InfoTitleBus'"
    :element-style="elementStyles"
  />
  <p
    class="font-lato text-sm p-3.5 text-center"
    :class="[elementStyles.background.screen, elementStyles.text.description]"
    v-if="!isBusCardVisible && !isSpinnerVisible"
  >
    No buses were found close to the time.
  </p>
</template>
