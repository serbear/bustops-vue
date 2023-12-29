<script setup>
import InfoCard from "@/components/infosheet/InfoCard.vue";

const props = defineProps({
  leadText: String,
  dataArray: Array,
});
const emit = defineEmits(["RowClickedAction"]);
function RowClickedActionEmit(value) {
  emit("RowClickedAction", value);
}
</script>

<template>
  <div v-if="props.leadText !== null">
    <p class="font-lato text-sm p-3.5">{{ props.leadText }}</p>
  </div>
  <div>
    <!--    <SeparatorCircle />-->
    <div v-for="(item, index) in props.dataArray" :key="item.stop_id">
      <InfoCard
        :child-component="`InfoTitleStop`"
        :child-component-data="item"
        :row-index="index"
        @row-clicked-action="RowClickedActionEmit"
      />
    </div>
  </div>
</template>
