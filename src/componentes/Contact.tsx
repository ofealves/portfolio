export const Contact = () => {
    return (
        <section className="w-full min-h-screen flex items-center justify-center py-16 px-4">
            <div className="w-full max-w-md">
                <h1 className="text-5xl text-white text-center font-extrabold mb-8 tracking-tight font-poppins">
                    Contato
                </h1>

                <form className="bg-[#1A202C]/90 p-8 rounded-lg shadow-lg text-white space-y-6">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-1 text-sm text-gray-300">
                            Nome
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Seu nome"
                            className="p-3 rounded bg-[#1A202C] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#25d366] focus:border-[#25d366]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1 text-sm text-gray-300">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="seu@email.com"
                            className="p-3 rounded bg-[#1A202C] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#25d366] focus:border-[#25d366]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="message" className="mb-1 text-sm text-gray-300">
                            Mensagem
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            placeholder="Sua mensagem"
                            className="p-3 rounded bg-[#1A202C] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#25d366] focus:border-[#25d366]"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-[#25d366] hover:bg-[#1ebe57] text-white px-6 py-2 rounded-md transition duration-300 shadow hover:shadow-lg cursor-pointer"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
};
