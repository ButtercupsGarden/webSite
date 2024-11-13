<template>
  <div class="h-full flex flex-col items-center justify-center">
    <h1 class="text-7xl font-extrabold">Page Not Found</h1>
    <p class="mt-8">
      <router-link :to="{ name: 'home' }" class="font-medium hover:underline">
        &larr; Back to Home Page
      </router-link>
    </p>
    <div class="mt-8">
      <code>/src/views/Error404.vue</code>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
