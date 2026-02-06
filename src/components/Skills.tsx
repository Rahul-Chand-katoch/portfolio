import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiPostgresql, SiOpenai } from "react-icons/si";

const skills = [
    {
        id: 1,
        category: "Frontend Development",
        items: [
            { name: "React", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Tailwind CSS", icon: SiTailwindcss }
        ]
    },
    {
        id: 2,
        category: "Backend Development",
        items: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "MongoDB", icon: SiMongodb },
            { name: "REST APIs", icon: null } // Using text fallback or a generic icon if needed
        ]
    },
    {
        id: 3,
        category: "AI Integration",
        items: [
            { name: "OpenAI API", icon: SiOpenai },
            { name: "LangChain", icon: null },
            { name: "Automation", icon: null },
            { name: "Chatbots", icon: null }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center gap-2 mb-12">
                    <h2 className="text-[45px] font-bold text-white leading-tight">
                        <span className="text-neon-green">My</span> Skills
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-3xl border border-gray-800 bg-card-bg hover:border-gray-700 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-white mb-6">{skillGroup.category}</h3>
                            <p className="text-gray-500 text-xs mb-4 uppercase tracking-wider font-bold">Technologies:</p>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="px-4 py-2 rounded-lg bg-dark-bg border border-gray-800 text-sm text-neon-green font-medium flex items-center gap-2 hover:border-gray-700 transition-colors"
                                    >
                                        {skill.icon && <skill.icon size={16} />}
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
