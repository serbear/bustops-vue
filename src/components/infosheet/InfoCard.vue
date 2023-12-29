<script setup>
import { defineAsyncComponent } from "vue";
const emit = defineEmits(["RowClickedAction"]);

const props = defineProps({
  childComponent: String,
  childComponentData: Object,
  rowIndex: Number,
});
const asyComponent = defineAsyncComponent(
  () => import(`./${props.childComponent}.vue`),
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
    @row-clicked-action="RowClickedAction"
  />
</template>
