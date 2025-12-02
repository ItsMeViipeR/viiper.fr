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
            name="algoav"
            placeholder="Algorithmique avancée"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="intcomp"
            placeholder="Interprétation et compilation"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="secu"
            placeholder="Introduction à la sécurité"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="moteursdejeu"
            placeholder="Moteurs de jeu"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="devmobile"
            placeholder="Développement mobile"
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
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="objmaster"
            placeholder="Objectifs master"
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
