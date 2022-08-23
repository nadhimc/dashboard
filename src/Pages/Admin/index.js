import { faBars, faUser, faSignOutAlt, faTimes  } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, Redirect, useParams } from "react-router-dom"
import React, { useState } from "react"
import Logo from "../../Images/sensation2022.png"
import AdmHome from "../../Component/Admin/AdmHome"
import "./index.css"
import AdmPesGamasurf from "../../Component/Admin/AdmPesGamasurf"
import AdmPesNasec from "../../Component/Admin/AdmPesNasec"
import AdmPesSent from "../../Component/Admin/AdmPesSent"
import AdmUser from "../../Component/Admin/AdmUser"
import AdmPengumuman from "../../Component/Admin/AdmPengumuman"

const Admin = ()=>{

    let { page } = useParams();
    const [nav, setNav] = useState(false)
    const [profNav, setProfNav] = useState(false)
    let active = "";
    if(page === "pesnasec" || page === "pesgamasurf" || page === "pessent" || page === "user" || page === "pengumuman"){
        active = page
    }else{
        active = "home"
    }

    if(localStorage.getItem("key") && localStorage.getItem("id")  && localStorage.getItem("user") && localStorage.getItem("role")){
        console.log("Loged in")
    }else{
        return(
            <Redirect to="/login" />
        )
    }

    function activePage(page){
        switch(page){
            case "pesgamasurf":
                return (<AdmPesGamasurf />)
            case "pesnasec":
                return (<AdmPesNasec />)
            case "pessent":
                return (<AdmPesSent />)
            case "user":
                return (<AdmUser />)
            case "pengumuman":
                return (<AdmPengumuman />)
            default:
                return (<AdmHome />)
        }
    }


    return(
        <div className="flex flex-col min-h-screen">
            <div className="relative bg-white shadow-md">
                <div className="mx-auto px-4 sm:px-6">
                    <div className="flex items-center py-6">
                        {/* Logo */}
                        <div className="flex md:justify-start justify-center flex-1 order-2 md:order-1">
                            <Link to="/dashboard">
                                <span className="sr-only">Workflow</span>
                                <img className="h-8 w-auto" src={Logo} alt="" />
                            </Link>
                        </div>

                        {/* Hamburger Button */}
                        <div className="md:-mr-2 -my-2 md:hidden order-1">
                            <button type="button" onClick={()=>setNav(true)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                                <span className="sr-only">Open menu</span>
                                <FontAwesomeIcon icon={faBars} size="lg" />
                            </button>
                        </div>

                        {/* Profile */}
                        <div className="md:-mr-2 -my-2 flex items-center md:space-x-4 order-3 relative">
                            <p className="hidden md:block text-gray-400 font-bold">{localStorage.getItem("name")?localStorage.getItem("name"):"Anonymous"}</p>
                            <button onClick={()=>setProfNav(!profNav)} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                                <span className="sr-only">Open menu</span>
                                <FontAwesomeIcon icon={faUser} size="lg" />
                            </button>
                            <div style={{minWidth: 200}} className={
                                profNav?
                                "bg-white absolute transition-all rounded-md bottom-0 right-0 translate-y-full transform p-4 border flex flex-col space-y-2"
                                :"bg-white absolute transition-all rounded-md bottom-0 right-0 translate-y-full transform p-4 border flex flex-col space-y-2 scale-0"
                                }>
                                {/* <Link to="/dashboard/profile" className="text-gray-500 hover:text-gray-400 text-base">
                                    My Profile
                                </Link> */}
                                <Link to="/logout" className="text-gray-500 hover:text-gray-400 text-base">
                                    Logout
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Overlay */}
            <div onClick={()=>setNav(false)} className={
                nav?
                "md:hidden absolute z-20 inset-0 bg-black opacity-30 min-h-screen"
                : "hidden"
            }>
            </div>

            <div className="flex flex-1">
                {/* Sidebar */}
                <div style={{left: nav?0:"-100%"}} className="bg-white border-r-2 w-full max-w-xs top-0 left-0 absolute md:static transition-all duration-500 z-30 min-h-screen md:min-h-full">
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
                            <Link onClick={()=>{document.querySelector(".peserta").classList.remove("on")}} to="/admin" className={
                            active==="home"?
                            "text-lg pr-3 pl-6 py-2 text-blue-500 border-l-4 border-blue-500"
                            :"text-lg pr-3 pl-6 py-2 text-gray-500 hover:text-blue-400 hover:border-blue-400 border-l-4"
                            }>
                                Home
                            </Link>
                            <button onClick={()=>{document.querySelector(".peserta").classList.toggle("on")}} className={
                            active==="pesnasec"||active==="pesgamasurf"||active==="pessent"?
                            "text-lg text-left pr-3 pl-6 py-2 text-blue-500 border-l-4 border-blue-500"
                            :"text-lg text-left pr-3 pl-6 py-2 text-gray-500 hover:text-blue-400 hover:border-blue-400 border-l-4"
                            }>
                                Peserta
                            </button>
                            <div className="flex flex-col pl-3 overflow-y-hidden transition-all duration-500 peserta">
                                <Link to="/admin/pesnasec" className={
                                    active==="pesnasec"?
                                    "text-lg pr-3 pl-6 py-2 text-blue-500 border-l-4 border-blue-500"
                                    :"text-lg pr-3 pl-6 py-2 text-gray-500 hover:text-blue-400 hover:border-blue-400 border-l-4"
                                }>
                                    Peserta Nasec
                                </Link>
                                <Link to="/admin/pesgamasurf" className={
                                active==="pesgamasurf"?
                                "text-lg pr-3 pl-6 py-2 text-blue-500 border-l-4 border-blue-500"
                                :"text-lg pr-3 pl-6 py-2 text-gray-500 hover:text-blue-400 hover:border-blue-400 border-l-4"
                                }>
                                    Peserta Gamasurf
                                </Link>
                                <Link to="/admin/pessent" className={
                                active==="pessent"?
                                "text-lg pr-3 pl-6 py-2 text-blue-500 border-l-4 border-blue-500"
                                :"text-lg pr-3 pl-6 py-2 text-gray-500 hover:text-blue-400 hover:border-blue-400 border-l-4"
                                }>
                                    Peserta Sent
                                </Link>
                            </div>
                            <Link onClick={()=>{document.querySelector(".peserta").classList.remove("on")}} to="/admin/user" className={
                                active==="user"?
                                "text-lg pr-3 pl-6 py-2 text-blue-500 border-l-4 border-blue-500"
                                :"text-lg pr-3 pl-6 py-2 text-gray-500 hover:text-blue-400 hover:border-blue-400 border-l-4"
                            }>
                                User
                            </Link>
                            <Link onClick={()=>{document.querySelector(".peserta").classList.remove("on")}} to="/admin/pengumuman" className={
                                active==="pengumuman"?
                                "text-lg pr-3 pl-6 py-2 text-blue-500 border-l-4 border-blue-500"
                                :"text-lg pr-3 pl-6 py-2 text-gray-500 hover:text-blue-400 hover:border-blue-400 border-l-4"
                            }>
                                Pengumuman
                            </Link>
                        </div>
                        <div className="mt-5 pt-5 border-t-2">
                            <Link to="/logout" className="text-lg pr-3 pl-6 py-2 text-gray-500 hover:text-blue-400 hover:border-blue-400 border-l-4">
                                <FontAwesomeIcon icon={faSignOutAlt} className="mr-5" />
                                Logout
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8 overflow-x-hidden">
                    {activePage(page)}
                </div>
            </div>
        </div>
    )
}

export default Admin