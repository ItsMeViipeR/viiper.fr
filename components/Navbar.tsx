"use client";

import Image from "next/image";
import { useState } from "react";

export function Navbar() {
  const [navbarOpened, setNavbarOpened] = useState(false);

  return (
    <header>
      <div className="items-center hidden md:flex py-4">
        <Image
          src="https://avatars.githubusercontent.com/u/71552277?v=4"
          alt="Logo"
          width={64}
          height={64}
          className="rounded-full w-10 h-10 mr-auto"
        />
        <nav>
          <ul className="flex items-baseline gap-6">
            <li className="hidden sm:block">
              <a href="/#skills" className="text-2xl md:text-base">
                <span className="font-mono text-primary">0.</span>{" "}
                <span>Skills</span>
              </a>
            </li>
            <li>
              <a href="/#projects" className="text-2xl md:text-base">
                <span className="font-mono text-primary">1.</span>{" "}
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a href="/#contact" className="text-2xl md:text-base">
                <span className="font-mono text-primary">3.</span>{" "}
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="items-center flex md:hidden">
        <Image
          src="https://avatars.githubusercontent.com/u/71552277?v=4"
          alt="Logo"
          width={64}
          height={64}
          className="rounded-full w-10 h-10 mr-auto"
        />
        <button onClick={() => setNavbarOpened(true)}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 20 20"
            aria-hidden="true"
            style={{ width: "32px", height: "32px" }}
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        {navbarOpened && (
          <div className="fixed inset-0 z-10 backdrop-blur-sm">
            <nav className="w-2/4 flex flex-col items-end h-full animate-swipeFromLeft justify-center gap-8 p-8 bg-blue-600 ml-auto">
              <button
                className="absolute top-4 right-4"
                onClick={() => setNavbarOpened(false)}
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "32px", height: "32px" }}
                >
                  <path
                    d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <Image
                src="https://avatars.githubusercontent.com/u/71552277?v=4"
                alt="Logo"
                width={64}
                height={64}
                className="rounded-full w-16 h-16 mb-4"
              />
              <ul className="flex flex-col items-baseline gap-8">
                <li className="hidden sm:block">
                  <a href="/#skills" className="text-2xl md:text-base">
                    <span className="font-mono text-primary1">0.</span>{" "}
                    <span>Skills</span>
                  </a>
                </li>
                <li>
                  <a href="/#projects" className="text-2xl md:text-base">
                    <span className="font-mono text-primary1">1.</span>{" "}
                    <span>Projects</span>
                  </a>
                </li>
                <li>
                  <a href="/#courses" className="text-2xl md:text-base">
                    <span className="font-mono text-primary1">2.</span>{" "}
                    <span>Courses</span>
                  </a>
                </li>
                <li>
                  <a href="/#contact" className="text-2xl md:text-base">
                    <span className="font-mono text-primary1">3.</span>{" "}
                    <span>Contact</span>
                  </a>
                </li>
                <li>
                  <a href="/affiliate" className="text-2xl md:text-base">
                    <span className="font-mono text-primary1">4.</span>{" "}
                    <span>Affiliate</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://codelynx.dev"
                    className="text-2xl md:text-base"
                  >
                    <span className="font-mono text-primary1">5.</span>{" "}
                    <span>Blog</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
