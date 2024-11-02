<template>
  <div class="typing-container">
    <span class="typing-text">{{ displayedText }}</span>
  </div>
</template>

<script>
export default {
  name: "TextTyping",
  props: {
    texts: {
      type: Array,
      required: true,
    },
    speed: {
      type: Number,
      default: 100, // Speed in milliseconds
    },
    pause: {
      type: Number,
      default: 2000, // Pause between texts in milliseconds
    },
  },
  data() {
    return {
      displayedText: "",
      currentIndex: 0,
      currentTextIndex: 0,
      isErasing: false,
    };
  },
  mounted() {
    this.typeText();
  },
  methods: {
    typeText() {
      const currentText = this.texts[this.currentTextIndex];
      if (!this.isErasing) {
        if (this.currentIndex < currentText.length) {
          this.displayedText += currentText.charAt(this.currentIndex);
          this.currentIndex++;
          setTimeout(this.typeText, this.speed);
        } else {
          setTimeout(this.nextText, this.pause);
        }
      } else {
        if (this.currentIndex > 0) {
          this.displayedText = this.displayedText.slice(0, -1);
          this.currentIndex--;
          setTimeout(this.typeText, this.speed);
        } else {
          this.isErasing = false;
          this.currentTextIndex =
            (this.currentTextIndex + 1) % this.texts.length;
          this.typeText();
        }
      }
    },
    nextText() {
      this.isErasing = true;
      this.typeText();
    },
  },
};
</script>

<style scoped>
.typing-container {
  display: inline;
}

.typing-text::after {
  content: "|";
  animation: blink 1s step-end infinite;
  z-index: -1;
}

@keyframes blink {
  from,
  to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
