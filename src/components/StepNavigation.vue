<script setup>
import { ScreenNamesEnum } from "@/enums.js";

// noinspection JSCheckFunctionSignatures
const props = defineProps({
  showButtons: Boolean,
  openScreens: Array,
  currentScreen: ScreenNamesEnum,
});
const emit = defineEmits(["navigationButtonClicked"]);

function GetDisableStatusForButton(screenName) {
  // noinspection JSUnresolvedReference
  if (props.openScreens.indexOf(screenName) === -1) {
    /*
    If the screen has not yet been opened, the button is inactive.
    */
    return true;
  } else {
    // noinspection JSUnresolvedReference
    if (props.openScreens.indexOf(screenName) !== -1) {
      /*
        If the screen has already been opened.
        */
      if (props.currentScreen === screenName) {
        // The screen is current.
        return true;
      } else if (props.currentScreen !== screenName) {
        // The screen is not current.
        return false;
      }
    }
  }
}

function NavigationClicked(targetScreenName) {
  emit("navigationButtonClicked", targetScreenName);
}
</script>

<template>
  <div class="flex justify-center h-fit">
    <button
      type="button"
      :disabled="GetDisableStatusForButton(ScreenNamesEnum.REGION)"
      :class="{
        'h-2': !props.showButtons,
        'h-14': props.showButtons,
        'hover:bg-bear-cyan-800 hover:text-bear-slate-200':
          !GetDisableStatusForButton(ScreenNamesEnum.REGION),
      }"
      class="text-bear-cyan-1500 bg-bear-cyan-500 font-bold font-lato text-base focus:outline-none w-full"
      @click="NavigationClicked(ScreenNamesEnum.REGION)"
    >
      {{ props.showButtons ? "Region" : "" }}
    </button>
    <button
      type="button"
      :disabled="GetDisableStatusForButton(ScreenNamesEnum.STOP)"
      :class="{
        'h-2': !props.showButtons,
        'h-14': props.showButtons,
        'hover:bg-bear-yellow-800 hover:text-bear-slate-200':
          !GetDisableStatusForButton(ScreenNamesEnum.STOP),
      }"
      class="text-bear-yellow-1500 bg-bear-yellow-500 font-bold font-lato text-base focus:outline-none w-full"
      @click="NavigationClicked(ScreenNamesEnum.STOP)"
    >
      {{ props.showButtons ? "Stop" : "" }}
    </button>
    <button
      type="button"
      :disabled="GetDisableStatusForButton(ScreenNamesEnum.BUS)"
      :class="{
        'h-2': !props.showButtons,
        'h-14': props.showButtons,
        'hover:bg-bear-sand-800 hover:text-bear-slate-200':
          !GetDisableStatusForButton(ScreenNamesEnum.BUS),
      }"
      class="text-bear-sand-1500 bg-bear-sand-500 font-bold font-lato text-base focus:outline-none w-full"
      @click="NavigationClicked(ScreenNamesEnum.BUS)"
    >
      {{ props.showButtons ? "Bus" : "" }}
    </button>
  </div>
</template>
