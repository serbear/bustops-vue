<script setup>
import InfoCard from "@/components/infosheet/InfoCard.vue";

const props = defineProps({
  leadText: String,
  dataArray: Array,
  itemKeyAttribute: String,
  infoTitleName: String,
  elementStyle: Object,
});
const emit = defineEmits(["RowClickedAction"]);
function RowClickedActionEmit(value) {
  emit("RowClickedAction", value);
}
</script>

<template>
  <div v-if="props.leadText !== null">
    <p
      class="font-lato text-sm p-3.5"
      :class="[
        props.elementStyle.background.screen,
        props.elementStyle.text.description,
      ]"
    >
      {{ props.leadText }}
    </p>
  </div>
  <div>
    <!--    <SeparatorCircle />-->
    <div
      v-for="(item, index) in props.dataArray"
      :key="
        props.itemKeyAttribute === null ? index : item[props.itemKeyAttribute]
      "
    >
      <InfoCard
        :title-component="props.infoTitleName"
        :child-component-data="item"
        :row-index="index"
        :element-style="props.elementStyle"
        @row-clicked-action="RowClickedActionEmit"
      />
    </div>
  </div>
</template>
