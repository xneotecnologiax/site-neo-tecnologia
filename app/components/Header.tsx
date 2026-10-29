"use client";

import { inter } from "../font";
import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"sobre" | "como funciona" | "produtos" | "recursos" | null>(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState<"sobre" | "produtos" | "recursos" | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header id="topo" className="sticky top-0 z-50 bg-black px-4 pt-4">
      <div className={`${inter.className} mx-auto flex max-w-7xl flex-col gap-2 rounded-[50px] border border-white/10 bg-[#121212] px-4 py-1 backdrop-blur-md md:px-6`}>
        <div className="w-full flex items-center justify-between">
          <div className="w-full flex items-center justify-between md:w-auto">
            <div>
              <button
                type="button"
                onClick={() => {
                  if (pathname === "/") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    router.push("/");
                  }
                }}
                className="hover:opacity-80 transition">
                <Image
                  src="/logo-neo.png"
                  alt="Logo Neo Tecnologia"
                  width={80}
                  height={23}
                />
              </button>
            </div>
            <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white text-2xl leading-none transition hover:opacity-70">
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
          <div>
            <nav className="hidden md:flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <button type="button" onClick={() => setActiveMenu(activeMenu === "sobre" ? null : "sobre")} className="text-sm font-medium hover:opacity-70 transition">Sobre</button>
              <a href="/como-funciona" className="text-sm font-medium hover:opacity-70 transition">Como funciona</a>
              <div className="relative">
                <button type="button" onClick={() => setActiveMenu(activeMenu === "produtos" ? null : "produtos")} className="text-sm font-medium hover:opacity-70 transition">Produtos</button>
              </div>
              <button type="button" onClick={() => setActiveMenu(activeMenu === "recursos" ? null : "recursos")} className="text-sm font-medium hover:opacity-70 transition">Recursos</button>
            </nav>
          </div>
          <a href="https://wa.me/5561998611311?text=Olá!%20Vim%20pelo%20site%20da%20Neo%20Tecnologia%20e%20gostaria%20de%20solicitar%20uma%20demonstração." target="_blank" rel="noopener noreferrer" className={`${inter.className} hidden px-5 py-2 rounded-full border text-sm font-medium bg-white text-black hover:opacity-90 transition cursor-pointer md:inline-flex`}>Conectar</a>
        </div>
        {activeMenu === "sobre" && (
          <div className="hidden w-full border-t border-white/10 px-4 py-6 md:flex items-center gap-8">
            <div className="flex flex-col gap-3">
              <a href="#quem-somos">Quem somos</a>
              <a href="#como-funciona">Como funciona</a>
              <a href="#nossa-proposta">Nossa proposta</a>
            </div>
          </div>
        )}
        {activeMenu === "produtos" && (
          <div className="hidden w-full border-t border-white/10 px-4 py-6 md:flex items-center gap-8">
            <div className="flex flex-col gap-3">
              <a href="#neochat-ia">NeoChat IA 1.0</a>
              <a href="#neobox-ia">NeoBox IA</a>
              <a href="#neobrain-ia">NeoBrain IA</a>
            </div>
          </div>
        )}
        {activeMenu === "recursos" && (
          <div className="hidden w-full border-t border-white/10 px-4 py-6 md:flex items-start gap-8">
            <div className="flex flex-col gap-3">
              <a href="#blog">Blog</a>
              <a href="#guias">Guias</a>
              <a href="#documentacao">Documentação</a>
            </div>
            <div className="flex flex-col gap-3">
              <a href="#central-de-ajuda">Central de ajuda</a>
              <a href="#materiais">Materiais</a>
              <a href="#estudos">Estudos</a>
            </div>
          </div>
        )}
        {isMenuOpen && (
          <div className={`${inter.className} md:hidden w-full flex flex-col border-t border-white/10 px-4 pt-4 pb-5`}>
            <button onClick={() => setActiveMobileMenu(activeMobileMenu === "sobre" ? null : "sobre")} className="flex w-full items-center justify-between py-3 text-left text-lg font-medium hover:opacity-70 transition">
              <span>Sobre</span>
              <span className="text-xl leading-none">{activeMobileMenu === "sobre" ? "-" : "+"}</span>
            </button>
            {activeMobileMenu === "sobre" && (
              <div className="mt-3 overflow-hidden rounded-[24px] border border-white/10 bg-zinc-950">
                <a href="#quem-somos" className="block border-b border-white/10 px-4 py-4 transition hover:bg-white/5">Quem somos</a>
                <a href="#como-funciona" className="block border-b border-white/10 px-4 py-4 transition hover:bg-white/5">Como funciona</a>
                <a href="#nossa-proposta" className="block border-b border-white/10 px-4 py-4 transition hover:bg-white/5">Nossa proposta</a>
              </div>
            )}
            <a href="/como-funciona" onClick={() => setIsMenuOpen(false)} className="flex w-full items-center py-3 text-left text-lg font-medium hover:opacity-70 transition">Como funciona</a>
            <button onClick={() => setActiveMobileMenu(activeMobileMenu === "produtos" ? null : "produtos")} className="flex w-full items-center justify-between py-3 text-left text-lg font-medium hover:opacity-70 transition">
              <span>Produtos</span>
              <span className="text-xl leading-none">{activeMobileMenu === "produtos" ? "-" : "+"}</span>
            </button>
            {activeMobileMenu === "produtos" && (
              <div className="mt-3 overflow-hidden rounded-[24px] border border-white/10 bg-zinc-950">
                <a href="#neochat-ia" className="block border-b border-white/10 px-4 py-4 transition hover:bg-white/5">NeoChat IA 1.0</a>
                <a href="#neobox-ia" className="block border-b border-white/10 px-4 py-4 transition hover:bg-white/5">NeoBox IA</a>
                <a href="#neobrain-ia" className="block border-b border-white/10 px-4 py-4 transition hover:bg-white/5">NeoBrain IA</a>
              </div>
            )}
            <button onClick={() => setActiveMobileMenu(activeMobileMenu === "recursos" ? null : "recursos")} className="flex w-full items-center justify-between py-3 text-left text-lg font-medium hover:opacity-70 transition">
              <span>Recursos</span>
              <span className="text-xl leading-none">{activeMobileMenu === "recursos" ? "-" : "+"}</span>
            </button>
            {activeMobileMenu === "recursos" && (
              <div className="mt-3 overflow-hidden rounded-[24px] border border-white/10 bg-zinc-950">
                <a href="#blog" className="block border-b border-white/10 px-4 py-4 transition hover:bg-white/5">Blog</a>
                <a href="#guias" className="block border-b border-white/10 px-4 py-4 transition hover:bg-white/5">Guias</a>
                <a href="#documentacao" className="block border-b border-white/10 px-4 py-4 transition hover:bg-white/5">Documentação</a>
                <a href="#central-de-ajuda" className="block border-b border-white/10 px-4 py-4 transition hover:bg-white/5">Central de ajuda</a>
                <a href="#materiais" className="block border-b border-white/10 px-4 py-4 transition hover:bg-white/5">Materiais</a>
                <a href="#estudos" className="block border-b border-white/10 px-4 py-4 transition hover:bg-white/5">Estudos</a>
              </div>
            )}
          </div>
        )}
      </div>
    </header >
  );
}

export default Header;
