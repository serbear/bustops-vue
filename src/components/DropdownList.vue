<script setup>
import { onMounted, ref } from "vue";
import { initDropdowns } from "flowbite";
const props = defineProps({
  inputBoxId: String,
  listData: Array,
  elementStyle: Object,
});
const emit = defineEmits(["itemSelectAction"]);

let x = ref(null);

const opts = {
  placement: "bottom",
  triggerType: "click",
  offsetSkidding: 0,
  offsetDistance: 0,
  delay: 300,
  ignoreClickOutsideClass: false,
  // onShow: function () {},
  // onHide: function () {},
  // onToggle: function () {},
};
const instanceOptions = {
  id: "dropdownList",
  override: true,
};
onMounted(() => {
  initDropdowns();

  x = new Dropdown(
    document.getElementById("dropdownList"),
    document.getElementById(props.inputBoxId),
    opts,
    instanceOptions,
  );
});

function dropClicked(value) {
  x.hide();
  emit("itemSelectAction", value);
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
          @click="dropClicked(item.stop_area)"
        >
          {{ item.stop_area }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
