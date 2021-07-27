import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect } from "react"

const AdmPesNasec = ()=>{

    const [search, setSearch] = useState("")

    const [page, setPage] = useState(1)

    const itemsInPage = 2;

    const [peserta, setPeserta] = useState([])

    const getPeserta = ()=>{
        // fetch(`${process.env.REACT_APP_APIURL}/gamasurf`,{
        //     headers:{
        //         'Content-Type': 'application/json',
        //         'Authorization' : `Bearer ${localStorage.getItem("key")}`
        //     }
        // })
        // .then(res=>res.json())
        // .then(
        //     (res)=>{
        //         console.log(res)
        //         if(res.meta.code!==200){
        //             console.log("error")
        //         }else{
        //             setPeserta(res.data)

        //         }
        //     },
        //     (err)=>{
        //         console.log(err)
        //     }
        // )
    }

    useEffect(() => {
        console.log("get peserta")
        getPeserta()
    }, [])

    const detailPeserta = (det)=>{
        console.log(peserta.find(({id})=>{return id===parseInt(det)}))
    }

    const renderTable = (item, index)=>{
        if(index >= ((page-1)*itemsInPage) && index <=(page*itemsInPage)-1){
            return(
                <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-center">{index+1}</td>
                    <td className="py-3 px-6 text-center">{item.nama_lengkap}</td>
                    <td className="py-3 px-6 text-center">{item.email}</td>
                    <td className="py-3 px-6 text-center">{item.asal_univ}</td>
                    <td className="py-3 px-6 text-center">{item.asal_daerah}</td>
                    <td className="py-3 px-6 text-center">
                        <button value={item.id} onClick={(item)=>detailPeserta(item.target.value)} className="rounded-md bg-blue-500 hover:bg-blue-300 px-3 py-2 text-white">
                            Detail
                        </button>
                    </td>
                </tr>
            )
        }
    }

    const filterFunc = (item)=>{
        if(search === ""){
            return item
        }else if(
            item.nama_lengkap.toLowerCase().includes(search.toLowerCase())
            || item.email.toLowerCase().includes(search.toLowerCase())
            || item.asal_univ.toLowerCase().includes(search.toLowerCase())
            || item.asal_daerah.toLowerCase().includes(search.toLowerCase())
        ){
            return item
        }
    }

    return(
        <div>
            <h1 className="text-2xl mb-4">Peserta Nasec</h1>
            <div className="flex justify-end mb-3">
                <input value={search} onChange={(e)=>{setPage(1);setSearch(e.target.value)}} type="text" placeholder="Search..." className="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150" />
            </div>
            <div className="bg-white rounded my-6 max-w-100 overflow-x-auto">
                <table className="min-w-max w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-center">No</th>
                            <th className="py-3 px-6 text-center">Nama</th>
                            <th className="py-3 px-6 text-center">Email</th>
                            <th className="py-3 px-6 text-center">Universitas</th>
                            <th className="py-3 px-6 text-center">Asal Daerah</th>
                            <th className="py-3 px-6 text-center"></th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {peserta.filter(filterFunc).map(renderTable)}
                        <tr className={peserta.filter(filterFunc).length<=0?"w-full":"hidden"}>
                            <td colSpan="6" className="py-5 text-center bg-gray-100 font-bold">
                                Tidak ada data
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={Math.ceil(peserta.filter(filterFunc).length/itemsInPage)<=1?"hidden":"flex justify-end space-x-2"}>
                <button className={page<=1?"hidden":"py-2 rounded-md bg-blue-300 px-4 hover:bg-green-300"} onClick={()=>{if(page>1){setPage(page-1)}}}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button onClick={()=>{if(page-3>=1){setPage(page-3)}}} className={page<(Math.ceil(peserta.filter(filterFunc).length/itemsInPage))||page-3<1?"hidden":"py-2 rounded-md bg-blue-300 px-4 hover:bg-green-300"}>
                    {page-3}
                </button>
                <button onClick={()=>{if(page-2>=1){setPage(page-2)}}} className={page<(Math.ceil(peserta.filter(filterFunc).length/itemsInPage)-1)||page-2<1?"hidden":"py-2 rounded-md bg-blue-300 px-4 hover:bg-green-300"}>
                    {page-2}
                </button>
                <button onClick={()=>{if(page-1>=1){setPage(page-1)}}} className={page-1<1?"hidden":"py-2 rounded-md bg-blue-300 px-4 hover:bg-green-300"}>
                    {page-1}
                </button>
                <button className="py-2 rounded-md bg-green-300 px-4">
                    {page}
                </button>
                <button onClick={()=>{if(page+1<=Math.ceil(peserta.filter(filterFunc).length/itemsInPage)){setPage(page+1)}}} className={page+1>Math.ceil(peserta.filter(filterFunc).length/itemsInPage)?"hidden":"py-2 rounded-md bg-blue-300 hover:bg-green-300 px-4"}>
                    {page+1}
                </button>
                <button onClick={()=>{if(page+2<=Math.ceil(peserta.filter(filterFunc).length/itemsInPage)){setPage(page+2)}}}className={page+2>Math.ceil(peserta.filter(filterFunc).length/itemsInPage)?"hidden":"py-2 rounded-md bg-blue-300 hover:bg-green-300 px-4"}>
                    {page+2}
                </button>
                <div className={page+1>=(Math.ceil(peserta.filter(filterFunc).length/itemsInPage)-2)?"hidden":"border-b-4 border-0 border-dotted w-8 border-black opacity-40"} />
                <button onClick={()=>{setPage(Math.ceil(peserta.filter(filterFunc).length/itemsInPage))}} className={page>=(Math.ceil(peserta.filter(filterFunc).length/itemsInPage)-2)?"hidden":"py-2 rounded-md bg-blue-300 hover:bg-green-300 px-4"}>
                    {Math.ceil(peserta.filter(filterFunc).length/itemsInPage)}
                </button>
                <button className={page>=(Math.ceil(peserta.filter(filterFunc).length/itemsInPage))?"hidden":"py-2 rounded-md bg-blue-300 px-4 hover:bg-green-300"} onClick={()=>{if(page<Math.ceil(peserta.length/itemsInPage)){setPage(page+1)}}}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    )
}

export default AdmPesNasec