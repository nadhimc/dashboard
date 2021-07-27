import { faChevronLeft, faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect } from "react"

const AdmPengumuman = ()=>{

    const [search, setSearch] = useState("")

    const [modalPengumuman, setModalPengumuman] = useState(false)

    const [isUpload, setIsUpload] = useState(false)

    const [userSearch, setUserSearch] = useState("")

    const [user, setUser] = useState([])

    const [modalData, setmodalData] = useState({
        type: "all",
        judul: "",
        isi: ""
    })

    const [modalUser, setModalUser] = useState([])

    const [page, setPage] = useState(1)

    const itemsInPage = 10;

    const [peserta, setPeserta] = useState([])

    const getPeserta = ()=>{
        fetch(`${process.env.REACT_APP_APIURL}/pengumuman`,{
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

    const getUser = ()=>{
        fetch(`${process.env.REACT_APP_APIURL}/users`,{
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
                    setUser(res.data)
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
        getUser()
    }, [])

    const renderTable = (item, index)=>{
        if(index >= ((page-1)*itemsInPage) && index <=(page*itemsInPage)-1){
            return(
                <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-center">{index+1}</td>
                    <td className="py-3 px-6 text-center">{item.user.email}</td>
                    <td className="py-3 px-6 text-center">{item.judul}</td>
                    <td className="py-3 px-6 text-center">{item.isi}</td>
                </tr>
            )
        }
    }

    const tambahPengumuman = () =>{
        if(!isUpload){
            setIsUpload(true)
            fetch(`${process.env.REACT_APP_APIURL}/users/pengumuman`,{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${localStorage.getItem("key")}`
                },
                body:JSON.stringify({
                    ...modalData,
                    users: modalData.type==="user"?modalUser:null
                })
            }).then(res=>res.json())
            .then(
                (res)=>{
                    console.log(res)
                    getPeserta()
                    setModalPengumuman(false)
                    setModalUser([])
                    setmodalData({type: "all",judul: "",isi: ""})
                    setIsUpload(false)
                },(err)=>{
                    console.log(err)
                    setIsUpload(false)
                }
            )
        }
    }

    const userMap = (item,index)=>{
        return(
            <div key={index} 
            onClick={()=>{setModalUser([...modalUser,{id:item.id,email:item.email}])}}
            className={index>2?"hidden":"py-2 px-3 shadow-md rounded-md hover:bg-blue-400 hover:text-white cursor-pointer"}>
                {item.email}
            </div>
        )
    }

    const userFilter = (item)=>{
        if(item.email.toLowerCase().includes(userSearch.toLowerCase()) && !modalUser.find(({id})=>{return id===parseInt(item.id)})){
            return item
        }else{
            return null
        }
    }

    const filterFunc = (item)=>{
        if(search === ""){
            return item
        }else if(
            item.user.email.toLowerCase().includes(search.toLowerCase())
            || item.judul.toLowerCase().includes(search.toLowerCase())
            || item.isi.toLowerCase().includes(search.toLowerCase())
        ){
            return item
        }
    }

    return(
        <div>

            {/* Modal */}
            <div onClick={(e)=>{if(e.target.dataset.modal==="bg"){document.body.classList.remove("overflow-y-hidden");setModalPengumuman(false)}}} data-modal="bg" style={{backgroundColor:"rgba(0,0,0,.3)"}} className={modalPengumuman?"w-full h-full min-h-screen inset-0 absolute z-50 flex justify-center items-center transition-all duration-500 transform":"w-full h-full min-h-screen inset-0 absolute z-50 flex justify-center items-center transition-all duration-500 transform scale-0 translate-x-full opacity-0"}>
                <div className="bg-white rounded-md p-5 w-full max-w-lg relative">
                    {/* Header */}
                    <button onClick={()=>{document.body.classList.remove("overflow-y-hidden");setModalPengumuman(false)}} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 absolute top-0.5 right-0.5">
                        <span className="sr-only">Close menu</span>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <div className="flex items-center">
                        <h3 className="mr-6">Tambah Pengumuman</h3>
                    </div>
                    {/* Body */}
                    <div className="mt-4 flex flex-col space-y-2">
                        <div className="flex flex-col space-y-2">
                            <label>Tipe</label>
                            <select value={modalData.type} onChange={(e)=>{
                                if(e.target.value==="user"){
                                    setmodalData({...modalData,type:e.target.value})
                                    setModalUser([])
                                }else{
                                    setmodalData({...modalData,type:e.target.value})
                                }
                            }} className="border-2 border-blue-400 px-3 py-3 bg-white rounded text-sm shadow-md focus:outline-none focus:ring ease-linear transition-all duration-150">
                                <option value="all">Semua</option>
                                <option value="nasec">Nasec</option>
                                <option value="gamasurf">Gamasurf</option>
                                <option value="sent">Sent</option>
                                <option value="user">Users</option>
                            </select>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label>Judul</label>
                            <input placeholder="Judul" value={modalData.judul} onChange={(e)=>{setmodalData({...modalData,judul:e.target.value})}} className="border-2 border-blue-400 px-3 py-3 bg-white rounded text-sm shadow-md focus:outline-none focus:ring ease-linear transition-all duration-150" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label>Isi</label>
                            <input placeholder="isi pengumuman" value={modalData.isi} onChange={(e)=>{setmodalData({...modalData,isi:e.target.value})}} className="border-2 border-blue-400 px-3 py-3 bg-white rounded text-sm shadow-md focus:outline-none focus:ring ease-linear transition-all duration-150" />
                        </div>
                        <div className={modalData.type==="user"?"flex flex-col space-y-2":"hidden"}>
                            <label className={modalUser.length>0?"":"hidden"}>Users</label>
                            <div className="flex flex-wrap">
                                {modalUser.map((item,index)=>{return(<span key={index} onClick={()=>{setModalUser(modalUser.filter((filt)=>{if(filt.id!==item.id){return(filt)}else{return null}}))}} className="cursor-pointer p-2 bg-green-300 rounded-md m-1">{item.email}</span>)})}
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label>Email</label>
                                <input placeholder="Cari Email" value={userSearch} onChange={(e)=>{setUserSearch(e.target.value)}} className="border-2 border-blue-400 px-3 py-3 bg-white rounded text-sm shadow-md focus:outline-none focus:ring ease-linear transition-all duration-150" />
                                <div className="flex flex-col space-y-2">
                                    {user.filter(userFilter).map(userMap)}
                                </div>
                            </div>                 
                        </div>
                        <div className="pt-6">
                            <button onClick={tambahPengumuman} className="bg-blue-600 rounded-md py-2 w-full text-white">
                                {isUpload?"Uploading":"Submit"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>



            <h1 className="text-2xl mb-4">Pengumuman</h1>
            <div className="flex justify-between mb-3 flex-col md:flex-row space-y-5 md:space-y-0">
                <button onClick={()=>{document.body.classList.add("overflow-y-hidden");setModalPengumuman(true)}} className="rounded-md px-4 py-2 bg-blue-500 text-sm text-white font-bold hover:bg-blue-600">Tambah Pengumuman</button>
                <input value={search} onChange={(e)=>{setPage(1);setSearch(e.target.value)}} type="text" placeholder="Search..." className="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150" />
            </div>
            <div className="bg-white rounded my-6 max-w-100 overflow-x-auto">
                <table className="min-w-max w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-center">No</th>
                            <th className="py-3 px-6 text-center">Email</th>
                            <th className="py-3 px-6 text-center">Judul</th>
                            <th className="py-3 px-6 text-center">Isi</th>
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

export default AdmPengumuman