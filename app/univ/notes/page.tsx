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

const calculMoyenneS2 = (matieres: Matieres): number => {
  const { pi, pl, inf, pdlmdj, cgr, oic, anglais, ec } = matieres;

  return (
    (pi * 12 +
      pl * 6 +
      inf * 6 +
      pdlmdj * 3 +
      cgr * 3 +
      oic * 1.5 +
      anglais * 1.5 +
      ec * 1.5) /
    34.5
  );
};

export default function Notes() {
  const [moyenneS2, setMoyenneS2] = useState<number | null>(null);
  const [moyenneAnnee, setmoyenneAnnee] = useState<number | null>(null);

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

    setMoyenneS2(Math.round(calculMoyenneS2(matieres) * 1000) / 1000);
    setmoyenneAnnee(
      Math.round(((matieres.s1 + calculMoyenneS2(matieres)) / 2) * 1000) / 1000
    );
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
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            defaultValue={10}
            name="s1"
            placeholder="Note du semestre 1"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            defaultValue={10}
            name="pi"
            placeholder="Impérative"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            defaultValue={10}
            name="pl"
            placeholder="Logique"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            defaultValue={10}
            name="inf"
            placeholder="Fondamentale"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            defaultValue={10}
            name="pdlmdj"
            placeholder="Moteurs de jeu"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            defaultValue={10}
            name="cgr"
            placeholder="Ressources"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            defaultValue={10}
            name="oic"
            placeholder="Outils informatiques"
            className="border border-gray-300 p-2 rounded"
            required={true}
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            defaultValue={10}
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
            defaultValue={10}
            name="ec"
            placeholder="EC libre"
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
      {moyenneS2 && (
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
