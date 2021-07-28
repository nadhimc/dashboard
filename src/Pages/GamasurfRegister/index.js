import { createRef, useState, useEffect } from "react"
import Gamasurf from "../../Images/gamasurf.svg"
import validator from 'validator';
import { Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimes } from "@fortawesome/free-solid-svg-icons";

const GamasurfRegister = ()=>{

    // Setting Form
    const [form, setForm] = useState(1)
    const [isError, setIsError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("Please check the form again")
    const [isUploading, setIsUploading] = useState(false)
    const [selesai, setSelesai] = useState(false)
    const [keDash, setKeDash] = useState(false)
    const [isErrorList, setIsErrorList] = useState(false)
    const [errorList, setErrorList] = useState([])

    // Form Page 1
    const [fullname, setfullname] = useState("")
    const [nickname, setnickname] = useState("")
    const [email, setemail] = useState("")
    const [univ, setuniv] = useState("")
    const [region, setregion] = useState("")
    const [phone, setphone] = useState("")


    // Form Page 2
    const [motivasi, setmotivasi] = useState("")
    const [ekspektasi, setekspektasi] = useState("")
    const [pengalaman, setpengalaman] = useState("")
    const [komitmen, setKomitmen] = useState(false)
    const [dapatinfo, setdapatinfo] = useState("Poster Instagram")


    // Form Page 3
    const [twibbonVal, setTwibbonVal] = useState("")
    let twibbon = createRef();
    const [orisinalVal, setOrisinalVal] = useState("")
    let orisinal = createRef();
    const [ktmVal, setKtmVal] = useState("")
    let ktm = createRef();
    const [ideVal, setIdeVal] = useState("")
    let ide = createRef();

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
                if(res.meta.code===401 || (res.meta.code===200 && res.data!==false)){
                    setSelesai(true)
                }
            },
            (err)=>{
                console.log(err)
            }
        )
    }

    useEffect(()=>{
        cekRegistered()
    },[])

    if(selesai){
        setTimeout(()=>{setKeDash(true)},5000)
        if(keDash){
            // console.log("kedash")
         return (<Redirect to="/dashboard" />)   
        }
    }

    const sendFirstForm = ()=>{
        setIsUploading(true)

        // Send form 1 & 2
        fetch(`${process.env.REACT_APP_APIURL}/users/${localStorage.getItem("id")}/gamasurf`,{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${localStorage.getItem("key")}`
            },
            body: JSON.stringify({
                nama_lengkap : fullname,
                nama_panggilan: nickname,
                email: email,
                asal_univ: univ,
                asal_daerah: region,
                no_wa: phone,
                motivasi: motivasi,
                ekspetasi: ekspektasi,
                pengalaman: pengalaman,
                komitmen: "iya",
                info: dapatinfo,
            })
        }).then(res=>{
            console.log(res)
            return res.json()
        })
        .then(
            (res)=>{
                console.log(res)
                if(res.meta.code===200){
                    console.log("fase 1 sukses")
                    // sendSecondForm()
                    setIsUploading(false)
                    setSelesai(true)
                }else{
                    console.log("fase 1 error")
                    setIsUploading(false)
                    setErrorList([...errorList,res.meta.message])
                    for(let k in res.errors){
                        setErrorList([...errorList,...res.errors[k]])
                    }
                    setIsErrorList(true)
                }
            },
            (err)=>{
                console.log(err)
                setIsUploading(false)
            }
        )
    }

    const sendSecondForm = ()=>{
        console.log("second phase")
        console.log("twibbon: ",twibbon)
        console.log("ktm: ",ktm)
        console.log("orisinal: ",orisinal)
        console.log("ide: ",ide)
        let data = new FormData()
        data.append('twibbon',twibbon.current.files[0])
        data.append('ktm',ktm.current.files[0])
        data.append('orisinalitas',orisinal.current.files[0])
        data.append('ide',ide.current.files[0])

        fetch(`${process.env.REACT_APP_APIURL}/users/${localStorage.getItem("id")}/gamasurf/upload`,{
            method:"POST",
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem("key")}`
            },
            body:data
        }).then(res=>{
            console.log(res)
            return res.json()
        })
        .then(
            (res)=>{
                console.log(res)
                if(res.meta.code===200){
                    // Sukses Fase 2
                    console.log("sukses fase 2")
                    sendFirstForm()
                }else{
                    // gagal
                    setIsUploading(false)
                    for(let k in res.errors){
                        setErrorList([...errorList,...res.errors[k]])
                    }
                    setIsErrorList(true)
                    console.log("fase 2 gagal")
                }
            },(err)=>{
                console.log("fase 2 gagal")
                setIsUploading(false)
                console.log(err)
            }
        )
    }


    const formSubmit = (e)=>{
        e.preventDefault()
        if(!isUploading){
            if(form === 3){
                setErrorMsg("Tolong cek formnya kembali")
                setErrorList([])
                // Cek Form 1
                if( 
                    fullname !== "" // fullname
                    && nickname !== "" //nickname
                    && validator.isEmail(email) // email
                    && univ !== "" // univ
                    && region !== "" // region
                    && validator.isMobilePhone(phone,"id-ID") // phone
                ){
                    // Form 1 Lolos
                    // console.log("form 1 Lolos")
                    // Cek Form 2
                    if(
                        motivasi !== ""        // motivasi
                        && ekspektasi !== ""        // ekspektasi
                        && pengalaman !== ""        // pengalaman
                        && komitmen        // komitmen
                        && dapatinfo !== ""        // dapatinfo
                    ){
                        // Lolos Form 2
                        console.log(orisinal.current.files.length)
                        // Cek FOrm 3
                        if(
                            (twibbon.current.files.length !== 0
                            && orisinal.current.files.length !== 0
                            && ktm.current.files.length !== 0
                            && ide.current.files.length !== 0 )
                        ){
                            if(
                                (twibbon.current.files[0].type==="image/jpeg" || twibbon.current.files[0].type==="image/jpg")     // twibbon
                                && (orisinal.current.files[0].type==="application/pdf")        // orisinal
                                && (ktm.current.files[0].type==="image/jpeg" || ktm.current.files[0].type==="image/jpg")         // ktm
                                && (ide.current.files[0].type==="application/pdf")        // ide
                                // filesize
                                && twibbon.current.files[0].size/1024 <= 512
                                && orisinal.current.files[0].size/1024/1024 <=3
                                && ktm.current.files[0].size/1024 <= 512
                                && ide.current.files[0].size/1024/1024 <=5
                            ){
                                console.log("Lolos semua")
                                setIsError(false)
                                sendSecondForm()
                            }else{
                                // Form 3 tidak Lolos
                                setIsError(true)
                                setErrorMsg("pastikan semua file sesuai memenuhi syarat")
                            }
                        }else{
                            // Form 3 tidak Lolos
                            setIsError(true)
                            setErrorMsg("pastikan semua file sudah diupload")
                        }
                    }else{
                        // Tidak lolos Form 2
                        setForm(2)
                        setErrorMsg("isi semua form sesuai format")
                        setIsError(true)
                    }
                }else{
                    // Form 1 tidak lolos
                    setForm(1)
                    setErrorMsg("isi semua form sesuai format")
                    setIsError(true)
                }
            }
        }
    }


    return(
        <div className="min-w-screen min-h-screen flex justify-center items-center relative" style={{backgroundColor:"#1e293b", backgroundImage:"url(https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/register_bg_2.png)", backgroundPosition:"center", backgroundSize:"cover"}}>

            {/* Modal */}
            <div style={{backgroundColor:"rgba(0,0,0,.3)"}} className={selesai?"absolute w-full h-full inset-0 z-50 flex justify-center items-center transition-all transform duration-500":"absolute w-full h-full inset-0 z-50 flex justify-center items-center transition-all transform duration-500 scale-0 translate-y-full"}>
                <div className="w-10/12 max-w-lg bg-white rounded-md p-5">
                    <h3 style={{color:"rgb(71,85,105)"}} className="text-lg font-bold text-center">Terima kasih sudah mendaftar Gamasurf</h3>
                    <FontAwesomeIcon icon={faCheckCircle} className="text-7xl text-green-400 text-center block mx-auto my-8" />
                    <h3 style={{color:"rgb(71,85,105)"}} className="text-lg font-bold text-center">
                        <Link to="/dashboard">
                        Kamu akan diarahkan ke Dashboard, atau klik link ini jika tidak berhasil diarahkan
                        </Link>
                    </h3>
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

            <div className="container mx-auto px-4">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4 py-4 md:py-0">
                        <div style={{backgroundColor:"#e2e8f0"}} className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0">
                            <div className="flex justify-center items-center py-4">
                                <img alt="Gamasurf" src={Gamasurf} />
                            </div>
                            <div className="flex justify-center items-center mb-4 relative">
                                <button onClick={()=>{setForm(1)}} className="p-2 bg-green-400 text-white rounded-md">1</button>
                                <div className="w-3 bg-green-400 h-2" />
                                <div className={form>=2?"w-3 transition bg-green-400 h-2":"w-3 transition bg-white h-2"} />
                                <button onClick={()=>{setForm(2)}} className={form>=2?"p-2 transition bg-green-400 text-white rounded-md":"p-2 transition bg-white rounded-md"}>2</button>
                                <div className={form>=2?"w-3 transition bg-green-400 h-2":"w-3 transition bg-white h-2"} />
                                <div className={form>=3?"w-3 transition bg-green-400 h-2":"w-3 transition bg-white h-2"} />
                                <button onClick={()=>{setForm(3)}} className={form>=3?"p-2 transition bg-green-400 text-white rounded-md":"p-2 transition bg-white rounded-md"}>3</button>
                            </div>
                            <div className={isError?"py-2 w-4/5 mx-auto my-3 bg-red-500 text-white text-center rounded-md":"hidden"}>
                                    {errorMsg}
                            </div>
                            <div className="flex-auto px-4 lg:px-10 pb-10">
                                <form onSubmit={formSubmit}>
                                    {/* Pertanyaan 1 */}
                                    <div className={form===1?"block":"hidden"}>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                Nama Lengkap
                                            </label>
                                            <input onChange={(e)=>setfullname(e.target.value)} value={fullname} name="fullname" style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Nama Lengkap" />
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                Nama Panggilan
                                            </label>
                                            <input onChange={(e)=>setnickname(e.target.value)} value={nickname} name="nickname" style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Nama Panggilan" />
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                Email
                                            </label>
                                            <input onChange={(e)=>setemail(e.target.value)} value={email} name="email" style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email" />
                                            <small style={{color:"rgb(71,85,105)"}} className={
                                            (email==="" || validator.isEmail(email))?
                                            "hidden":
                                            "text-sm font-semibold text-blueGray-600"
                                            }>Harus diisi dengan email</small>
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                Asal Universitas
                                            </label>
                                            <input onChange={(e)=>setuniv(e.target.value)} value={univ} name="univ" style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Asal Universitas" />
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                Asal Daerah
                                            </label>
                                            <input onChange={(e)=>setregion(e.target.value)} value={region} name="region" style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Asal Daerah" />
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                Nomor Handphone (Wa Aktif)
                                            </label>
                                            <input onChange={(e)=>setphone(e.target.value)} value={phone} name="phone" style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Nomor Handphone (Wa Aktif)" />
                                            <small style={{color:"rgb(71,85,105)"}} className={
                                            (phone==="" || validator.isMobilePhone(phone,"id-ID"))?
                                            "hidden":
                                            "text-sm font-semibold text-blueGray-600"
                                            }>harus diisi dengan nomor handphone</small>
                                        </div>
                                    </div>

                                    {/* Pertanyaan 2 */}
                                    <div className={form===2?"block":"hidden"}>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                Apa motivasi mengikuti Gamasurf?
                                            </label>
                                            <textarea onChange={(e)=>setmotivasi(e.target.value)} value={motivasi} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Motivasi" />
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                Apa ekspektasi yang didapatkan setelah mengikuti Gamasurf?
                                            </label>
                                            <textarea onChange={(e)=>setekspektasi(e.target.value)} value={ekspektasi} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Ekspektasi" />
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                Pernah memiliki pengalaman di bidang riset (lomba/seminar/project)?
                                            </label>
                                            <textarea onChange={(e)=>setpengalaman(e.target.value)} value={pengalaman} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Pengalaman" />
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                Apakah berkomitmen mengikuti rangkaian gamasurf hingga akhir?
                                            </label>
                                            <div className="flex relative">
                                                <div style={{left:komitmen?0:"50%"}} className="w-1/2 rounded-md bg-blue-700 top-0 transition-all duration-300 bottom-0 absolute opacity-40" />
                                                <button type="button" onClick={()=>{setKomitmen(true)}} className="w-full py-2 bg-white focus:outline-none rounded-l-md">
                                                    Iya
                                                </button>
                                                <button type="button" onClick={()=>{setKomitmen(false)}} className="w-full py-2 bg-white focus:outline-none rounded-r-md">
                                                    Tidak
                                                </button>
                                            </div>
                                            <small style={{color:"rgb(71,85,105)"}} className={
                                            komitmen?
                                            "hidden":
                                            "text-sm font-semibold text-blueGray-600"
                                            }>mohon untuk menyetujui komitmen</small>
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                Tahu Gamasurf darimana?
                                            </label>
                                            {/* <input style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Asal Daerah" /> */}
                                            <select onChange={(e)=>{setdapatinfo(e.target.value)}} value={dapatinfo} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                                <option value="Poster Instagram">Poster Instagram</option>
                                                <option value="Teman">Teman</option>
                                                <option value="Linkedin">Linkedin</option>
                                                <option value="Twibbon Instagram">Twibbon Instagram</option>
                                                <option value="OA">OA</option>
                                                <option value="Broadcast">Broadcast</option>
                                                <option value="Lain-lain">Lain-lain</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Pertanyaan 3 */}
                                    <div className={form===3?"block":"hidden"}>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                Screenshot Twibbon (tag sensation dan 3 teman) (jpg/jpeg)
                                            </label>
                                            <div className="flex items-center relative">
                                                <input accept="image/jpg, image/jpeg" ref={twibbon} onChange={()=>{twibbon.current.files[0]?setTwibbonVal(twibbon.current.files[0].name):setTwibbonVal("")}} style={{color:"rgb(71,85,105)"}} type="file" className="w-full h-full absolute cursor-pointer opacity-0 inset-0" placeholder="Nama Lengkap" />
                                                <input disabled value={twibbonVal} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded-l text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Upload files..." />
                                                <button type="button" className="bg-blue-500 rounded-r-md px-3 py-3 font-bold text-white text-sm">Upload</button>
                                            </div>
                                            <small style={{color:"rgb(71,85,105)"}} className="text-sm font-semibold text-blueGray-600">
                                                ekstensi jpg/jpeg, max 512kb
                                            </small>
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                Surat Pernyataan Orisinalitas (pdf)
                                            </label>
                                            <div className="flex items-center relative">
                                                <input accept=".pdf" ref={orisinal} onChange={()=>{orisinal.current.files[0]?setOrisinalVal(orisinal.current.files[0].name):setOrisinalVal("")}} style={{color:"rgb(71,85,105)"}} type="file" className="w-full h-full absolute cursor-pointer opacity-0 inset-0" placeholder="Nama Lengkap" />
                                                <input value={orisinalVal} disabled style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded-l text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Upload files..." />
                                                <button type="button" className="bg-blue-500 rounded-r-md px-3 py-3 font-bold text-white text-sm">Upload</button>
                                            </div>
                                            <small style={{color:"rgb(71,85,105)"}} className="text-sm font-semibold text-blueGray-600">
                                                ekstensi pdf, max 3Mb
                                            </small>
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                KTM/Surat Keterangan Pengganti KTM/Surat Keterangan Aktif (jpg/jpeg)
                                            </label>
                                            <div className="flex items-center relative">
                                                <input accept="image/jpg, image/jpeg" ref={ktm} onChange={()=>{ktm.current.files[0]?setKtmVal(ktm.current.files[0].name):setKtmVal("")}} style={{color:"rgb(71,85,105)"}} type="file" className="w-full h-full absolute cursor-pointer opacity-0 inset-0" placeholder="Nama Lengkap" />
                                                <input value={ktmVal} disabled style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded-l text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Upload files..." />
                                                <button type="button" className="bg-blue-500 rounded-r-md px-3 py-3 font-bold text-white text-sm">Upload</button>
                                            </div>
                                            <small style={{color:"rgb(71,85,105)"}} className="text-sm font-semibold text-blueGray-600">
                                                ekstensi jpg/jpeg, max 512kb
                                            </small>
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                Ide Penelitian (pdf)
                                            </label>
                                            <div className="flex items-center relative">
                                                <input accept=".pdf" ref={ide} onChange={()=>{ide.current.files[0]?setIdeVal(ide.current.files[0].name):setIdeVal("")}} style={{color:"rgb(71,85,105)"}} type="file" className="absolute cursor-pointer opacity-0 inset-0" placeholder="Nama Lengkap" />
                                                <input value={ideVal} disabled style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded-l text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Upload files..." />
                                                <button type="button" className="bg-blue-500 rounded-r-md px-3 py-3 font-bold text-white text-sm">Upload</button>
                                            </div>
                                            <small style={{color:"rgb(71,85,105)"}} className="text-sm font-semibold text-blueGray-600">
                                                ekstensi pdf, max 5Mb
                                            </small>
                                        </div>
                                    </div>


                                    {/* Button */}
                                    <div className="mt-6 flex justify-between">
                                        <div className={form>1?"text-center":"hidden"}>
                                            <button onClick={()=>{if(form>1){setForm(form-1)}}} style={{backgroundColor:"rgb(30,41,59)"}} className="text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="button">
                                                Prev
                                            </button>
                                        </div>
                                        <div className={form===1?"w-full text-center":form===2?"text-center":"hidden"}>
                                            <button onClick={()=>{if(form<3){setForm(form+1)}}} style={{backgroundColor:"rgb(30,41,59)"}} className="text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="button">
                                                Next
                                            </button>
                                        </div>
                                        <div className={form===3?"text-center relative":"hidden"}>
                                            <div className={isUploading?"absolute inset-0 w-full h-full opacity-0 z-50":"hidden"} />
                                            <button style={{backgroundColor:"rgb(30,41,59)"}} className={
                                                isUploading?
                                                "text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 opacity-40"
                                                :"text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                                } type="submit">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GamasurfRegister