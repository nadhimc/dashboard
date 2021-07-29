import { Link } from "react-router-dom"
import Nasec from "../../../Images/nasec.svg"
import Gamasurf from "../../../Images/gamasurf.svg"
import Sent from "../../../Images/sent.svg"
import { useEffect, useState } from "react"

const DashProfile = ()=>{

    const [registered, setRegistered] = useState("")
    const [eventLoad, setEventLoad] = useState(false)
    const [profileLoad, setProfileLoad] = useState(false)
    const [profile, setProfile] = useState({
        "id": 1,
        "name": "",
        "email": "",
        "asal_kampus": "",
        "image": null,
        "role_id": 2,
        "is_active": "2021-07-24T10:31:37.000000Z"
    })

    const getProfile = ()=>{
        fetch(`${process.env.REACT_APP_APIURL}/users/${localStorage.getItem("id")}`,{
            headers:{
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${localStorage.getItem("key")}`
            }
        })
        .then(res=>res.json())
        .then(
            (res)=>{
                console.log(res)
                if(res.meta.code!==200){
                    console.log("error")
                }else{
                    setProfile(res.data)
                    setProfileLoad(true)
                }
            },
            (err)=>{
                console.log(err)
            }
        )
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
                if(res.meta.code===200){
                    if(res.data!== false){
                        setRegistered(res.data)
                    }
                }
                setEventLoad(true)
            },
            (err)=>{
                console.log(err)
            }
        )
    }

    useEffect(()=>{
        cekRegistered()
        getProfile()
    },[])

    return (
        <div>
            <h1 className="text-2xl mb-4">My Profile</h1>
            <div className="w-full rounded-md p-5 border border-gray-300 shadow-md flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 max-w-3xl">
                <div className="hidden">
                    <div className="w-48 h-48 bg-gray-300 rounded-md mx-auto">
                        
                    </div>
                    <button className="block text-center p-2 w-full bg-gray-300 rounded-md mt-4 hover:bg-gray-500 hover:text-white">
                        Edit Avatar
                    </button>
                </div>
                <div className="flex-1 flex flex-col space-y-4">
                    <div className="flex flex-col md:flex-row">
                        <p className="md:w-1/3 text-lg md:text-base font-bold text-gray-900">Nama</p>
                        <div className={profileLoad?"hidden":"w-full"}>
                            <span className="animate-pulse bg-gray-200 text-gray-200 w-full max-w-xs block rounded-md">a</span>
                        </div>
                        <p className={profileLoad?"":"hidden"}>{profile.name}</p>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <p className="md:w-1/3 text-lg md:text-base font-bold text-gray-900">Email</p>
                        <div className={profileLoad?"hidden":"w-full"}>
                            <span className="animate-pulse bg-gray-200 text-gray-200 w-full max-w-xs block rounded-md">a</span>
                        </div>
                        <p className={profileLoad?"":"hidden"}>{profile.email}</p>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <p className="md:w-1/3 text-lg md:text-base font-bold text-gray-900">Asal Institusi</p>
                        <div className={profileLoad?"hidden":"w-full"}>
                            <span className="animate-pulse bg-gray-200 text-gray-200 w-full max-w-xs block rounded-md">a</span>
                        </div>
                        <p className={profileLoad?"":"hidden"}>{profile.asal_kampus}</p>
                    </div>
                </div>
            </div>
            <h1 className={registered===""?"hidden":"text-2xl my-4 "}>Event Registered</h1>
            <h1 className={eventLoad?"hidden":"rounded-md text-2xl my-4 bg-gray-200 text-gray-200 animate-pulse w-full md:w-48"}>E</h1>
            <div className={eventLoad?"hidden":"rounded-md w-full md:w-56 h-36 bg-gray-200 animate-pulse"} />
            <div className={registered===""?"hidden":"rounded-md md:max-w-xs shadow-md p-8 flex justify-between items-center flex-col space-y-4"} style={{backgroundColor:registered==="nasec"?"#92F8D9":registered==="gamasurf"?"#F5DF7E":"#4DDBEB"}}>
                <div className="flex-1 flex justify-center items-center">
                    <img alt="Gamasurf" className={registered==="gamasurf"?"w-48":"hidden"} src={Gamasurf} />
                    <img alt="Nasec" className={registered==="nasec"?"w-48":"hidden"} src={Nasec} />
                    <img alt="Sent" className={registered==="sent"?"w-48":"hidden"} src={Sent} />
                </div>
                <Link to="/dashboard/register" className="text-center bg-white w-full py-2 font-bold text-lg rounded-lg hover:opacity-80" style={{color:registered==="nasec"?"#92F8D9":registered==="gamasurf"?"#F5DF7E":"#4DDBEB"}}>
                    Check
                </Link>
            </div>
        </div>
    )
}

export default DashProfile