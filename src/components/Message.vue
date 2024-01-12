<script setup>
import IconExclamation from "@/components/icons/IconExclamation.vue";

const props = defineProps({
  messageText: String,
  messageCaption: String,
  messageType: String,
  elementStyle: Object,
});
</script>

<template>
  <div
    class="grid grid-rows-4 gap-1.5 justify-items-center mt-7"
    :class="[
      props.elementStyle.background.screen,
      props.elementStyle.text.description,
    ]"
  >
    <div>
      <IconExclamation v-if="props.messageType === 'error'" />
    </div>
    <div>
      <p class="font-bold font-lato text-base">{{ props.messageCaption }}</p>
    </div>
    <div>
      <p class="font-lato text-sm">{{ props.messageText }}</p>
    </div>
  </div>
</template>
