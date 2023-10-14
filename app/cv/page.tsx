"use client";
import React from 'react';
import Head from "next/head";
import {Metadata} from "next";

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

    const METADATAS: Metadata = {
        title: "ViipeR - CV",
        description: "Découvrez mon CV directement en ligne.",
        keywords: ["cv", "viiper"],
        openGraph: {
            images: ["https://viiper.fr/logo.jpg"],
            type: "website",
            url: "https://viiper.fr/cv",
        }
    }

    return (
      <>
          <head>
              {
                  Object.keys(METADATAS).map((key) => {
                      if(key === "title")
                          return <title key={key}>{`${METADATAS[key]}`}</title>
                      if(key === "openGraph")
                          return Object.keys(METADATAS[key]!).map((key2) => {
                              // @ts-ignore
                              return <meta key={key2} property={`og:${key2.replace("images", "image")}`} content={METADATAS[key]![key2]}/>
                          })
                      if(key === "twitter")
                          return Object.keys(METADATAS[key]!).map((key2) => {
                              // @ts-ignore
                              return <meta key={key2} property={`og:${key2}`} content={METADATAS[key]![key2]}/>
                          })
                      // @ts-ignore
                      return <meta key={key} name={key} content={METADATAS[key]}/>
                  })
              }
          </head>
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
          <div className="flex flex-col items-center justify-center py-10 mt-24 max-[500px]:mt-5">

              <div className="min-[500px]:flex min-[500px]:flex-col min-[500px]:flex-1 min-[500px]:px-32 w-full border-4 border-gray-900 p-6 dark:border-gray-700">
                  <h2 className="text-4xl font-bold mb-24 text-center underline">
                      Mon CV
                  </h2>
                  <div className="font-extrabold text-2xl mb-20 max-[500px]:hidden">
                      <div className={"flex flex-row"}>
                          <h2>Nicolas</h2>&nbsp;
                          <h2>AMATI</h2>
                          <h2 className={"ml-auto max-[500px]:ml-0"}>06 51 72 42 74</h2>
                      </div>
                      <a href="mailto:nicolas.amati@gmail.com" className={"underline"}>nicolas.amati@gmail.com</a><br/>
                      <a href="/" className={"underline"}>www.viiper.fr</a>
                  </div>
                  <div className={"flex flex-row max-[500px]:flex-col font-extrabold min-[500px]:hidden"}>
                      <div className={"flex flex-col"}>
                          <h2 className={"mb-1.5"}>Nicolas AMATI</h2>
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
                                      Hobbie
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
                                      Hobbie
                                  </h3>
                                  <p className="text-lg">
                                      Développement d&apos;applications bureau sur mesure et multi-plateformes.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <hr className={"mt-20"}/>

                  <div className="flex flex-col mt-20">
                      <h2 className="text-3xl font-bold text-center underline mb-20">
                          Formations
                      </h2>

                      <div className="flex flex-col">

                          <div className="flex flex-col border-4 border-gray-900 dark:border-gray-700 mb-4 sm:flex-row">
                              <div className="p-6">
                                  <h2 className="text-2xl font-bold mb-4">
                                      Bac Technologique STI2D
                                  </h2>
                                  <h3 className="text-xl font-bold mb-4">
                                      Spétialité SIN (Systèmes d&apos;Information et Numérique)
                                  </h3>
                                  <p className="text-lg">
                                      Lycée Voillaume, Aulnay-sous-Bois
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
