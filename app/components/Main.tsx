"use client";

import { useState } from "react";
import { dmSans, inter } from "../font";
function Main() {
    const [faqAberta, setFaqAberta] = useState(0);

    return (
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <div className="mx-auto mb-10 max-w-3xl sm:mb-12">
                <h2 className="font-[family-name:var(--font-dm-sans)] text-center text-3xl font-normal leading-tight sm:text-4xl">Automação prática com ferramentas avançadas para alavancar o seu negócio!</h2>
                <p className="font-[family-name:var(--font-inter)] text-center mt-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">A Neo Tecnologia cria soluções com Inteligência Artificial para acelerar respostas, organizar o atendimento e aumentar a eficiência da sua operação!</p>
            </div>
            <div className="mb-10 grid gap-5 sm:gap-6 md:mb-12 md:grid-cols-3">
                <div className="rounded-2xl border bg-black p-5 shadow-sm sm:p-6">
                    <h3 className={`${inter.className} mb-2 text-lg font-semibold text-white-400`}>Novo contato</h3>
                    <p className={`${inter.className} text-sm leading-6 text-white-400`}>Mensagem recebida automaticamente.</p>
                </div>
                <div className="rounded-2xl border bg-black p-5 shadow-sm sm:p-6">
                    <h3 className={`${inter.className} mb-2 text-lg font-semibold text-white-400`}>Resposta imediata</h3>
                    <p className={`${inter.className} text-sm leading-6 text-white-400`}>O cliente recebe retorno inicial sem precisar esperar.</p>
                </div>
                <div className="rounded-2xl border bg-black p-5 shadow-sm sm:p-6">
                    <h3 className={`${inter.className} mb-2 text-lg font-semibold text-white-400`}>Atendimento organizado</h3>
                    <p className={`${inter.className} text-sm leading-6 text-white-400`}>As informações chegam mais claras, rápidas e prontas para ação.</p>
                </div>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
                <div>
                    <h3 className={`${inter.className} mb-3 text-xl font-semibold`}>Atendimento mais ágil</h3>
                    <p className={`${inter.className} leading-7 text-gray-600`}>Automatize respostas iniciais, reduza o tempo de espera e melhore a experiência do cliente logo no começo da conversa.</p>
                </div>
                <div>
                    <h3 className={`${inter.className} mb-3 text-xl font-semibold`}>Mais organização</h3>
                    <p className={`${inter.className} leading-7 text-gray-600`}>Estruture informações, reduza falhas no processo e mantenha o atendimento mais claro, consistente e eficiente.</p>
                </div>
                <div>
                    <h3 className={`${inter.className} mb-3 text-xl font-semibold`}>Mais conversão</h3>
                    <p className={`${inter.className} leading-7 text-gray-600`}>Com respostas rápidas e fluxos mais inteligentes, seu negócio aproveita melhor os leads e aumenta suas chances de conversão.</p>
                </div>
            </div>
            <div className="mt-20 grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
                <div className="max-w-sm md:pt-2">
                    <h2 className={`${dmSans.className} text-3xl font-normal leading-tight`}>Perguntas Frequentes</h2>
                </div>
                <div className={`${inter.className} border-t border-gray-300 mt-4 md:mt-0`}>
                    <h3 className="py-6 text-base font-medium leading-7 pr-10 font-semibold flex items-center justify-between gap-4 cursor-pointer" onClick={() => setFaqAberta(faqAberta === 1 ? 0 : 1)}>
                        <span>O que nosso chatbot faz na prática?</span>
                        <span className="text-xl leading-none text-gray-500">{faqAberta === 1 ? "-" : "+"}</span>
                    </h3>
                    {faqAberta === 1 && (
                        <p className="pb-6 pr-10 text-base leading-8 text-gray-600 border-b border-gray-200">O chatbot automatiza o primeiro atendimento da empresa, responde mais rápido, organiza informações, qualifica leads e encaminha o cliente para o próximo passo de forma mais eficiente.</p>
                    )}
                    <h3 className="py-6 text-base font-medium leading-7 pr-10 font-semibold flex items-center justify-between gap-4 cursor-pointer" onClick={() => setFaqAberta (faqAberta === 2 ? 0 : 2)}>
                        <span>O chatbot funciona no WhatsApp e em outros canais?</span>
                        <span className="text-xl leading-none text-gray-500">{faqAberta === 2 ? "-" : "+"}</span>
                    </h3>
                    {faqAberta === 2 && (
                        <p className= "pb-6 pr-10 text-base leading-8 text-gray-600 border-b border-gray-200">A solução da Neo Tecnologia pode ser pensada para canais como WhatsApp, site e redes sociais, de acordo com a necessidade do negócio e a estrutura disponível no momento da implementação.</p>
                    )}
                    <h3 className="py-6 text-base font-medium leading-7 pr-10 font-semibold flex items-center justify-between gap-4 cursor-pointer" onClick={() => setFaqAberta (faqAberta === 3 ? 0 : 3)}>
                        <span>Meu negócio precisa ter uma operação grande para usar essa solução?</span>
                        <span className="text-xl leading-none text-gray-500">{faqAberta === 3 ? "-" : "+"}</span>
                    </h3>
                    {faqAberta === 3 && (
                        <p className="pb-6 pr-10 text-base leading-8 text-gray-600 border-b border-gray-200">Não. A proposta da Neo Tecnologia é justamente ajudar empresas que querem atender melhor, ganhar tempo e organizar o contato com clientes sem precisar de uma operação complexa.</p>
                    )}
                    <h3 className="py-6 text-base font-medium leading-7 pr-10 font-semibold flex items-center justify-between gap-4 cursor-pointer" onClick={() => setFaqAberta (faqAberta === 4 ? 0 : 4)}>
                        <span>O chatbot substitui totalmente o atendimento humano?</span>
                        <span className="text-xl leading-none text-gray-500">{faqAberta === 4 ? "-" : "+"}</span>
                    </h3>
                    {faqAberta === 4 && (
                        <p className="pb-6 pr-10 text-base leading-8 text-gray-600 border-b border-gray-200">Não necessariamente. O objetivo principal é automatizar etapas repetitivas do atendimento, acelerar respostas e encaminhar casos mais importantes para uma pessoa quando necessário.</p>
                    )}
                    <h3 className="py-6 text-base font-medium leading-7 pr-10 font-semibold flex items-center justify-between gap-4 cursor-pointer" onClick={() => setFaqAberta (faqAberta === 5 ? 0 : 5)}>
                        <span>Como funciona a contratação ou implementação?</span>
                        <span className="text-xl leading-none text-gray-500">{faqAberta === 5 ? "-" : "+"}</span>
                    </h3>
                    {faqAberta === 5 && (
                        <p className="pb-6 pr-10 text-base leading-8 text-gray-600 border-b border-gray-200">Primeiro entendemos a necessidade do negócio, depois definimos o fluxo de atendimento ideal e, em seguida, estruturamos a solução para que ela faça sentido para a operação da empresa.</p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Main;
