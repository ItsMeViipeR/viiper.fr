<script lang="ts">
import { defineComponent } from "vue";

let date = new Date().getFullYear().toString();

export default defineComponent({
  name: "FooterComponent",
  data() {
    return {
      date: date === "2024" ? date : `2024-${date}`,
    };
  },
});
</script>

<template>
  <footer class="bg-black py-8">
    <div class="container mx-auto px-4 text-center">
      <p class="text-gray-500">
        &copy; {{ date }} ViipeR. All rights reserved.
      </p>
    </div>
  </footer>
</template>
