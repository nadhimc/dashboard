import {  faCalendar, faHome, faIdCard, faSignOutAlt, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import Logo from "../../../Images/sensation2022.png"

const Sidebar = ()=>{
    return(
        <div className="min-h-screen bg-white border-r-2 w-full max-w-xs top-0 left-0 absolute md:relative">
            <div className="flex items-center justify-between md:hidden h-full px-6 py-5">
                <div>
                    <img className="h-6 w-auto" src={Logo} alt="Workflow" />
                </div>
                <div className="-mr-2">
                    <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
            </div>
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
                <Link className="text-lg pr-3 pl-6 py-2 text-gray-500 hover:text-blue-400 hover:border-blue-400 border-l-4">
                    <FontAwesomeIcon icon={faSignOutAlt} className="mr-5" />
                    Logout
                </Link>
            </div>
        </div>
    )
}

export default Sidebar