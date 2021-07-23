import DashEvents from "../DashEvents"
import { useState } from "react"

const DashHome = ()=>{

    const [pengumuman, setPengumuman] = useState([])
    const [pengumumanLoading, setPengumumanLoading] = useState(true)

    function updatePengumuman(){
        fetch(`${process.env.REACT_APP_APIURL}/users/${localStorage.getItem("id")}/pengumuman`,{
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
                    setPengumumanLoading(false)
                }else{
                    setPengumuman(res.data)
                    setPengumumanLoading(false)
                }
            },
            (err)=>{
                console.log(err)
                setPengumumanLoading(false)
            }
        )
    }
    updatePengumuman()

    const renderPengumuman = (item)=>{
        return(
            <div className="bg-white rounded-md p-4">
                <p className="text-lg">{item.judul}</p>
                <p className="text-xs text-gray-400">12/07/2021</p>
                <p className="text-sm mt-2">{item.isi}</p>
            </div>
        )
    }


    return (
        <div>
            <h1 className="text-2xl mb-4">Dashboard</h1>
            <div style={{backgroundColor:"#C4C4C4"}} className="rounded-lg shadow-md p-4 w-full max-w-3xl mb-8">
                <p className="text-lg">Pengumuman</p>
                <div className={pengumumanLoading?"mt-4 flex flex-col space-y-3":"hidden"}>
                    <div className="bg-white rounded-md p-4">
                        <p className="animate-pulse text-lg bg-gray-300 text-gray-300 w-1/3">Ini Title</p>
                        <span className="animate-pulse text-xs text-gray-300 bg-gray-300">12/07/2021</span>
                        <p className="animate-pulse text-sm mt-2 w-full h-12 bg-gray-300"></p>
                    </div>
                </div>
                <div className={pengumumanLoading?"hidden":"mt-4 flex flex-col space-y-3"}>
                    {pengumuman.map(renderPengumuman)}
                </div>
            </div>
            <DashEvents />
        </div>
    )
}

export default DashHome