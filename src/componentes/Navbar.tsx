import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="w-full bg-[#112240] py-4 px-6 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2 text-white font-mono text-xl">
                    <span className="text-[#25d366]">{'<>'}</span>
                    <span>
                        FeAlves<span className="text-gray-400">.dev</span>
                    </span>
                </div>

                {/* Menu */}
                <div className="hidden md:flex items-center space-x-10">
                    <Link
                        href="#home"
                        className="flex items-center gap-2 hover:text-[#25d366] text-gray-300 font-medium transition-colors duration-200"
                    >
                        <img src="/images/icones/home.svg" alt="Ícone Home" className="w-5 h-5" />
                        Home
                    </Link>
                    <Link
                        href="#projects"
                        className="flex items-center gap-2 hover:text-[#25d366] text-gray-300 font-medium transition-colors duration-200"
                    >
                        <img src="/images/icones/wrench.svg" alt="Ícone Projetos" className="w-5 h-5" />
                        Projetos
                    </Link>
                    <Link
                        href="#skills"
                        className="flex items-center gap-2 hover:text-[#25d366] text-gray-300 font-medium transition-colors duration-200"
                    >
                        <img src="/images/icones/cereb.svg" alt="Ícone Skills" className="w-5 h-5" />
                        Skills
                    </Link>
                    <Link
                        href="#contato"
                        className="flex items-center gap-2 hover:text-[#25d366] text-gray-300 font-medium transition-colors duration-200"
                    >
                        <img src="/images/icones/phone.svg" alt="Ícone Contato" className="w-5 h-5" />
                        Contato
                    </Link>
                </div>

                {/* GitHub */}
                <a
                    href="https://github.com/ofealves/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex items-center"
                >
                    <img
                        src="/images/icones/github.svg"
                        alt="GitHub"
                        className="w-6 h-6 hover:scale-110 hover:drop-shadow-[0_0_6px_#25d366] transition-transform"
                    />
                </a>
            </div>
        </nav>
    );
};
