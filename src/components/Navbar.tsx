import { Link } from "react-scroll";
import { GoHome, GoBriefcase, GoPerson, GoTools } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";

const navItems = [
    { id: "hero", label: "INTRODUCE", icon: GoHome },
    { id: "works", label: "WORKS", icon: GoBriefcase },
    { id: "resume", label: "RESUME", icon: IoDocumentTextOutline },
    { id: "services", label: "SERVICES", icon: GoTools },
    { id: "skills", label: "MY SKILLS", icon: GoPerson },
];

const Navbar = () => {
    return (
        <nav className="fixed top-6 right-0 left-0 xl:left-[450px] flex justify-center z-40 px-4">
            <div className="bg-[#1a1a1a]/95 backdrop-blur-md border border-gray-800 rounded-full px-4 py-2 flex flex-wrap justify-center gap-2 shadow-2xl">
                {navItems.map((item) => (
                    <Link
                        key={item.id}
                        to={item.id}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        activeClass="!text-neon-green !border-neon-green"
                        className="flex items-center gap-2 px-4 py-3 rounded-full text-[10px] sm:text-xs font-bold text-gray-500 border border-transparent cursor-pointer transition-all hover:text-white"
                    >
                        <item.icon size={16} />
                        {item.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
