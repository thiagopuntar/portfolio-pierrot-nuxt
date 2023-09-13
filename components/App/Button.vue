<script setup lang="ts">
const variants = {
  primary: 'bg-primary-03 text-secondary-02',
  secondary: 'bg-secondary-02 text-primary-03',
  'outlined-primary': 'text-primary-03 border-solid border-primary-03 border-2',
  'outlined-white': 'text-white-02 border-solid border-white-02 border-2',
};

type Props = {
  variant: keyof typeof variants;
};

const { variant } = defineProps<Props>();
const variantStyle = variants[variant];
</script>

<template>
  <button :class="variantStyle" class="py-4 px-6 rounded-2xl">
    <slot></slot>
  </button>
</template>
