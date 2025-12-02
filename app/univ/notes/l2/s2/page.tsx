"use client";

import Form from "next/form";
import { useState } from "react";

interface Matieres {
  s1: number;
  algo: number;
  poo: number;
  sysreseau: number;
  devwebbdd: number;
  imageson: number;
  histoire: number;
  oral: number;
}

const calculmoyenneS2 = (matieres: Matieres): number => {
  const { algo, poo, sysreseau, devwebbdd, imageson, histoire, oral } =
    matieres;

  // UE Informatique 4 (18 ECTS)
  const info = (algo * 6 + poo * 6 + sysreseau * 6) / 18;

  // UE Mineure (6 ECTS)
  const mineure = (devwebbdd * 3 + imageson * 3) / 6;

  // UE Compétences transversales (3 ECTS)
  const transversales = (histoire * 3 + oral * 3) / 6;

  // Moyenne pondérée: 18 + 6 + 3 = 27 ECTS
  const s2 = (info * 18 + mineure * 6 + transversales * 3) / 27;

  return s2;
};

const calculmoyenneAnnee = (matieres: Matieres): number => {
  const { s1 } = matieres;
  const s2 = calculmoyenneS2(matieres);

  return (s1 + s2) / 2;
};

export default function L2S2() {
  const [moyenneS2, setMoyenneS2] = useState<number | null>(null);
  const [moyenneAnnee, setMoyenneAnnee] = useState<number | null>(null);

  const onSubmit = (formData: FormData) => {
    const matieres: Matieres = {
      s1: Number(formData.get("s1")),
      algo: Number(formData.get("algo")),
      poo: Number(formData.get("poo")),
      sysreseau: Number(formData.get("sysreseau")),
      devwebbdd: Number(formData.get("devwebbdd")),
      imageson: Number(formData.get("imageson")),
      histoire: Number(formData.get("histoire")),
      oral: Number(formData.get("oral")),
    };

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
            name="algo"
            placeholder="Algo et structs de données 2"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="poo"
            placeholder="Programmation orientée objet"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="sysreseau"
            placeholder="Système & Réseaux"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="devwebbdd"
            placeholder="Dev web & BDD"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="imageson"
            placeholder="Images et son"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="histoire"
            placeholder="Histoire de l'info"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            name="oral"
            placeholder="Restitution orale de connaissances"
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
