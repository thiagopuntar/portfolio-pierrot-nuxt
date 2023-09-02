<script setup lang="ts">
const { fetchColorsWithRetry } = useUtils();

onMounted(async () => {
  try {
    const query = groq`*[_type == "color"]`;
    const sanity = useSanity();

    const data: any[] = await fetchColorsWithRetry(sanity, query);
    console.log('Sanity Client Response:', data);

    const root = document.documentElement;
    data.forEach((color: any) => {
      const { name, hexValue } = color;
      root.style.setProperty(`--${name}`, hexValue);
    });
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
  }
});
</script>

<template>
  <div>
    <div />
    <NuxtPage />
  </div>
</template>
