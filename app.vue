<script setup lang="ts">
const query = groq`*[_type == "pageConfig"]`;
const sanity = useSanity();
const otherValue = await sanity.fetch(query);
const pageData = otherValue;
// const [config] = pageData;
console.log('>>> ', pageData);
// console.log(">>> ", config)

onMounted(() => {
  // const { data: pageConfigData } = useSanityQuery(query);
  // const [pageConfig] = pageConfigData.value;
  // const root = document.documentElement;
  // pageConfig.color.forEach((color: string) => {
  //   const { name, value } = color;
  //   root.style.setProperty(`--${name}`, value);
  // });
});
</script>

<template>
  <div>
    <!-- <AppHeader :data="pageConfig.header" /> -->
    <NuxtPage />
  </div>
</template>
