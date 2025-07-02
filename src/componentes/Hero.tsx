export const Hero = () => {
    return (
        <section className="flex h-screen w-screen">
            <div className=" w-1/2 flex items-center justify-center flex-col ">
                <h2 className="text-xl text-gray-300 mb-2">Oi, eu sou</h2>
                <h1 className="text-5xl font-bold text-white mb-2">Felipe Alves</h1>
                <h2 className="text-xl text-[#25d366] mb-4">Apaixonado por tecnologia</h2>
                <p className="text-sm text-gray-400 max-w-md text-center mb-6">
                    Sou estudante de Engenharia de Software e desenvolvedor front-end em formação, apaixonado por tecnologia e movido por desafios.
                    Estou sempre em busca de evoluir, aprender coisas novas e transformar ideias em experiências reais e impactantes.
                </p>

                <a
                    href="/cv/felipe-alves-cv.pdf"
                    download
                    className="bg-[#25d366] text-white px-6 py-2 rounded-md hover:bg-[#1ebe57] transition"
                >
                    Download CV
                </a>

            </div>
            <div className="w-full md:w-1/2 flex items-center justify-start mb-12 ">
                <img
                    src="/images/avatar.png"
                    alt="Ilustração Felipe"
                    className="w-100 h-100 rounded-full object-cover"
                />

            </div>
            
        </section>
    )
}