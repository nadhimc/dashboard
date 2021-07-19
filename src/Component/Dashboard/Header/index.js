import { faBars, faUser, faCalendar, faHome, faIdCard, faSignOutAlt, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import React, { useState } from "react"
import Logo from "../../../Images/logo.png"
import "./index.css"

const Header = ()=>{

    const [nav, setNav] = useState(false)

    return(
        <>
            <div className="relative bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center py-6">
                        {/* Logo */}
                        <div className="flex md:justify-start justify-center flex-1 order-2 md:order-1">
                            <a href="#">
                                <span className="sr-only">Workflow</span>
                                <img className="h-8 w-auto" src={Logo} alt="" />
                            </a>
                        </div>

                        {/* Hamburger Button */}
                        <div className="-mr-2 -my-2 md:hidden order-1">
                            <button type="button" onClick={()=>setNav(true)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                                <span className="sr-only">Open menu</span>
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                        </div>

                        {/* Profile */}
                        <div className="-mr-2 -my-2 flex items-center space-x-4 order-3">
                            <p className="hidden md:block text-gray-400 font-bold">Nadhim</p>
                            <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                                <span className="sr-only">Open menu</span>
                                <FontAwesomeIcon icon={faUser} size="lg" />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            {/* Overlay */}
            <div onClick={()=>setNav(false)} className={
                nav?
                "md:hidden absolute z-40 inset-0 bg-black opacity-30"
                : "hidden"
            }>

            </div>
            {/* Sidebar */}
            <div style={{left: nav?0:"-100%"}} className="min-h-screen bg-white border-r-2 w-full max-w-xs top-0 left-0 absolute md:static transition-all duration-500 z-50">
                <div className="flex items-center justify-between md:hidden h-full px-6 py-5">
                    <div>
                        <img className="h-6 w-auto" src={Logo} alt="Workflow" />
                    </div>
                    <div className="-mr-2">
                        <button onClick={()=>setNav(false)} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                </div>
                <div className="flex h-full flex-col flex-1 pt-5">
                    <div className="flex flex-col">
                        <Link className="text-lg pr-3 pl-6 py-2 text-blue-500 border-l-4 border-blue-500">
                            <FontAwesomeIcon icon={faHome} className="mr-5" />
                            Home
                        </Link>
                        <Link className="text-lg pr-3 pl-6 py-2 text-gray-500 hover:text-blue-400 hover:border-blue-400 border-l-4">
                            <FontAwesomeIcon icon={faIdCard} className="mr-5" />
                            My Profile
                        </Link>
                        <Link className="text-lg pr-3 pl-6 py-2 text-gray-500 hover:text-blue-400 hover:border-blue-400 border-l-4">
                            <FontAwesomeIcon icon={faCalendar} className="mr-5" />
                            Events
                        </Link>
                    </div>
                    <div className="mt-5 pt-5 border-t-2">
                        <Link className="text-lg pr-3 pl-6 py-2 text-gray-500 hover:text-blue-400 hover:border-blue-400 border-l-4">
                            <FontAwesomeIcon icon={faSignOutAlt} className="mr-5" />
                            Logout
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header