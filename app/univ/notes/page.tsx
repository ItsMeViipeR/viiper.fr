"use client";

export default function Notes() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">
        Calculez votre moyenne de l&apos;année
      </h1>

      <div className="flex space-x-4 flex-col gap-2">
        <p className="text-center">Quel est votre niveau ?</p>
        <div className="grid grid-cols-2 gap-4">
          <a
            href="/univ/notes/l1"
            className="bg-blue-500 text-white rounded-sm p-2 hover:bg-blue-600 transition-all duration-200"
          >
            <p className="text-center">L1</p>
          </a>
          <a
            href="/univ/notes/l2"
            className="bg-blue-500 text-white rounded-sm p-2 hover:bg-blue-600 transition-all duration-200"
          >
            <p className="text-center">L2</p>
          </a>
          <a
            href="/univ/notes/l3"
            className="bg-blue-500 text-white rounded-sm p-2 hover:bg-blue-600 transition-all duration-200"
          >
            <p className="text-center">L3</p>
          </a>
        </div>
      </div>
    </div>
  );
}
