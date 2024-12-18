import MeshBackground from "./MeshBackground";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 text-white pt-16 relative overflow-hidden"
    >
      <MeshBackground />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-8 relative inline-block">
          <div className="w-48 h-48 mx-auto relative">
            <div className="absolute inset-0 bg-emerald-400 rounded-full blur-lg opacity-20 animate-pulse"></div>
            <img
              src="/profile.jpeg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-emerald-400 relative z-10"
            />
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center z-20">
              <span className="text-slate-900 font-bold text-sm">3+</span>
            </div>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Mohammad Reza Booshsheri
          <span className="text-emerald-400">.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Automating the future, one pipeline at a time. Specializing in CI/CD,
          cloud infrastructure, and container orchestration.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#projects">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition">
              View Projects
            </button>
          </a>
          <a href="#contact">
            <button className="border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition">
              Contact Me
            </button>
          </a>
        </div>
        <div className="mt-16 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-auto text-emerald-400"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 14" />
            <path d="M18 13l-6 6" />
            <path d="M6 13l6 6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
