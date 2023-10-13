"use client";
import React from 'react';
import {Timeline} from "@/components/Timeline/Timeline";
import {Metadata} from "next";

export default function About() {
    const age = new Date().getFullYear() - 2005;
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
        title: "ViipeR - À propos",
        description: "Bienvenue sur mon site.",
        keywords: ["viiper", "à propos", "about", "a propos"],
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
          <div className="flex flex-col items-center justify-center min-h-screen py-2 max-[500px]:max-w-xs max-[500px]:items-stretch" id={"base"}>
              <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
                  <div className="mb-8">
                      <h1 className="text-6xl font-bold mb-4">
                          À propos de moi
                      </h1>
                      <p className="mt-3 text-2xl">
                          Je suis un développeur web et Rust, passionné par les nouvelles technologies et les jeux vidéo.
                      </p>
                      <div className="flex flex-col items-center justify-center mt-8">
                          <button onClick={() => scrollToContent("content")} className="bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded transition-all">
                              Me connaître
                          </button>
                      </div>
                  </div>
              </main>
          </div>

          <div id="content"></div>
          <div className="flex flex-col items-center justify-center py-10 mt-24 max-[500px]:mt-5">
              <h2 className="text-4xl font-bold mb-4">
                  Qui suis-je ?
              </h2>
              <p className={"mt-3 text-2xl"} style={{ lineHeight: 1.6 }}>
                  Je m&apos;appelle Nicolas, j&apos;ai {age} ans et je suis passionné par le développement web et Rust. J&apos;ai commencé à développer en 2018,
                  en créant des sites web. J&apos;ai ensuite commencé à développer des bots Discord en JavaScript, puis en TypeScript.
                  J&apos;ai ensuite découvert Rust en 2021, et j&apos;ai commencé à développer des sites web en React en 2023.
                  Maintenant, je souhaite me spécialiser dans la programmation et/ou la cybersécurité. <br /><br />

                  Je suis actuellement en terminale STI2D, et je souhaite faire un BUT Informatique Parcours Cybersécurité.

                  <br /><br />

                  Je suis également passionné par les jeux vidéo, et je joue principalement à Rocket League.

                  <br /><br />

                  Je suis aussi passionné par la musique, et j&apos;écoute de tout sans style préféré. J&apos;ai tenté quelques fois de me lancer dans la musique en essayant dans faire,
                  mais je n&apos;ai jamais réussi à faire quelque chose qui me convenait vraiment.

                  <br /><br />

                  Côté informatique j&apos;ai commencé à développer en 2018, en créant des sites web. J&apos;ai commencé avec de l&apos;HTML/CSS/JavaScript basique puis en 2020
                  je découvre <a href="https://svelte.dev" style={{ color: "#1d4ed8" }} className={"hover:underline"}>Svelte</a>. Je me lance dans l&apos;apprentissage de ce framework,
                  et je commence à développer des sites web avec. <br/><br/>

                  Ensuite, je découvre <a href="https://go.dev" style={{ color: "#1d4ed8" }} className={"hover:underline"}>Go</a>, un langage de programmation créé par Google. J&apos;apprend
                  à développer avec mais je n&apos;accroche pas trop. Je cherche donc un autre langage et c&apos;est là que je
                  découvre <a href="https://rust-lang.org" style={{ color: "#1d4ed8" }} className={"hover:underline"}>Rust</a>.
                  J&apos;aime immédiatement ce langage, et je commence à développer avec. <br/><br/>

                  Aujourd&apos;hui encore j&apos;utilise Rust dans mes projets d&apos;applications de bureau. <br/><br/>

                  En 2023, je redécouvre <a href="https://react.dev" style={{ color: "#1d4ed8" }} className={"hover:underline"}>React</a> et je commence à l&apos;apprendre.
                  J&apos;aime beaucoup ce framework, bien plus que Svelte au vu du nombre de fonctionnalités qu&apos;il propose. <br/><br/>
              </p>
              <div className="flex flex-col items-center justify-center mt-8 mb-52">
                  <button onClick={() => scrollToContent("projets")} className="bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded transition-all">
                      Mes projets
                  </button>
              </div>
          </div>

          <div className="flex flex-col items-center justify-center py-10" id={"projets"}>
              <h2 className="text-4xl font-bold mb-4">
                  Mes projets
              </h2>
              <div className={"w-full max-w-5xl"}>
                  <Timeline>
                      <li style={{"--accent-color": "#41516C" } as React.CSSProperties}>
                          <div>2018</div>
                          <div>Mes débuts en programmation</div>
                          <div>
                              En 2018, je découvre la programmation en créant des sites web en HTML/CSS/JavaScript.
                          </div>
                      </li>
                      <li style={{ "--accent-color": "#FBCA3E" } as React.CSSProperties}>
                          <div>2020</div>
                          <div>Premier bot Discord</div>
                          <div>
                              En 2020, je m&apos;intéresse aux bots Discord et en voyant que c&apos;est plutôt simple à faire, je me lance dans la création de mon premier bot Discord, HeavensBot.
                          </div>
                      </li>
                      <li style={{ "--accent-color": "#1B5F8C"} as React.CSSProperties}>
                          <div>2020</div>
                          <div>Création d&apos;Elysao</div>
                          <div>Étant devenu un bon développeur, je crée, avec des amis, Elysao. Une association à but non-lucratif visant à développer des sites et des bots Discord gratuitement.</div>
                      </li>
                      <li style={{ "--accent-color": "#1B8C2E"} as React.CSSProperties}>
                          <div>2020</div>
                          <div>Création de Futuristic Games</div>
                          <div>En 2020, je crée Futuristic Games, un studio de jeux-vidéo et on commence à travailler sur un prototype de jeu futuriste avec Unreal Engine 4
                              mais malheureusement ce projet ne verra jamais le jour.</div>
                      </li>
                      <li style={{"--accent-color": "#E24A68"} as React.CSSProperties}>
                          <div>2021</div>
                          <div>Découverte de Go et de Rust</div>
                          <div>
                              Pendant l&apos;année 2021, je tente Go mais n&apos;étant pas convaincu, je découvre Rust et je l&apos;adopte immédiatement.
                          </div>
                      </li>
                      <li style={{ "--accent-color": "#4CADAD"} as React.CSSProperties}>
                          <div>2023</div>
                          <div>Redécouverte de React</div>
                          <div>En 2023, en me baladant sur YouTube, je tombe sur une vidéo parlant de React, ce qui me donne envie de redécouvrir le framework avec mon expérience sur Svelte.
                          J&apos;ai bien fait car je vais immédiatement lâcher Svelte et me mettre à développer avec React.</div>
                      </li>
                  </Timeline>
              </div>
          </div>
      </>
    )
}
