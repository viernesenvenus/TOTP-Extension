"use client";

interface HeroProps {
  stars: number | null;
}

export function Hero({ stars }: HeroProps) {
  return (
    <section className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400">
          <span className="h-2 w-2 rounded-full bg-green-500"></span>
          Open Source - MIT License
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          <span className="gradient-text">2FA</span> sin sacar el celular
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 sm:text-xl">
          Copia codigos TOTP directamente desde tu navegador.
          <br className="hidden sm:block" />
          Un click. Sin desbloquear nada.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* Chrome Download */}
          <a
            href="https://github.com/asther0/TOTP-Extension/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-black transition hover:bg-gray-200"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29L1.931 5.47zm13.342 2.166a5.446 5.446 0 0 1 1.819 7.911l-3.953 6.848A12.048 12.048 0 0 0 24 12c0-.653-.055-1.291-.145-1.918H15.273a5.387 5.387 0 0 1 0-2.446zM12 16.364a4.364 4.364 0 1 0 0-8.728 4.364 4.364 0 0 0 0 8.728z" />
            </svg>
            Descargar Extension
          </a>

          {/* GitHub Stars */}
          <a
            href="https://github.com/asther0/TOTP-Extension"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-base font-medium text-white transition hover:bg-white/10"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
            {stars !== null && (
              <span className="rounded-md bg-white/10 px-2 py-0.5 text-sm">
                {stars}
              </span>
            )}
          </a>
        </div>
      </div>
    </section>
  );
}
