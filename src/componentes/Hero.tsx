export const Hero = () => {
    return (
        <section className="flex h-screen w-full max-w-6xl mx-auto items-center gap-8 px-6">
            {/* Texto */}
            <div className="flex-1 flex flex-col justify-center items-center md:items-start">
                <h2 className="text-xl text-gray-300 mb-2">Oi, eu sou</h2>
                <h1 className="text-5xl font-semibold text-white mb-2">Felipe Alves</h1>
                <h2 className="text-xl text-[#25d366] mb-4">Apaixonado por tecnologia</h2>
                <p className="text-base text-gray-400 max-w-md text-center md:text-left mb-6 font-poppins">
                    Sou estudante de Engenharia de Software e desenvolvedor front-end em formação, apaixonado por tecnologia e movido por desafios.
                    Estou sempre em busca de evoluir, aprender coisas novas e transformar ideias em experiências reais e impactantes.
                </p>

                <a
                    href="/cv/felipe-alves-cv.pdf"
                    download
                    className="bg-[#25d366] text-white px-7 py-2.5 rounded-md hover:bg-[#1ebe57] transition"
                >
                    Download CV
                </a>
            </div>

            {/* Avatar */}
            <div className="flex-1 flex justify-center items-center">
                <div className="relative rounded-full overflow-hidden neon-outline max-w-xs w-full aspect-square">
                    <img
                        src="/images/avatar2.png"
                        alt="Ilustração Felipe"
                        className="w-full h-full rounded-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>
            </div>

            <style jsx>{`
        .neon-outline {
          box-shadow:
            0 0 8px 2.5px #25d366,
            0 0 16px 5px #25d366,
            0 0 32px 7.5px #25d366;
          transition: box-shadow 0.3s ease;
          border-radius: 9999px;
        }
        .neon-outline:hover {
          box-shadow:
            0 0 12px 4px #25d366,
            0 0 24px 8px #25d366,
            0 0 48px 12px #25d366;
        }
      `}</style>
        </section>
    );
};
