<script setup lang="ts">
const data = defineProps({
  data: Object,
});

const menuItems = toRaw(data).data;

// const onHoverMenuItemParent = () => {

// }
</script>

<template>
  <div class="hidden md:flex gap-20">
    <div v-for="item in menuItems" :key="item._key">
      <NuxtLink
        :to="item.linkRedirection"
        class="cursor-pointer text-lg font-semibold text-primary-01 hover:text-secondary-01"
      >
        {{ item.name }}
      </NuxtLink>
    </div>
  </div>
</template>
