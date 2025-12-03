"use client";

import Form from "next/form";
import { useState } from "react";

interface Matieres {
  mdp: number;
  pf: number;
  archi: number;
  intro: number;
  maths: number;
  gil: number;
  pdm: number;
}

const calculmoyenneS1 = (matieres: Matieres): number => {
  const { mdp, pf, archi, intro, maths, gil, pdm } = matieres;

  // UE Informatique 1 (18 ECTS)
  const info = (mdp * 6 + pf * 6 + archi * 6) / 18;

  // UE Choix mineure / Conception JV (6 ECTS)
  const mineure = (intro * 3 + maths * 3) / 6;

  // UE Compétences transversales (3 ECTS)
  const transversales = (gil * 3 + pdm * 3) / 6;

  // Moyenne pondérée: 18 + 6 + 3 = 27 ECTS
  const s1 = (info * 18 + mineure * 6 + transversales * 3) / 27;

  console.log("Info:", info);
  console.log("JV:", mineure);
  console.log("Transversales:", transversales);
  console.log("S1:", s1);

  return s1;
};

export default function L1S1() {
  const [moyenneS1, setMoyenneS1] = useState<number | null>(null);

  const onSubmit = (formData: FormData) => {
    const matieres: Matieres = {
      mdp: Number(formData.get("mdp")),
      pf: Number(formData.get("pf")),
      archi: Number(formData.get("archi")),
      intro: Number(formData.get("intro")),
      maths: Number(formData.get("maths")),
      gil: Number(formData.get("gil")),
      pdm: Number(formData.get("pdm")),
    };

    setMoyenneS1(Math.round(calculmoyenneS1(matieres) * 1000) / 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-black">
      <h1 className="text-white text-4xl md:text-5xl font-bold mb-8 text-center">
        Calculez votre moyenne du semestre 1
      </h1>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(new FormData(e.target as HTMLFormElement));
        }}
        action="#"
        className="w-full max-w-2xl backdrop-blur-2xl p-8 rounded-3xl shadow-2xl transition-all duration-300"
      >
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="mdp"
            placeholder="MDP"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="pf"
            placeholder="Fonctionnelle"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="archi"
            placeholder="Archi"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="intro"
            placeholder="Intro moteurs de jeu"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="maths"
            placeholder="Maths"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="gil"
            placeholder="GIL"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="pdm"
            placeholder="Pratique des machines"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required={true}
          />
        </div>
        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </Form>
      {moyenneS1 !== null && (
        <>
          <div className="mt-8 w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="backdrop-blur-xl bg-gradient-to-br from-purple-600/40 via-purple-500/30 to-blue-500/40 border-2 border-purple-300/40 p-6 rounded-2xl shadow-2xl transition-transform duration-300 hover:bg-gradient-to-br hover:from-blue-600/40 hover:via-blue-500/30 hover:to-purple-500/40 hover:border-blue-300/40">
              <p className="text-sm font-medium text-white mb-1">Semestre 2</p>
              <p className="text-5xl font-bold text-white drop-shadow-lg">
                <span>{moyenneS1}</span>/20
              </p>
            </div>
          </div>

          {moyenneS1 >= 10 ? (
            <p className="mt-6 text-lime-300 font-semibold">
              Félicitations ! Vous avez validé votre semestre 1.
            </p>
          ) : (
            <p className="mt-6 text-red-600 font-semibold">
              Malheureusement, vous n&apos;avez pas validé votre semestre 1.
            </p>
          )}
        </>
      )}
    </div>
  );
}
