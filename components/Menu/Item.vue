<script setup lang="ts">
interface IMenuItem {
  name: string;
  linkRedirection: string;
  subMenu?: IMenuItem[];
}

const { item } = defineProps({
  item: { type: Object as PropType<IMenuItem>, required: true },
});
</script>

<template>
  <template v-if="item?.subMenu">
    <span
      class="mt-4 md:inline-block md:mt-0 cursor-pointer text-lg text-primary-01 hover:text-secondary-01"
    >
      {{ item?.name }}
    </span>
    <ul class="px-4">
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
  </template>
  <NuxtLink
    v-else
    active-class="font-semibold border-b-2 border-solid border-secondary-02"
    :to="item?.linkRedirection"
    class="mt-4 md:inline-block md:mt-0 cursor-pointer text-lg text-primary-01 hover:text-secondary-01"
  >
    {{ item?.name }}
  </NuxtLink>
</template>
