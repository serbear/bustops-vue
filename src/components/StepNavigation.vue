<script setup>
import { ScreenNamesEnum } from "@/enums.js";

const emit = defineEmits(["navigationButtonClicked"]);

function NavigationClicked(targetScreenName) {
  emit("navigationButtonClicked", targetScreenName);
}
</script>

<template>
  <div class="flex justify-center h-fit">
    <button
      type="button"
      class="text-bear-cyan-1500 bg-bear-cyan-500 hover:bg-bear-cyan-800 hover:text-bear-slate-200 font-bold font-lato text-base focus:outline-none h-14 w-full"
      @click="NavigationClicked(ScreenNamesEnum.REGION)"
    >
      Region
    </button>
    <button
      type="button"
      class="text-bear-yellow-1500 bg-bear-yellow-500 hover:bg-bear-yellow-800 hover:text-bear-slate-200 font-bold font-lato text-base focus:outline-none h-14 w-full"
      @click="NavigationClicked(ScreenNamesEnum.STOP)"
    >
      Stop
    </button>
    <button
      type="button"
      class="text-bear-sand-1500 bg-bear-sand-500 hover:bg-bear-sand-800 hover:text-bear-slate-200 font-bold font-lato text-base focus:outline-none h-14 w-full"
      @click="NavigationClicked(ScreenNamesEnum.BUS)"
    >
      Bus
    </button>
  </div>
</template>

<style scoped></style>
