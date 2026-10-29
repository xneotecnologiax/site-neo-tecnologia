"use client";

import { useState } from "react";

const paginas = [
    { titulo: "Quem somos", url: "/quem-somos" },
    { titulo: "Como funciona", url: "/como-funciona" },
    { titulo: "Nossa proposta", url: "/nossa-proposta" },
    { titulo: "Termos de Uso", url: "/termos-de-uso" },
    { titulo: "Política de Privacidade", url: "/politica-de-privacidade" },
    { titulo: "Política de Cookies", url: "/politica-de-cookies" },
];

function NeoAssistant() {

    const [busca, setBusca] = useState("");
    const resultados = busca.trim()
        ? paginas.filter((pagina) =>
            pagina.titulo.toLocaleLowerCase().includes(busca.trim().toLocaleLowerCase())
        )
        : [];

    return (
        <>
            <div className={`relative mx-auto w-full max-w-3xl overflow-hidden border border-white/10 bg-zinc-900/95 ${resultados.length > 0 ? "rounded-[28px]" : "rounded-full"}`}>
                <div className="flex w-full items-center gap-3 px-4 py-3">
                    <span aria-hidden="true" className="shrink-0 text-2xl text-white">✦</span>
                    <input type="text" placeholder="Pergunte sobre os produtos da Neo" value={busca} onChange={(event) => setBusca(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && resultados.length === 1) { window.location.assign(resultados[0].url); } }} className="min-w-0 flex-1 bg-transparent text-white outline-none placeholder:text-white/60" />
                    <button type="button" onClick={() => { if (resultados.length === 1) { window.location.assign(resultados[0].url); } }} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500 text-xl font-bold text-white">
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 19V5" />
                            <path d="M6 11L12 5L18 11" />
                        </svg>
                    </button>
                </div>
                {resultados.length > 0 && (
                    <div className="w-full border-t border-white/10 p-2 text-left">
                        {resultados.map((pagina) => (
                            <a key={pagina.url} href={pagina.url} className="block rounded-xl px-4 py-3 text-sm text-white hover:bg-white/10">{pagina.titulo}</a>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default NeoAssistant;
