import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, createRef, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import validator from 'validator';
import Nasec from "../../Images/nasec.svg"


const NasecRegister = ()=>{

    // Form
    const [team, setTeam] = useState("")
    const [school, setSchool] = useState("")
    const [schoolAddress, setSchoolAddress] = useState("")
    const [pembimbing, setPembimbing] = useState("")
    const [noPembimbing, setNoPembimbing] = useState("")
    const [komitmen, setKomitmen] = useState(false)
    const [info, setInfo] = useState("Poster Instagram")


    // Peserta1
    const [firstLeader, setFirstLeader] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [firstJK, setFirstJK] = useState("Laki-laki")
    const [firstKelas, setFirstKelas] = useState("")
    const [firstEmail, setFirstEmail] = useState("")
    const [firstNomor, setFirstNomor] = useState("")
    const [firstTwibbonVal, setFirstTwibbonVal] = useState("")
    let firstTwibbon = createRef();
    const [firstKtmVal, setFirstKtmVal] = useState("")
    let firstKtm = createRef();

    // Peserta2
    const [secondLeader, setSecondLeader] = useState(false)
    const [secondName, setSecondName] = useState("")
    const [secondJK, setSecondJK] = useState("Laki-laki")
    const [secondKelas, setSecondKelas] = useState("")
    const [secondEmail, setSecondEmail] = useState("")
    const [secondNomor, setSecondNomor] = useState("")
    const [secondTwibbonVal, setSecondTwibbonVal] = useState("")
    let secondTwibbon = createRef();
    const [secondKtmVal, setSecondKtmVal] = useState("")
    let secondKtm = createRef();

    // Peserta3
    const [thirdLeader, setThirdLeader] = useState(false)
    const [thirdName, setThirdName] = useState("")
    const [thirdJK, setThirdJK] = useState("Laki-laki")
    const [thirdKelas, setThirdKelas] = useState("")
    const [thirdEmail, setThirdEmail] = useState("")
    const [thirdNomor, setThirdNomor] = useState("")
    const [thirdTwibbonVal, setThirdTwibbonVal] = useState("")
    let thirdTwibbon = createRef();
    const [thirdKtmVal, setThirdKtmVal] = useState("")
    let thirdKtm = createRef();


    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [selesai, setSelesai] = useState(false)
    const [keDash, setKeDash] = useState(false)

    const uploadData = ()=>{
        console.log("start Upload Data")
        setIsLoading(true)
        let data = new FormData()
        // form 1
        data.append("nama_team",team)
        data.append("nama_sekolah",school)
        data.append("alamat_sekolah",schoolAddress)
        data.append("nama_pembimbing",pembimbing)
        data.append("no_pembimbing",noPembimbing)
        data.append("komitmen",komitmen?"Iya":"Tidak")
        data.append("info",info)

        // form 2
        data.append("nama_1",firstName)
        data.append("jenis_kelamin_1",firstJK)
        data.append("kelas_1",firstKelas)
        data.append("email_1",firstEmail)
        data.append("no_1",firstNomor)
        data.append("kartu_pelajar_1",firstKtm.current.files[0])
        data.append("twibbon_1",firstTwibbon.current.files[0])
        data.append("is_leader_1",firstLeader?"1":"0")

        // form 3
        data.append("nama_2",secondName)
        data.append("jenis_kelamin_2",secondJK)
        data.append("kelas_2",secondKelas)
        data.append("email_2",secondEmail)
        data.append("no_2",secondNomor)
        data.append("kartu_pelajar_2",secondKtm.current.files[0])
        data.append("twibbon_2",secondTwibbon.current.files[0])
        data.append("is_leader_2",secondLeader?"1":"0")

        // form 4
        data.append("nama_3",thirdName)
        data.append("jenis_kelamin_3",thirdJK)
        data.append("kelas_3",thirdKelas)
        data.append("email_3",thirdEmail)
        data.append("no_3",thirdNomor)
        data.append("kartu_pelajar_3",thirdKtm.current.files[0])
        data.append("twibbon_3",thirdTwibbon.current.files[0])
        data.append("is_leader_3",thirdLeader?"1":"0")

        // console.log(data.get("twibbon_1"))

        fetch(`${process.env.REACT_APP_APIURL}/users/${localStorage.getItem("id")}/nasec`,{
            method:"POST",
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem("key")}`
            },
            body: data
        }).then(res=>res.json())
        .then(
            (res)=>{
                console.log(res)
                if(res.meta.code === 201){
                    setSelesai(true)
                }else{
                    setIsError(true)
                }
                setIsLoading(false)
            },
            (err)=>{
                console.log(err)
                setIsError(true)
                setIsLoading(false)
            }
        )
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        setIsError(false)
        if(
            team !== ""
            && school !== ""
            && schoolAddress !== ""
            && pembimbing !== ""
            && noPembimbing !== "" && validator.isMobilePhone(noPembimbing,"id-ID")
            && komitmen
            && info !== ""
        ){
            console.log("lolos 1")
            // Lolos Page 1
            if(
                firstName !== ""
                && firstKelas !== ""
                && firstEmail !== "" && validator.isEmail(firstEmail)
                && firstNomor !== "" && (validator.isMobilePhone(firstNomor,"id-ID") || firstNomor === "-")
                && firstTwibbon.current.files.length > 0
                && firstKtm.current.files.length > 0
            ){
                // Lolos setengah Page 2
                if(
                    (firstTwibbon.current.files[0].type==="image/jpeg" || firstTwibbon.current.files[0].type==="image/jpg")
                    && firstTwibbon.current.files[0].size/1024 < 512
                    && (firstKtm.current.files[0].type==="image/jpeg" || firstKtm.current.files[0].type==="image/jpg")
                    && firstKtm.current.files[0].size/1024 < 512
                ){
                    console.log("lolos 2")
                    // Lolos Page 2
                    if(
                        secondName !== ""
                        && secondKelas !== ""
                        && secondEmail !== "" && validator.isEmail(secondEmail)
                        && secondNomor !== "" && (validator.isMobilePhone(secondNomor,"id-ID") || secondNomor==="-" )
                        && secondTwibbon.current.files.length > 0
                        && secondKtm.current.files.length > 0
                    ){
                        // Lolos setengah Page 3
                        if(
                            (secondTwibbon.current.files[0].type==="image/jpeg" || secondTwibbon.current.files[0].type==="image/jpg")
                            && secondTwibbon.current.files[0].size/1024 < 512
                            && (secondKtm.current.files[0].type==="image/jpeg" || secondKtm.current.files[0].type==="image/jpg")
                            && firstKtm.current.files[0].size/1024 < 512
                        ){
                            console.log("lolos 3")
                            // Lolos Page 3
                            if(
                                thirdName !== ""
                                && thirdKelas !== ""
                                && thirdEmail !== "" && validator.isEmail(thirdEmail)
                                && thirdNomor !== "" && (validator.isMobilePhone(thirdNomor,"id-ID") || thirdNomor==="-")
                                && thirdTwibbon.current.files.length > 0
                                && thirdKtm.current.files.length > 0
                            ){
                                // Lolos setengah Page 4
                                if(
                                    (thirdTwibbon.current.files[0].type==="image/jpeg" || thirdTwibbon.current.files[0].type==="image/jpg")
                                    && thirdTwibbon.current.files[0].size/1024 < 512
                                    && (thirdKtm.current.files[0].type==="image/jpeg" || thirdKtm.current.files[0].type==="image/jpg")
                                    && thirdKtm.current.files[0].size/1024 < 512
                                ){
                                    // Lolos Page 4
                                    if(!isLoading){
                                        uploadData()
                                    }
                                }else{
                                    setPage(4)
                                    setIsError(true)
                                }
                            }else{
                                // Gagal uji page 2 pertama
                                setPage(4)
                                setIsError(true)
                            }
                        }else{
                            // Gagal uji page 3
                            setPage(3)
                            setIsError(true)
                        }
                    }else{
                        // Gagal uji page 3 pertama
                        setPage(3)
                        setIsError(true)
                    }
                }else{
                    setPage(2)
                    setIsError(true)
                }
            }else{
                // Gagal uji page 2 pertama
                setPage(2)
                setIsError(true)
            }
        }else{
            // Gagal Page 1
            setPage(1)
            setIsError(true)
        }
    }

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
            return(
                <Redirect to="/dashboard" />
            )
        }
    }

    return(
        <div className="min-w-screen min-h-screen flex justify-center items-center relative py-5" style={{backgroundColor:"#1e293b", backgroundImage:"url(https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/register_bg_2.png)", backgroundPosition:"center", backgroundSize:"cover"}}>
            {/* Modal */}
            <div style={{backgroundColor:"rgba(0,0,0,.3)"}} className={selesai?"absolute w-full h-full inset-0 z-50 flex justify-center items-center transition-all transform duration-500":"absolute w-full h-full inset-0 z-50 flex justify-center items-center transition-all transform duration-500 scale-0 translate-y-full"}>
                <div className="w-10/12 max-w-lg bg-white rounded-md p-5">
                    <h3 style={{color:"rgb(71,85,105)"}} className="text-lg font-bold text-center">Terima kasih sudah mendaftar Nasec</h3>
                    <FontAwesomeIcon icon={faCheckCircle} className="text-7xl text-green-400 text-center block mx-auto my-8" />
                    <h3 style={{color:"rgb(71,85,105)"}} className="text-lg font-bold text-center">
                        <Link to="/dashboard">
                        Kamu akan diarahkan ke Dashboard, atau klik link ini jika tidak berhasil diarahkan
                        </Link>
                    </h3>
                </div>
            </div>
            <div className="container mx-auto px-4">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4">
                        <div style={{backgroundColor:"#e2e8f0"}} className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0">
                            <div className="flex justify-center items-center py-4">
                                <img alt="Nasec" src={Nasec} />
                            </div>
                            <div className="flex-auto px-4 lg:px-10 pb-10">             
                                <div className={isError?"py-2 w-full my-3 bg-red-500 text-white text-center rounded-md":"hidden"}>
                                    Please check the form
                                </div>
                                <form onSubmit={onSubmit}>
                                    <div className={page===1?"":"hidden"}>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                Nama Team
                                            </label>
                                            <input value={team} onChange={(e)=>setTeam(e.target.value)} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Nama Team" />
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                Nama Sekolah
                                            </label>
                                            <input value={school} onChange={(e)=>setSchool(e.target.value)} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Nama Sekolah" />
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                Alamat Sekolah
                                            </label>
                                            <input value={schoolAddress} onChange={(e)=>setSchoolAddress(e.target.value)} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Alamat Sekolah" />
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                Nama Pembimbing
                                            </label>
                                            <input value={pembimbing} onChange={(e)=>setPembimbing(e.target.value)} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Nama Pembimbing" />
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                Nomor HP Pembimbing
                                            </label>
                                            <input value={noPembimbing} onChange={(e)=>setNoPembimbing(e.target.value)} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="No Pembimbing" />
                                            <small style={{color:"rgb(71,85,105)"}} className={
                                                (noPembimbing==="" || validator.isMobilePhone(noPembimbing,"id-ID"))?
                                                "hidden":
                                                "text-sm font-semibold text-blueGray-600"
                                                }>Harus diisi dengan no telepon</small>
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                Apakah berkomitmen mengikuti rangkaian Nasec hingga akhir?
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
                                                    Tahu Sent darimana?
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
                                    </div>
                                    {/* Peserta pertama */}
                                    <div className={page===2?"":"hidden"}>
                                        <div className="relative w-full mb-3">
                                            <p style={{color:"rgb(71,85,105)"}} className="block uppercase text-base font-bold mb-2">Anggota Pertama</p>
                                            <div className="flex flex-col py-3">
                                                <div className="relative w-full mb-3">
                                                <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                    Ketua Kelompok
                                                </label>
                                                <div className="flex relative">
                                                    <div style={{left:firstLeader?0:"50%"}} className="w-1/2 rounded-md bg-blue-700 top-0 transition-all duration-300 bottom-0 absolute opacity-40" />
                                                    <button type="button" onClick={()=>{setFirstLeader(true)}} className="w-full py-2 bg-white focus:outline-none rounded-l-md">
                                                        Iya
                                                    </button>
                                                    <button type="button" onClick={()=>{setFirstLeader(false)}} className="w-full py-2 bg-white focus:outline-none rounded-r-md">
                                                        Tidak
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                    Nama
                                                </label>
                                                <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Nama" />
                                            </div>
                                            </div>
                                            <div className="flex flex-col py-3">
                                                <div className="relative w-full mb-3">
                                                <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                    Jenis Kelamin
                                                </label>
                                                <div className="flex relative">
                                                    <div style={{left:firstJK==="Laki-laki"?0:"50%"}} className="w-1/2 rounded-md bg-blue-700 top-0 transition-all duration-300 bottom-0 absolute opacity-40" />
                                                        <button type="button" onClick={()=>{setFirstJK("Laki-laki")}} className="w-full py-2 bg-white focus:outline-none rounded-l-md">
                                                            Laki-laki
                                                        </button>
                                                        <button type="button" onClick={()=>{setFirstJK("Perempuan")}} className="w-full py-2 bg-white focus:outline-none rounded-r-md">
                                                            Perempuan
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                    Kelas
                                                </label>
                                                <input value={firstKelas} onChange={(e)=>setFirstKelas(e.target.value)} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Kelas" />
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                    Email
                                                </label>
                                                <input value={firstEmail} onChange={(e)=>setFirstEmail(e.target.value)} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email" />
                                                <small style={{color:"rgb(71,85,105)"}} className={
                                            firstEmail==="" || validator.isEmail(firstEmail) ?
                                            "hidden":
                                            "text-sm font-semibold text-blueGray-600"
                                            }>Diisi dengan format Email</small>
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                    Nomor HP
                                                </label>
                                                <input value={firstNomor} onChange={(e)=>setFirstNomor(e.target.value)} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Nomor HP" />
                                                <small style={{color:"rgb(71,85,105)"}} className={
                                            firstNomor==="" || validator.isMobilePhone(firstNomor,"id-ID") || firstNomor==="-"?
                                            "hidden":
                                            "text-sm font-semibold text-blueGray-600"
                                            }>Diisi dengan no HP, jika tidak ada tulis -</small>
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                    Screenshot Twibbon (tag sensation dan 3 teman) (jpg/jpeg)
                                                </label>
                                                <div className="flex items-center relative">
                                                    <input accept="image/jpg, image/jpeg" ref={firstTwibbon} onChange={()=>{firstTwibbon.current.files[0]?setFirstTwibbonVal(firstTwibbon.current.files[0].name):setFirstTwibbonVal("")}} style={{color:"rgb(71,85,105)"}} type="file" className="w-full h-full absolute cursor-pointer opacity-0 inset-0" placeholder="Nama Lengkap" />
                                                    <input disabled value={firstTwibbonVal} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded-l text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Upload files..." />
                                                    <button type="button" className="bg-blue-500 rounded-r-md px-3 py-3 font-bold text-white text-sm">Upload</button>
                                                </div>
                                                <small style={{color:"rgb(71,85,105)"}} className="text-sm font-semibold text-blueGray-600">
                                                    ekstensi jpg/jpeg, max 512kb
                                                </small>
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                    KTM/Surat Keterangan Pengganti KTM/Surat Keterangan Aktif (jpg/jpeg)
                                                </label>
                                                <div className="flex items-center relative">
                                                    <input accept="image/jpg, image/jpeg" ref={firstKtm} onChange={()=>{firstKtm.current.files[0]?setFirstKtmVal(firstKtm.current.files[0].name):setFirstKtmVal("")}} style={{color:"rgb(71,85,105)"}} type="file" className="w-full h-full absolute cursor-pointer opacity-0 inset-0" placeholder="Nama Lengkap" />
                                                    <input value={firstKtmVal} disabled style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded-l text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Upload files..." />
                                                    <button type="button" className="bg-blue-500 rounded-r-md px-3 py-3 font-bold text-white text-sm">Upload</button>
                                                </div>
                                                <small style={{color:"rgb(71,85,105)"}} className="text-sm font-semibold text-blueGray-600">
                                                    ekstensi jpg/jpeg, max 512kb
                                                </small>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Peserta Kedua */}
                                    <div className={page===3?"":"hidden"}>
                                        <div className="relative w-full mb-3">
                                            <p style={{color:"rgb(71,85,105)"}} className="block uppercase text-base font-bold mb-2">Anggota Kedua</p>
                                            <div className="flex flex-col py-3">
                                                <div className="relative w-full mb-3">
                                                <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                    Ketua Kelompok
                                                </label>
                                                <div className="flex relative">
                                                    <div style={{left:secondLeader?0:"50%"}} className="w-1/2 rounded-md bg-blue-700 top-0 transition-all duration-300 bottom-0 absolute opacity-40" />
                                                    <button type="button" onClick={()=>{setSecondLeader(true)}} className="w-full py-2 bg-white focus:outline-none rounded-l-md">
                                                        Iya
                                                    </button>
                                                    <button type="button" onClick={()=>{setSecondLeader(false)}} className="w-full py-2 bg-white focus:outline-none rounded-r-md">
                                                        Tidak
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                    Nama
                                                </label>
                                                <input value={secondName} onChange={(e)=>setSecondName(e.target.value)} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Nama" />
                                            </div>
                                            </div>
                                            <div className="flex flex-col py-3">
                                                <div className="relative w-full mb-3">
                                                <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                    Jenis Kelamin
                                                </label>
                                                <div className="flex relative">
                                                    <div style={{left:secondJK==="Laki-laki"?0:"50%"}} className="w-1/2 rounded-md bg-blue-700 top-0 transition-all duration-300 bottom-0 absolute opacity-40" />
                                                        <button type="button" onClick={()=>{setSecondJK("Laki-laki")}} className="w-full py-2 bg-white focus:outline-none rounded-l-md">
                                                            Laki-laki
                                                        </button>
                                                        <button type="button" onClick={()=>{setSecondJK("Perempuan")}} className="w-full py-2 bg-white focus:outline-none rounded-r-md">
                                                            Perempuan
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                    Kelas
                                                </label>
                                                <input value={secondKelas} onChange={(e)=>setSecondKelas(e.target.value)} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Kelas" />
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                    Email
                                                </label>
                                                <input value={secondEmail} onChange={(e)=>setSecondEmail(e.target.value)} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email" />
                                                <small style={{color:"rgb(71,85,105)"}} className={
                                            secondEmail==="" || validator.isEmail(secondEmail) ?
                                            "hidden":
                                            "text-sm font-semibold text-blueGray-600"
                                            }>Diisi dengan format Email</small>
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                    Nomor HP
                                                </label>
                                                <input value={secondNomor} onChange={(e)=>setSecondNomor(e.target.value)} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Nomor HP" />
                                                <small style={{color:"rgb(71,85,105)"}} className={
                                            secondNomor==="" || validator.isMobilePhone(secondNomor,"id-ID") || secondNomor==="-"?
                                            "hidden":
                                            "text-sm font-semibold text-blueGray-600"
                                            }>Diisi dengan no HP, jika tidak ada tulis -</small>
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                    Screenshot Twibbon (tag sensation dan 3 teman) (jpg/jpeg)
                                                </label>
                                                <div className="flex items-center relative">
                                                    <input accept="image/jpg, image/jpeg" ref={secondTwibbon} onChange={()=>{secondTwibbon.current.files[0]?setSecondTwibbonVal(secondTwibbon.current.files[0].name):setSecondTwibbonVal("")}} style={{color:"rgb(71,85,105)"}} type="file" className="w-full h-full absolute cursor-pointer opacity-0 inset-0" placeholder="Nama Lengkap" />
                                                    <input disabled value={secondTwibbonVal} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded-l text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Upload files..." />
                                                    <button type="button" className="bg-blue-500 rounded-r-md px-3 py-3 font-bold text-white text-sm">Upload</button>
                                                </div>
                                                <small style={{color:"rgb(71,85,105)"}} className="text-sm font-semibold text-blueGray-600">
                                                    ekstensi jpg/jpeg, max 512kb
                                                </small>
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                    KTM/Surat Keterangan Pengganti KTM/Surat Keterangan Aktif (jpg/jpeg)
                                                </label>
                                                <div className="flex items-center relative">
                                                    <input accept="image/jpg, image/jpeg" ref={secondKtm} onChange={()=>{secondKtm.current.files[0]?setSecondKtmVal(secondKtm.current.files[0].name):setSecondKtmVal("")}} style={{color:"rgb(71,85,105)"}} type="file" className="w-full h-full absolute cursor-pointer opacity-0 inset-0" placeholder="Nama Lengkap" />
                                                    <input value={secondKtmVal} disabled style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded-l text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Upload files..." />
                                                    <button type="button" className="bg-blue-500 rounded-r-md px-3 py-3 font-bold text-white text-sm">Upload</button>
                                                </div>
                                                <small style={{color:"rgb(71,85,105)"}} className="text-sm font-semibold text-blueGray-600">
                                                    ekstensi jpg/jpeg, max 512kb
                                                </small>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Peserta Ketiga */}
                                    <div className={page===4?"":"hidden"}>
                                        <div className="relative w-full mb-3">
                                            <p style={{color:"rgb(71,85,105)"}} className="block uppercase text-base font-bold mb-2">Anggota Ketiga</p>
                                            <div className="flex flex-col py-3">
                                                <div className="relative w-full mb-3">
                                                <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                    Ketua Kelompok
                                                </label>
                                                <div className="flex relative">
                                                    <div style={{left:thirdLeader?0:"50%"}} className="w-1/2 rounded-md bg-blue-700 top-0 transition-all duration-300 bottom-0 absolute opacity-40" />
                                                    <button type="button" onClick={()=>{setThirdLeader(true)}} className="w-full py-2 bg-white focus:outline-none rounded-l-md">
                                                        Iya
                                                    </button>
                                                    <button type="button" onClick={()=>{setThirdLeader(false)}} className="w-full py-2 bg-white focus:outline-none rounded-r-md">
                                                        Tidak
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                    Nama
                                                </label>
                                                <input value={thirdName} onChange={(e)=>setThirdName(e.target.value)} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Nama" />
                                            </div>
                                            </div>
                                            <div className="flex flex-col py-3">
                                                <div className="relative w-full mb-3">
                                                <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                    Jenis Kelamin
                                                </label>
                                                <div className="flex relative">
                                                    <div style={{left:thirdJK==="Laki-laki"?0:"50%"}} className="w-1/2 rounded-md bg-blue-700 top-0 transition-all duration-300 bottom-0 absolute opacity-40" />
                                                        <button type="button" onClick={()=>{setThirdJK("Laki-laki")}} className="w-full py-2 bg-white focus:outline-none rounded-l-md">
                                                            Laki-laki
                                                        </button>
                                                        <button type="button" onClick={()=>{setThirdJK("Perempuan")}} className="w-full py-2 bg-white focus:outline-none rounded-r-md">
                                                            Perempuan
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                    Kelas
                                                </label>
                                                <input value={thirdKelas} onChange={(e)=>setThirdKelas(e.target.value)} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Kelas" />
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                    Email
                                                </label>
                                                <input value={thirdEmail} onChange={(e)=>setThirdEmail(e.target.value)} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email" />
                                                <small style={{color:"rgb(71,85,105)"}} className={
                                            thirdEmail==="" || validator.isEmail(thirdEmail) ?
                                            "hidden":
                                            "text-sm font-semibold text-blueGray-600"
                                            }>Diisi dengan format Email</small>
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                    Nomor HP
                                                </label>
                                                <input value={thirdNomor} onChange={(e)=>setThirdNomor(e.target.value)} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Nomor HP" />
                                                <small style={{color:"rgb(71,85,105)"}} className={
                                            thirdNomor==="" || validator.isMobilePhone(thirdNomor,"id-ID") || thirdNomor==="-"?
                                            "hidden":
                                            "text-sm font-semibold text-blueGray-600"
                                            }>Diisi dengan no HP, jika tidak ada tulis -</small>
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                    Screenshot Twibbon (tag sensation dan 3 teman) (jpg/jpeg)
                                                </label>
                                                <div className="flex items-center relative">
                                                    <input accept="image/jpg, image/jpeg" ref={thirdTwibbon} onChange={()=>{thirdTwibbon.current.files[0]?setThirdTwibbonVal(thirdTwibbon.current.files[0].name):setThirdTwibbonVal("")}} style={{color:"rgb(71,85,105)"}} type="file" className="w-full h-full absolute cursor-pointer opacity-0 inset-0" placeholder="Nama Lengkap" />
                                                    <input disabled value={thirdTwibbonVal} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded-l text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Upload files..." />
                                                    <button type="button" className="bg-blue-500 rounded-r-md px-3 py-3 font-bold text-white text-sm">Upload</button>
                                                </div>
                                                <small style={{color:"rgb(71,85,105)"}} className="text-sm font-semibold text-blueGray-600">
                                                    ekstensi jpg/jpeg, max 512kb
                                                </small>
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                                    KTM/Surat Keterangan Pengganti KTM/Surat Keterangan Aktif (jpg/jpeg)
                                                </label>
                                                <div className="flex items-center relative">
                                                    <input accept="image/jpg, image/jpeg" ref={thirdKtm} onChange={()=>{thirdKtm.current.files[0]?setThirdKtmVal(thirdKtm.current.files[0].name):setThirdKtmVal("")}} style={{color:"rgb(71,85,105)"}} type="file" className="w-full h-full absolute cursor-pointer opacity-0 inset-0" placeholder="Nama Lengkap" />
                                                    <input value={thirdKtmVal} disabled style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded-l text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Upload files..." />
                                                    <button type="button" className="bg-blue-500 rounded-r-md px-3 py-3 font-bold text-white text-sm">Upload</button>
                                                </div>
                                                <small style={{color:"rgb(71,85,105)"}} className="text-sm font-semibold text-blueGray-600">
                                                    ekstensi jpg/jpeg, max 512kb
                                                </small>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-center mt-6 relative flex justify-between">
                                        <div className={page>1?"text-center":"hidden"}>
                                            <button onClick={()=>{if(page>1){setPage(page-1)}}} style={{backgroundColor:"rgb(30,41,59)"}} className="text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="button">
                                                Prev
                                            </button>
                                        </div>
                                        <div className={page===1?"w-full text-center":page===2||page===3?"text-center":"hidden"}>
                                            <button onClick={()=>{if(page<4){setPage(page+1)}}} style={{backgroundColor:"rgb(30,41,59)"}} className="text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="button">
                                                Next
                                            </button>
                                        </div>
                                        <div className={page===4?"text-center relative":"hidden"}>
                                            <div className={isLoading?"absolute inset-0 w-full h-full opacity-0 z-50":"hidden"} />
                                            <button style={{backgroundColor:"rgb(30,41,59)"}} className={
                                                isLoading?
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

export default NasecRegister