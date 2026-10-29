"use client";

import { useState } from "react";
import { dmSans, inter } from "../font";
import NeoChatPreview from "./NeoChatPreview";

function Main() {

    const [faqAberta, setFaqAberta] = useState(0);

    return (
        <>
        <section className="bg-black border-t border-white/20">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
                <div className="mx-auto mb-10 max-w-3xl sm:mb-12">
                    <h2 className="font-[family-name:var(--font-dm-sans)] text-center text-3xl font-normal leading-tight sm:text-4xl">Automação prática com ferramentas avançadas para alavancar o seu negócio!</h2>
                    <p className="font-[family-name:var(--font-inter)] text-center mt-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">A Neo Tecnologia cria soluções com Inteligência Artificial para acelerar respostas, organizar o atendimento e aumentar a eficiência da sua operação!</p>
                </div>
                <div className="mb-10 md:mb-12">
                    <NeoChatPreview />
                </div>
                <div className="mx-auto mb-10 grid max-w-6xl gap-5 sm:gap-6 md:mb-12 md:grid-cols-3">
                    <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/[0.10] via-white/[0.05] to-white/[0.02] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-white/60 hover:shadow-[0_30px_70px_rgba(0,0,0,0.60)]">
                        <div>
                            <h3 className={`${inter.className} mb-3 text-xl font-semibold text-white`}>Novo contato</h3>
                            <p className={`${inter.className} text-sm leading-6 text-white/60`}>A IA recebe a primeira mensagem e inicia o atendimento sem demora.</p>
                        </div>
                    </div>
                    <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/[0.10] via-white/[0.05] to-white/[0.02] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-white/60 hover:shadow-[0_30px_70px_rgba(0,0,0,0.60)]">
                        <div>
                            <h3 className={`${inter.className} mb-3 text-xl font-semibold text-white`}>Resposta imediata</h3>
                            <p className={`${inter.className} text-sm leading-6 text-white/60`}>O cliente recebe retorno em segundos, com mais agilidade e menos espera.</p>
                        </div>
                    </div>
                    <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/[0.10] via-white/[0.05] to-white/[0.02] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-white/60 hover:shadow-[0_30px_70px_rgba(0,0,0,0.60)]">
                        <div>
                            <h3 className={`${inter.className} mb-3 text-xl font-semibold text-white`}>Atendimento organizado</h3>
                            <p className={`${inter.className} text-sm leading-6 text-white/60`}>Os dados chegam mais claros, organizados e prontos para ação.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a href="#" className="font-[family-name:var(--font-inter)] inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black">Saiba mais</a>
                    <a href="#" className="font-[family-name:var(--font-inter)] inline-flex items-center justify-center rounded-full border border-zinc-300 bg-black px-4 py-1.5 text-sm font-medium text-white">Conhecer solução</a>
                </div>
            </div>
        </section>
        <section className="bg-black border-t border-white/20">
            <div>
                <div className="rounded-[32px] px-6 py-12 sm:px-10 sm:py-14">
                    <div className="mb-10 text-center">
                        <h2 className={`${dmSans.className} text-3xl font-normal leading-tight sm:text-4xl`}>Perguntas frequentes</h2>
                    </div>
                    <div className={`${inter.className} mx-auto max-w-3xl border-t border-gray-300`}>
                        <h3 className="py-6 text-base font-medium leading-7 pr-10 font-semibold flex items-center justify-between gap-4 cursor-pointer" onClick={() => setFaqAberta(faqAberta === 1 ? 0 : 1)}>
                            <span>O que a Neo Tecnologia faz?</span>
                            <span className="text-xl leading-none text-white">{faqAberta === 1 ? "-" : "+"}</span>
                        </h3>
                        {faqAberta === 1 && (
                            <p className="pb-6 pr-10 text-base leading-8 text-gray-400 border-b border-gray-200">A Neo Tecnologia desenvolve soluções com Inteligência Artificial e automação para ajudar empresas a organizar e acelerar processos.</p>
                        )}
                        <h3 className="py-6 text-base font-medium leading-7 pr-10 font-semibold flex items-center justify-between gap-4 cursor-pointer" onClick={() => setFaqAberta(faqAberta === 2 ? 0 : 2)}>
                            <span>Que tipos de empresas podem utilizar as soluções da Neo Tecnologia?</span>
                            <span className="text-xl leading-none text-white">{faqAberta === 2 ? "-" : "+"}</span>
                        </h3>
                        {faqAberta === 2 && (
                            <p className="pb-6 pr-10 text-base leading-8 text-gray-400 border-b border-gray-200">Nossas soluções podem atender empresas de diferentes tamanhos e segmentos. Avaliamos a necessidade de cada negócio para identificar onde a tecnologia pode gerar mais valor.</p>
                        )}
                        <h3 className="py-6 text-base font-medium leading-7 pr-10 font-semibold flex items-center justify-between gap-4 cursor-pointer" onClick={() => setFaqAberta(faqAberta === 3 ? 0 : 3)}>
                            <span>As soluções da Neo Tecnologia são adaptadas para cada empresa?</span>
                            <span className="text-xl leading-none text-white">{faqAberta === 3 ? "-" : "+"}</span>
                        </h3>
                        {faqAberta === 3 && (
                            <p className="pb-6 pr-10 text-base leading-8 text-gray-400 border-b border-gray-200">Sim. Buscamos entender a operação, os objetivos e as necessidades do negócio antes de definir como a solução será aplicada.</p>
                        )}
                        <h3 className="py-6 text-base font-medium leading-7 pr-10 font-semibold flex items-center justify-between gap-4 cursor-pointer" onClick={() => setFaqAberta(faqAberta === 4 ? 0 : 4)}>
                            <span>Preciso entender de tecnologia para utilizar as soluções da Neo Tecnologia?</span>
                            <span className="text-xl leading-none text-white">{faqAberta === 4 ? "-" : "+"}</span>
                        </h3>
                        {faqAberta === 4 && (
                            <p className="pb-6 pr-10 text-base leading-8 text-gray-400 border-b border-gray-200">Não. Nosso objetivo é tornar a tecnologia simples e prática para que a emprsa possa utilizá-la sem precisar dominar Inteligência Artificial ou programação.</p>
                        )}
                        <h3 className="py-6 text-base font-medium leading-7 pr-10 font-semibold flex items-center justify-between gap-4 cursor-pointer" onClick={() => setFaqAberta(faqAberta === 5 ? 0 : 5)}>
                            <span>Como funciona para conhecer ou contratar uma solução?</span>
                            <span className="text-xl leading-none text-white">{faqAberta === 5 ? "-" : "+"}</span>
                        </h3>
                        {faqAberta === 5 && (
                            <p className="pb-6 pr-10 text-base leading-8 text-gray-400 border-b border-gray-200">O primeiro passo é conversar com a Neo Tecnologia para entendermos sua necessidade. Depois, apresentamos a solução adequada e definimos os próximos passos para demonstração e implementação.</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Main;
