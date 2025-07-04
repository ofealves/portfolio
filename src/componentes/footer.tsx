export const Footer = () => {
    return (
        <footer className="w-full bg-[#1A202C] py-6 flex flex-col items-center space-y-4 text-gray-400 text-sm">

            {/* Redes sociais */}
            <div className="flex space-x-4">
                <a
                    href="https://github.com/ofealves/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <img
                        src="/images/icones/github.svg"
                        alt="GitHub"
                        className="w-6 h-6 hover:scale-110 hover:drop-shadow-[0_0_6px_#25d366] transition-transform"
                    />
                </a>

                <a
                    href="https://br.linkedin.com/in/felipe-alves-202479278"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <img
                        src="/images/icones/linkedin.svg"
                        alt="LinkedIn"
                        className="w-6 h-6 hover:scale-110 hover:drop-shadow-[0_0_6px_#25d366] transition-transform"
                    />
                </a>

                <a
                    href="https://www.instagram.com/oifelipealves/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <img
                        src="/images/icones/instagram.svg"
                        alt="Instagram"
                        className="w-6 h-6 hover:scale-110 hover:drop-shadow-[0_0_6px_#25d366] transition-transform"
                    />
                </a>
            </div>

            {/* Direitos autorais */}
            <p className="text-center text-sm text-gray-500">
                © {new Date().getFullYear()} <span className="text-white font-medium">Felipe Alves</span>. Todos os direitos reservados.
            </p>
        </footer>
    );
};
