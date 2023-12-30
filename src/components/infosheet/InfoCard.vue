<script setup>
import { defineAsyncComponent } from "vue";
const emit = defineEmits(["RowClickedAction"]);

const props = defineProps({
  titleComponent: String,
  childComponentData: Object,
  rowIndex: Number,
  elementStyle: Object,
});
const asyComponent = defineAsyncComponent(
  () => import(`./${props.titleComponent}.vue`),
);
function RowClickedAction(value) {
  emit("RowClickedAction", value);
}
</script>

<template>
  <component
    :is="asyComponent"
    :data="props.childComponentData"
    :row-index="props.rowIndex"
    :element-style="props.elementStyle"
    @row-clicked-action="RowClickedAction"
  />
</template>
