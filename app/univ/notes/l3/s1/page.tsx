"use client";

import Form from "next/form";
import { useState } from "react";

interface Matieres {
  algoav: number;
  intcomp: number;
  secu: number;
  moteursdejeu: number;
  devmobile: number;
  anglais: number;
  objmaster: number;
}

const calculmoyenneS1 = (matieres: Matieres): number => {
  const { algoav, intcomp, secu, moteursdejeu, devmobile, anglais, objmaster } =
    matieres;

  // UE Informatique 3 (18 ECTS)
  const info = (algoav * 6 + intcomp * 6 + secu * 6) / 18;

  // UE Mineure (6 ECTS)
  const mineure = (moteursdejeu * 3 + devmobile * 3) / 6;

  // UE Compétences transversales (3 ECTS)
  const transversales = (anglais * 3 + objmaster * 3) / 6;

  // Moyenne pondérée: 18 + 6 + 3 = 27 ECTS
  const s1 = (info * 18 + mineure * 6 + transversales * 3) / 27;

  return s1;
};

export default function L2S1() {
  const [moyenneS1, setMoyenneS1] = useState<number | null>(null);

  const onSubmit = (formData: FormData) => {
    const matieres: Matieres = {
      algoav: Number(formData.get("algoav")),
      intcomp: Number(formData.get("intcomp")),
      secu: Number(formData.get("secu")),
      moteursdejeu: Number(formData.get("moteursdejeu")),
      devmobile: Number(formData.get("devmobile")),
      anglais: Number(formData.get("anglais")),
      objmaster: Number(formData.get("objmaster")),
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
            name="algoav"
            placeholder="Algorithmique avancée"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="intcomp"
            placeholder="Interprétation et compilation"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="secu"
            placeholder="Introduction à la sécurité"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="moteursdejeu"
            placeholder="Moteurs de jeu"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="devmobile"
            placeholder="Développement mobile"
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
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="objmaster"
            placeholder="Objectifs master"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required={true}
          />
        </div>
        <button
          type="submit"
          className="p-6 w-full mt-8 border border-blue-900 rounded-md text-white font-semibold bg-purple-600 hover:bg-purple-700 transition duration-200"
        >
          Calculer
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
