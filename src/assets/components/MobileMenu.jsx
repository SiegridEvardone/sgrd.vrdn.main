export const MobileMenu = ({menuOpen, setMenuOpen}) => {
  return(
    <div
      className={`fixed top-0 left-0 w-full bg-body z-40 flex flex-col p-10
                     transition-all duration-300 ease-in-out

                     ${
                       menuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }
                   `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-7 right-9 text-color text-4xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>
       <ul className="text-3xl mt-10">
              <li className="mt-2 border-t border-gray-500 py-2">
                <a href="#home" onClick={() => setMenuOpen(false)} className="relative text-color group">
                  <span className="pb-1">HOME</span>
                  <span
                    className="absolute bottom-0 left-0 h-[2px] w-0 bg-hover rounded-b-lg transition-all duration-300 group-hover:w-full"
                  ></span>
                </a>
              </li>
              <li className="mt-2 border-t border-gray-500 py-2">
                <a href="#about" onClick={() => setMenuOpen(false)} className="relative text-color group">
                  <span className="pb-1">ABOUT</span>
                  <span
                    className="absolute bottom-0 left-0 h-[2px] w-0 bg-hover rounded-b-lg transition-all duration-300 group-hover:w-full"
                  ></span>
                </a>
              </li>
              <li className="mt-2 border-t border-gray-500 py-2">
                <a href="#projects" onClick={() => setMenuOpen(false)} className="relative text-color group">
                  <span className="pb-1">PROJECTS</span>
                  <span
                    className="absolute bottom-0 left-0 h-[2px] w-0 bg-hover rounded-b-lg transition-all duration-300 group-hover:w-full"
                  ></span>
                </a>
              </li>
              <li className="mt-2 border-y border-gray-500 py-2">
                <a href="#contact" onClick={() => setMenuOpen(false)} className="relative text-color group">
                  <span className="pb-1">CONTACT</span>
                  <span
                    className="absolute bottom-0 left-0 h-[2px] w-0 bg-hover rounded-b-lg transition-all duration-300 group-hover:w-full"
                  ></span>
                </a>
              </li>
            </ul>
    </div>
  )
}