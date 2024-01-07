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

watch(
  () => props.busses,
  (newVal) => {
    isBusCardVisible = newVal !== null;
  },
);
</script>

<template>
  <div v-if="!isBusCardVisible">
    <ProgreSpinner
      v-if="!isBusCardVisible"
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
    v-if="isBusCardVisible"
    :data-array="props.busses"
    :lead-text="`Here are the buses for ${props.busStopName}:`"
    :item-key-attribute="null"
    :infoTitleName="'InfoTitleBus'"
    :element-style="elementStyles"
  />
</template>
