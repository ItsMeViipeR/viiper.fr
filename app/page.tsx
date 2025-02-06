"use client";

import { Code, Check, Globe, ChevronDown, Database } from "lucide-react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

const projects = [
  {
    name: "Gitit",
    description: "A simple CLI tool to manage your GitHub repositories.",
    img: "https://preview.redd.it/g38817mqb1361.png?auto=webp&s=61f191d6a42b645d77cbbc6ce5d6f08686b6e77a",
    href: "https://github.com/ItsMeViipeR/gitit",
  },
  {
    name: "files.dll",
    description: "A simple DLL writen in Rust to manipulate files.",
    img: "https://t4.ftcdn.net/jpg/09/02/93/31/240_F_902933189_v6yVCYq5Z4qyNHPEYm0Jb7tLg6NH7rBv.jpg",
    href: "https://github.com/ItsMeViipeR/files.dll",
  },
  {
    name: "JSON",
    description: "A simple JSON editor built with Rust.",
    img: "https://imgs.search.brave.com/tkZmPdVcFlKhpIDX2NSS3ioslQFeP-XnUgZPnYjDIWc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4Lzk2LzM4LzMw/LzM2MF9GXzg5NjM4/MzAwNV9LVm5YeU1W/Qm01UDBmTkV0TnFH/VlNBN0dWQUw1RWFl/YS5qcGc",
    href: "https://github.com/ItsMeViipeR/json",
  },
];

export default function Home() {
  const goTo = (href: string) => {
    window.open(href, "_blank");
  };

  const goToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>ViipeR - Web Developer & Designer</title>
        <meta name="description" content="Welcome to my portfolio!" />
      </Head>
      <div className="min-h-screen bg-black text-white overflow-hidden">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-800 to-blue-900"></div>
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center mix-blend-overlay"></div>
          </div>
          <div className="flex flex-col z-10 text-center">
            <Image
              src="/favicon.ico?height=200&width=200"
              alt="Profile Picture"
              className="w-40 h-40 rounded-full border-4 border-white shadow-lg mx-auto mb-8"
              width={200}
              height={200}
            />
            <motion.h1
              className="text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              ViipeR
            </motion.h1>
            <motion.p
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Web Developer & Designer
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <ChevronDown
                className="w-8 h-8 mx-auto animate-bounce cursor-pointer"
                onClick={goToAbout}
              />
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-20 bg-gradient-to-b from-blue-900 to-blue-800"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
            <p className="text-lg max-w-2xl mx-auto text-justify">
              My name is Nicolas, and I am a web developer and designer based in
              France 🇫🇷. I&apos;m passionate about creating beautiful and
              functional websites that provide an excellent user experience.
              With a strong background in development, I strive to bridge the
              gap between aesthetics and functionality. I enjoy working with
              modern web technologies and continuously learning new skills to
              stay up-to-date with industry trends. When I&apos;m not coding,
              you can find me exploring new design ideas, playing video games,
              or listening to music.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-gradient-to-b from-blue-800 to-purple-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg transform transition duration-200 hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="text-blue-400 mb-4">
                  <Globe />
                </div>
                <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                <p className="text-gray-300">
                  Creating responsive and dynamic websites
                </p>
              </motion.div>
              <motion.div
                className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg transform transition duration-200 hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-blue-400 mb-4">
                  <Code />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Frontend Frameworks
                </h3>
                <p className="text-gray-300">Expertise in React and Vue</p>
              </motion.div>
              <motion.div
                className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg transform transition duration-200 hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-blue-400 mb-4">
                  <Check />
                </div>
                <h3 className="text-xl font-semibold mb-2">Code checking</h3>
                <p className="text-gray-300">
                  Ensuring code quality and best practices
                </p>
              </motion.div>
              <motion.div
                className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg transform transition duration-200 hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="text-blue-400 mb-4">
                  <Database />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Database Management
                </h3>
                <p className="text-gray-300">
                  Experience with MySQL and PostgreSQL databases
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-gradient-to-b from-purple-800 to-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-white bg-opacity-5 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={project.img}
                    alt={`Project ${index}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <button
                      className="btn btn-outline"
                      onClick={() => goTo(project.href)}
                    >
                      View Project
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
