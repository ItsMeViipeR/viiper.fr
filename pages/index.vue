<script setup lang="ts">
import "@/styles/pages.css";

useSeoMeta({
  title: "ViipeR",
  description: "Welcome to my personal website!",
});
</script>

<template>
  <NuxtPage />

  <Layout>
    <section class="main">
      <div class="content">
        <h1>Hi, I'm ViipeR</h1>
        <h2>Web Developer</h2>
        <p>
          I design and develop services for customers of all sizes, specializing
          in creating stylish, modern websites, web services and online stores.
        </p>
        <a href="/about">Learn more about me</a>
      </div>

      <CustomShapeDivider />

      <picture>
        <source srcset="/public/model.webp" type="image/webp" />
        <source srcset="/public/model.png" type="image/png" />
        <img src="/public/model.png" alt="image" class="model" />
      </picture>
    </section>
  </Layout>
</template>

<style scoped>
/* Ensure your CSS is minimal and scoped properly */
</style>
