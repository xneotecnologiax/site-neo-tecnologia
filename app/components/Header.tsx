"use client";

import { inter } from "../font";
import Image from "next/image";
import { useState } from "react";

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProdutoOpen, setIsProdutoOpen] = useState(false);
  const [isMobileProdutoOpen, setIsMobileProdutoOpen] = useState(false);

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
            <div className="relative">
              <button type="button" onClick={() => setIsProdutoOpen(!isProdutoOpen)} className="text-sm font-medium hover:opacity-70 transition">Produto</button>
              {isProdutoOpen && (
                <div className="absolute top-full left-0 z-50 mt-4 w-[350px] rounded-[28px] border border-white/10 bg-zinc-950 p-4 shadow-2xl">
                  <div className="grid grid-cols-1 items-stretch gap-4">
                    <div className="grid h-full grid-rows-2 gap-3">
                      <a href="#chatbotcomia" className="block h-full rounded-2xl border border-white/15 bg-[#14141a] px-4 py-3 transition hover:bg-[#1b1b22]">
                        <p className="text-base font-medium text-white">Chatbot com IA</p>
                        <p className="mt-1 text-sm leading-6 text-white/60">Atendimento inteligente com IA para empresas.</p>
                      </a>
                      <a href="#criaçãodesite" className="block h-full rounded-2xl border border-white/15 bg-[#14141a] px-4 py-3 transition hover:bg-[#1b1b22]">
                        <p className="text-base font-medium text-white">Criação de site</p>
                        <p className="mt-1 text-sm leading-6 text-white/60">Sites modernos para apresentar sua empresa e converter mais clientes.</p>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <a href="#preço" className="text-sm font-medium hover:opacity-70 transition">Preço</a>
            <a href="#clientes" className="text-sm font-medium hover:opacity-70 transition">Clientes</a>
            <a href="#recursos" className="text-sm font-medium hover:opacity-70 transition">Recursos</a>
          </nav>
        </div>
        <a href="https://wa.me/5561998611311?text=Olá!%20Vim%20pelo%20site%20da%20Neo%20Tecnologia%20e%20gostaria%20de%20solicitar%20uma%20demonstração." target="_blank" rel="noopener noreferrer" className={`${inter.className} hidden px-5 py-2 rounded-full border text-sm font-medium bg-white text-black hover:opacity-90 transition cursor-pointer md:inline-flex`}>Solicitar demonstração</a>
      </div>

      {isMenuOpen && (
        <div className={`${inter.className} md:hidden mt-5 flex flex-col gap-3 rounded-[28px] border-t border-white/10 bg-black/80 px-4 pt-4 pb-5 shadow-2xl backdrop-blur-md`}>
          <button onClickCapture={() => setIsMobileProdutoOpen(!isMobileProdutoOpen)} className="flex w-full items-center justify-between py-3 text-left text-lg font-medium hover:opacity-70 transition">
            <span>Produto</span>
            <span className="text-xl leading-none">{isMobileProdutoOpen ? "-" : "+"}</span>
          </button>
          {isMobileProdutoOpen && (
            <div className="mt-3 overflow-hidden rounded-[24px] border border-white/10 bg-zinc-950">
              <a href="#chatbotcomia" onClick={() => {setIsMenuOpen(false); setIsMobileProdutoOpen(false);}} className="block border-b border-white/10 px-4 py-4 transition hover:bg-white/5">
                <p className="text-base font-medium text-white">Chatbot com IA</p>
                <p className="mt-1 text-sm leading-6 text-white/60">Atendimento inteligente com IA para empresas.</p>
              </a>
              <a href="criaçãodesite" onClick={() => {setIsMenuOpen(false); setIsMobileProdutoOpen(false);}} className="block px-4 py-4 transition hover:bg-white/5">
                <p className="text-base font-medium text-white">Criação de site</p>
                <p className="mt-1 text-sm leading-6 text-white/60">Sites modernos para apresentar sua empresa e converter masis clientes.</p>
              </a>
            </div>
          )}
          <a href="#preco" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:opacity-70 transition">Preço</a>
          <a href="#clientes" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:opacity-70 transition">Clientes</a>
          <a href="#recursos" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:opacity-70 transition">Recursos</a>
        </div>
      )}
    </header >
  )
}

export default Header;
