<script setup lang="ts">
const { fetchColorsWithRetry } = useUtils();

const query = groq`*[_type == "color"]`;
const sanity = useSanity();
const data: any[] = await fetchColorsWithRetry(sanity, query);
onMounted(() => {
  const root = document.documentElement;

  data.forEach((color: any) => {
    const { name, hexValue } = color;
    root.style.setProperty(`--${name}`, hexValue);
  });
});
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
