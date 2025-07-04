export const Projects = () => {
    const projects = [
        {
            title: "Previsão do Tempo",
            image: "/images/prev.jpeg",
            description:
                "Aplicação web que exibe a previsão do tempo em tempo real com base na localização do usuário ou cidade pesquisada. Utiliza a API OpenWeather e é construída com React e Tailwind CSS.",
            techIcons: ["react", "tailwindcss"],
            moreLink: "#",
            codeLink: "https://github.com/seuusuario/previsao-do-tempo",
        },
        {
            title: "Controle Financeiro",
            image: "/images/fin.jpeg",
            description:
                "Aplicação de controle financeiro pessoal para registrar entradas e saídas, calcular saldo e visualizar transações. Feita com React, Context API e Tailwind CSS.",
            techIcons: ["react", "tailwindcss"],
            moreLink: "#",
            codeLink: "https://github.com/seuusuario/controle-financeiro",
        },
        {
            title: "Dev Burguer",
            image: "/images/dev.jpeg",
            description:
                "Sistema de gerenciamento de pedidos para uma hamburgueria fictícia. Desenvolvido com Next.js, TypeScript e Firebase para integração em tempo real.",
            techIcons: ["nextjs", "typescript", "firebase"],
            moreLink: "#",
            codeLink: "https://github.com/seuusuario/dev-burguer",
        },
    ];

    return (
        <section className="py-20 px-4 bg-[#0a192f]" id="projects">
            <h1 className="text-white text-5xl font-extrabold tracking-tight text-center font-title mb-16">
                Projetos
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {projects.map(({ title, image, description, techIcons, moreLink, codeLink }) => (
                    <div
                        key={title}
                        className="bg-[#112240] p-6 rounded-lg text-white shadow-lg border border-transparent hover:border-[#25d366] transition-all duration-300"
                    >
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-48 object-cover rounded mb-4 border-2 border-transparent hover:border-[#25d366] transition"
                        />

                        <h2 className="text-xl font-semibold mb-2">{title}</h2>
                        <p className="text-sm text-gray-300 leading-relaxed mb-4">{description}</p>

                        <div className="flex flex-wrap gap-3 mb-6">
                            {techIcons.map((tech) => (
                                <img
                                    key={tech}
                                    src={`/images/icones/${tech}.svg`}
                                    alt={tech}
                                    className="w-6 h-6 filter brightness-75 hover:brightness-100 hover:drop-shadow-[0_0_2px_#25d366]"
                                    title={tech.charAt(0).toUpperCase() + tech.slice(1)}
                                />
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {moreLink && (
                                <a
                                    href={moreLink}
                                    className="bg-[#25d366] hover:bg-[#1ebe57] text-white px-5 py-2 rounded-md transition duration-300 shadow-sm hover:shadow-md text-sm font-medium"
                                >
                                    Ver mais
                                </a>
                            )}

                            <a
                                href={codeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border border-[#25d366] text-[#25d366] hover:bg-[#25d366] hover:text-white px-4 py-2 rounded-md text-sm font-medium transition"
                            >
                                <img src="/images/icones/github.svg" alt="GitHub" className="w-5 h-5" />
                                Ver código
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
