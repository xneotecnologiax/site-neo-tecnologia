"use client";

import { inter } from "../font";
import Image from "next/image";
import { useState } from "react";
function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header id="topo" className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 rounded-[50px] border border-white/10 bg-black/80 px-4 py-1 backdrop-blur-md md:flex-row md:items-center md:justify-between md:px-6">
        <div className="w-full flex items-center justify-between md:w-auto">
          <div>
            <a href="#topo" className="hover:opacity-80 transition">
              <Image
                src="/logo-neo.png"
                alt="Logo Neo Tecnologia"
                width={80}
                height={23}
              />
            </a>
          </div>
          <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white text-2xl leading-none transition hover:opacity-70">
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
        <div>
          <nav className={`${inter.className} hidden md:flex flex-wrap items-center justify-center gap-4 md:gap-6`}>
            <a href="#produto" className="text-sm font-medium hover:opacity-70 transition">Produto</a>
            <a href="#preço" className="text-sm font-medium hover:opacity-70 transition">Preço</a>
            <a href="#clientes" className="text-sm font-medium hover:opacity-70 transition">Clientes</a>
            <a href="#recursos" className="text-sm font-medium hover:opacity-70 transition">Recursos</a>
          </nav>
        </div>
        <a href="https://wa.me/5561998611311?text=Olá!%20Vim%20pelo%20site%20da%20Neo%20Tecnologia%20e%20gostaria%20de%20solicitar%20uma%20demonstração." target="_blank" rel="noopener noreferrer" className={`${inter.className} hidden px-5 py-2 rounded-full border text-sm font-medium bg-white text-black hover:opacity-90 transition cursor-pointer md:inline-flex`}>Solicitar demonstração</a>
      </div>

      {isMenuOpen && (
        <div className={`${inter.className} md:hidden flex flex-col gap-4 border-t border-white/10 px-4 pt-4 pb-4`}>
          <a href="#produto" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:opacity-70 transition">Produto</a>
          <a href="#preco" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:opacity-70 transition">Preço</a>
          <a href="#clientes" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:opacity-70 transition">Clientes</a>
          <a href="#recursos" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:opacity-70 transition">Recursos</a>
        </div>
      )}
    </header >
  )
}

export default Header;
