"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: implement auth
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="bg-black min-h-screen w-full flex items-center justify-center overflow-hidden relative">
      {/* Decorative glows */}
      <div
        aria-hidden="true"
        className="absolute top-[-100px] right-[-100px] w-[600px] h-[700px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(70,46,148,0.45) 0%, transparent 70%)", opacity: 0.3 }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(46,28,120,0.5) 0%, transparent 70%)", opacity: 0.2 }}
      />

      <div className="relative z-10 w-full max-w-[490px] px-4 flex flex-col items-center gap-[48px]">
        {/* Logo */}
        <Link href="/" className="flex h-[30px] items-center">
          <Image alt="PSR" src="/psr-logo.svg" width={88} height={24} style={{ width: "auto", height: "24px", display: "block" }} />
        </Link>

        {/* Card */}
        <div
          className="w-full flex flex-col gap-[32px] px-[48px] py-[45px] rounded-[16px]"
          style={{ background: "rgba(224,221,254,0.1)" }}
        >
          <h1 className="text-[#e0ddfe] text-[34px] leading-none tracking-[0.34px] font-normal" style={{ fontFamily: "'TT Hoves', sans-serif" }}>
            Вход в систему
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[8px]">
              <label className="text-[#e0ddfe] text-[16px] font-medium leading-[1.3] tracking-[0.16px]" style={{ fontFamily: "'TT Hoves', sans-serif" }}>
                E-mail
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                required
                value={formData.email}
                onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                className="border-[0.5px] border-[#8888ff] h-[50px] px-[16px] py-[14px] rounded-[8px] bg-transparent text-[rgba(187,185,210,0.9)] text-[16px] leading-[1.3] tracking-[0.16px] placeholder:text-[rgba(187,185,210,0.3)] focus:outline-none focus:border-[#a0a0ff] transition-colors"
                style={{ fontFamily: "'TT Hoves', sans-serif" }}
              />
            </div>

            <div className="flex flex-col gap-[8px]">
              <label className="text-[#e0ddfe] text-[16px] font-medium leading-[1.3] tracking-[0.16px]" style={{ fontFamily: "'TT Hoves', sans-serif" }}>
                Пароль
              </label>
              <input
                type="password"
                placeholder="••••••••"
                required
                value={formData.password}
                onChange={(e) => setFormData((p) => ({ ...p, password: e.target.value }))}
                className="border-[0.5px] border-[#8888ff] h-[50px] px-[16px] py-[14px] rounded-[8px] bg-transparent text-[rgba(187,185,210,0.9)] text-[16px] leading-[1.3] tracking-[0.16px] placeholder:text-[rgba(187,185,210,0.3)] focus:outline-none focus:border-[#a0a0ff] transition-colors"
                style={{ fontFamily: "'TT Hoves', sans-serif" }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="backdrop-blur-[6px] bg-[#462e94] flex h-[48px] items-center justify-center px-[42px] py-[8px] rounded-[8px] text-white text-[16px] tracking-[0.16px] leading-[1.3] hover:bg-[#5a3db8] disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer w-full"
              style={{ fontFamily: "'TT Hoves', sans-serif" }}
            >
              {loading ? "Вход..." : "Войти"}
            </button>
          </form>
        </div>

        {/* Back link */}
        <Link href="/" className="text-[rgba(224,221,254,0.5)] text-[14px] tracking-[0.14px] hover:text-[#e0ddfe] transition-colors" style={{ fontFamily: "'TT Hoves', sans-serif" }}>
          ← На главную
        </Link>
      </div>
    </div>
  );
}
