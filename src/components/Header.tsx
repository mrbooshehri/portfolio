export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="text-emerald-400 relative z-10"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 7l5 5l-5 5" />
            <path d="M12 19l7 0" />
          </svg>
          <span
            className="text-white font-bold text-xl relative z-10"
            style={{ animation: "glow 3s ease-in-out infinite" }}
          >
            DevOps Engineer
          </span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#about"
                className="text-gray-300 hover:text-emerald-400 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-gray-300 hover:text-emerald-400 transition"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-300 hover:text-emerald-400 transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-300 hover:text-emerald-400 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com"
            className="text-gray-300 hover:text-emerald-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-300 hover:text-emerald-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 11v5" />
              <path d="M8 8v.01" />
              <path d="M12 16v-5" />
              <path d="M16 16v-3a2 2 0 1 0 -4 0" />
              <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
            </svg>
          </a>
          <a
            href="mailto:contact@example.com"
            className="text-gray-300 hover:text-emerald-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
