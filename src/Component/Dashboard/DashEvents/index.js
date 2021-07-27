import Nasec from "../../../Images/nasec.svg"
import Gamasurf from "../../../Images/gamasurf.svg"
import Sent from "../../../Images/sent.svg"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const DashEvents = ()=>{

    const [isRegistered, setIsRegistered] = useState(true)
    const [registerOn, setRegisterOn] = useState("Gamasurf")
    

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
                    if(res.data!==false){
                        setIsRegistered(true)
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
        <>
            <h1 className="text-2xl mb-4">Events</h1>
            <div className={isRegistered?"":"hidden"}>
                <div className="rounded-md shadow-md p-8 flex justify-between items-center flex-col space-y-4" style={{backgroundColor:"#92F8D9"}}>
                    <div className="flex-1 flex justify-center items-center">
                        <img alt={registerOn} className="w-48" src={registerOn==="Nasec"?Nasec:registerOn==="Gamasurf"?Gamasurf:Sent} />
                    </div>
                    <Link className="text-center bg-white w-full py-2 font-bold text-lg rounded-lg" style={{color:"#92F8D9"}}>
                        Check
                    </Link>
                </div>
            </div>
            <div className={isRegistered?"hidden":"flex md:space-x-6 flex-col md:flex-row space-y-6 md:space-y-0"}>
                <div className="rounded-md shadow-md p-8 flex justify-between items-center flex-col space-y-4" style={{backgroundColor:"#92F8D9"}}>
                    <div className="flex-1 flex justify-center items-center">
                        <img alt="Nasec" className="w-48" src={Nasec} />
                    </div>
                    <Link className="text-center bg-white w-full py-2 font-bold text-lg rounded-lg" style={{color:"#92F8D9"}}>
                        Join
                    </Link>
                </div>
                <div className="rounded-md shadow-md p-8 flex justify-between items-center flex-col space-y-4" style={{backgroundColor:"#F5DF7E"}}>
                    <div className="flex-1 flex justify-center items-center">
                        <img alt="Gamasurf" className="w-48" src={Gamasurf} />
                    </div>
                    <Link to="/gamasurf" className="text-center bg-white w-full py-2 font-bold text-lg rounded-lg" style={{color:"#F5DF7E"}}>
                        Join
                    </Link>
                </div>
                <div className="rounded-md shadow-md p-8 flex justify-between items-center flex-col space-y-4" style={{backgroundColor:"#4DDBEB"}}>
                    <div className="flex-1 flex justify-center items-center"> 
                        <img alt="Sent" className="w-48" src={Sent} />
                    </div>
                    <Link to="/sent" className="text-center bg-white w-full py-2 font-bold text-lg rounded-lg" style={{color:"#4DDBEB"}}>
                        Join
                    </Link>
                </div>
            </div>
        </>
    )
}

export default DashEvents