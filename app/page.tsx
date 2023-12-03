import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import "./main.css";
import "@/components/Box.css";
import { Box } from "@/components/Box";

export default function Home() {
  return (
    <div className="min-h-full max-w-7xl m-auto p-4 relative" id="home">
      <Navbar />

      <div className="container">
        <div className="grid customgrid center">
          <div className="grid-left">
            <h1 className="text-4xl font-bold mb-4">
              Hi, I&apos;m <span className="text-primary">ViipeR</span>
            </h1>
            <p className="text-2xl mb-4">
              I&apos;m a front-end developer, designer, and student. I love to
              build things that make a difference.
            </p>
          </div>
          <div className="grid-right">
            <Image
              src="https://avatars.githubusercontent.com/u/71552277?v=4"
              alt="Logo"
              width={400}
              height={400}
              className="rounded-full"
            />
          </div>
        </div>
        <hr />
        <section id="skills">
          <h1 className="font-extrabold text-2xl text-center pb-6">Skills</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
            <Box>
              <h1 className="font-bold text-xl pb-4">Front-end</h1>
              <ul>
                <li>Svelte</li>
                <li>React</li>
                <li>HTML/CSS</li>
              </ul>
            </Box>
            <Box>
              <h1 className="font-bold text-xl pb-4">Backend</h1>
              <ul>
                <li>Next.js</li>
                <li>PHP</li>
                <li>Express/Fastify</li>
              </ul>
            </Box>
            <Box>
              <h1 className="font-bold text-xl pb-4">Other</h1>
              <ul>
                <li>Git</li>
                <li>Linux</li>
              </ul>
            </Box>
          </div>
        </section>
        <hr />
        <section id="projects">
          <h1 className="font-extrabold text-2xl text-center pb-6">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
            <Box>
              <h1 className="font-bold text-2xl pb-4">JSON</h1>
              <p>
                JSON is a simple Rust library to manipulate JSON files easily.
              </p>
              <div className="flex flex-row gap-4">
                <span className="whitespace-nowrap rounded-full px-2.5 py-0.5 text-sm bg-purple-700 text-purple-100">
                  Rust
                </span>
                <span className="whitespace-nowrap rounded-full px-2.5 py-0.5 text-sm bg-purple-700 text-purple-100">
                  JSON
                </span>
              </div>
            </Box>
            <Box>
              <h1 className="font-bold text-2xl pb-4">Gitit</h1>
              <p>
                Gitit is a very simple software that makes the git commits and
                push easier with a with CLI interactions.
              </p>
              <div className="flex flex-row gap-4">
                <span className="whitespace-nowrap rounded-full px-2.5 py-0.5 text-sm bg-purple-700 text-purple-100">
                  Rust
                </span>
                <span className="whitespace-nowrap rounded-full px-2.5 py-0.5 text-sm bg-purple-700 text-purple-100">
                  Git
                </span>
              </div>
            </Box>
            <Box>
              <h1 className="font-bold text-2xl pb-4">MKD Previewer</h1>
              <p>
                Mardown &lsquo;MKD&rsquo; Previewer is a website that allows you
                to visualize your markdown for free.
              </p>
              <div className="flex flex-row gap-4">
                <span className="whitespace-nowrap rounded-full px-2.5 py-0.5 text-sm bg-purple-700 text-purple-100">
                  React
                </span>
                <span className="whitespace-nowrap rounded-full px-2.5 py-0.5 text-sm bg-purple-700 text-purple-100">
                  Markdown
                </span>
              </div>
            </Box>
          </div>
        </section>
      </div>
    </div>
  );
}
