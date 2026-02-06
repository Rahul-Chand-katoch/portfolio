import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";

const testimonials = [
    {
        id: 1,
        client: "Sarah J.",
        role: "CEO, TechStart",
        content: "Rahul has been excellent in communication and delivering the scope of work within the timeline. The project was successful and we look forward to working with him again.",
        rating: 5
    },
    {
        id: 2,
        client: "Michael C.",
        role: "Product Manager",
        content: "The work was outstanding and delivered faster than expected. Rahul combined strong technical skills with a very professional attitude.",
        rating: 5
    },
    {
        id: 3,
        client: "David L.",
        role: "Founder, DesignLab",
        content: "Top notch quality. Rahul understands design better than most developers I've worked with. The implementation was pixel perfect.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center gap-2 mb-12">
                    <span className="text-4xl font-bold text-white">Clients</span>
                    <h2 className="text-4xl font-bold text-white">Experience</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-3xl border border-gray-800 bg-card-bg relative"
                        >
                            <FaQuoteLeft className="text-neon-green/20 text-4xl mb-4" />
                            <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">"{item.content}"</p>

                            <div className="flex gap-1 mb-4">
                                {[...Array(item.rating)].map((_, i) => (
                                    <GoStarFill key={i} className="text-neon-green text-sm" />
                                ))}
                            </div>

                            <div>
                                <h4 className="text-white font-bold">{item.client}</h4>
                                <p className="text-gray-500 text-xs">{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Testimonials;
