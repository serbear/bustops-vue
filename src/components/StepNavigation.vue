<script setup>
import { ScreenNamesEnum } from "@/enums.js";

const props = defineProps({
  showButtons: Boolean,
});
const emit = defineEmits(["navigationButtonClicked"]);
function NavigationClicked(targetScreenName) {
  emit("navigationButtonClicked", targetScreenName);
}
</script>

<template>
  <div class="flex justify-center h-fit">
    <button
      type="button"
      :class="{ 'h-2': !props.showButtons, 'h-14': props.showButtons }"
      class="text-bear-cyan-1500 bg-bear-cyan-500 hover:bg-bear-cyan-800 hover:text-bear-slate-200 font-bold font-lato text-base focus:outline-none w-full"
      @click="NavigationClicked(ScreenNamesEnum.REGION)"
    >
      {{ props.showButtons ? "Region" : "" }}
    </button>
    <button
      type="button"
      :class="{ 'h-2': !props.showButtons, 'h-14': props.showButtons }"
      class="text-bear-yellow-1500 bg-bear-yellow-500 hover:bg-bear-yellow-800 hover:text-bear-slate-200 font-bold font-lato text-base focus:outline-none w-full"
      @click="NavigationClicked(ScreenNamesEnum.STOP)"
    >
      {{ props.showButtons ? "Stop" : "" }}
    </button>
    <button
      type="button"
      :class="{ 'h-2': !props.showButtons, 'h-14': props.showButtons }"
      class="text-bear-sand-1500 bg-bear-sand-500 hover:bg-bear-sand-800 hover:text-bear-slate-200 font-bold font-lato text-base focus:outline-none w-full"
      @click="NavigationClicked(ScreenNamesEnum.BUS)"
    >
      {{ props.showButtons ? "Bus" : "" }}
    </button>
  </div>
</template>

<style scoped></style>
