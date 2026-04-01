"use client";

import { useState, useEffect, useRef } from "react";

// Simple TOTP generation for demo (not cryptographically secure, just for display)
function generateFakeCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export function Demo() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"credentials" | "2fa" | "success">(
    "credentials"
  );
  const [error, setError] = useState("");
  const [totpCode, setTotpCode] = useState(generateFakeCode());
  const [timeLeft, setTimeLeft] = useState(30);
  const [copied, setCopied] = useState(false);
  const codeInputRef = useRef<HTMLInputElement>(null);

  // Update TOTP code every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setTotpCode(generateFakeCode());
          return 30;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCredentialsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (email === "demo@example.com" && password === "demo123") {
      setStep("2fa");
    } else {
      setError("Credenciales incorrectas. Usa demo@example.com / demo123");
    }
  };

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (code.length === 6) {
      setStep("success");
    } else {
      setError("Ingresa un codigo de 6 digitos");
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(totpCode);
    setCopied(true);
    setCode(totpCode);
    setTimeout(() => setCopied(false), 2000);
    codeInputRef.current?.focus();
  };

  const fillDemo = () => {
    setEmail("demo@example.com");
    setPassword("demo123");
  };

  const resetDemo = () => {
    setStep("credentials");
    setEmail("");
    setPassword("");
    setCode("");
    setError("");
  };

  return (
    <section className="px-6 py-20" id="demo">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Pruebalo ahora
          </h2>
          <p className="mt-3 text-gray-400">
            Este es un login fake. Instala la extension y copia el codigo.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Fake Extension Panel */}
          <div className="order-2 lg:order-1">
            <div className="demo-card glow rounded-2xl p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-medium text-gray-300">
                    TOTP Extension
                  </span>
                </div>
                <span className="text-xs text-gray-500">Simulacion</span>
              </div>

              {/* Account Card */}
              <div
                onClick={handleCopyCode}
                className="cursor-pointer rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">Demo Service</p>
                    <p className="text-sm text-gray-500">demo@example.com</p>
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600"></div>
                </div>

                {/* Code */}
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-3xl font-bold tracking-wider text-white">
                    {totpCode.slice(0, 3)} {totpCode.slice(3)}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopyCode();
                    }}
                    className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                      copied
                        ? "bg-green-500/20 text-green-400"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {copied ? "Copiado" : "Copiar"}
                  </button>
                </div>

                {/* Progress bar */}
                <div className="h-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`h-full transition-all duration-1000 ${
                      timeLeft <= 10 ? "bg-red-500" : "bg-blue-500"
                    }`}
                    style={{ width: `${(timeLeft / 30) * 100}%` }}
                  ></div>
                </div>
                <p className="mt-2 text-center text-xs text-gray-500">
                  Expira en {timeLeft}s
                </p>
              </div>

              <p className="mt-4 text-center text-xs text-gray-500">
                Click en la tarjeta o en Copiar para copiar el codigo
              </p>
            </div>
          </div>

          {/* Login Form */}
          <div className="order-1 lg:order-2">
            <div className="demo-card rounded-2xl p-6">
              {step === "credentials" && (
                <>
                  <div className="mb-6 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
                      <svg
                        className="h-7 w-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      Iniciar Sesion
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Demo Service - Login Fake
                    </p>
                  </div>

                  {error && (
                    <div className="mb-4 rounded-lg bg-red-500/10 p-3 text-sm text-red-400">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleCredentialsSubmit} className="space-y-4">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-400">
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="demo@example.com"
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-400">
                        Password
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="demo123"
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-blue-500"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700"
                    >
                      Continuar
                    </button>
                  </form>

                  <button
                    onClick={fillDemo}
                    className="mt-4 w-full text-center text-sm text-blue-400 hover:text-blue-300"
                  >
                    Llenar credenciales demo
                  </button>
                </>
              )}

              {step === "2fa" && (
                <>
                  <div className="mb-6 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-600">
                      <svg
                        className="h-7 w-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      Verificacion 2FA
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Ingresa el codigo de tu autenticador
                    </p>
                  </div>

                  {error && (
                    <div className="mb-4 rounded-lg bg-red-500/10 p-3 text-sm text-red-400">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleCodeSubmit} className="space-y-4">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-400">
                        Codigo de 6 digitos
                      </label>
                      <input
                        ref={codeInputRef}
                        type="text"
                        value={code}
                        onChange={(e) =>
                          setCode(e.target.value.replace(/\D/g, "").slice(0, 6))
                        }
                        placeholder="000000"
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-4 text-center font-mono text-2xl tracking-[0.5em] text-white placeholder-gray-600 outline-none transition focus:border-blue-500"
                        maxLength={6}
                        autoComplete="one-time-code"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700"
                    >
                      Verificar
                    </button>
                  </form>

                  <p className="mt-4 text-center text-sm text-gray-500">
                    Usa la extension simulada para copiar el codigo
                  </p>
                </>
              )}

              {step === "success" && (
                <div className="py-8 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                    <svg
                      className="h-8 w-8 text-green-400"
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
                  <h3 className="text-2xl font-semibold text-white">
                    Login exitoso
                  </h3>
                  <p className="mt-2 text-gray-400">
                    Asi de facil es con TOTP Extension
                  </p>
                  <button
                    onClick={resetDemo}
                    className="mt-6 rounded-lg border border-white/20 px-6 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    Reiniciar demo
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
