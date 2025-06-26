import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export const Navbar = ({menuOpen, setMenuOpen}) => {
   
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);



  return(
    <nav className="fixed top-0 w-full z-40 backdrop-blur-sm border-b box-border shadow-lg text-lg px-2">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-22">
          <a href="#" className="font-bold text-2xl text-style gradient-text">sgrd.vrdn</a>
          
          <div className="flex justify-center gap-3">
            {/* links for md-lg screens */}
            <ul className="hidden md:flex items-center gap-4">
              <li>
                <a href="#home" className="relative inline-block text-color group">
                  <span className="pb-1 font-thin">HOME</span>
                  <span
                    className="absolute bottom-0 left-0 h-[2px] w-0 bg-hover rounded-b-lg transition-all duration-300 group-hover:w-full"
                  ></span>
                </a>
              </li>
              <li>
                <a href="#about" className="relative inline-block text-color group">
                  <span className="pb-1">ABOUT</span>
                  <span
                    className="absolute bottom-0 left-0 h-[2px] w-0 bg-hover rounded-b-lg transition-all duration-300 group-hover:w-full"
                  ></span>
                </a>
              </li>
              <li>
                <a href="#projects" className="relative inline-block text-color group">
                  <span className="pb-1">PROJECTS</span>
                  <span
                    className="absolute bottom-0 left-0 h-[2px] w-0 bg-hover rounded-b-lg transition-all duration-300 group-hover:w-full"
                  ></span>
                </a>
              </li>
              <li>
                <a href="#contact" className="relative inline-block text-color group">
                  <span className="pb-1">CONTACT</span>
                  <span
                    className="absolute bottom-0 left-0 h-[2px] w-0 bg-hover rounded-b-lg transition-all duration-300 group-hover:w-full"
                  ></span>
                </a>
              </li>
            </ul>
            {/* Menu button (visible on small screens) */}
            <div
              className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>
           
            {/* light/dark mode button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 py-1 border rounded cursor-pointer"
            >
              {darkMode ? <MdLightMode /> : <MdDarkMode />}
            </button>
          </div>
          
          
        </div>
      </div>

    </nav>
  )
}