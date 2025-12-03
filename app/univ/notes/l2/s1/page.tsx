"use client";

import Form from "next/form";
import { useState } from "react";

interface Matieres {
  algo: number;
  pia: number;
  pfa: number;
  algog: number;
  introia: number;
  projetpro: number;
  anglais: number;
}

const calculmoyenneS1 = (matieres: Matieres): number => {
  const { algo, pia, pfa, algog, introia, projetpro, anglais } = matieres;

  // UE Informatique 3 (18 ECTS)
  const info = (algo * 6 + pfa * 6 + pia * 6) / 18;

  // UE Mineure (6 ECTS)
  const mineure = (algog * 3 + introia * 3) / 6;

  // UE Compétences transversales (3 ECTS)
  const transversales = (projetpro * 3 + anglais * 3) / 6;

  // Moyenne pondérée: 18 + 6 + 3 = 27 ECTS
  const s1 = (info * 18 + mineure * 6 + transversales * 3) / 27;

  return s1;
};

export default function L2S1() {
  const [moyenneS1, setMoyenneS1] = useState<number | null>(null);

  const onSubmit = (formData: FormData) => {
    const matieres: Matieres = {
      algo: Number(formData.get("algo")),
      pia: Number(formData.get("pia")),
      pfa: Number(formData.get("pfa")),
      algog: Number(formData.get("algog")),
      introia: Number(formData.get("introia")),
      projetpro: Number(formData.get("projetpro")),
      anglais: Number(formData.get("anglais")),
    };

    setMoyenneS1(Math.round(calculmoyenneS1(matieres) * 1000) / 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
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
            name="algo"
            placeholder="Algo et structs de données 1"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="pia"
            placeholder="Impérative avancée"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="pfa"
            placeholder="Fonctionnelle avancée"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="algog"
            placeholder="Algo prog graphique"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="introia"
            placeholder="Intro IA"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="projetpro"
            placeholder="Projet Pro"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="anglais"
            placeholder="Anglais"
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
              <p className="text-sm font-medium text-white mb-1">Semestre 1</p>
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
