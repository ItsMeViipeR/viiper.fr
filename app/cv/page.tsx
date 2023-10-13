"use client";
import React from 'react';

export default function CV() {
    const scrollToContent = (contentId: string) => {
        const contentElement = document.getElementById(contentId);
        if (contentElement) {
            contentElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',

            });
        }
    }

    return (
      <>
          <div className="flex flex-col items-center justify-center min-h-screen py-2 max-[500px]:max-w-xs max-[500px]:items-stretch" id={"base"}>
              <main className="flex flex-col items-center justify-center flex-1 px-32 text-center">
                  <div className="mb-8">
                      <h1 className="text-6xl font-bold mb-4">
                          Mon CV
                      </h1>
                      <p className="mt-3 text-2xl">
                          Découvrez mon CV directement en ligne.
                      </p>
                      <div className="flex flex-col items-center justify-center mt-8">
                          <button onClick={() => scrollToContent("cv")} className="bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded transition-all">
                              Voir le CV
                          </button>
                      </div>
                  </div>
              </main>
          </div>

          <div id="cv"></div>
          <div className="flex flex-col items-center justify-center py-10 mt-24 max-[500px]:mt-5" id="cv">

              <div className="min-[500px]:flex min-[500px]:flex-col min-[500px]:flex-1 min-[500px]:px-32 w-full border-4 border-gray-900 p-6 dark:border-gray-700">
                  <h2 className="text-4xl font-bold mb-24 text-center underline">
                      Mon CV
                  </h2>
                  <div className="font-extrabold text-2xl mb-20 max-[500px]:hidden">
                      <div className={"flex flex-row"}>
                          <h2>Nicolas</h2>
                          <h2 className={"ml-auto max-[500px]:ml-0"}>06 51 72 42 74</h2>
                      </div>
                      <h2>AMATI</h2>
                      <a href="mailto:nicolas.amati@gmail.com" className={"underline"}>nicolas.amati@gmail.com</a><br/>
                      <a href="/" className={"underline"}>www.viiper.fr</a>
                  </div>
                  <div className={"flex flex-row max-[500px]:flex-col font-extrabold min-[500px]:hidden"}>
                      <div className={"flex flex-col"}>
                          <h2 className={"mb-1.5"}>Nicolas</h2>
                          <h2 className={"mb-1.5"}>AMATI</h2>
                          <h2 className={"mb-1.5"}>06 51 72 42 74</h2>
                          <a href="mailto:nicolas.amati@gmail.com" className={"underline mb-1.5"}>nicolas.amati@gmail.com</a>
                          <a href="/" className={"underline mb-1.5"}>www.viiper.fr</a>
                      </div>
                  </div>

                  <hr/>

                  <div className="flex flex-col mt-20">
                      <h2 className="text-3xl font-bold text-center underline mb-20">
                          Expériences
                      </h2>

                      <div className="flex flex-col">

                          <div className="flex flex-col border-4 border-gray-900 dark:border-gray-700 mb-4 sm:flex-row">
                              <div className="p-6">
                                  <h2 className="text-2xl font-bold mb-4">
                                      Développeur Web
                                  </h2>
                                  <h3 className="text-xl font-bold mb-4">
                                      Freelance
                                  </h3>
                                  <p className="text-lg">
                                      Développement d&apos;applications web sur mesure.
                                  </p>
                              </div>
                          </div>

                          <div className="flex flex-col border-4 border-gray-900 dark:border-gray-700 mb-4 sm:flex-row">
                              <div className="p-6">
                                  <h2 className="text-2xl font-bold mb-4">
                                      Développeur Rust
                                  </h2>
                                  <h3 className="text-xl font-bold mb-4">
                                      Freelance
                                  </h3>
                                  <p className="text-lg">
                                      Développement d&apos;applications bureau sur mesure et multi-plateformes.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

      </>
    )
}
