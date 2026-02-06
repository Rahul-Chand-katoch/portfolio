import { motion } from "framer-motion";

import profileImg from "../assets/profile_pic.png";

const ProfileCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="xl:fixed xl:left-6 xl:top-6 xl:bottom-6 w-full max-w-2xl mx-auto xl:mx-0 xl:w-[380px] bg-card-bg rounded-[30px] border border-gray-800 p-8 flex flex-col justify-between items-center z-50 shadow-2xl mb-12 xl:mb-0"
        >
            <div className="flex flex-col items-center w-full">
                <div className="w-full aspect-[4/5] rounded-[24px] overflow-hidden mb-9 relative group">
                    <img
                        src={profileImg}
                        alt="Rahul Chand"
                        className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-500"
                    />
                </div>

                <h3 className="text-3xl font-bold text-white mb-5 text-center">Rahul Chand</h3>
                <p className="text-gray-400 text-m mb-6 text-center font-medium tracking-wide">
                    Full Stack Developer
                </p>
            </div>

            <div className="text-gray-500 text-xs">
                <p>© 2024 All Rights Reserved</p>
            </div>
        </motion.div>
    );
};

export default ProfileCard;
