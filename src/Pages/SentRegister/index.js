import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, createRef } from 'react';
import { Redirect } from 'react-router-dom';
import validator from 'validator';
import Sent from "../../Images/sent.svg"

const SentRegister = ()=>{

    const [email, setEmail] = useState(localStorage.getItem("user")?localStorage.getItem("user"):"")
    const [univ, setUniv] = useState("")
    const [fullname, setFullname] = useState("")
    const [status, setStatus] = useState("Siswa")
    const [info, setInfo] = useState("Poster Instagram")
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [selesai, setSelesai] = useState(false)
    const [keDash, setKeDash] = useState(false)
    const [isUploading, setIsUploading] = useState(false)
    const [isErrorList, setIsErrorList] = useState(false)
    const [errorList, setErrorList] = useState([])
    const [buktiVal, setBuktiVal] = useState("")
    const [buktiErr, setBuktiErr] = useState("")
    let bukti = createRef();

    const onSubmit = (e)=>{
        e.preventDefault()
        if(email!==""&&validator.isEmail(email)
        &&univ!==""
        &&fullname!==""
        &&status!==""
        &&info!==""
        ){
            if(!isLoading){
                setIsLoading(true)

                let data = new FormData()
                data.append("nama_lengkap", fullname)
                data.append("email", email)
                data.append("asal_institusi", univ)
                data.append("status", status)
                data.append("info", info)
                data.append('bukti', bukti.current.files[0])

                fetch(`${process.env.REACT_APP_APIURL}/users/sent`,{
                    method:"POST",
                    headers:{
                        // 'Authorization' : `Bearer ${localStorage.getItem("key")}`
                    },
                    body: data
                }).then(res=>res.json())
                .then(
                    (res)=>{
                        console.log(res)
                        if(res.meta.code===200){
                            // Sukses Fase 2
                            console.log("sukses fase 2")
                            setIsUploading(false)
                            setSelesai(true)
                        }else{
                            // gagal
                            setIsUploading(false)
                            for(let k in res.errors){
                                setErrorList([...errorList,...res.errors[k]])
                            }
                            setIsErrorList(true)
                            setIsLoading(false)
                            setSelesai(false)
                            console.log("fase 2 gagal")
                        }
                        // setIsLoading(false)
                        // setSelesai(true)
                    },
                    (err)=>{
                        console.log(err)
                        setIsLoading(false)
                    }
                )
            }
        }else{
            setIsError(true)
        }
    }


    // const cekRegistered = ()=>{
    //     fetch(`${process.env.REACT_APP_APIURL}/users/${localStorage.getItem("id")}/isregistered`,{
    //         headers:{
    //             'Content-Type': 'application/json',
    //             'Authorization' : `Bearer ${localStorage.getItem("key")}`
    //         }
    //     }).then(res=>res.json())
    //     .then(
    //         (res)=>{
    //             console.log(res)
    //             if(res.meta.code===401 || (res.meta.code===200 && res.data!==false)){
    //                 setSelesai(true)
    //             }
    //         },
    //         (err)=>{
    //             console.log(err)
    //         }
    //     )
    // }
    useEffect(()=>{
        if(bukti.current){
            if(bukti.current.files.length !== 0){
                if(bukti.current.files[0].type==="image/jpeg" || bukti.current.files[0].type==="image/jpg" || bukti.current.files[0].type==="image/png"){
                    if(bukti.current.files[0].size/1024 <= 1000){
                        setBuktiErr("")
                    }else{
                        setBuktiErr("Maksimum ukuran file adalah 1000kb/1mb")
                    }
                }else{
                    setBuktiErr("Ekstensi yang didukung adalah jpeg,jpg, dan png")
                }
            }else{
                setBuktiErr("")
            }
        }
    },[bukti,buktiVal])
    
    useEffect(()=>{
        // if(localStorage.getItem("key") && localStorage.getItem("id")  && localStorage.getItem("user") && localStorage.getItem("role")){
        //     console.log("Loged in")
        // }else{
        //     setSelesai(true)
        //     setKeDash(true)
        // }
        // cekRegistered()
    },[])

    if(selesai){
        setTimeout(()=>{setKeDash(true)},5000)
        if(keDash && false){
            return(
                <Redirect to="/dashboard" />
            )
        }
    }

    return(
        <div className="min-w-screen min-h-screen" style={{backgroundColor:"#1e293b", backgroundImage:"url(https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/register_bg_2.png)", backgroundPosition:"center", backgroundSize:"cover"}}>
            {/* Modal */}
            <div style={{backgroundColor:"rgba(0,0,0,.3)"}} className={selesai?"absolute w-full h-full inset-0 z-50 flex justify-center items-center transition-all transform duration-500":"absolute w-full h-full inset-0 z-50 flex justify-center items-center transition-all transform duration-500 scale-0 translate-y-full"}>
                <div className="w-10/12 max-w-lg bg-white rounded-md p-5">
                    <h3 style={{color:"rgb(71,85,105)"}} className="text-lg font-bold text-center">Terima kasih sudah mendaftar Sent</h3>
                    <FontAwesomeIcon icon={faCheckCircle} className="text-7xl text-green-400 text-center block mx-auto my-8" />
                    <p style={{color:"rgb(71,85,105)"}} className="font-bold text-center">
                        Untuk informasi lebih lanjut terkait webinar SENT, Peserta diharapkan <a href="https://chat.whatsapp.com/G0P9dCxWKPa2q6aec9ZsWg" className="hover:opacity-60">Join Grup WhatsApp dengan menekan tautan ini</a>
                    </p>
                </div>
            </div>
            <div className="container mx-auto px-4 h-screen">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4">
                        <div style={{backgroundColor:"#e2e8f0"}} className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0">
                            <div className="flex justify-center items-center py-4">
                                <img alt="Sent" src={Sent} />
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10">             
                                <div className={isError?"py-2 w-full my-3 bg-red-500 text-white text-center rounded-md":"hidden"}>
                                    Please check the form
                                </div>
                                <form onSubmit={onSubmit}>
                                    <div className="relative w-full mb-3">
                                        <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                            Nama Lengkap
                                        </label>
                                        <input value={fullname} onChange={(e)=>setFullname(e.target.value)} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Nama Lengkap" />
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                            Email
                                        </label>
                                        <input disabled={localStorage.getItem("user")?true:false} value={email} onChange={(e)=>setEmail(e.target.value)} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email" />
                                        <small style={{color:"rgb(71,85,105)"}} className={
                                            (email==="" || validator.isEmail(email))?
                                            "hidden":
                                            "text-sm font-semibold text-blueGray-600"
                                            }>Harus diisi dengan email</small>
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                            Asal Institusi
                                        </label>
                                        <input value={univ} onChange={(e)=>setUniv(e.target.value)} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Asal Institusi" />
                                    </div>
                                    <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                Status
                                            </label>
                                            {/* <input style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Asal Daerah" /> */}
                                            <select onChange={(e)=>{setStatus(e.target.value)}} value={status} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                                <option value="Siswa">Siswa</option>
                                                <option value="Mahasiswa">Mahasiswa</option>
                                                <option value="Pekerja">Pekerja</option>
                                                <option value="Lain-lain">Lain-lain</option>
                                            </select>
                                    </div>
                                    <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                Mengetahui Sent darimana?
                                            </label>
                                            {/* <input style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Asal Daerah" /> */}
                                            <select onChange={(e)=>{setInfo(e.target.value)}} value={info} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                                <option value="Poster Instagram">Poster Instagram</option>
                                                <option value="Teman">Teman</option>
                                                <option value="Linkedin">Linkedin</option>
                                                <option value="Twibbon Instagram">Twibbon Instagram</option>
                                                <option value="Lain-lain">Lain-lain</option>
                                            </select>
                                    </div>
                                    <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                Bukti Pembayaran (Rp 15.000) (jpg/jpeg/png)
                                            </label>
                                            <div className="flex items-center relative">
                                                <input accept="image/jpg, image/jpeg, image/png" ref={bukti} onChange={()=>{bukti.current.files[0]?setBuktiVal(bukti.current.files[0].name):setBuktiVal("")}} style={{color:"rgb(71,85,105)"}} type="file" className="w-full h-full absolute cursor-pointer opacity-0 inset-0" placeholder="Nama Lengkap" />
                                                <input value={buktiVal} disabled style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded-l text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Upload files..." />
                                                <button type="button" className="bg-blue-500 rounded-r-md px-3 py-3 font-bold text-white text-sm">Upload</button>
                                            </div>
                                            <small style={{color:"rgb(71,85,105)"}} className={buktiErr===""?"hidden":"text-sm font-semibold text-blueGray-600"}>
                                                {buktiErr}
                                            </small>
                                        </div>
                                    <div className="text-center mt-6 relative">
                                        <div className={isLoading?"w-full h-full absolute inset-0 opacity-0":"hidden"} />
                                        <button style={{backgroundColor:"rgb(30,41,59)"}} className=
                                        {isLoading?"text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 opacity-40"
                                        :"text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"}
                                        type="submit">
                                            {isLoading?"Submiting data...":"Submit"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor:"rgba(0,0,0,.3)"}} className={isErrorList?"absolute w-full h-full inset-0 z-50 flex justify-center items-center transition-all transform duration-500":"absolute w-full h-full inset-0 z-50 flex justify-center items-center transition-all transform duration-500 scale-0 translate-y-full"}>
                <div className="w-10/12 max-w-lg bg-white rounded-md p-5 pt-3">
                    <div className="flex justify-end">
                        <button onClick={()=>{setIsErrorList(false)}} className="block px-2 pt-0 hover:opacity-40 transform translate-x-1/2">
                            <FontAwesomeIcon className="text-xl" icon={faTimes} />
                        </button>
                    </div>
                    <h5 className="text-xl text-center mb-4">Error List</h5>
                    <div className="flex flex-col space-y-3">
                    {
                        errorList.map((item)=>{
                            return(
                                <div className="bg-red-400 text-white p-3 rounded-md">
                                    <p>{item}</p>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default SentRegister