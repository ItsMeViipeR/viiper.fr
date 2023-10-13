"use client";

import {Metadata} from "next";
import React from "react";

export default function Home() {
  const METADATAS: Metadata = {
      title: "ViipeR",
      description: "Bienvenue sur mon site.",
      keywords: ["viiper"],
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
                            return <meta key={key2} property={`og:${key2}`} content={METADATAS[key]![key2]}/>
                        })
                    // @ts-ignore
                    return <meta key={key} name={key} content={METADATAS[key]}/>
                })
            }
        </head>
        <div className="flex flex-col items-center justify-center min-h-screen py-2 max-[500px]:max-w-xs max-[500px]:items-stretch">
            <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold max-[500px]:mt-32">
                    Bienvenue sur mon site
                </h1>

                <p className="mt-3 text-2xl">
                    <a href="/about" className={"underline"}>En savoir plus</a> sur moi
                </p>

                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full max-[500px]:max-w-fit max-[500px]:ml-8">
                    <a href="/cv" className="p-6 mt-6 text-left w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 border border-gray-900 dark:border-gray-700">
                        <h3 className="text-2xl font-bold">CV &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Découvrez mon CV.
                        </p>
                    </a>

                    <a href="https://github.com/ItsMeViipeR" className="p-6 mt-6 text-left w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 border border-gray-900 dark:border-gray-700">
                        <h3 className="text-2xl font-bold">GitHub &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Découvrez mes projets opensource sur GitHub.
                        </p>
                    </a>

                    <a href="https://discord.gg/zGk6BvGYx7" className="p-6 mt-6 text-left w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 border border-gray-900 dark:border-gray-700">
                        <h3 className="text-2xl font-bold">Discord &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Rejoignez mon serveur Discord.
                        </p>
                    </a>
                </div>
            </main>
        </div>
    </>
  )
}
