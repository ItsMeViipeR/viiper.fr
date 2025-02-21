"use client";

import Form from "next/form";

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

    const moyenneS2 = calculMoyenneS2(matieres);
    const moyenneAnnee = (matieres.s1 + moyenneS2) / 2;

    console.log("Moyenne du semestre 2:", moyenneS2);
    console.log("Moyenne de l'année:", moyenneAnnee);
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
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            defaultValue={10}
            name="pi"
            placeholder="Note en impérative"
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            defaultValue={10}
            name="pl"
            placeholder="PL"
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            defaultValue={10}
            name="inf"
            placeholder="INF"
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            defaultValue={10}
            name="pdlmdj"
            placeholder="PDLMDJ"
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            defaultValue={10}
            name="cgr"
            placeholder="CGR"
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            defaultValue={10}
            name="oic"
            placeholder="OIC"
            className="border border-gray-300 p-2 rounded"
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
          />
          <input
            type="number"
            step={0.001}
            min={0}
            max={20}
            defaultValue={10}
            name="ec"
            placeholder="EC"
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
    </div>
  );
}
