export const Skills = () => {
    return (
        <section className="flex flex-col items-center py-20 px-4 bg-[#0a192f]" id="skills">
            {/* Divisor superior */}
            <hr className="border-t border-[#25d366]/30 mb-16 w-full max-w-6xl mx-auto" />

            {/* Título principal */}
            <h1 className="text-white text-5xl font-extrabold tracking-tight text-center font-title mb-10">
                Quem sou eu?
            </h1>

            {/* Bloco de apresentação */}
            <div className="bg-[#112240] text-white p-8 rounded-lg shadow-lg w-full max-w-6xl border-l-4 border-[#25d366] mb-20">
                <p className="text-base leading-relaxed text-gray-300 text-center md:text-left font-light">
                    Sou estudante de Engenharia de Software e sempre fui apaixonado por tecnologia. Desde criança, os jogos despertavam minha curiosidade — não apenas pela diversão, mas pela vontade de entender o que acontecia por trás das telas. Foi assim que descobri a programação.
                    <br /><br />
                    Comecei aprendendo HTML, CSS e JavaScript por conta própria, e mais tarde, aprofundei meus estudos com a faculdade. Me identifiquei de verdade com o desenvolvimento front-end, onde consigo unir criatividade com lógica para criar interfaces acessíveis e agradáveis.
                    <br /><br />
                    Hoje sigo me aperfeiçoando todos os dias, construindo projetos reais que transformam ideias em experiências digitais com propósito.
                </p>
            </div>

            {/* Título das skills */}
            <h2 className="text-white text-4xl font-bold tracking-tight text-center font-title mb-10">
                Minhas Skills
            </h2>

            {/* Grid de tecnologias */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
                {[
                    { name: "HTML", icon: "html" },
                    { name: "CSS", icon: "css" },
                    { name: "JavaScript", icon: "javascript" },
                    { name: "TypeScript", icon: "typescript" },
                    { name: "React", icon: "react" },
                    { name: "Tailwind CSS", icon: "tailwindcss" },
                ].map((skill) => (
                    <div
                        key={skill.name}
                        title={skill.name}
                        className="group bg-[#112240] p-4 rounded-lg text-center text-white shadow-lg border border-transparent transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_10px_#25d36640] hover:border-[#25d366] cursor-pointer"
                    >
                        <img
                            src={`/images/icones/${skill.icon}.svg`}
                            alt={skill.name}
                            className="w-10 h-10 mx-auto mb-2 transition duration-300"
                        />
                        <p className="text-sm group-hover:text-[#25d366] transition font-medium">{skill.name}</p>
                    </div>
                ))}
            </div>

            {/* Divisor inferior */}
            <hr className="border-t border-[#25d366]/30 mt-20 w-full max-w-6xl mx-auto" />
        </section>
    );
};
