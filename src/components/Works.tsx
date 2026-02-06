import { motion } from "framer-motion";
import project1 from "../assets/project_talkstack.png";
import project2 from "../assets/project_voece.png";
import project3 from "../assets/project_getbild.png";
import project4 from "../assets/project_fictiv.png";

const projects = [
    {
        id: 1,
        title: "TalkStack AI",
        category: "SaaS Platform",
        image: project1,
        link: "#",
        color: "bg-[#e8f5ff]"
    },
    {
        id: 2,
        title: "Voece AI",
        category: "AI Video Platform",
        image: project2,
        link: "#",
        color: "bg-[#0f172a]"
    },
    {
        id: 3,
        title: "GetBild",
        category: "Construction Mgmt",
        image: project3,
        link: "#",
        color: "bg-[#f8fafc]"
    },
    {
        id: 4,
        title: "Fictiv",
        category: "Manufacturing Platform",
        image: project4,
        link: "#",
        color: "bg-[#ffffff]"
    }
];

const Works = () => {
    return (
        <section id="works" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center gap-2 mb-12">
                    <h2 className="text-[45px] font-bold text-white leading-tight">
                        <span className="text-neon-green">P</span>ortfolio
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div
                                className={`w-full aspect-[16/10] ${project.color} rounded-[40px] flex items-center justify-center p-8 transition-all duration-500 overflow-hidden relative border border-transparent group-hover:border-neon-green/30 shadow-lg`}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="mt-6 px-2">
                                <h3 className="text-2xl font-bold text-neon-green transition-colors">
                                    {project.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Works;
