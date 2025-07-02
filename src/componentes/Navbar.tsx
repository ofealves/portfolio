import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="bg-[#1A202C] py-4 px-6 shadow-md sticky top-0 z-50 flex">
            <div>
                <h1>Fe Alves();</h1>
            </div>

            <div className="max-w-7xl mx-auto flex items-center space-x-10 bg-red-500">
                <Link href="#home" className="flex items-center gap-2 hover:text-[#25d366] text-gray-300 font-medium transition-colors duration-200">
                    <img src="/images/icones/home.svg" alt="Ícone Home" className="w-5 h-5" />
                    Home
                </Link>
                <Link href="#projects" className="flex items-center gap-2 hover:text-[#25d366] text-gray-300 font-medium transition-colors duration-200">
                    <img src="/images/icones/code.svg" alt="Ícone Projetos" className="w-5 h-5" />
                    Projetos
                </Link>
                <Link href="#skills" className="flex items-center gap-2 hover:text-[#25d366] text-gray-300 font-medium transition-colors duration-200">
                    <img src="/images/icones/code.svg" alt="Ícone Skills" className="w-5 h-5" />
                    Skills
                </Link>
                <Link href="#contato" className="flex items-center gap-2 hover:text-[#25d366] text-gray-300 font-medium transition-colors duration-200">
                    <img src="/images/icones/phone.svg" alt="Ícone Contato" className="w-5 h-5" />
                    Contato
                </Link>
            </div>
            <div>
                <button title="Alternar tema" className="w-6 h-6 hover:scale-110 transition duration-200 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 256 256">
                        <g transform="translate(1.4 1.4) scale(2.81 2.81)">
                            <path d="M69.491 71.08c-18.67 3.414-36.573-8.953-39.988-27.623S38.456 6.884 57.126 3.469c1.777-.325 3.541-.463 5.292-.511C54.979.112 46.69-.796 38.282.742 13.839 5.212-2.353 28.651 2.117 53.094s27.909 40.634 52.352 36.164c16.252-2.972 28.847-14.334 34.155-28.798-4.885 5.343-11.463 9.217-19.133 10.62z" fill="#f7d77f" />
                        </g>
                    </svg>
                </button>

            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white rounded h-6 text-xs w-12"
            >
                GitHub
            </button>
        </nav>
    );
};
