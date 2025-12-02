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
            name="algo"
            placeholder="Algo et structs de données 1"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="pia"
            placeholder="Impérative avancée"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="pfa"
            placeholder="Fonctionnelle avancée"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="algog"
            placeholder="Algo prog graphique"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="introia"
            placeholder="Intro IA"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="projetpro"
            placeholder="Projet Pro"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="anglais"
            placeholder="Anglais"
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
