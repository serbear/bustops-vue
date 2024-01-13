<script setup>
import IconMap from "@/components/icons/IconMap.vue";

const props = defineProps({
  data: Object,
  rowIndex: Number,
  elementStyle: Object,
});
const emit = defineEmits(["RowClickedAction"]);
function RowClickedAction(value) {
  emit("RowClickedAction", value);
}
</script>
<template>
  <div
    class="grid grid-rows-2 gap-0 hover:cursor-pointer"
    :class="[
      props.elementStyle.text.description,
      props.elementStyle.background.screen,
      props.elementStyle.background.listItem.hover,
    ]"
    @click="RowClickedAction(props.data.stop_id)"
  >
    <div class="flex py-1.5">
      <div class="flex-none px-3.5 font-roboto-slab text-sm font-bold">
        <span class="text-xs">#</span> {{ props.rowIndex + 1 }}
      </div>
      <!--suppress JSUnresolvedReference -->
      <div class="font-lato text-sm">
        {{ props.data.stop_desc === null ? "N/A" : props.data.stop_desc }}
      </div>
    </div>
    <div class="px-3.5 font-lato text-xs">
      <IconMap class="inline flex-none mb-0.5" />
      {{ props.data.stop_coordinates }}
    </div>
  </div>
</template>
