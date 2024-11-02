<template>
  <Layout>
    <div class="min-h-screen bg-black text-white overflow-hidden">
      <!-- Hero Section -->
      <section
        class="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div class="absolute inset-0 z-0">
          <div
            class="absolute inset-0 bg-gradient-to-b from-purple-800 to-blue-900"
          ></div>
          <div
            class="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center mix-blend-overlay"
          ></div>
        </div>
        <div class="flex flex-col z-10 text-center">
          <img
            src="/favicon.ico?height=200&width=200"
            alt="Profile Picture"
            class="w-40 h-40 rounded-full border-4 border-white shadow-lg mx-auto mb-8"
            :initial="{ scale: 0 }"
            :animate="{ scale: 1 }"
            :transition="{ type: 'spring', stiffness: 260, damping: 20 }"
          />
          <motion-h1
            class="text-5xl font-bold mb-4"
            :initial="{ opacity: 0, y: 50 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ delay: 0.2 }"
          >
            ViipeR
          </motion-h1>
          <motion-p
            class="text-xl mb-8"
            :initial="{ opacity: 0, y: 50 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ delay: 0.4 }"
          >
            Web Developer & Designer
          </motion-p>
          <motion-div
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            :transition="{ delay: 0.6 }"
          >
            <ChevronDown
              class="w-8 h-8 mx-auto animate-bounce cursor-pointer"
              @click="goToAbout"
            />
          </motion-div>
        </div>
      </section>

      <!-- About Section -->
      <section
        id="about"
        class="py-20 bg-gradient-to-b from-blue-900 to-blue-800"
      >
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold mb-8 text-center">About Me</h2>
          <p class="text-lg max-w-2xl mx-auto text-justify">
            My name is Nicolas, and I am a web developer and designer based in
            France 🇫🇷. I'm passionate about creating beautiful and functional
            websites that provide an excellent user experience. With a strong
            background in development, I strive to bridge the gap between
            aesthetics and functionality. I enjoy working with modern web
            technologies and continuously learning new skills to stay up-to-date
            with industry trends. When I'm not coding, you can find me exploring
            new design ideas, playing video games, or listening to music.
          </p>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="py-20 bg-gradient-to-b from-blue-800 to-purple-800">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              class="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg transform transition duration-200 hover:scale-105"
              :initial="{ opacity: 0, y: 50 }"
              :animate="{ opacity: 1, y: 0 }"
            >
              <div class="text-blue-400 mb-4"><Globe /></div>
              <h3 class="text-xl font-semibold mb-2">Web Development</h3>
              <p class="text-gray-300">
                Creating responsive and dynamic websites
              </p>
            </div>
            <div
              class="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg transform transition duration-200 hover:scale-105"
              :initial="{ opacity: 0, y: 50 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ delay: 0.2 }"
            >
              <div class="text-blue-400 mb-4"><Code /></div>
              <h3 class="text-xl font-semibold mb-2">Frontend Frameworks</h3>
              <p class="text-gray-300">Expertise in React and Vue</p>
            </div>
            <div
              class="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg transform transition duration-200 hover:scale-105"
              :initial="{ opacity: 0, y: 50 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ delay: 0.4 }"
            >
              <div class="text-blue-400 mb-4"><Check /></div>
              <h3 class="text-xl font-semibold mb-2">Code checking</h3>
              <p class="text-gray-300">
                Ensuring code quality and best practices
              </p>
            </div>
            <div
              class="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg transform transition duration-200 hover:scale-105"
              :initial="{ opacity: 0, y: 50 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ delay: 0.8 }"
            >
              <div class="text-blue-400 mb-4"><Database /></div>
              <h3 class="text-xl font-semibold mb-2">Database Management</h3>
              <p class="text-gray-300">
                Experience with MySQL and PostgreSQL databases
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section class="py-20 bg-gradient-to-b from-purple-800 to-black">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion-div
              v-for="(project, index) in projects"
              :key="project"
              class="bg-white bg-opacity-5 rounded-lg overflow-hidden"
              :initial="{ opacity: 0, scale: 0.9 }"
              :animate="{ opacity: 1, scale: 1 }"
              :transition="{ duration: 0.5 }"
              :whileHover="{ scale: 1.05 }"
            >
              <img
                :src="project.img"
                :alt="`Project ${index}`"
                class="w-full h-48 object-cover"
              />
              <div class="p-4">
                <h3 class="text-xl font-semibold mb-2">
                  {{ project.name }}
                </h3>
                <p class="text-gray-400 mb-4">
                  {{ project.description }}
                </p>
                <Button variant="outline">View Project</Button>
              </div>
            </motion-div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { Code, Check, Globe, ChevronDown, Database } from "lucide-vue-next";

const projects = [
  {
    name: "Project 1",
    description: "A brief description of the project and its features.",
    img: "https://placehold.co/200x300",
  },
  {
    name: "Project 2",
    description: "A brief description of the project and its features.",
    img: "https://placehold.co/200x300",
  },
  {
    name: "Project 3",
    description: "A brief description of the project and its features.",
    img: "https://placehold.co/200x300",
  },
];
</script>

<script lang="ts">
let goToAbout = () => {
  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
};
</script>
