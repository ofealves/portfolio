export const Aboutme = () => {
    return (
        <section className="flex flex-col items-center py-12 px-4">
            <hr className="border-t border-[#25d366]/30 my-12 w-full max-w-6xl mx-auto" />
            <h1 className="t text-white mb-10 text-5xl font-extrabold tracking-tight">Quem sou eu?</h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl">
                {/* Quem sou eu */}
                <div className="bg-[#1A202C] text-white p-6 rounded-lg shadow-lg w-full md:w-1/2 border-l-4 border-[#25d366]">
    <h2 className="text-2xl font-semibold mb-4 "></h2>
    <p className="text-base leading-relaxed text-gray-300">
        Sou estudante de Engenharia de Software e apaixonado por tecnologia desde a infância.
        Meu primeiro contato com a programação foi através dos games, que despertaram minha curiosidade sobre como os softwares funcionam.
        <br /><br />
        Atualmente, foco no desenvolvimento front-end, onde combino criatividade e técnica para criar interfaces intuitivas e impactantes.
    </p>
</div>


                {/* Linha do tempo com pontos alinhados */}
                <div className=" bg-[#1A202C]/80 text-white p-6 rounded-lg shadow-lg w-full md:w-1/2">
                    <h2 className="text-2xl font-semibold mb-6 ">Minha Jornada</h2>
                    <div className="relative border-l-2 border-[#25d366] pl-8 space-y-6">
                        <div className="relative">
                            <span className="absolute -left-10 top-1 w-4 h-4 bg-white rounded-full border-2 border-[#25d366]"></span>
                            <p><strong>2021:</strong> Aprendi HTML e CSS, criando meus primeiros projetos web.</p>
                        </div>
                        <div className="relative">
                            <span className="absolute -left-10 top-1 w-4 h-4 bg-white rounded-full border-2 border-[#25d366]"></span>
                            <p><strong>2022:</strong> Iniciei a faculdade de Engenharia de Software e comecei a me aprofundar no desenvolvimento front-end.</p>
                        </div>
                        <div className="relative">
                            <span className="absolute -left-10 top-1 w-4 h-4 bg-white rounded-full border-2 border-[#25d366]"></span>
                            <p><strong>2023:</strong> Estudei JavaScript e me aprofundei no uso do Tailwind CSS para estilização moderna.</p>
                        </div>
                        <div className="relative">
                            <span className="absolute -left-10 top-1 w-4 h-4 bg-white rounded-full border-2 border-[#25d366]"></span>
                            <p><strong>2024:</strong> Avancei em JavaScript, aprendi TypeScript e intensifiquei a prática com projetos próprios.</p>
                        </div>
                        <div className="relative">
                            <span className="absolute -left-10 top-1 w-4 h-4 bg-white rounded-full border-2 border-[#25d366]"></span>
                            <p><strong>2025:</strong> Estudando React e TypeScript, enquanto desenvolvo projetos para meu portfólio.</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-t border-[#25d366]/30 my-12 w-full max-w-6xl mx-auto" />
        </section>
        
    );
};
