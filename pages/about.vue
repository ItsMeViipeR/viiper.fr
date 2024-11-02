<template>
  <NuxtPage />
  <Layout>
    <section class="main">
      <div class="content">
        <div class="intro">
          <h1>About Me</h1>
          <img src="/public/favicon.ico" alt="Logo" />
          <h2>Web Developer</h2>
          <p>
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores
          </p>
          <a href="#">
            <button @click="goToAbout">Learn more</button>
          </a>
        </div>

        <div class="about">
          <h1>About me</h1>

          <h1>Who am I?</h1>
          <p>
            I am a web developer with a passion for creating beautiful and
            functional websites. I have experience in both front-end and
            back-end development, and I am always looking for new challenges to
            expand my skills.
          </p>

          <h1>What I do?</h1>
          <div class="skills">
            <div class="skill">
              <img src="/public/icons/dev-icon.png" alt="HTML5" />
              <h2>Front-End Development</h2>
              <p>
                I specialize in creating responsive, user-friendly websites that
                look great on all devices. I use HTML, CSS, and JavaScript to
                bring designs to life and create engaging user experiences.
              </p>
            </div>
            <div class="skill">
              <img src="/public/icons/dev-icon.png" alt="HTML5" />
              <h2>Back-End Development</h2>
              <p>
                I specialize in creating responsive, user-friendly websites that
                look great on all devices. I use HTML, CSS, and JavaScript to
                bring designs to life and create engaging user experiences.
              </p>
            </div>
            <div class="skill">
              <img src="/public/icons/dev-icon.png" alt="HTML5" />
              <h2>UI/UX Design</h2>
              <p>
                I specialize in creating responsive, user-friendly websites that
                look great on all devices. I use HTML, CSS, and JavaScript to
                bring designs to life and create engaging user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="custom-shape-divider-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  </Layout>
</template>

<script setup lang="ts">
import "@/styles/pages.css";

useSeoMeta({
  title: "About Me",
  description: "Learn more about me and my skills, experience, and education.",
});

let goToAbout = () => {
  let about = document.querySelector(".about")!;

  about.scrollIntoView({
    behavior: "smooth",
  });
};
</script>

<style scoped lang="scss">
.intro {
  text-align: center;
  min-height: 100vh;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: -5vh auto;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 20px auto;
  }
  @media (max-width: 768px) {
    max-width: 100vw;
  }
}

.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: justify;
  h1 {
    margin-top: 100px;
  }
}

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 1.75rem;
}

p {
  font-size: 1rem;
  line-height: 1.6;
}

button {
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  background: none;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.custom-shape-divider-bottom {
  transform: rotate(180deg);
  svg {
    position: relative;
    display: block;
    width: 100%;
    height: 106px;
  }
  .shape-fill {
    fill: #ffffff;
  }
  @media (max-width: 768px) {
    display: none;
  }
}

.skills {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2vw;
  justify-content: center;
  align-items: center;
  .skill {
    display: flex;
    flex-direction: column;
    min-width: 300px;
    img {
      border-radius: 0;
      padding: 20px;
    }
    p {
      max-width: 300px;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
}
</style>
