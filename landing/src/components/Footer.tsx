"use client";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600"></div>
            <span className="font-semibold text-white">TOTP Extension</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a
              href="https://github.com/asther0/TOTP-Extension"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://github.com/asther0/TOTP-Extension/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Reportar Bug
            </a>
            <a
              href="https://github.com/asther0/TOTP-Extension/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              MIT License
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-600">
          Hecho para facilitar tu workflow diario
        </p>
      </div>
    </footer>
  );
}
