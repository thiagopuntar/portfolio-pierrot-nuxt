<script setup lang="ts">
const { item } = defineProps({
  item: { type: Object as PropType<IMenuItem>, required: true },
});
</script>

<template>
  <div v-if="item?.subMenu" class="group">
    <span
      class="mt-4 md:inline-block md:mt-0 cursor-pointer text-lg text-primary-01 hover:text-secondary-01"
    >
      {{ item?.name }}
    </span>
    <ul
      class="px-4 md:hidden group-hover:block md:fixed md:bg-white-01 md:rounded-2xl md:p-4"
    >
      <li v-for="subItem in item.subMenu" :key="subItem?.name">
        <NuxtLink
          active-class="font-semibold border-b-2 border-solid border-secondary-02"
          :to="subItem.linkRedirection"
          class="mt-4 md:inline-block md:mt-0 cursor-pointer text-lg text-primary-01 hover:text-secondary-01"
        >
          {{ subItem.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
  <NuxtLink
    v-else
    active-class="font-semibold border-b-2 border-solid border-secondary-02"
    :to="item?.linkRedirection"
    class="mt-4 md:inline-block md:mt-0 cursor-pointer text-lg text-primary-01 hover:text-secondary-01"
  >
    {{ item?.name }}
  </NuxtLink>
</template>
