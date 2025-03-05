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

  return (
    (mdp * 6 +
      pf * 6 +
      archi * 6 +
      intro * 3 +
      maths * 3 +
      gil * 1.5 +
      pdm * 1.5) /
    27
  );
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
            name="mdp"
            placeholder="MDP"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="pf"
            placeholder="Fonctionnelle"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="archi"
            placeholder="Archi"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="intro"
            placeholder="Intro moteurs de jeu"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="maths"
            placeholder="Maths"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="gil"
            placeholder="GIL"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="pdm"
            placeholder="Pratique des machines"
            className="border border-gray-300 p-2 rounded"
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
      {moyenneS1 && (
        <div className="mt-8">
          <p className="text-xl font-bold">
            Moyenne du semestre 2: {moyenneS1}
          </p>
        </div>
      )}
    </div>
  );
}
