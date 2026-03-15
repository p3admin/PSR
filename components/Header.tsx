"use client";

import { useState } from "react";
import Image from "next/image";

const navItems = ["Миссия", "Структура", "Компетенции", "Проекты"];

export default function Header() {
  const [active, setActive] = useState("Миссия");

  return (
    <header className="w-full flex justify-center mt-[20px] sticky top-0 z-50">
      <div className="max-w-[1200px] w-full mx-auto flex items-center justify-between pt-[20px] pb-[16px] px-0">
        {/* Logo */}
        <Image src="/logo.svg" alt="PSR" width={60} height={24} className="h-[24px] w-auto" />

        {/* Nav */}
        <nav className="flex gap-[32px] items-center">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`text-[14px] font-medium tracking-[0.14px] leading-[1.3] text-[#E0DDFE] transition-colors whitespace-nowrap cursor-pointer font-[var(--font-tt-hoves)]
                ${active === item ? "bg-white/10 backdrop-blur-md px-4 py-2 rounded-full" : "px-4 py-2 rounded-full hover:bg-white/5"}`}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Language switcher */}
        <button className="flex gap-[10px] items-center text-[14px] font-semibold tracking-[0.14px] leading-[1.3] text-[#E0DDFE] cursor-pointer hover:opacity-80 transition-opacity">
          <span>RU</span>
          <Image src="/arrow.svg" alt="" width={11} height={5} className="w-[11px] h-[5px]" />
        </button>
      </div>
    </header>
  );
}
