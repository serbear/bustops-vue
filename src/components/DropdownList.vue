<script setup>
import { onMounted } from "vue";
import { initDropdowns } from "flowbite";
const props = defineProps({
  inputBoxId: String,
  listData: Array,
  elementStyle: Object,
});

// initialize components based on data attribute selectors
onMounted(() => {
  initDropdowns();

  // const searchInputBox = document.getElementById(props.inputBoxId);
  // const dropdownMenu = document.getElementById("dropdownList");

  // if (searchInputBox && dropdownMenu) {
  //   searchInputBox.addEventListener("focusin", () => {
  //     // dropdownMenu.show();
  //   });
  //   searchInputBox.addEventListener("focusout", () => {
  //     // dropdownMenu.hide();
  //   });
  // }
});

function dropClicked() {
  console.log("dropClicked");
}
</script>

<template>
  <!-- Dropdown menu -->
  <div
    id="dropdownList"
    class="z-10 hidden rounded-none w-96 bg-white"
    :class="props.elementStyle.text.inputBox"
  >
    <ul class="h-72 overflow-y-auto" aria-labelledby="{{props.inputBoxId}}">
      <li v-for="item in props.listData" :key="item">
        <a
          href="#"
          class="flex text-sm items-center px-3.5 py-2"
          :class="[
            props.elementStyle.text.listItem.normal,
            props.elementStyle.text.listItem.hover,
            props.elementStyle.background.listItem.hover,
          ]"
        >
          {{ item }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
