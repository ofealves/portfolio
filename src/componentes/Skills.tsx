export const Skills = () => {
    return (
        <section className="py-12 px-4" id="skills">
            <h1 className="text-white text-center mb-10 text-5xl font-extrabold tracking-tight">Skills</h1>

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
                        className="group bg-[#2D3748] p-4 rounded-lg text-center text-white shadow-lg border border-transparent transform transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_10px_#25d36640] hover:border-[#25d366] cursor-pointer"
                    >
                        <img
                            src={`/images/icones/${skill.icon}.svg`}
                            alt={skill.name}
                            className="w-10 h-10 mx-auto mb-2 transition duration-300"
                        />
                        <p className="text-sm group-hover:text-[#25d366] transition">{skill.name}</p>
                    </div>
                ))}
            </div>

            {/* Divisor de seção com linha verde clara */}
            <hr className="border-t border-[#25d366]/30 my-12 w-full max-w-6xl mx-auto" />
        </section>
    );
};
