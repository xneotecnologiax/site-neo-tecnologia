"use client";

import { useState } from "react";

function SupportWidget() {

    const [isOpen, setIsOpen] = useState(false);
    const [supportView, setSupportView] = useState<"menu" | "chat">("menu");
    const [chatStep, setChatStep] = useState<"inicio" | "conhecer" | "contratar" | "cliente" | "outro">("inicio");
    const [conhecerStep, setConhecerStep] = useState<null | "como-funciona" | "automatizar" | "whatsapp" | "demonstracao" | "demonstracao-enviada">(null);
    const [contratarStep, setContratarStep] = useState<null | "tipo_negocio" | "whatsapp" | "volume" | "contato" | "finalizado">(null);
    const [clienteStep, setClienteStep] = useState<null | "nao_responde" | "whatsapp" | "pedidos" | "dashboard" | "alterar_dados" | "outro" | "finalizado">(null);
    const [outroFinalizado, setOutroFinalizado] =useState(false);
    const [messages, setMessages] = useState<{ sender: "neo" | "user"; text: string; }[]>([]);
    const [inputValue, setInputValue] = useState("");
    const addMessage = (sender: "neo" | "user", text: string) => {
        setMessages((previousMessages) => [
            ...previousMessages,
            { sender, text },
        ]);
    };
    const handleSend = () => {
        const value = inputValue.trim();

        if (!value) return;

        addMessage("user", value);
        setInputValue("");

        if (chatStep === "inicio" && value === "1") {
            addMessage(
                "neo",
                "Certo! O que você gostaria de saber sobre o NeoChat IA?"
            );

            setChatStep("conhecer");
        }
        if (chatStep === "inicio" && value === "2") {
            addMessage(
                "neo",
                "Ótimo! Para entendermos melhor o seu negócio, vou fazer algumas perguntas rápidas. Qual é o tipo do seu negócio?"
            );

            setChatStep("contratar");
            setContratarStep("tipo_negocio")
        }
        if (chatStep === "contratar" && contratarStep === "tipo_negocio") {
            addMessage(
                "neo",
                "Perfeito! Você já atende clientes pelo WhatsApp? Digite 1 para Sim ou 2 para Não."
            );

            setContratarStep("whatsapp");
        }
        if (chatStep === "contratar" && contratarStep === "whatsapp" && (value === "1" || value === "2")) {
            addMessage(
                "neo",
                "Certo! Aproximadamente quantos atendimentos seu negócio recebe por dia?"
            );

            setContratarStep("volume");
        }
        if (chatStep === "contratar" && contratarStep === "volume") {
            addMessage(
                "neo",
                "Perfeito! Para finalizar, informe seu nome, WhatsApp e e-mail para contrato."
            );

            setContratarStep("contato");
        }
        if (chatStep === "contratar" && contratarStep === "contato") {
            addMessage(
                "neo",
                "Obrigado! Recebemos suas informações. Nossa equipe entrará em contato para dar continuidade à contratação do NeoChat IA."
            );

            setContratarStep("finalizado");
        }
        if (chatStep === "inicio" && value === "3") {
            addMessage(
                "neo",
                "Certo! Como podemos ajudá-lo com o NeoChat IA?"
            );

            setChatStep("cliente");
        }
        if (chatStep === "inicio" && value === "4") {
            addMessage(
                "neo",
                "Certo! Descreva brevemente o assunto sobre o qual você gostaria de falar."
            );

            setChatStep("outro");
        }
        if (chatStep === "outro" && !outroFinalizado) {
            addMessage(
                "neo",
                "Obrigado! Recebemos sua mensagem. Nossa equipe poderá analisar o assunto e entrar em contato, se necessário."
            );

            setOutroFinalizado(true);
        }
        if (chatStep === "cliente" && clienteStep === null && value === "1") {
            addMessage(
                "neo",
                "Entendi. O NeoChat IA não está respondendo. Primeiro, verifique se o WhatsApp do estabelecimento está conectado à internet. Se o problema continuar, nossa equipe poderá verificar a integração."
            );

            setClienteStep("nao_responde");
        }
        if (chatStep === "cliente" && clienteStep === null && value === "2") {
            addMessage(
                "neo",
                "Entendi. Se o problema estiver no envio ou recebimento de mensagens pelo WhatsApp, faça um novo teste de mensagem. Se o erro continuar, será necessário verificar a integração do número com o NeoChat IA."
            );

            setClienteStep("whatsapp");
        }
        if (chatStep === "cliente" && clienteStep === null && value === "3") {
            addMessage(
                "neo",
                "Entendi. Verifique se o pedido foi registrado corretamente e se as informações enviadas pelo cliente estão completas. Se houver pedido ausente, duplicado ou incompleto, o caso precisará ser analisado."
            );

            setClienteStep("pedidos");
        }
        if (chatStep === "cliente" && clienteStep === null && value === "4") {
            addMessage(
                "neo",
                "Entendi, Se o Dashboard não estiver carregando ou exibindo dados corretamente, atualize a página e tente entrar novamente. Se o problema continuar, será necessário verificar o acesso e os dados do estabelecimento."
            );

            setClienteStep("dashboard");
        }
        if (chatStep === "cliente" && clienteStep === null && value === "5") {
            addMessage(
                "neo",
                "Certo! Informe quais informações do estabelecimento você deseja alterar para que possamos orientar a atualização."
            );

            setClienteStep("alterar_dados");
        }
        if (chatStep === "cliente" && clienteStep === null && value === "6") {
            addMessage(
                "neo",
                "Sem problemas. Descreva brevemente o que está acontecendo para que possamos entender melhor o seu caso."
            );

            setClienteStep("outro");
        }
        if (chatStep === "cliente" && clienteStep === "alterar_dados") {
            addMessage(
                "neo",
                "Obrigado! Recebemos as informações que você deseja alterar. Nossa equipe poderá analisar a solicitação e orientar a atualização."
            );

            setClienteStep("finalizado");
        }
        if (chatStep === "cliente" && clienteStep === "outro") {
            addMessage(
                "neo",
                "Obrigado por explicar o problema. Recebemos sua solitição e nossa equipe poderá analisar o caso com mais detalhes."
            );

            setClienteStep("finalizado");
        }
        if (chatStep === "conhecer" && conhecerStep === null && value === "1") {
            addMessage(
                "neo",
                "O NeoChat IA recebe as mensagens dos clientes, identifica o que eles precisam e responde automaticamente com base nas informações do estabelecimento. Quando necessário, encaminha a conversa para o atendimento humano."
            );

            setConhecerStep("como-funciona");
        }
        if (chatStep === "conhecer" && conhecerStep === null && value === "2") {
            addMessage(
                "neo",
                "O NeoChat IA pode automatizar respostas a dúvidas frequentes, informações sobre horários, formas de pagamento, cardápio, taxas de entrega e outras solicitações simples do atendimento."
            );

            setConhecerStep("automatizar");
        }
        if (chatStep === "conhecer" && conhecerStep === null && value === "3") {
            addMessage(
                "neo",
                "Sim. O NeoChat IA funciona integrado ao WhatsApp para atender clientes, responder dúvidas, organizar solicitações e encaminhar situações que precisam de atendimento humano."
            );

            setConhecerStep("whatsapp")
        }
        if (chatStep === "conhecer" && conhecerStep == null && value === "4") {
            addMessage(
                "neo",
                "Perfeito! Podemos preparar uma demonstração do NeoChat IA. Para continuar, informe o nome do seu negócio e um número de WhatsApp para contato."
            );

            setConhecerStep("demonstracao")
        }
        if (chatStep === "conhecer" && conhecerStep === "demonstracao") {
            addMessage(
                "neo",
                "Obrigado! Recebemos suas informações. Nossa equipe entrará em contato para combinar a demonstração do NeoChat IA."
            );

            setConhecerStep("demonstracao-enviada")
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            {isOpen && (
                <div className="w-[300px] h-[350px] max-w-[calc(100vw-3rem)] overflow-hidden rounded-2xl border border-white/20 bg-[#121212] backdrop-blur-md text-white shadow-2xl flex flex-col">
                    <div className="relative flex items-center justify-between border-b border-white/20 px-5 py-4">
                        {supportView === "menu" ? (
                            <span className="absolute left-1/2 -translate-x-1/2 text-sm font-medium">Suporte</span>
                        ) : (
                            <>
                                <button type="button" onClick={() => setSupportView("menu")} className="text-lg text-white/70 transition hover:text-white">←</button>
                                <span className="absolute left-1/2 -translate-x-1/2 text-sm font-medium">Atendimento on-line</span>
                            </>
                        )}
                        <button type="button" onClick={() => { setIsOpen(false); setSupportView("menu"); }} className="ml-auto text-lg text-white/70 transition hover:text-white">X</button>
                    </div>
                    {supportView === "menu" && (
                        <div className="px-5 pt-5 pb-5">
                            <h3 className="text=lg font-medium">Como podemos ajudar?</h3>
                            <p className="mt-2 text-sm leading-6 text-white/60">Encontre rapidamente o que você precisa.</p>
                            <div className="mt-5 flex flex-col gap-2">
                                <button type="button" onClick={() => { setSupportView("chat"); setChatStep("inicio"); setConhecerStep(null); setContratarStep(null); setClienteStep(null); setOutroFinalizado(false); setInputValue(""); setMessages ([{ sender: "neo", text: "Olá! Atendimento iniciado. Como podemos ajudá-lo?", },]); }} className="flex w-full items-center justify-between rounded-xl border border-white/20 px-4 py-3 text-sm transition hover:bg-white/5">
                                    <span>Atendimento on-line</span>
                                    <span>→</span>
                                </button>
                                <button type="button" className="flex w-full items-center justify-between rounded-xl border border-white/20 px-4 py-3 text-sm transition hover:bg-white/5">
                                    <span>Central de ajuda</span>
                                    <span>→</span>
                                </button>
                                <button type="button" className="flex w-full items-center justify-between rounded-xl border border-white/20 px-4 py-3 text-sm transition hover:bg-white/5">
                                    <span>Documentação</span>
                                    <span>→</span>
                                </button>
                            </div>
                        </div>
                    )}
                    {supportView === "chat" && (
                        <div className="flex flex-1 min-h-0 flex-col">
                            <div className="flex-1 overflow-y-auto bg-white px-5 py-4 text-black">
                                {messages.map((message, index) => (
                                    <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mb-3`}>
                                        <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${message.sender === "user" ? "bg-blue-600 text-white" : "bg-zinc-300 text-zinc-900"}`}>
                                            {message.text}
                                        </div>
                                    </div>
                                ))}
                                {chatStep === "inicio" && (
                                    <div className="mt-3 space-y-1 text-sm text-zinc-700">
                                        <p>1. Quero conhecer o NeoChat IA.</p>
                                        <p>2. Quero contratar o Neochat IA.</p>
                                        <p>3. Já sou cliente.</p>
                                        <p>4. Outro assunto.</p>
                                        <p className="pt-2 text-xs text-zinc-500">Digite o número correspondente à opção desejada.</p>
                                    </div>
                                )}
                                {chatStep === "conhecer" && (
                                    <div>
                                        {conhecerStep === null && (
                                            <div className="mt-3 space-y-1 text-sm text-zinc-700">
                                                <p>1. Como funciona?</p>
                                                <p>2. O que ele pode automatizar?</p>
                                                <p>3. Funciona com WhatsApp?</p>
                                                <p>4. Quero uma demonstração.</p>
                                                <p className="pt-2 text-xs text-zinc-500">Digite o número correspondente à opção desejada.</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                                {chatStep === "cliente" && (
                                    <div>
                                        {clienteStep === null && (
                                            <div className="mt-3 space-y-1 text-sm text-zinc-700">
                                                <p>1. NeoChat IA não está respondendo.</p>
                                                <p>2. Problemas com WhatsApp.</p>
                                                <p>3. Problema com pedidos.</p>
                                                <p>4. Problema com Dashboard.</p>
                                                <p>5. Quero alterar informações do estabelecimento.</p>
                                                <p>6. Outro problema.</p>
                                                <p className="pt-2 text-xs text-zinc-500">Digite o número correspondente à opção desejada.</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                                {chatStep === "outro" && (
                                    <div>
                                        <div></div>
                                    </div>
                                )}
                            </div>
                            <div className="border-t border-white/20 p-3">
                                <div className="flex items-center gap-2 rounded-xl border border-white/20 px-3 py-2">
                                    <input type="text" placeholder="Digite uma mensagem" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/40" />
                                    <button type="button" onClick={handleSend} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20">↑</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
            <button type="button" onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center gap-2 rounded-3xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/10">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M4 13a8 8 0 1 1 16 0" />
                    <path d="M4 13v3a2 2 0 0 0 2 2h1v--6H6a2 2 0 0 0-2 2Z" />
                    <path d="M20 13v3a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2Z" />
                </svg>
                <span>Suporte</span>
            </button>
        </div>
    );
}

export default SupportWidget;
