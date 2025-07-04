export const Contact = () => {
    return (
        <section
            id="contato"
            className="w-full min-h-[80vh] flex items-center justify-center py-16 px-4 bg-[#0a192f]"
        >
            <div className="w-full max-w-md">
                <h1 className="text-5xl text-white text-center font-extrabold mb-10 tracking-tight font-poppins">
                    Contato
                </h1>

                <form
                    className="bg-[#112240] p-8 rounded-lg shadow-lg text-white space-y-6"
                    onSubmit={(e) => e.preventDefault()} // Placeholder, adicione sua lógica aqui
                >
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-2 text-sm text-gray-300 font-medium">
                            Nome
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Seu nome"
                            required
                            className="p-3 rounded bg-[#1A202C] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#25d366] focus:border-[#25d366] transition"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-2 text-sm text-gray-300 font-medium">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="seu@email.com"
                            required
                            className="p-3 rounded bg-[#1A202C] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#25d366] focus:border-[#25d366] transition"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="message" className="mb-2 text-sm text-gray-300 font-medium">
                            Mensagem
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            placeholder="Sua mensagem"
                            required
                            className="p-3 rounded bg-[#1A202C] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#25d366] focus:border-[#25d366] resize-none transition"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#25d366] hover:bg-[#1ebe57] text-white font-semibold px-6 py-3 rounded-md transition duration-300 shadow hover:shadow-lg cursor-pointer"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
};
