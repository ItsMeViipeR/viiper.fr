import {Metadata} from "next";
import {Loader} from "lucide-react";
import React from "react";

export default function Discord() {
    const METADATAS: Metadata = {
        title: "ViipeR - Discord",
        description: "Rejoignez mon serveur Discord.",
        keywords: ["viiper", "discord"],
        openGraph: {
            images: ["https://viiper.fr/logo.jpg"],
        }
    }

    return (
      <>
          <head>
              <meta httpEquiv={"refresh"} content={"0;https://discord.gg/zGk6BvGYx7"} />
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
                          <Loader size={64} className={"loader"} />
                      </h1>
                      <p>Redirection...</p>
                  </div>
              </main>
          </div>
      </>
    )
}