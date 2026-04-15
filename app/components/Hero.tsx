"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
function Hero() {

    const [step, setStep] = useState(1);
    const [isTyping, setIsTyping] = useState(true);

    const fullClientMessage = "Quero automatizar meu atendimento com IA!";
    const [displayedClientMessage, setDisplayedClientMessage] = useState("");

    const fullResponse = "Ok! Posso automatizar seu atendimento!";
    const [displayedResponse, setDisplayedResponse] = useState("");

    useEffect(() => {
        if (step === 1) return;

        const timeout = setTimeout(() => {
            if (step === 2) setStep(3);
            else {
                setDisplayedClientMessage("");
                setDisplayedResponse("");
                setStep(1);
            }
        }, step === 2 ? 5000 : 8000);

        return () => clearTimeout(timeout);
    }, [step]);

    useEffect(() => {
        if (step !== 1) return;
        if (displayedClientMessage.length < fullClientMessage.length) {
            const timeout = setTimeout(() => {
                setDisplayedClientMessage(
                    fullClientMessage.slice(0, displayedClientMessage.length + 1)
                );
            }, 35);
            return () => clearTimeout(timeout);
        }

        const timeout = setTimeout(() => {
            setStep(2);
        }, 2000);

        return () => clearTimeout(timeout);
    }, [step, displayedClientMessage, fullClientMessage]);

    useEffect(() => {
        if (step === 1) {
            setIsTyping(false);
            setDisplayedResponse("");
            return;
        }
        if (step === 2) {
            setIsTyping(true);
            setDisplayedResponse("");
            return;
        }
        if (step === 3) {
            setIsTyping(false);

            if (displayedResponse.length < fullResponse.length) {
                const timeout = setTimeout(() => {
                    setDisplayedResponse(fullResponse.slice(0, displayedResponse.length + 1));
                }, 35);

                return () => clearTimeout(timeout);
            }
        }
    }, [step, displayedResponse, fullResponse]);

    return (
        <section className="px-4 pt-8 pb-12 sm:px-6 sm:pt-10 sm:pb-16">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-12">
                <div className="max-w-2xl space-y-6 text-center">
                    <h1 className="font-[family-name:var(--font-dm-sans)] text-2xl font-normal leading-tight tracking-tight sm:text-4xl lg:text-5xl">IA aplicada ao crescimento do seu negócio!</h1>
                    <p className="font-[family-name:var(--font-inter)] text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">Criamos automações que organizam o atendimento, aceleram respostas e ajudam empresas a atenderem melhor, ganhar tempo e converter mais.</p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <a href="https://wa.me/5561998611311?text=Olá!%20Vim%20pelo%20site%20da%20Neo%20Tecnologia%20e%20gostaria%20de%20solicitar%20uma%20demonstração." target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-inter)] inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black">Solicitar demonstração</a>
                        <a href="https://wa.me/5561998611311?text=Olá!%20Vim%20pelo%20site%20da%20Neo%20Tecnologia%20e%20quero%20de%20conhecer%20a%20solução." target="_blank" rel="noopener noreferrer"className="font-[family-name:var(--font-inter)] inline-flex items-center justify-center rounded-full border border-zinc-300 bg-black px-4 py-1.5 text-sm font-medium text-white-900">Conhecer solução</a>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-full max-w-md min-h-[250px] rounded-3xl border border-zinc-200 bg-black p-5 shadow-lg sm:p-6">
                        <section className="space-y-6">
                            <div className="flex items-center gap-3">{/* header */}
                                <div className="flex items-center gap-2">
                                    <span className="h-3 w-3 rounded-full bg-red-400"></span>
                                    <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                                    <span className="h-3 w-3 rounded-full bg-green-400"></span>
                                </div>
                                <p className="text-sm font-semibold text-white">NeoChat IA</p>
                            </div>
                            <div className="flex flex-col items-start gap-4">{/* top section */}
                                <div className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-4 py-3">
                                    <span className="mr-3 h-8 w-8 rounded-full bg-zinc-700">
                                        <Image
                                            src="/client-neo.png"
                                            alt="Cliente"
                                            width={32}
                                            height={32}
                                            className="h-full w-full rounded-full object-cover"
                                        />
                                    </span>
                                    <p className="text-sm text-zinc-200">{displayedClientMessage}</p>
                                </div>
                                {step >= 2 && (
                                    <div className="ml-auto inline-flex max-w-[85%] items-center justify-between rounded-full border border-zinc-700 bg-zinc-900 px-4 py-3">
                                        <p className="text-sm text-zinc-200">
                                            {isTyping
                                                ? "..."
                                                : displayedResponse}
                                        </p>
                                        <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-xs text-zinc-300">
                                            <Image
                                                src="/ai-neo.png"
                                                alt="IA"
                                                width={32}
                                                height={32}
                                                className="h-full w-full rounded-full object-cover"
                                            />
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div>{/* divider */}</div>
                            <div>{/* bottom section */}</div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
