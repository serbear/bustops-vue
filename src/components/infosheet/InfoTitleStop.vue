<script setup>
const props = defineProps({
  data: Object,
  rowIndex: Number,
});
const emit = defineEmits(["RowClickedAction"]);
function RowClickedAction(value) {
  emit("RowClickedAction", value);
}
</script>
<template>
  <div
    class="grid grid-rows-2 gap-0 hover:bg-bear-sand-800 hover:cursor-pointer"
    @click="RowClickedAction(props.data.stop_id)"
  >
    <div class="grid grid-cols-5 gap-0">
      <div class="px-3.5">#{{ props.rowIndex + 1 }}</div>
      <!--suppress JSUnresolvedReference -->
      <div class="col-span-4">
        {{ props.data.stop_desc === null ? "N/A" : props.data.stop_desc }}
      </div>
    </div>
    <div class="px-3.5">{{ props.data.stop_coordinates }}</div>
  </div>
</template>
