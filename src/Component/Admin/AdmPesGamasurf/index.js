import { faChevronLeft, faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect } from "react"

const AdmPesGamasurf = ()=>{

    const [search, setSearch] = useState("")

    const [page, setPage] = useState(1)

    const [modalImg, setModalImg] = useState("")
    
    const [modal, setModal] = useState(false)

    const [modalData, setModalData] = useState({      
        "id":0,
        "user_id":0,
        "nama_lengkap":"",
        "nama_panggilan":"",
        "email":"",
        "asal_univ":"",
        "asal_daerah":"",
        "no_wa":"",
        "motivasi":"",
        "ekspetasi":"",
        "pengalaman":"",
        "komitmen":"",
        "info":"",
        "twibbon":"",
        "orisinalitas":"",
        "ktm":"",
        "ide":"",
        "created_at":"2021-07-26T12:27:47.000000Z",
        "updated_at":"2021-07-26T12:34:50.000000Z"
    })

    const itemsInPage = 10;

    const [peserta, setPeserta] = useState([])

    const getPeserta = ()=>{
        fetch(`${process.env.REACT_APP_APIURL}/gamasurf`,{
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

    const detailPeserta = (det)=>{
        document.body.classList.add("overflow-y-auto");
        console.log(peserta.find(({id})=>{return id===parseInt(det)}))
        setModalData(peserta.find(({id})=>{return id===parseInt(det)}))
        setModal(true)
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
                    <td className="py-3 px-6 text-center">{item.no_wa}</td>
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
            || item.no_wa.toLowerCase().includes(search.toLowerCase())
        ){
            return item
        }
    }

    return(
        <div>

            {/* Modal */}
            <div onClick={(e)=>{if(e.target.dataset.modal==="bg"){document.body.classList.remove("overflow-y-auto");setModal(false)}}} data-modal="bg" style={{backgroundColor:"rgba(0,0,0,.3)"}} className={modal?"w-full overflow-y-auto h-screen inset-0 absolute z-50 flex justify-center items-center transition-all duration-500 transform":"w-full h-screen inset-0 absolute z-50 flex justify-center items-center transition-all duration-500 transform scale-0 translate-x-full opacity-0"}>
                <div className="bg-white rounded-md p-5 w-11/12 max-w-2xl relative" style={{maxHeight:"90vh"}}>
                    {/* Header */}
                    <button onClick={()=>{document.body.classList.remove("overflow-y-auto");setModal(false)}} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 absolute top-0.5 right-0.5">
                        <span className="sr-only">Close menu</span>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <div className="flex items-center">
                        <h3 className="text-center flex-1 text-lg">Detail</h3>
                    </div>
                    {/* Body */}
                    <div style={{maxHeight:"80vh"}} className="overflow-y-auto py-2">
                        <table className="min-w-max w-full table-auto">
                            <tbody>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6">Nama Lengkap</td>
                                    <td className="py-3 px-6">: {modalData.nama_lengkap}</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6">Nama Panggilan</td>
                                    <td className="py-3 px-6">: {modalData.nama_panggilan}</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6">Email</td>
                                    <td className="py-3 px-6">: {modalData.email}</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6">Asal Universitas</td>
                                    <td className="py-3 px-6">: {modalData.asal_univ}</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6">Asal Daerah</td>
                                    <td className="py-3 px-6">: {modalData.asal_daerah}</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6">No Handphone</td>
                                    <td className="py-3 px-6">: {modalData.no_wa}</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6">Motivasi</td>
                                    <td className="py-3 px-6">: {modalData.motivasi}</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6">Ekspetasi</td>
                                    <td className="py-3 px-6">: {modalData.ekspetasi}</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6">pengalaman</td>
                                    <td className="py-3 px-6">: {modalData.pengalaman}</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6">Info tentang Gamasurf</td>
                                    <td className="py-3 px-6">: {modalData.info}</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6">KTM</td>
                                    <td className="py-3 px-6">
                                        <img onClick={()=>{setModalImg(modalData.ktm)}} className="max-w-full w-24 cursor-pointer" alt="ktm" src={modalData.ktm} />
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6">Twibbon</td>
                                    <td className="py-3 px-6">
                                        <img onClick={()=>{setModalImg(modalData.twibbon)}} className="max-w-full w-24 cursor-pointer" alt="twibbon" src={modalData.twibbon} />
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6">File ide</td>
                                    <td className="py-3 px-6">
                                        <a className="hover:text-blue-400" href={modalData.ide}>
                                            Klik disini
                                        </a>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6">File orisinalitas</td>
                                    <td className="py-3 px-6">
                                        <a className="hover:text-blue-400" href={modalData.orisinalitas}>
                                            Klik disini
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Image Modal */}

            <div onClick={(e)=>{if(e.target.dataset.modal==="img"){setModalImg("")}}} data-modal="img" style={{backgroundColor:"rgba(0,0,0,.3)"}} className={!modalImg?"hidden":"fixed w-full h-full z-50 inset-0 min-w-screen min-h-screen flex justify-center items-center"}>
                <div className="relative">
                    <button data-modal="img" onClick={()=>{setModalImg("")}} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 -top-0.5 right-0.5 -translate-y-full transform translate-x-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 absolute">
                        <span className="sr-only">Close menu</span>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <img alt="" style={{maxWidth:"80vw", maxHeight:"80vh"}} src={modalImg!==""?modalImg:null} />
                </div>
            </div>


            <h1 className="text-2xl mb-4">Peserta Gamasurf</h1>
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
                            <th className="py-3 px-6 text-center">No Wa</th>
                            <th className="py-3 px-6 text-center"></th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {peserta.filter(filterFunc).map(renderTable)}
                        <tr className={peserta.filter(filterFunc).length<=0?"w-full":"hidden"}>
                            <td colSpan="7" className="py-5 text-center bg-gray-100 font-bold">
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

export default AdmPesGamasurf