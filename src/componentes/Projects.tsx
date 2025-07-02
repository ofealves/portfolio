export const Projects = () => {
    const projects = [
        {
            title: "Previsão do Tempo",
            image: "/images/prev.jpeg",
            description: "Aplicação web que exibe a previsão do tempo em tempo real com base na localização do usuário ou cidade pesquisada. Utiliza a API OpenWeather e é construída com React e Tailwind CSS.",
            techIcons: ["react", "tailwindcss"],
            moreLink: "#",
            codeLink: "https://github.com/seuusuario/previsao-do-tempo"
        },
        {
            title: "Controle Financeiro",
            image: "/images/fin.jpeg",
            description: "Aplicação de controle financeiro pessoal que permite registrar entradas e saídas, calcular saldo total e visualizar transações em tempo real. Desenvolvida com React, Context API e Tailwind CSS para uma interface simples e responsiva.",
            techIcons: ["react", "tailwindcss"],
            moreLink: "#",
            codeLink: "https://github.com/seuusuario/controle-financeiro"
        },
        {
            title: "Dev Burguer",
            image: "/images/dev.jpeg",
            description: "Sistema de gerenciamento de pedidos para uma hamburgueria fictícia. Feito com Next.js, TypeScript e integração com Firebase. Permite criar pedidos, gerenciar status e visualizar detalhes em tempo real.",
            techIcons: ["nextjs", "typescript", "firebase"],
            moreLink: "#",
            codeLink: "https://github.com/seuusuario/dev-burguer"
        }
    ];

    return (
        <section className=" py-12 px-4" id="projects">
            <h1 className="text-white text-center mb-10 text-5xl font-extrabold tracking-tight">Projetos</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {projects.map(({ title, image, description, techIcons, moreLink, codeLink }) => (
                    <div
                        key={title}
                        className="bg-[#2D3748] p-6 rounded-lg text-white shadow-md hover:shadow-lg transition-shadow duration-300"
                        style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
                    >
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-48 object-cover mb-4 rounded border-2 border-transparent hover:border-[#25d366] transition-colors duration-300"
                        />
                        <h2 className="text-xl font-semibold mb-2">{title}</h2>
                        <p className="text-sm mb-4">{description}</p>

                        {/* Ícones de tecnologias */}
                        <div className="flex gap-3 mb-6">
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

                        {/* Botões */}
                        <div className="flex gap-4">
                            <a
                                href={moreLink}
                                className="bg-[#25d366] hover:bg-[#1ebe57] px-4 py-2 rounded-md text-white font-semibold transition"
                            >
                                Ver mais
                            </a>

                            <a
                                href={codeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border border-[#25d366] text-[#25d366] hover:bg-[#25d366] hover:text-white px-4 py-2 rounded-md font-semibold transition"
                            >
                                <img src="/images/icones/github.svg" alt="GitHub" className="w-5 h-5" />
                                Ver Código
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
