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
  <div>
    <ProgreSpinner v-if="!isBusCardVisible" />
  </div>
  <InfoSheet
    v-if="isBusCardVisible"
    :data-array="props.busses"
    :lead-text="`Here are the buses for ${props.busStopName}:`"
    :item-key-attribute="null"
    infoTitleName="InfoTitleBus"
    :element-style="elementStyles"
  />
</template>
