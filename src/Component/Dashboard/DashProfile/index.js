import { Link } from "react-router-dom"
import Nasec from "../../../Images/nasec.svg"
import Gamasurf from "../../../Images/gamasurf.svg"
import Sent from "../../../Images/sent.svg"
import { useEffect, useState } from "react"

const DashProfile = ()=>{

    const [registered, setRegistered] = useState("")

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
            },
            (err)=>{
                console.log(err)
            }
        )
    }

    useEffect(()=>{
        cekRegistered()
    },[])

    return (
        <div>
            <h1 className="text-2xl mb-4">My Profile</h1>
            <div className="w-full rounded-md p-5 border border-gray-300 shadow-md flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 max-w-3xl">
                <div className="">
                    <div className="w-48 h-48 bg-gray-300 rounded-md mx-auto">
                        
                    </div>
                    <button className="block text-center p-2 w-full bg-gray-300 rounded-md mt-4 hover:bg-gray-500 hover:text-white">
                        Edit Avatar
                    </button>
                </div>
                <div className="flex-1">
                    <table>
                        <tbody>
                            <tr>
                                <td>Nama</td>
                                <td>: Ranjau</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>: Ranjau@gmail.com</td>
                            </tr>
                            <tr>
                                <td style={{minWidth: 150}}>Asal Institusi</td>
                                <td>: IPB</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h1 className={registered===""?"hidden":"text-2xl my-4 "}>Event Registered</h1>
            <div className={registered===""?"hidden":"rounded-md md:max-w-xs shadow-md p-8 flex justify-between items-center flex-col space-y-4"} style={{backgroundColor:"#92F8D9"}}>
                <div className="flex-1 flex justify-center items-center">
                    <img alt="Gamasurf" className={registered==="gamasurf"?"w-48":"hidden"} src={Gamasurf} />
                    <img alt="Nasec" className={registered==="nasec"?"w-48":"hidden"} src={Nasec} />
                    <img alt="Sent" className={registered==="sent"?"w-48":"hidden"} src={Sent} />
                </div>
                <Link className="text-center bg-white w-full py-2 font-bold text-lg rounded-lg" style={{color:"#92F8D9"}}>
                    Check
                </Link>
            </div>
        </div>
    )
}

export default DashProfile