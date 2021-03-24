<template>
  <div class="container">
    <RouterView />
  </div>
  <section id="modal" />
</template>

<script setup lang="ts">
import { useProvideModals } from '~/composables/modal'
import { useProvideOverlay } from '~/composables/overlay'
const { provideModals } = useProvideModals()
const { modals } = provideModals()
const { provideOverlay } = useProvideOverlay(modals)
provideOverlay()
</script>
