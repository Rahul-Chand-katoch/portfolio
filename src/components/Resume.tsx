import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";
import { IoBriefcase } from "react-icons/io5";

const experience = [
    {
        id: 1,
        role: "Full Stack Developer",
        company: "Freelancer",
        date: "2020 - Present",
        description: "Built and shipped over 20+ web applications using modern tech stacks. Specialized in React, Node.js, and cloud architectures."
    },
    {
        id: 2,
        role: "Frontend Developer",
        company: "TechAgency",
        date: "2018 - 2020",
        description: "Led frontend development for multiple client projects, implementing responsive designs and ensuring cross-browser compatibility."
    },
    {
        id: 3,
        role: "Web Intern",
        company: "StartUp Inc",
        date: "2017 - 2018",
        description: "Collaborated with senior developers to build and maintain internal tools and customer-facing websites."
    }
];

const education = [
    {
        id: 1,
        degree: "Computer Science",
        school: "University of Technology",
        date: "2014 - 2018",
        description: "Bachelor's degree with a focus on software engineering and web technologies."
    }
];

const Resume = () => {
    return (
        <section id="resume" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center gap-2 mb-12">
                    <h2 className="text-[45px] font-bold text-white leading-tight">
                        <span className="text-neon-green">R</span>esume
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Experience Column */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-neon-green">
                                <IoBriefcase size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Experience</h3>
                        </div>

                        <div className="space-y-12">
                            {experience.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="pl-8 border-l border-gray-800 relative"
                                >
                                    <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-neon-green" />
                                    <span className="text-neon-green text-sm mb-2 block font-medium">{item.date}</span>
                                    <h4 className="text-xl font-bold text-white mb-1">{item.role}</h4>
                                    <p className="text-gray-500 text-sm mb-4">{item.company}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-neon-green">
                                <FaGraduationCap size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Education</h3>
                        </div>

                        <div className="space-y-12">
                            {education.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="pl-8 border-l border-gray-800 relative"
                                >
                                    <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-neon-green" />
                                    <span className="text-neon-green text-sm mb-2 block font-medium">{item.date}</span>
                                    <h4 className="text-xl font-bold text-white mb-1">{item.degree}</h4>
                                    <p className="text-gray-500 text-sm mb-4">{item.school}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Resume;
