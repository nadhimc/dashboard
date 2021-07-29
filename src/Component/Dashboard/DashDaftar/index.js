import { faChevronLeft, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect } from "react"
import { Link, Redirect } from "react-router-dom"

const DashDaftar = () => {

    const [isLoading, setIsLoading] = useState(true)

    const [selesai, setSelesai] = useState(false)

    const [modalImg, setModalImg] = useState("")

    const [event, setEvent] = useState("")

    // const [gamasurf, setGamasurf] = useState({      
    const gamasurf = {      
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
    }
    // })

    // const [nasec, setNasec] = useState(
        const nasec = {"id":1,"user_id":18,"nama_team":"Team Tutur","nama_sekolah":"MAN Insan Cendekia Serpong","alamat_sekolah":"Serpong Jaya","nama_pembimbing":"Pak Asep","no_pembimbing":"081224212953","komitmen":"Sangat Berkomitmen","info":"instagram","is_paid":0,"created_at":"2021-07-27T12:11:26.000000Z","updated_at":"2021-07-27T12:11:26.000000Z","member":[{"id":1,"team_id":1,"nama":"Rizkal","jenis_kelamin":"Laki-Laki","kelas":"10","email":"rizkal@gmail.com","no":"082424112212","kartu_pelajar":"peserta/ktm/1_1.jpg","twibbon":"peserta/twibbon/1_1.jpg","is_leader":1,"created_at":"2021-07-27T12:11:26.000000Z","updated_at":"2021-07-27T12:11:26.000000Z"},{"id":2,"team_id":1,"nama":"Ruka","jenis_kelamin":"Perempuan","kelas":"12","email":"ruka@gmail.com","no":"0812312312","kartu_pelajar":"peserta/ktm/1_2.jpg","twibbon":"peserta/twibbon/1_2.jpg","is_leader":0,"created_at":"2021-07-27T12:11:29.000000Z","updated_at":"2021-07-27T12:11:29.000000Z"},{"id":3,"team_id":1,"nama":"Mizuhara","jenis_kelamin":"Perempuan","kelas":"11","email":"mizuzu@gmail.com","no":"081232124124","kartu_pelajar":"peserta/ktm/1_3.jpg","twibbon":"peserta/twibbon/1_3.jpg","is_leader":0,"created_at":"2021-07-27T12:11:29.000000Z","updated_at":"2021-07-27T12:11:29.000000Z"}]}
    // )

    // const [sent, setSent] = useState({
    const sent ={
        nama_lengkap:"",
        email:"",
        asal_institusi:"",
        status:"",
        info:""
    }
    // })

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
                if(res.meta.code===401 || (res.meta.code===200 && res.data===false)){
                    setSelesai(true)
                    // atasi error sementara
                }else{
                    setEvent(res.data)
                    setIsLoading(false)
                }
            },
            (err)=>{
                console.log(err)
            }
        )
    }

    useEffect(() => {
        cekRegistered()
    }, [])

    const changeImg = (url)=>{
        if(url===""){
            document.body.classList.remove("overflow-y-hidden")
        }else{
            document.body.classList.add("overflow-y-hidden")
        }
        setModalImg(url)
    }

    if(selesai){
        return(
            <Redirect to="/dashboard" />
        )
    }

    return (
        <div>
            {/* Image Modal */}

            <div onClick={(e)=>{if(e.target.dataset.modal==="img"){changeImg("")}}} data-modal="img" style={{backgroundColor:"rgba(0,0,0,.3)"}} className={!modalImg?"hidden":"fixed w-full h-full z-50 inset-0 min-w-screen min-h-screen flex justify-center items-center"}>
                <div className="relative">
                    <button data-modal="img" onClick={()=>{changeImg("")}} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 -top-0.5 right-0.5 -translate-y-full transform translate-x-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 absolute">
                        <span className="sr-only">Close menu</span>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <img alt="" style={{maxWidth:"80vw", maxHeight:"80vh"}} src={modalImg!==""?modalImg:null} />
                </div>
            </div>

        <div className="flex flex-col space-y-4">
            <div className="hidden lg:flex items-center">
                <Link to="/dashboard/profile" className="hover:opacity-50">
                    <FontAwesomeIcon className="mr-2" icon={faChevronLeft} />
                    Back
                </Link>
            </div>

            {/* Loading */}
            <div className={isLoading?"":"hidden"}>
                <div className="w-full max-w-sm bg-gray-400 h-10 mx-auto rounded-md animate-pulse" />
                <div className="w-full bg-gray-400 h-96 mx-auto rounded-md animate-pulse mt-4" />
            </div>
            {/* Gamasurf */}
            <div className={event==="gamasurf"?"border rounded-md p-4":"hidden"}>
                <h1 className="text-center text-xl font-bold">Gamasurf</h1>
                <div>
                    <table className="min-w-max w-full table-auto">
                        <tbody>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">Nama Lengkap</td>
                                <td className="py-3 px-6 w-3/4">: {gamasurf.nama_lengkap}</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">Nama Panggilan</td>
                                <td className="py-3 px-6">: {gamasurf.nama_panggilan}</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">Email</td>
                                <td className="py-3 px-6">: {gamasurf.email}</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">Asal Universitas</td>
                                <td className="py-3 px-6">: {gamasurf.asal_univ}</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">Asal Daerah</td>
                                <td className="py-3 px-6">: {gamasurf.asal_daerah}</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">No Handphone</td>
                                <td className="py-3 px-6">: {gamasurf.no_wa}</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">Motivasi</td>
                                <td className="py-3 px-6">: {gamasurf.motivasi}</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">Ekspetasi</td>
                                <td className="py-3 px-6">: {gamasurf.ekspetasi}</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">pengalaman</td>
                                <td className="py-3 px-6">: {gamasurf.pengalaman}</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">Info tentang Gamasurf</td>
                                <td className="py-3 px-6">: {gamasurf.info}</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">KTM</td>
                                <td className="py-3 px-6">
                                    <img onClick={()=>{changeImg(gamasurf.ktm)}} className="max-w-full w-24 cursor-pointer" alt="ktm" src={gamasurf.ktm} />
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">Twibbon</td>
                                <td className="py-3 px-6">
                                    <img onClick={()=>{changeImg(gamasurf.twibbon)}} className="max-w-full w-24 cursor-pointer" alt="twibbon" src={gamasurf.twibbon} />
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">File ide</td>
                                <td className="py-3 px-6">
                                    <a className="hover:text-blue-400" href={gamasurf.ide}>
                                        Klik disini
                                    </a>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">File orisinalitas</td>
                                <td className="py-3 px-6">
                                    <a className="hover:text-blue-400" href={gamasurf.orisinalitas}>
                                        Klik disini
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Nasec */}
            <div className={event==="nasec"?"border rounded-md p-4":"hidden"}>
                <h1 className="text-center text-xl font-bold">Nasec</h1>
                <div>
                    <table className="min-w-max w-full table-auto">
                        <tbody>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">Nama Team</td>
                                <td className="py-3 px-6 w-3/4">: {nasec.nama_team}</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">Nama Sekolah</td>
                                <td className="py-3 px-6">: {nasec.nama_sekolah}</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">Alamat Sekolah</td>
                                <td className="py-3 px-6">: {nasec.alamat_sekolah}</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">Nama Pembimbing</td>
                                <td className="py-3 px-6">: {nasec.nama_pembimbing}</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">No Pembimbing</td>
                                <td className="py-3 px-6">: {nasec.no_pembimbing}</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">Komitmen</td>
                                <td className="py-3 px-6">: {nasec.komitmen}</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">Info Nasec</td>
                                <td className="py-3 px-6">: {nasec.info}</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">Member 1</td>
                                <td className="py-3 px-6">
                                    <p className={parseInt(nasec.member[0].is_leader)===1?"font-bold":"hidden"}>Ketua</p>
                                    <p>{nasec.member[0].nama}</p>
                                    <p>{nasec.member[0].email}</p>
                                    <p>{nasec.member[0].jenis_kelamin}</p>
                                    <p>Kelas {nasec.member[0].kelas}</p>
                                    <p>{nasec.member[0].no}</p>
                                    <p className="mb-1">
                                    <img onClick={()=>{changeImg(`https://sensation.smartsoft.co.id/sensation/storage/app/`+nasec.member[0].kartu_pelajar)}} className="max-w-full w-24 cursor-pointer" alt="ktm" src={`https://sensation.smartsoft.co.id/sensation/storage/app/`+nasec.member[0].kartu_pelajar} />
                                    </p>
                                    <p>
                                    <img onClick={()=>{changeImg(`https://sensation.smartsoft.co.id/sensation/storage/app/`+nasec.member[0].twibbon)}} className="max-w-full w-24 cursor-pointer" alt="ktm" src={`https://sensation.smartsoft.co.id/sensation/storage/app/`+nasec.member[0].twibbon} />
                                    </p>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">Member 2</td>
                                <td className="py-3 px-6">
                                    <p className={parseInt(nasec.member[1].is_leader)===1?"font-bold":"hidden"}>Ketua</p>
                                    <p>{nasec.member[1].nama}</p>
                                    <p>{nasec.member[1].email}</p>
                                    <p>{nasec.member[1].jenis_kelamin}</p>
                                    <p>Kelas {nasec.member[1].kelas}</p>
                                    <p>{nasec.member[1].no}</p>
                                    <p className="mb-1">
                                    <img onClick={()=>{changeImg(`https://sensation.smartsoft.co.id/sensation/storage/app/`+nasec.member[1].kartu_pelajar)}} className="max-w-full w-24 cursor-pointer" alt="ktm" src={`https://sensation.smartsoft.co.id/sensation/storage/app/`+nasec.member[1].kartu_pelajar} />
                                    </p>
                                    <p>
                                    <img onClick={()=>{changeImg(`https://sensation.smartsoft.co.id/sensation/storage/app/`+nasec.member[1].twibbon)}} className="max-w-full w-24 cursor-pointer" alt="ktm" src={`https://sensation.smartsoft.co.id/sensation/storage/app/`+nasec.member[1].twibbon} />
                                    </p>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">Member 3</td>
                                <td className="py-3 px-6">
                                    <p className={parseInt(nasec.member[2].is_leader)===1?"font-bold":"hidden"}>Ketua</p>
                                    <p>{nasec.member[2].nama}</p>
                                    <p>{nasec.member[2].email}</p>
                                    <p>{nasec.member[2].jenis_kelamin}</p>
                                    <p>Kelas {nasec.member[2].kelas}</p>
                                    <p>{nasec.member[2].no}</p>
                                    <p className="mb-1">
                                    <img onClick={()=>{changeImg(`https://sensation.smartsoft.co.id/sensation/storage/app/`+nasec.member[2].kartu_pelajar)}} className="max-w-full w-24 cursor-pointer" alt="ktm" src={`https://sensation.smartsoft.co.id/sensation/storage/app/`+nasec.member[2].kartu_pelajar} />
                                    </p>
                                    <p>
                                    <img onClick={()=>{changeImg(`https://sensation.smartsoft.co.id/sensation/storage/app/`+nasec.member[2].twibbon)}} className="max-w-full w-24 cursor-pointer" alt="ktm" src={`https://sensation.smartsoft.co.id/sensation/storage/app/`+nasec.member[2].twibbon} />
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Sent */}
            <div className={event==="sent"?"border rounded-md p-4":"hidden"}>
                <h1 className="text-center text-xl font-bold">Sent</h1>
                <div>
                    <table className="min-w-max w-full table-auto">
                        <tbody>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">Nama Lengkap</td>
                                <td className="py-3 px-6">{sent.nama_lengkap}</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">Email</td>
                                <td className="py-3 px-6">{sent.email}</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">Asal Institusi</td>
                                <td className="py-3 px-6">{sent.asal_institusi}</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">Statuts</td>
                                <td className="py-3 px-6">{sent.status}</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">Info</td>
                                <td className="py-3 px-6">{sent.info}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
        </div>
    )
}

export default DashDaftar