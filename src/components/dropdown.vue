<script setup>
import { onMounted } from "vue";
import { initDropdowns } from "flowbite";
const props = defineProps({
  inputBoxId: String,
  listData: Array,
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
    class="z-10 hidden rounded-none w-96 bg-white text-bear-slate-900"
  >
    <ul class="h-72 overflow-y-auto" aria-labelledby="{{props.inputBoxId}}">
      <li v-for="item in props.listData" :key="item">
        <a
          href="#"
          class="flex text-sm items-center px-3.5 py-2 text-bear-cyan-1500 hover:bg-bear-cyan-800 hover:text-bear-slate-200"
        >
          {{ item }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
