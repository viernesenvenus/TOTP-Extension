"use client";

export function Problem() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Problem */}
          <div className="demo-card rounded-2xl p-8">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">
              El problema
            </h3>
            <p className="text-gray-400">
              Cada vez que haces login, tienes que buscar tu celular,
              desbloquearlo, abrir el autenticador, encontrar la cuenta, ver el
              codigo, y escribirlo antes de que expire.
            </p>
          </div>

          {/* Solution */}
          <div className="demo-card rounded-2xl p-8">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">
              La solucion
            </h3>
            <p className="text-gray-400">
              Click en la extension, click en copiar. El codigo ya esta en tu
              portapapeles. Tus claves nunca salen de tu navegador.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
