<script setup>
const data = defineProps({
  data: {
    color: Array,
    _createdAt: String,
    _rev: String,
    _type: String,
    name: String,
    header: Object,
    _id: String,
    _updatedAt: String,
  },
});

const headerProps = toRaw(data).data;
const windowWidth = ref();

onMounted(() => {
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth;
  });
});
</script>

<template>
  <header class="bg-white py-6 px-4 md:px-16 relative overflow-x-auto">
    <div class="container mx-auto">
      <nav class="flex justify-between items-center">
        <nuxt-link to="/" class="cursor-pointer">
          <div class="w-12 h-12">
            <SanityImage
              :asset-id="headerProps?.logo?.asset?._ref"
              auto="format"
            />
          </div>
        </nuxt-link>
        <AppHamburguerMenu :data="headerProps?.menu" />
        <AppMenu :data="headerProps?.menu" />
      </nav>
    </div>
    <div
      class="shadow-blur md:absolute md:h-572 md:w-572 md:border-2 md:border-purple-800 md:bg-purple-300 md:opacity-60 md:blur-md md:right-0 md:top-[-88px]"
    ></div>
  </header>
</template>
