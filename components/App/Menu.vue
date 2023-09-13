<script setup lang="ts">
const data = defineProps({
  data: Object,
});

const menuItems = toRaw(data).data;
</script>

<template>
  <ul class="hidden md:flex gap-20">
    <li v-for="item in menuItems" :key="item._key">
      <MenuItem :item="item" />
    </li>
  </ul>
</template>
