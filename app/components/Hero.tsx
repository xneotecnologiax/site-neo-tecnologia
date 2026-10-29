"use client";

import NeoAssistant from "./NeoAssistant";
import SupportWidget from "./SupportWidget";

function Hero() {

    return (
        <section className="min-h-[calc(100vh-100px)] bg-black px-4 pt-20 pb-12 sm:px-6 sm:pt-24 sm:pb-16 flex flex-col justify-center sm:block">
            <div className="w-full mx-auto flex max-w-7xl justify-center -translate-y-16 sm:translate-y-0">
                <div className="max-w-2xl space-y-6 text-center">
                    <h1 className="font-[family-name:var(--font-dm-sans)] text-2xl font-normal leading-tight tracking-tight sm:text-4xl lg:text-5xl">IA aplicada ao crescimento do seu negócio!</h1> 
                    <NeoAssistant />
                </div>
            </div>
            <SupportWidget />
        </section>
    );
}

export default Hero;
