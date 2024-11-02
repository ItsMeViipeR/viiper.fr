<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterComponent",
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
});
</script>

<template>
  <div class="footer">
    <div class="footer-links">
      <a href="#">Home</a>
    </div>
    <div class="footer-text">
      <p>&copy; {{ date }} ViipeR. All rights reserved.</p>
    </div>
  </div>
</template>

<style>
.footer {
  height: 50px;
  width: 100%;
  background: linear-gradient(90deg, #3e66c3, #132445);
  position: fixed;
  bottom: 0;
  border-top: solid 1px var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 2;
}

.footer-links {
  display: flex;
  gap: 15px;
}

.footer-links > a {
  text-decoration: none;
  color: var(--text-nav);
  font-size: 18px;
}

.footer-links > a:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.footer-text {
  color: var(--text-nav);
  font-size: 14px;
}

@media (max-width: 600px) {
  .footer {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }
  .footer-links {
    margin-bottom: 10px;
  }
}
</style>
