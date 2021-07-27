import { faBars, faUser, faCalendar, faHome, faIdCard, faSignOutAlt, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, Redirect, useParams } from "react-router-dom"
import React, { useEffect, useState } from "react"
import Logo from "../../Images/logo.png"
import DashHome from "../../Component/Dashboard/DashHome"
import DashProfile from "../../Component/Dashboard/DashProfile"
import DashEvents from "../../Component/Dashboard/DashEvents"

const Dashboard = ()=>{

    let { page } = useParams();
    const [nav, setNav] = useState(false)
    const [profNav, setProfNav] = useState(false)
    const [isAuth, setIsAuth] = useState(true)
    let active = "";
    if(page === "profile" || page === "events"){
        active = page
    }else{
        active = "home"
    }

    const cekRegistered = ()=>{
        fetch(`${process.env.REACT_APP_APIURL}/users/${localStorage.getItem("id")}/isregistered`,{
            headers:{
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${localStorage.getItem("key")}`
            }
        }).then(res=>res.json())
        .then(
            (res)=>{
                console.log(res)
                if(res.meta.code===401){
                    setIsAuth(false)
                }
            },
            (err)=>{
                console.log(err)
            }
        )
    }

    useEffect(()=>{
        cekRegistered()
    },[])

    if(isAuth && localStorage.getItem("key") && localStorage.getItem("id")  && localStorage.getItem("user") && localStorage.getItem("role")){
        console.log("Loged in")
    }else{
        return(
            <Redirect to="/login" />
        )
    }

    function activePage(page){
        switch(page){
            case "profile":
                return (<DashProfile />)
            case "events":
                return (<DashEvents />)
            default:
                return (<DashHome />)
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
                            <p className="hidden md:block text-gray-400 font-bold">{localStorage.getItem('name')?localStorage.getItem('name').split(" ")[0]:"Anonymous"}</p>
                            <button onClick={()=>setProfNav(!profNav)} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                                <span className="sr-only">Open menu</span>
                                <FontAwesomeIcon icon={faUser} size="lg" />
                            </button>
                            <div style={{minWidth: 200}} className={
                                profNav?
                                "bg-white absolute transition-all rounded-md bottom-0 right-0 translate-y-full transform p-4 border flex flex-col space-y-2"
                                :"bg-white absolute transition-all rounded-md bottom-0 right-0 translate-y-full transform p-4 border flex flex-col space-y-2 scale-0"
                                }>
                                <Link to="/dashboard/profile" className="text-gray-500 hover:text-gray-400 text-base">
                                    My Profile
                                </Link>
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
                "md:hidden absolute z-40 inset-0 bg-black opacity-30 min-h-screen"
                : "hidden"
            }>
            </div>

            <div className="flex flex-1">
                {/* Sidebar */}
                <div style={{left: nav?0:"-100%"}} className="bg-white border-r-2 w-full max-w-xs top-0 left-0 absolute md:static transition-all duration-500 z-50 min-h-screen md:min-h-full">
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
                            <Link to="/dashboard" className={
                            active==="home"?
                            "text-lg pr-3 pl-6 py-2 text-blue-500 border-l-4 border-blue-500"
                            :"text-lg pr-3 pl-6 py-2 text-gray-500 hover:text-blue-400 hover:border-blue-400 border-l-4"
                            }>
                                <FontAwesomeIcon icon={faHome} className="mr-5" />
                                Home
                            </Link>
                            <Link to="/dashboard/profile" className={
                            active==="profile"?
                            "text-lg pr-3 pl-6 py-2 text-blue-500 border-l-4 border-blue-500"
                            :"text-lg pr-3 pl-6 py-2 text-gray-500 hover:text-blue-400 hover:border-blue-400 border-l-4"
                            }>
                                <FontAwesomeIcon icon={faIdCard} className="mr-5" />
                                My Profile
                            </Link>
                            <Link to="/dashboard/events" className={
                            active==="events"?
                            "text-lg pr-3 pl-6 py-2 text-blue-500 border-l-4 border-blue-500"
                            :"text-lg pr-3 pl-6 py-2 text-gray-500 hover:text-blue-400 hover:border-blue-400 border-l-4"
                            }>
                                <FontAwesomeIcon icon={faCalendar} className="mr-5" />
                                Events
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
                <div className="flex-1 p-8">
                    {activePage(page)}
                </div>
            </div>
        </div>
    )
}

export default Dashboard