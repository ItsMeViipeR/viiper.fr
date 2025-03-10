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
}

const calculmoyenneS2 = (matieres: Matieres): number => {
  const {
    ia,
    langues,
    devlogicielslibres,
    devcg,
    iapourlesjeux,
    droit,
    stage,
  } = matieres;

  if (!stage) {
    return (
      (ia * 6 +
        langues * 6 +
        devlogicielslibres * 6 +
        devcg * 3 +
        iapourlesjeux * 3 +
        droit * 1.5) /
      25.5
    );
  } else {
    return (
      (ia * 6 +
        langues * 6 +
        devlogicielslibres * 6 +
        devcg * 3 +
        iapourlesjeux * 3 +
        droit * 1.5 +
        stage * 1.5) /
      27
    );
  }
};

const calculmoyenneAnnee = (matieres: Matieres): number => {
  const { s1 } = matieres;
  const s2 = calculmoyenneS2(matieres);

  return (s1 + s2) / 2;
};

export default function L3S2() {
  const [moyenneS2, setMoyenneS2] = useState<number | null>(null);
  const [moyenneAnnee, setMoyenneAnnee] = useState<number | null>(null);

  const onSubmit = (formData: FormData) => {
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

    setMoyenneS2(Math.round(calculmoyenneS2(matieres) * 1000) / 1000);
    setMoyenneAnnee(Math.round(calculmoyenneAnnee(matieres) * 1000) / 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">
        Calculez votre moyenne de l&apos;année
      </h1>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(new FormData(e.target as HTMLFormElement));
        }}
        action="#"
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl"
      >
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="s1"
            placeholder="Semestre 1"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="ia"
            placeholder="IA et apprentissage"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="langues"
            placeholder="Ingénierie des langues"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="devlogicielslibres"
            placeholder="Dev de logiciels libres"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="devcg"
            placeholder="Programmation de CG"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="iapourlesjeux"
            placeholder="IA pour les jeux"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="droit"
            placeholder="Droit, éthique, informatique"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="stage"
            placeholder="Stage (facultatif)"
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </Form>
      {moyenneS2 && moyenneAnnee && (
        <div className="mt-8">
          <p className="text-xl font-bold">
            Moyenne du semestre 2: {moyenneS2}
          </p>
          <p className="text-xl font-bold">
            Moyenne de l&apos;année: {moyenneAnnee}
          </p>
        </div>
      )}
    </div>
  );
}
