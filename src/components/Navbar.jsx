

import { useState } from "react"
import assets from "../assets/assets"

function Navbar({ theme }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <nav className="flex justify-between items-center px-6 sm:px-12 lg-px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">
            <a href="./index.html">
                <img src={theme === "dark" ? assets.logo_dark : assets.logo} alt="" className="w-32 sm:w-40" />
            </a>
            <div className={`text-gray-700 dark:text-white sm:text-sm 
            ${ !sidebarOpen ? "max-sm:w-0 overflow-hidden" : "max-sm:w-60 max-sm:pl-10"} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>
                <img src={assets.close_icon} alt="close icon" className="w-5 absolute right-4 top-4 sm:hidden" onClick={() => setSidebarOpen(true)} />
                    <a href="#" className="sm:hover:border-b">Home</a>
                    <a href="#services" className="sm:hover:border-b">Services</a>
                    <a href="#our-work" className="sm:hover:border-b">Our work</a>
                    <a href="#contact" className="sm:hover:border-b">Contact Us</a>
                </div>
            <div className="flex items-center gap-2 sm:gap-4">
                <img src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon} alt="" onClick={() => setSidebarOpen(true)} className="w-8 sm:hidden"/>
                <a href="#" className="bg-primary text-sm max-sm:hidden flex items-center gap-2  transition-all dark:text-white connect-btn">
                    <img src={assets.white_arrow} alt="" className={14}/>
                    Connect
                </a>
            </div>
        </nav>
    )
}

export default Navbar