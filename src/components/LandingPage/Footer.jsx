import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-base-800 px-4 md:px-8 py-6 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 space-y-2 md:space-y-0">
        {/* Left / Deployed by section */}
        <div className="flex items-center space-x-2">
          <span>
            Developed by{" "}
            <span className="font-semibold">KarthickRamAlagar</span>
          </span>
          <a
            href="https://github.com/KarthickRamAlagar"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white"
          >
            {/* GitHub SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.73.5.5 5.73.5 12.02c0 5.11 3.29 9.44 7.86 10.98.58.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.13-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.27-5.23-5.63 0-1.24.44-2.25 1.16-3.05-.12-.29-.5-1.46.11-3.04 0 0 .95-.3 3.12 1.16.91-.25 1.88-.37 2.85-.37.97 0 1.94.12 2.85.37 2.17-1.46 3.12-1.16 3.12-1.16.61 1.58.23 2.75.11 3.04.72.8 1.16 1.81 1.16 3.05 0 4.37-2.68 5.33-5.24 5.61.42.36.8 1.07.8 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.21.66.8.55C20.21 21.46 23.5 17.13 23.5 12.02 23.5 5.73 18.27.5 12 .5z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/karthick-ramalagar-763404370/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white"
          >
            {/* LinkedIn SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.32-.03-3.02-1.84-3.02-1.85 0-2.13 1.44-2.13 2.92v5.6h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5.6z" />
            </svg>
          </a>
        </div>

        {/* Right / Copyright */}
        <div className="text-center md:text-right">
          &copy; {new Date().getFullYear()} Dr.S.Rengaraj. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer