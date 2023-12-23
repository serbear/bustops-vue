<script setup>

const emit = defineEmits(["foundRegionNameChanged"])

function SearchRegion(){
  emit("foundRegionNameChanged", "region-name");
}

</script>

<template>
  <div class="bg-bear-cyan-500">
    <p class="font-lato text-sm text-bear-cyan-1500">
      Enter the name of the region or select a region from the list, please.
    </p>

<!--    <button-->
<!--        type="button"-->
<!--        @click="SearchRegion"-->
<!--        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4-->
<!--        focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5-->
<!--        me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700-->
<!--        focus:outline-none dark:focus:ring-blue-800"-->
<!--    >-->
<!--      Search Region-->
<!--    </button>-->

  </div>

</template>

<style scoped>

</style>