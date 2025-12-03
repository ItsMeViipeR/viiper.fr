"use client";

import Form from "next/form";
import { useState } from "react";

interface Matieres {
  s1: number;
  pi: number;
  pl: number;
  inf: number;
  pdlmdj: number;
  cgr: number;
  oic: number;
  anglais: number;
  ec: number;
}

const calculmoyenneS2 = (matieres: Matieres): number => {
  const { pi, pl, inf, pdlmdj, cgr, oic, anglais, ec } = matieres;

  // UE Informatique 2 (18 ECTS)
  const info = (pi * 12 + pl * 6 + inf * 6) / 24;

  // UE Mineure (6 ECTS)
  const mineure = (pdlmdj * 3 + cgr * 3) / 6;

  // UE Compétences transversales (3 ECTS)
  const transversales = (oic * 3 + anglais * 3 + ec * 3) / 9;

  // Moyenne pondérée: 18 + 6 + 3 = 27 ECTS
  const s2 = (info * 18 + mineure * 6 + transversales * 3) / 27;

  return s2;
};

const calculmoyenneAnnee = (matieres: Matieres): number => {
  const { s1 } = matieres;
  const s2 = calculmoyenneS2(matieres);

  return (s1 + s2) / 2;
};

export default function L1S2() {
  const [moyenneS2, setMoyenneS2] = useState<number | null>(null);
  const [moyenneAnnee, setMoyenneAnnee] = useState<number | null>(null);

  const onSubmit = (formData: FormData) => {
    const matieres: Matieres = {
      s1: Number(formData.get("s1")),
      pi: Number(formData.get("pi")),
      pl: Number(formData.get("pl")),
      inf: Number(formData.get("inf")),
      pdlmdj: Number(formData.get("pdlmdj")),
      cgr: Number(formData.get("cgr")),
      oic: Number(formData.get("oic")),
      anglais: Number(formData.get("anglais")),
      ec: Number(formData.get("ec")),
    };

    setMoyenneS2(Math.round(calculmoyenneS2(matieres) * 1000) / 1000);
    setMoyenneAnnee(Math.round(calculmoyenneAnnee(matieres) * 1000) / 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-black">
      <h1 className="text-white text-4xl md:text-5xl font-bold mb-8 text-center">
        Calculez votre moyenne de l&apos;année
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
            name="s1"
            placeholder="Semestre 1"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="pi"
            placeholder="Impérative"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="inf"
            placeholder="Fondamentale"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="pl"
            placeholder="Logique"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="pdlmdj"
            placeholder="Programmation moteurs"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="cgr"
            placeholder="Resources"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="oic"
            placeholder="Outils informatiques"
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
            name="ec"
            placeholder="EC Libre"
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
      {moyenneS2 !== null && moyenneAnnee !== null && (
        <>
          <div className="mt-8 w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="backdrop-blur-xl bg-gradient-to-br from-purple-600/40 via-purple-500/30 to-blue-500/40 border-2 border-purple-300/40 p-6 rounded-2xl shadow-2xl transition-transform duration-300 hover:bg-gradient-to-br hover:from-blue-600/40 hover:via-blue-500/30 hover:to-purple-500/40 hover:border-blue-300/40">
              <p className="text-sm font-medium text-white mb-1">Semestre 2</p>
              <p className="text-5xl font-bold text-white drop-shadow-lg">
                <span>{moyenneS2}</span>/20
              </p>
            </div>
            <div className="backdrop-blur-xl bg-gradient-to-br from-blue-600/40 via-blue-500/30 to-purple-500/40 border-2 border-blue-300/40 p-6 rounded-2xl shadow-2xl transition-transform duration-300 hover:bg-gradient-to-br hover:from-purple-600/40 hover:via-purple-500/30 hover:to-blue-500/40 hover:border-purple-300/40">
              <p className="text-sm font-medium text-white mb-1">
                Moyenne Annuelle
              </p>
              <p className="text-5xl font-bold text-white drop-shadow-lg">
                <span>{moyenneAnnee}</span>/20
              </p>
            </div>
          </div>

          {moyenneAnnee >= 10 ? (
            <p className="mt-6 text-lime-300 font-semibold">
              Félicitations ! Vous avez validé votre année.
            </p>
          ) : (
            <p className="mt-6 text-red-600 font-semibold">
              Malheureusement, vous n&apos;avez pas validé votre année.
            </p>
          )}
        </>
      )}
    </div>
  );
}
