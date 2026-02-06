import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center pt-32 pb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl"
            >
                <div className="flex items-center gap-2 mb-8">
                    <span className="text-white text-xl font-medium">Hello, I'm <span className="text-neon-green">Rahul Chand</span></span>
                </div>

                <h1 className="text-6xl md:text-[65px] font-bold text-white mb-8 leading-[1.05] tracking-tight">
                    A Full-Stack Developer<br />
                    Specializing In Building<br />
                    Modern Web Apps
                </h1>

                <p className="text-gray-400 text-lg max-w-2xl mb-12 leading-relaxed">
                    Hi, I'm Rahul, a full-stack developer specializing in building modern web apps with React, Next.js, and Node.js. Most of my work is for founders and product teams who want a clean, fast interface on top of a backend that is easy to maintain as the product grows.
                </p>

                <div className="flex gap-16">
                    <div>
                        <span className="text-5xl font-bold text-neon-green">8+</span>
                        <p className="text-gray-400 text-sm mt-2 font-medium tracking-wide">YEARS OF<br />EXPERIENCE</p>
                    </div>
                    <div>
                        <span className="text-5xl font-bold text-neon-green">20+</span>
                        <p className="text-gray-400 text-sm mt-2 font-medium tracking-wide">PROJECTS<br />COMPLETED</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
