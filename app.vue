<script setup lang="ts">
const query = groq`*[_type == "pageConfig"]`;
const sanity = useSanity();
const [pageData] = await sanity.fetch<any[]>(query);

onMounted(() => {
  const root = document.documentElement;
  pageData?.color?.forEach((color: any) => {
    const { name, value } = color;
    console.log(name, value);
    root.style.setProperty(`--${name}`, value);
  });
});
</script>

<template>
  <div>
    <AppHeader :data="pageData.header" />
    <NuxtPage />
  </div>
</template>
