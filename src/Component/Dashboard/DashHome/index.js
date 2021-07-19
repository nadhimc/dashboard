import Nasec from "../../../Images/nasec.svg"
import Gamasurf from "../../../Images/gamasurf.svg"
import Sent from "../../../Images/sent.svg"
import DashEvents from "../DashEvents"

const DashHome = ()=>{
    return (
        <div>
            <h1 className="text-2xl mb-4">Dashboard</h1>
            <div style={{backgroundColor:"#C4C4C4"}} className="rounded-lg shadow-md p-4 w-full h-48 max-w-3xl mb-8">
                <p className="text-lg">Pengumuman</p>
            </div>
            <DashEvents />
        </div>
    )
}

export default DashHome