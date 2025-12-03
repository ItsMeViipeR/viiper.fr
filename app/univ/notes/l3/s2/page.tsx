"use client";

import Form from "next/form";
import { useState } from "react";

interface Matieres {
  s1: number;
  ia: number;
  langues: number;
  devlogicielslibres: number;
  devcg: number;
  iapourlesjeux: number;
  droit: number;
  stage?: number;
  projtuto?: number;
}

const calculmoyenneS2 = (matieres: Matieres): number | null => {
  const {
    ia,
    langues,
    devlogicielslibres,
    devcg,
    iapourlesjeux,
    droit,
    stage,
    projtuto,
  } = matieres;

  // UE Informatique 6 (18 ECTS)
  const info = (ia * 6 + langues * 6 + devlogicielslibres * 6) / 18;

  // UE Mineure (6 ECTS)
  const mineure = (devcg * 3 + iapourlesjeux * 3) / 6;

  if (stage === undefined && projtuto === undefined) {
    return null;
  }

  // UE Compétences transversales (3 ECTS)
  const transversales =
    stage !== undefined
      ? (droit * 3 + stage * 3) / 6
      : projtuto !== undefined
      ? (droit * 3 + projtuto * 3) / 6
      : 0;

  // Moyenne pondérée: 18 + 6 + 3 = 27 ECTS
  const s2 = (info * 18 + mineure * 6 + transversales * 3) / 27;

  return s2;
};

const calculmoyenneAnnee = (matieres: Matieres): number => {
  const { s1 } = matieres;
  const s2 = calculmoyenneS2(matieres);

  return (s1 + s2!) / 2;
};

export default function L3S2() {
  const [moyenneS2, setMoyenneS2] = useState<number | null>(null);
  const [moyenneAnnee, setMoyenneAnnee] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = (formData: FormData) => {
    setErrorMessage(null);
    setMoyenneS2(null);
    setMoyenneAnnee(null);
    const matieres: Matieres = {
      s1: Number(formData.get("s1")),
      ia: Number(formData.get("ia")),
      langues: Number(formData.get("langues")),
      devlogicielslibres: Number(formData.get("devlogicielslibres")),
      devcg: Number(formData.get("devcg")),
      iapourlesjeux: Number(formData.get("iapourlesjeux")),
      droit: Number(formData.get("droit")),
    };

    if (formData.get("stage")) {
      matieres.stage = Number(formData.get("stage"));
    }

    if (formData.get("projtuto")) {
      matieres.projtuto = Number(formData.get("projtuto"));
    }

    const moyenne: number | null = calculmoyenneS2(matieres);

    if (moyenne === null) {
      setErrorMessage(
        "Veuillez entrer une note pour le stage ou le projet tutoré."
      );
      return;
    }

    setMoyenneS2(Math.round(moyenne * 1000) / 1000);
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
            name="ia"
            placeholder="IA et apprentissage"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="langues"
            placeholder="Ingénierie des langues"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="devlogicielslibres"
            placeholder="Dev de logiciels libres"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="devcg"
            placeholder="Programmation de CG"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="iapourlesjeux"
            placeholder="IA pour les jeux"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="droit"
            placeholder="Droit, éthique, informatique"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="stage"
            placeholder="Stage (facultatif)"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="projtuto"
            placeholder="Projet tutoré (facultatif)"
            className="px-4 py-3 mb-4 rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className="p-6 w-full mt-8 border border-blue-900 rounded-md text-white font-semibold bg-purple-600 hover:bg-purple-700 transition duration-200"
        >
          Calculer
        </button>
      </Form>

      {errorMessage && (
        <div className="mt-6 backdrop-blur-xl bg-red-500/30 border-2 border-red-400/60 text-red-100 font-semibold px-6 py-4 rounded-xl shadow-xl max-w-2xl w-full">
          {errorMessage}
        </div>
      )}

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
