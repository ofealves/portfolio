export const Aboutme = () => {
    return (
        <section className="flex flex-col items-center py-12 px-4">
            <hr className="border-t border-[#25d366]/30 my-12 w-full max-w-6xl mx-auto" />
            <h1 className="t text-white mb-10 text-5xl font-extrabold tracking-tight">Quem sou eu?</h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl">
                {/* Quem sou eu */}
                <div className="bg-[#112240] text-white p-6 rounded-lg shadow-lg w-full md:w-1/2 border-l-4 border-[#25d366]">
    <h2 className="text-2xl font-semibold mb-4 "></h2>
    <p className="text-base leading-relaxed text-gray-300">
        Sou estudante de Engenharia de Software e apaixonado por tecnologia desde a infância.
        Meu primeiro contato com a programação foi através dos games, que despertaram minha curiosidade sobre como os softwares funcionam.
        <br /><br />
        Atualmente, foco no desenvolvimento front-end, onde combino criatividade e técnica para criar interfaces intuitivas e impactantes.
    </p>
</div>


                {/* Linha do tempo com pontos alinhados */}
                
            </div>
            <hr className="border-t border-[#25d366]/30 my-12 w-full max-w-6xl mx-auto" />
        </section>
        
    );
};
