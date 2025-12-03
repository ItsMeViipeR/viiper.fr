"use client";

export default function Notes() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-black">
      <h1 className="text-white text-4xl md:text-5xl font-bold mb-8 text-center">
        Calculez votre moyenne
      </h1>

      <div className="w-full max-w-2xl backdrop-blur-2xl p-8 rounded-3xl shadow-2xl transition-all duration-300">
        <p className="text-center text-xl text-white/90 mb-6">
          Quel est votre niveau ?
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="/univ/notes/l1"
            className="backdrop-blur-xl bg-gradient-to-br from-purple-600/30 via-purple-500/20 to-blue-500/30 border-2 border-purple-300/30 p-6 rounded-2xl shadow-lg text-center text-white hover:scale-[1.02] transition-transform duration-200"
          >
            <p className="text-lg font-semibold">L1</p>
            <p className="text-xs mt-2 opacity-90">
              Calculez ou vérifiez votre moyenne de L1
            </p>
          </a>

          <a
            href="/univ/notes/l2"
            className="backdrop-blur-xl bg-gradient-to-br from-blue-600/30 via-blue-500/20 to-purple-500/30 border-2 border-blue-300/30 p-6 rounded-2xl shadow-lg text-center text-white hover:scale-[1.02] transition-transform duration-200"
          >
            <p className="text-lg font-semibold">L2</p>
            <p className="text-xs mt-2 opacity-90">
              Calculez ou vérifiez votre moyenne de L2
            </p>
          </a>

          <a
            href="/univ/notes/l3"
            className="backdrop-blur-xl bg-gradient-to-br from-green-600/30 via-green-500/20 to-teal-500/30 border-2 border-green-300/30 p-6 rounded-2xl shadow-lg text-center text-white hover:scale-[1.02] transition-transform duration-200"
          >
            <p className="text-lg font-semibold">L3</p>
            <p className="text-xs mt-2 opacity-90">
              Calculez ou vérifiez votre moyenne de L3
            </p>
          </a>
        </div>

        <p className="mt-6 text-center text-sm text-white/70">
          Sélectionnez votre année pour accéder aux calculateurs de moyenne.
        </p>
      </div>
    </div>
  );
}
