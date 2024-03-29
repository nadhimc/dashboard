import Nasec from "../../../Images/nasec2022.png"
import Gamasurf from "../../../Images/gamasurf2022.png"
import Sent from "../../../Images/sent.svg"
import { Link } from "react-router-dom"

const DashEvents = ()=>{

    return (
        <>
            <h1 className="text-2xl mb-4">Events</h1>
            <div className="flex md:space-x-6 flex-col md:flex-row space-y-6 md:space-y-0">
                <div className="rounded-md shadow-md p-8 flex justify-between items-center flex-col space-y-4" style={{backgroundColor:"#92F8D9"}}>
                    <div className="flex-1 flex justify-center items-center">
                        <img alt="Nasec" className="w-48" src={Nasec} />
                    </div>
                    <Link to="/dashboard/nasec" className="text-center bg-white w-full py-2 font-bold text-lg rounded-lg" style={{color:"#92F8D9"}}>
                        See
                    </Link>
                </div>
                <div className="rounded-md shadow-md p-8 flex justify-between items-center flex-col space-y-4" style={{backgroundColor:"#4DDBEB"}}>
                    <div className="flex-1 flex justify-center items-center">
                        <img alt="Gamasurf" className="w-48" src={Gamasurf} />
                    </div>
                    <Link to="/dashboard/gamasurf" className="text-center bg-white w-full py-2 font-bold text-lg rounded-lg" style={{color:"#4DDBEB"}}>
                        See
                    </Link>
                </div>
                <div className="rounded-md shadow-md p-8 flex justify-between items-center flex-col space-y-4" style={{backgroundColor:"#F5DF7E"}}>
                    <div className="flex-1 flex justify-center items-center"> 
                        <img alt="Sent" className="w-48" src={Sent} />
                    </div>
                    <Link to="/dashboard/sent" className="text-center bg-white w-full py-2 font-bold text-lg rounded-lg" style={{color:"#F5DF7E"}}>
                        See
                    </Link>
                </div>
            </div>
        </>
    )
}

export default DashEvents