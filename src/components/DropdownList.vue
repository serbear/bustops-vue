<script setup>
import { onMounted, ref } from "vue";
import { initDropdowns } from "flowbite";

const props = defineProps({
  inputBoxId: String,
  listData: Array,
  elementStyle: Object,
  listItemTextAttribute: String,
});
const emit = defineEmits(["itemSelectAction"]);
const opts = {
  placement: "bottom",
  triggerType: "click",
  offsetSkidding: 0,
  offsetDistance: 0,
  delay: 300,
  ignoreClickOutsideClass: false,
};
const instanceOptions = {
  id: `${props.listItemTextAttribute}_dropdown`,
  override: true,
};
const listId = ref(`${props.listItemTextAttribute}_dropdown`);

let ddList = ref(null);

onMounted(() => {
  initDropdowns();

  ddList = new Dropdown(
    document.getElementById(listId.value),
    document.getElementById(props.inputBoxId),
    opts,
    instanceOptions,
  );
});

function dropClicked(value) {
  ddList.hide();
  emit("itemSelectAction", value);
}
</script>

<template>
  <div
    :id="listId"
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
          @click="dropClicked(item[props.listItemTextAttribute])"
        >
          {{ item[props.listItemTextAttribute] }}
        </a>
      </li>
    </ul>
  </div>
</template>
