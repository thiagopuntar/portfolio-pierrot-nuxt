<script setup lang="ts">
const data = defineProps({
  data: Object,
});
const menuItems = toRaw(data).data;

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const commonStyles =
  'bg-black-02 h-[2px] w-[17px] rounded-full transform transition-all duration-300';
</script>
<template>
  <div class="absolute right-5">
    <button
      class="block md:hidden"
      :class="
        isMenuOpen
          ? 'flex flex-col justify-center items-center'
          : 'flex flex-col justify-center items-center space-y-1'
      "
      @click="toggleMenu"
    >
      <span
        :class="`${commonStyles} ${
          isMenuOpen ? 'rotate-45 translate-y-1' : ''
        }`"
      ></span>
      <span :class="`${commonStyles} ${isMenuOpen ? 'opacity-0' : ''}`"></span>
      <span
        :class="`${commonStyles} ${
          isMenuOpen ? '-rotate-45 translate-y-[-1px]' : ''
        }`"
      ></span>
    </button>
    <div
      :class="{ hidden: !isMenuOpen }"
      class="md:flex md:items-center md:space-x-6 fixed right-5 bg-white-05 p-5 top-16"
    >
      <div v-for="item in menuItems" :key="item._key">
        <NuxtLink
          :to="item.linkRedirection"
          class="block mt-4 md:inline-block md:mt-0 cursor-pointer text-lg font-semibold text-primary-01 hover:text-secondary-01"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
