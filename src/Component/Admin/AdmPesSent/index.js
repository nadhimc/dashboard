import { faChevronLeft, faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect } from "react"

const AdmPesSent = ()=>{

    const [search, setSearch] = useState("")

    const [page, setPage] = useState(1)

    const itemsInPage = 10;

    const [peserta, setPeserta] = useState([])

    const [modalImg, setModalImg] = useState("")

    const getPeserta = ()=>{
        fetch(`${process.env.REACT_APP_APIURL}/sent`,{
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
                    setPeserta(res.data)

                }
            },
            (err)=>{
                console.log(err)
            }
        )
    }

    useEffect(() => {
        console.log("get peserta")
        getPeserta()
    }, [])

    const renderTable = (item, index)=>{
        if(index >= ((page-1)*itemsInPage) && index <=(page*itemsInPage)-1){
            return(
                <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-center">{index+1}</td>
                    <td className="py-3 px-6 text-center">{item.nama_lengkap}</td>
                    <td className="py-3 px-6 text-center">{item.email}</td>
                    <td className="py-3 px-6 text-center">{item.asal_institusi}</td>
                    <td className="py-3 px-6 text-center">
                        <img 
                        className="cursor-pointer max-w-full w-24"
                        onClick={() => setModalImg(`https://sensation.smartsoft.co.id/sensation/storage/app/peserta/bukti/${item.bukti}`)}
                        src={`https://sensation.smartsoft.co.id/sensation/storage/app/peserta/bukti/${item.bukti}`} 
                        />
                    </td>
                    <td className="py-3 px-6 text-center">{item.status}</td>
                    <td className="py-3 px-6 text-center">{item.info}</td>
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
            || item.asal_institusi.toLowerCase().includes(search.toLowerCase())
            || item.status.toLowerCase().includes(search.toLowerCase())
            || item.info.toLowerCase().includes(search.toLowerCase())
        ){
            return item
        }
    }

    return(
        <div>
            <h1 className="text-2xl mb-4">Peserta Sent</h1>
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
                            <th className="py-3 px-6 text-center">Bukti</th>
                            <th className="py-3 px-6 text-center">Status</th>
                            <th className="py-3 px-6 text-center">Info</th>
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

            {/* IMAGE MODAL */}
            <div onClick={(e)=>{if(e.target.dataset.modal==="img"){setModalImg("")}}} data-modal="img" style={{backgroundColor:"rgba(0,0,0,.3)"}} className={!modalImg?"hidden":"absolute w-full h-full z-50 inset-0 min-w-screen min-h-screen flex justify-center items-center"}>
                <div className="relative">
                    <button data-modal="img" onClick={()=>{setModalImg("")}} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 -top-0.5 right-0.5 -translate-y-full transform translate-x-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 absolute">
                        <span className="sr-only">Close menu</span>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <img alt="" style={{maxWidth:"80vw", maxHeight:"80vh"}} src={modalImg!==""?modalImg:null} />
                </div>
            </div>
        </div>
    )
}

export default AdmPesSent