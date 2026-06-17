"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {

    return (
        <footer className="bg-black text-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
                    <div>
                        <h3 className="font-[family-name:var(--font-inter)] text-xl font-semibold">Neo Tecnologia</h3>
                        <p className="font-[family-name:var(--font-inter)] mt-3 text-sm text-gray-400">Soluções digitais e IA para empresas!</p>
                    </div>
                    <div>
                        <h4 className="font-[family-name:var(--font-inter)] mb-4 text-sm font-semibold">Sobre</h4>
                        <p className="font-[family-name:var(--font-inter)] mt-3 text-sm text-gray-400">Quem somos</p>
                        <p className="font-[family-name:var(--font-inter)] mt-3 text-sm text-gray-400">Nossa proposta</p>
                    </div>
                    <div>
                        <h4 className="font-[family-name:var(--font-inter)] mb-4 text-sm font-semibold">Legal</h4>
                        <a href="#" className="font-[family-name:var(--font-inter)] mt-3 block text-sm text-gray-400 transition-colors hover:text-white">Termos de Uso</a>
                        <a href="#" className="font-[family-name:var(--font-inter)] mt-3 block text-sm text-gray-400 transition colors hover:text-white">Política de Privacidade</a>
                    </div>
                    <div>
                        <h4 className="font-[family-name:var(--font-inter)] mb-4 text-sm font-semibold">Serviços</h4>
                        <p className="font-[family-name:var(--font-inter)] mt-3 text-sm text-gray-400">Chatbot com IA</p>
                        <p className="font-[family-name:var(--font-inter)] mt-3 text-sm text-gray-400">Criação de site</p>
                    </div>
                    <div>
                        <h4 className="font-[family-name:var(--font-inter)] mb-4 text-sm font-semibold">Siga-nos</h4>
                        <div className="flex items-center gap-4">
                            <a href="https://www.facebook.com/profile.php?id=61565306484488" className="block text-sm text-gray-400 mt-3 hover:text-white transition-colors"><FaFacebookF /></a>
                            <a href="https://www.instagram.com/neotecnologia.oficial/" className="block text-sm text-gray-400 mt-3 hover:text-white transition-colors"><FaInstagram /></a>
                            <a href="https://www.linkedin.com/in/neo-tecnologia-13082240a/" className="block text-sm text-gray-400 mt-3 hover:text-white transition-colors"><FaLinkedinIn /></a>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-gray-800 pt-8">
                        <p className="font-[family-name:var(--font-inter)] text-sm text-gray-500">© 2026 Neo Tecnologia. Todos os direitos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
