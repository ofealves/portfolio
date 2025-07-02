export const Contact = () => {
    return (
        <div className="bg-red-400 w-full h-screen flex items-center flex-col p-8">
            <h1 className="text-5xl text-white mb-6">Contato</h1>
            <form className="bg-[#1A202C] p-8 rounded shadow-md text-white w-full max-w-md space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="name">Nome</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Seu nome"
                        className="p-2 rounded text-black"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        className="p-2 rounded text-black"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="message">Mensagem</label>
                    <textarea
                        id="message"
                        rows={4}
                        placeholder="Sua mensagem"
                        className="p-2 rounded text-black"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};
