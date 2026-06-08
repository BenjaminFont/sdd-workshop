<script setup lang="ts">
// codecentric-Slide-Layout. Die Variante steuert das vertikale Layout,
// analog zu den reveal-Klassen (center-text, title-slide).
// Das Footer-Logo wird hier global gerendert (reveal: deck.js tat das
// für jede Section) — per `nologo` Prop abschaltbar.
const props = defineProps<{ variant?: string, nologo?: boolean }>()
const variantClass = props.variant === 'center'
  ? 'center-text'
  : props.variant === 'title'
    ? 'title-slide'
    : ''
</script>

<template>
  <div class="slidev-layout cc" :class="variantClass">
    <slot />
    <div v-if="!nologo" class="footer-logo">
      <img src="/img/logo-black.svg" alt="codecentric">
    </div>
  </div>
</template>
