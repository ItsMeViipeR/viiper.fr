"use client";

export default function L2() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">
        Calculez votre moyenne de l&apos;année
      </h1>

      <div className="flex space-x-4 flex-col gap-2">
        <p className="text-center">Quel est votre semestre actuel ?</p>
        <div className="grid grid-cols-2 gap-4">
          <a
            href="/univ/notes/l2/s1"
            className="bg-blue-500 text-white rounded-sm p-2 hover:bg-blue-600 transition-all duration-200"
          >
            Semestre 1
          </a>
          <a
            href="/univ/notes/l2/s2"
            className="bg-blue-500 text-white rounded-sm p-2 hover:bg-blue-600 transition-all duration-200"
          >
            Semestre 2
          </a>
        </div>
      </div>
    </div>
  );
}
