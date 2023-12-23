<script setup>

const emit = defineEmits(["navigateBackAction"])
defineProps({
  busStopName: String
})
function NavigateBack() {
  emit("navigateBackAction")
}
</script>

<template>
  <div class="bg-bear-sand-500">
    <p class="font-lato text-sm text-bear-sand-1500">
      Select a bus, please.
    </p>
  </div>
<!--  <h1>Bus Search</h1>-->
<!--  <p>Bus stop name: {{busStopName}}</p>-->
<!--  <button type="button" @click="NavigateBack" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Go Back</button>-->

</template>

<style scoped>

</style>