import { motion } from "framer-motion";
import { FaCode, FaServer, FaLayerGroup, FaRobot } from "react-icons/fa6";

const services = [
    {
        id: 1,
        title: "Full-Stack Web Application Development",
        description: "End-to-end development of modern, scalable web applications using React, Next.js, and Node.js/Nest.js—built to grow with your product, not break under it.",
        icon: FaCode
    },
    {
        id: 2,
        title: "Frontend Engineering & UI Implementation",
        description: "High-performance, responsive interfaces with TypeScript and Tailwind CSS, including dashboards, admin panels, and marketing sites that feel fast and polished on every device.",
        icon: FaLayerGroup
    },
    {
        id: 3,
        title: "Backend API & Database Architecture",
        description: "Robust REST or GraphQL APIs with secure authentication, role-based access control, and well-structured databases using PostgreSQL, Supabase, or MongoDB.",
        icon: FaServer
    },
    {
        id: 4,
        title: "AI & Automation Integration",
        description: "Practical AI solutions using OpenAI—chatbots, internal assistants, document Q&A, and background workflows that reduce manual effort without adding complexity.",
        icon: FaRobot
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center gap-2 mb-12">
                    <h2 className="text-[45px] font-bold text-white leading-tight">
                        <span className="text-neon-green">My</span> Expertise
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-3xl border border-gray-800 hover:border-neon-green/50 transition-colors bg-card-bg group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-neon-green/10 text-neon-green flex items-center justify-center mb-6 group-hover:bg-neon-green group-hover:text-black transition-colors">
                                <service.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Services;
