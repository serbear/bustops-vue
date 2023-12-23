<script setup>

defineProps({
  regionName: String
})

const emit = defineEmits(["busStopNameChanged", "navigateBackAction"])

function SearchBusStop(){
  console.log("go to database")
}

function NavigateBack() {
  emit("navigateBackAction")
}

/**
 * Go to the bus stop's bus list.
 */
function GetBuses(){
  emit("busStopNameChanged", "bus-stop-name")
}

</script>

<template>
  <div class="bg-bear-yellow-500">
    <p class="font-lato text-sm text-bear-yellow-1500">
      Enter the name of the bus stop or select a bus stop from the list, please.
    </p>
  </div>
<!--  <h1>Bus Stop Search</h1>-->
<!--  <p>Region: {{regionName}}</p>-->

<!--  <button type="button" @click="NavigateBack" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Go Back</button>-->
<!--  <button type="button" @click="SearchBusStop" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Search Bus Stop</button>-->
<!--  <button type="button" @click="GetBuses" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">:: pick up bus ::</button>-->

</template>

<style scoped>

</style>