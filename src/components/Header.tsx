import { useEffect, useRef, useState } from "react";

export default function Header() {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const closeMenu = (e: Event) => {
      const eventTarget = e.target as HTMLDivElement;
      if (eventTarget !== menuRef.current && !eventTarget.closest("header")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, []);

  function handleToggleMenu() {
    setIsMenuOpen((isOpen) => !isOpen);
  }

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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
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
        <button onClick={handleToggleMenu} className="text-slate-100 xl:hidden">
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
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 8l16 0" />
            <path d="M4 16l16 0" />
          </svg>
        </button>
        <div
          ref={menuRef}
          className={`${
            isMenuOpen
              ? "right-0 skew-y-0 rotate-0"
              : "-right-full -skew-y-6 -rotate-30"
          } absolute top-0 origin-top-right flex flex-col xl:relative xl:flex-row h-screen xl:h-fit xl:left-0 xl:skew-y-0 xl:rotate-0 items-center min-w-[300px] xl:w-full bg-slate-700 xl:bg-transparent backdrop-blur z-[100] p-10 xl:p-5 transition-all duration-500`}
        >
          <button
            onClick={handleToggleMenu}
            className="self-end mb-5 p-1 bg-white rounded-md text-slate-800 xl:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex-1 w-full">
            <ul className="flex flex-col xl:flex-row xl:justify-center gap-4 xl:gap-8">
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
