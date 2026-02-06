import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="bg-dark-bg min-h-screen text-white pb-32 font-sans selection:bg-neon-green selection:text-black">
      {/* Background with slight gradient effect */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#121212] to-[#121212] -z-10" />

      <ProfileCard />

      <main className="xl:pl-[450px] p-6 lg:p-12 max-w-[1700px] mx-auto space-y-32">
        <Navbar />
        <Hero />
        <Works />
        <Resume />
        <Services />
        <Skills />
        <Testimonials />
      </main>
    </div>
  );
}

export default App;
