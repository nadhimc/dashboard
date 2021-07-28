import { faChevronLeft, faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect } from "react"

const AdmPesNasec = ()=>{

    const [search, setSearch] = useState("")

    const [modal, setModal] = useState(false)

    const [modalImg, setModalImg] = useState("")

    const [modalData, setModalData] = useState(
        {"id":1,"user_id":18,"nama_team":"Team Tutur","nama_sekolah":"MAN Insan Cendekia Serpong","alamat_sekolah":"Serpong Jaya","nama_pembimbing":"Pak Asep","no_pembimbing":"081224212953","komitmen":"Sangat Berkomitmen","info":"instagram","is_paid":0,"created_at":"2021-07-27T12:11:26.000000Z","updated_at":"2021-07-27T12:11:26.000000Z","member":[{"id":1,"team_id":1,"nama":"Rizkal","jenis_kelamin":"Laki-Laki","kelas":"10","email":"rizkal@gmail.com","no":"082424112212","kartu_pelajar":"peserta/ktm/1_1.jpg","twibbon":"peserta/twibbon/1_1.jpg","is_leader":1,"created_at":"2021-07-27T12:11:26.000000Z","updated_at":"2021-07-27T12:11:26.000000Z"},{"id":2,"team_id":1,"nama":"Ruka","jenis_kelamin":"Perempuan","kelas":"12","email":"ruka@gmail.com","no":"0812312312","kartu_pelajar":"peserta/ktm/1_2.jpg","twibbon":"peserta/twibbon/1_2.jpg","is_leader":0,"created_at":"2021-07-27T12:11:29.000000Z","updated_at":"2021-07-27T12:11:29.000000Z"},{"id":3,"team_id":1,"nama":"Mizuhara","jenis_kelamin":"Perempuan","kelas":"11","email":"mizuzu@gmail.com","no":"081232124124","kartu_pelajar":"peserta/ktm/1_3.jpg","twibbon":"peserta/twibbon/1_3.jpg","is_leader":0,"created_at":"2021-07-27T12:11:29.000000Z","updated_at":"2021-07-27T12:11:29.000000Z"}]}
    )

    const [page, setPage] = useState(1)

    const itemsInPage = 10;

    const [peserta, setPeserta] = useState([])

    const getPeserta = ()=>{
        fetch(`${process.env.REACT_APP_APIURL}/nasec`,{
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
        setModalData(peserta.find(({id})=>{return id===parseInt(det)}))
        setModal(true)
    }

    const renderTable = (item, index)=>{
        if(index >= ((page-1)*itemsInPage) && index <=(page*itemsInPage)-1){
            return(
                <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-center">{index+1}</td>
                    <td className="py-3 px-6 text-center">{item.nama_team}</td>
                    <td className="py-3 px-6 text-center">{item.nama_sekolah}</td>
                    <td className="py-3 px-6 text-center">{item.nama_pembimbing}</td>
                    <td className="py-3 px-6 text-center">{item.no_pembimbing}</td>
                    <td className={parseInt(item.member[0].is_leader)===1?"py-3 px-6 text-center font-bold":"py-3 px-6 text-center"}>{item.member[0].nama} ({item.member[0].jenis_kelamin.toLowerCase()==="laki-laki"?"L":"P"})</td>
                    <td className="py-3 px-6 text-center">{item.member[0].email}</td>
                    <td className="py-3 px-6 text-center">{item.member[0].kelas}</td>
                    <td className="py-3 px-6 text-center">{item.member[0].no}</td>
                    <td className={parseInt(item.member[1].is_leader)===1?"py-3 px-6 text-center font-bold":"py-3 px-6 text-center"}>{item.member[1].nama} ({item.member[1].jenis_kelamin.toLowerCase()==="laki-laki"?"L":"P"})</td>
                    <td className="py-3 px-6 text-center">{item.member[1].email}</td>
                    <td className="py-3 px-6 text-center">{item.member[1].kelas}</td>
                    <td className="py-3 px-6 text-center">{item.member[1].no}</td>
                    <td className={parseInt(item.member[2].is_leader)===1?"py-3 px-6 text-center font-bold":"py-3 px-6 text-center"}>{item.member[2].nama} ({item.member[2].jenis_kelamin.toLowerCase()==="laki-laki"?"L":"P"})</td>
                    <td className="py-3 px-6 text-center">{item.member[2].email}</td>
                    <td className="py-3 px-6 text-center">{item.member[2].kelas}</td>
                    <td className="py-3 px-6 text-center">{item.member[2].no}</td>
                    <td className="py-3 px-6 text-center"></td>
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
            item.nama_team.toLowerCase().includes(search.toLowerCase())
            || item.nama_sekolah.toLowerCase().includes(search.toLowerCase())
            || item.nama_pembimbing.toLowerCase().includes(search.toLowerCase())
            || item.no_pembimbing.toLowerCase().includes(search.toLowerCase())
            || item.member[0].nama.toLowerCase().includes(search.toLowerCase())
            || item.member[0].email.toLowerCase().includes(search.toLowerCase())
            || item.member[0].kelas.toLowerCase().includes(search.toLowerCase())
            || item.member[0].no.toLowerCase().includes(search.toLowerCase())
            || item.member[1].nama.toLowerCase().includes(search.toLowerCase())
            || item.member[1].email.toLowerCase().includes(search.toLowerCase())
            || item.member[1].kelas.toLowerCase().includes(search.toLowerCase())
            || item.member[1].no.toLowerCase().includes(search.toLowerCase())
            || item.member[2].nama.toLowerCase().includes(search.toLowerCase())
            || item.member[2].email.toLowerCase().includes(search.toLowerCase())
            || item.member[2].kelas.toLowerCase().includes(search.toLowerCase())
            || item.member[2].no.toLowerCase().includes(search.toLowerCase())
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
                                    <td className="py-3 px-6">Nama Team</td>
                                    <td className="py-3 px-6">: {modalData.nama_team}</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6">Nama Sekolah</td>
                                    <td className="py-3 px-6">: {modalData.nama_sekolah}</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6">Alamat Sekolah</td>
                                    <td className="py-3 px-6">: {modalData.alamat_sekolah}</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6">Nama Pembimbing</td>
                                    <td className="py-3 px-6">: {modalData.nama_pembimbing}</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6">No Pembimbing</td>
                                    <td className="py-3 px-6">: {modalData.no_pembimbing}</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6">Komitmen</td>
                                    <td className="py-3 px-6">: {modalData.komitmen}</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6">Info Nasec</td>
                                    <td className="py-3 px-6">: {modalData.info}</td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6">Member 1</td>
                                    <td className="py-3 px-6">
                                        <p className={parseInt(modalData.member[0].is_leader)===1?"font-bold":"hidden"}>Ketua</p>
                                        <p>{modalData.member[0].nama}</p>
                                        <p>{modalData.member[0].email}</p>
                                        <p>{modalData.member[0].jenis_kelamin}</p>
                                        <p>Kelas {modalData.member[0].kelas}</p>
                                        <p>{modalData.member[0].no}</p>
                                        <p className="mb-1">
                                        <img onClick={()=>{setModalImg(`https://sensation.smartsoft.co.id/sensation/storage/app/`+modalData.member[0].kartu_pelajar)}} className="max-w-full w-24 cursor-pointer" alt="ktm" src={`https://sensation.smartsoft.co.id/sensation/storage/app/`+modalData.member[0].kartu_pelajar} />
                                        </p>
                                        <p>
                                        <img onClick={()=>{setModalImg(`https://sensation.smartsoft.co.id/sensation/storage/app/`+modalData.member[0].twibbon)}} className="max-w-full w-24 cursor-pointer" alt="ktm" src={`https://sensation.smartsoft.co.id/sensation/storage/app/`+modalData.member[0].twibbon} />
                                        </p>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6">Member 2</td>
                                    <td className="py-3 px-6">
                                        <p className={parseInt(modalData.member[1].is_leader)===1?"font-bold":"hidden"}>Ketua</p>
                                        <p>{modalData.member[1].nama}</p>
                                        <p>{modalData.member[1].email}</p>
                                        <p>{modalData.member[1].jenis_kelamin}</p>
                                        <p>Kelas {modalData.member[1].kelas}</p>
                                        <p>{modalData.member[1].no}</p>
                                        <p className="mb-1">
                                        <img onClick={()=>{setModalImg(`https://sensation.smartsoft.co.id/sensation/storage/app/`+modalData.member[1].kartu_pelajar)}} className="max-w-full w-24 cursor-pointer" alt="ktm" src={`https://sensation.smartsoft.co.id/sensation/storage/app/`+modalData.member[1].kartu_pelajar} />
                                        </p>
                                        <p>
                                        <img onClick={()=>{setModalImg(`https://sensation.smartsoft.co.id/sensation/storage/app/`+modalData.member[1].twibbon)}} className="max-w-full w-24 cursor-pointer" alt="ktm" src={`https://sensation.smartsoft.co.id/sensation/storage/app/`+modalData.member[1].twibbon} />
                                        </p>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6">Member 3</td>
                                    <td className="py-3 px-6">
                                        <p className={parseInt(modalData.member[2].is_leader)===1?"font-bold":"hidden"}>Ketua</p>
                                        <p>{modalData.member[2].nama}</p>
                                        <p>{modalData.member[2].email}</p>
                                        <p>{modalData.member[2].jenis_kelamin}</p>
                                        <p>Kelas {modalData.member[2].kelas}</p>
                                        <p>{modalData.member[2].no}</p>
                                        <p className="mb-1">
                                        <img onClick={()=>{setModalImg(`https://sensation.smartsoft.co.id/sensation/storage/app/`+modalData.member[2].kartu_pelajar)}} className="max-w-full w-24 cursor-pointer" alt="ktm" src={`https://sensation.smartsoft.co.id/sensation/storage/app/`+modalData.member[2].kartu_pelajar} />
                                        </p>
                                        <p>
                                        <img onClick={()=>{setModalImg(`https://sensation.smartsoft.co.id/sensation/storage/app/`+modalData.member[2].twibbon)}} className="max-w-full w-24 cursor-pointer" alt="ktm" src={`https://sensation.smartsoft.co.id/sensation/storage/app/`+modalData.member[2].twibbon} />
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Image Modal */}

            <div onClick={(e)=>{if(e.target.dataset.modal==="img"){setModalImg("")}}} data-modal="img" style={{backgroundColor:"rgba(0,0,0,.3)"}} className={!modalImg?"hidden":"absolute w-full h-full z-50 inset-0 min-w-screen min-h-screen flex justify-center items-center"}>
                <div className="relative">
                    <button data-modal="img" onClick={()=>{setModalImg("")}} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 -top-0.5 right-0.5 -translate-y-full transform translate-x-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 absolute">
                        <span className="sr-only">Close menu</span>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <img style={{maxWidth:"80vw", maxHeight:"80vh"}} src={modalImg!==""?modalImg:null} />
                </div>
            </div>


            <h1 className="text-2xl mb-4">Peserta Nasec</h1>
            <div className="flex justify-end mb-3">
                <input value={search} onChange={(e)=>{setPage(1);setSearch(e.target.value)}} type="text" placeholder="Search..." className="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150" />
            </div>
            <div className="bg-white rounded my-6 max-w-100 overflow-x-auto">
                <table className="min-w-max w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-center">No</th>
                            <th className="py-3 px-6 text-center">Team</th>
                            <th className="py-3 px-6 text-center">Sekolah</th>
                            <th className="py-3 px-6 text-center">Pembimbing</th>
                            <th className="py-3 px-6 text-center">No Pembimbing</th>
                            <th className="py-3 px-6 text-center">Nama 1</th>
                            <th className="py-3 px-6 text-center">Email 1</th>
                            <th className="py-3 px-6 text-center">Kelas 1</th>
                            <th className="py-3 px-6 text-center">No 1</th>
                            <th className="py-3 px-6 text-center">Nama 2</th>
                            <th className="py-3 px-6 text-center">Email 2</th>
                            <th className="py-3 px-6 text-center">Kelas 2</th>
                            <th className="py-3 px-6 text-center">No 2</th>
                            <th className="py-3 px-6 text-center">Nama 3</th>
                            <th className="py-3 px-6 text-center">Email 3</th>
                            <th className="py-3 px-6 text-center">Kelas 3</th>
                            <th className="py-3 px-6 text-center">No 3</th>
                            <th className="py-3 px-6 text-center">Paid</th>
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