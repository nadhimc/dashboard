import { createRef, useState } from "react"
import Gamasurf from "../../Images/gamasurf.svg"

const GamasurfRegister = ()=>{

    // Setting Form
    const [form, setForm] = useState(1)

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
    const [ketAktifVal, setKetAktifVal] = useState("")
    let ketAktif = createRef();
    const [ideVal, setIdeVal] = useState("")
    let ide = createRef();

    return(
        <div className="min-w-screen min-h-screen flex justify-center items-center" style={{backgroundColor:"#1e293b", backgroundImage:"url(https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/register_bg_2.png)", backgroundPosition:"center", backgroundSize:"cover"}}>
            <div className="container mx-auto px-4">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4 py-4 md:py-0">
                        <div style={{backgroundColor:"#e2e8f0"}} className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0">
                            <div className="flex justify-center items-center py-4">
                                <img src={Gamasurf} />
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
                            <div className="flex-auto px-4 lg:px-10 pb-10">
                                <form action="" method="get">
                                    {/* Pertanyaan 1 */}
                                    <div className={form===1?"block":"hidden"}>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2" for="grid-password">
                                                Nama Lengkap
                                            </label>
                                            <input onChange={(e)=>setfullname(e.target.value)} value={fullname} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Nama Lengkap" />
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2" for="grid-password">
                                                Nama Panggilan
                                            </label>
                                            <input onChange={(e)=>setnickname(e.target.value)} value={nickname} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Nama Panggilan" />
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2" for="grid-password">
                                                Email
                                            </label>
                                            <input onChange={(e)=>setemail(e.target.value)} value={email} style={{color:"rgb(71,85,105)"}} type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email" />
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2" for="grid-password">
                                                Asal Universitas
                                            </label>
                                            <input onChange={(e)=>setuniv(e.target.value)} value={univ} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Asal Universitas" />
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2" for="grid-password">
                                                Asal Daerah
                                            </label>
                                            <input onChange={(e)=>setregion(e.target.value)} value={region} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Asal Daerah" />
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2" for="grid-password">
                                                Nomor Handphone (Wa Aktif)
                                            </label>
                                            <input onChange={(e)=>setphone(e.target.value)} value={phone} style={{color:"rgb(71,85,105)"}} type="tel" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Nomor Handphone (Wa Aktif)" />
                                        </div>
                                    </div>

                                    {/* Pertanyaan 2 */}
                                    <div className={form===2?"block":"hidden"}>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2" for="grid-password">
                                                Apa motivasi mengikuti Gamasurf?
                                            </label>
                                            <textarea onChange={(e)=>setmotivasi(e.target.value)} value={motivasi} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Motivasi" />
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2" for="grid-password">
                                                Apa ekspektasi yang didapatkan setelah mengikuti Gamasurf?
                                            </label>
                                            <textarea onChange={(e)=>setekspektasi(e.target.value)} value={ekspektasi} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Ekspektasi" />
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2" for="grid-password">
                                                Pernah memiliki pengalaman di bidang riset (lomba/seminar/project)?
                                            </label>
                                            <textarea onChange={(e)=>setpengalaman(e.target.value)} value={pengalaman} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Pengalaman" />
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2" for="grid-password">
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
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2" for="grid-password">
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
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2" for="grid-password">
                                                Screenshot Twibbon (tag sensation dan 3 teman) (jpg/jpeg)
                                            </label>
                                            <div className="flex items-center relative">
                                                <input ref={twibbon} onChange={()=>{setTwibbonVal(twibbon.current.files[0].name)}} style={{color:"rgb(71,85,105)"}} type="file" className="w-full h-full absolute cursor-pointer opacity-0 inset-0" placeholder="Nama Lengkap" />
                                                <input disabled value={twibbonVal} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded-l text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Upload files..." />
                                                <button type="button" className="bg-blue-500 rounded-r-md px-3 py-3 font-bold text-white text-sm">Upload</button>
                                            </div>
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2" for="grid-password">
                                                Surat Pernyataan Orisinalitas (pdf)
                                            </label>
                                            <div className="flex items-center relative">
                                                <input ref={orisinal} onChange={()=>{setOrisinalVal(orisinal.current.files[0].name)}} style={{color:"rgb(71,85,105)"}} type="file" className="w-full h-full absolute cursor-pointer opacity-0 inset-0" placeholder="Nama Lengkap" />
                                                <input value={orisinalVal} disabled style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded-l text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Upload files..." />
                                                <button type="button" className="bg-blue-500 rounded-r-md px-3 py-3 font-bold text-white text-sm">Upload</button>
                                            </div>
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2" for="grid-password">
                                                KTM/Surat Keterangan Pengganti KTM/Surat Keterangan Aktif (jpg/jpeg)
                                            </label>
                                            <div className="flex items-center relative">
                                                <input ref={ktm} onChange={()=>{setKtmVal(ktm.current.files[0].name)}} style={{color:"rgb(71,85,105)"}} type="file" className="w-full h-full absolute cursor-pointer opacity-0 inset-0" placeholder="Nama Lengkap" />
                                                <input value={ktmVal} disabled style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded-l text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Upload files..." />
                                                <button type="button" className="bg-blue-500 rounded-r-md px-3 py-3 font-bold text-white text-sm">Upload</button>
                                            </div>
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2" for="grid-password">
                                                Surat Keterangan Aktif (jpg/jpeg)
                                            </label>
                                            <div className="flex items-center relative">
                                                <input ref={ketAktif} onChange={()=>{setKetAktifVal(ketAktif.current.files[0].name)}} style={{color:"rgb(71,85,105)"}} type="file" className="w-full h-full absolute cursor-pointer opacity-0 inset-0" placeholder="Nama Lengkap" />
                                                <input value={ketAktifVal} disabled style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded-l text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Upload files..." />
                                                <button type="button" className="bg-blue-500 rounded-r-md px-3 py-3 font-bold text-white text-sm">Upload</button>
                                            </div>
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2" for="grid-password">
                                                Ide Penelitian (pdf)
                                            </label>
                                            <div className="flex items-center relative">
                                                <input ref={ide} onChange={()=>{setIdeVal(ide.current.files[0].name)}} style={{color:"rgb(71,85,105)"}} type="file" className="absolute cursor-pointer opacity-0 inset-0" placeholder="Nama Lengkap" />
                                                <input value={ideVal} disabled style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded-l text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Upload files..." />
                                                <button type="button" className="bg-blue-500 rounded-r-md px-3 py-3 font-bold text-white text-sm">Upload</button>
                                            </div>
                                        </div>
                                    </div>


                                    {/* Button */}
                                    <div className="mt-6 flex justify-between">
                                        <div className={form>1?"text-center":"hidden"}>
                                            <button onClick={()=>{if(form>1){setForm(form-1)}}} style={{backgroundColor:"rgb(30,41,59)"}} className="text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="button">
                                                Prev
                                            </button>
                                        </div>
                                        <div className={form==1?"w-full text-center":"text-center"}>
                                            <button onClick={()=>{if(form<3){setForm(form+1)}}} style={{backgroundColor:"rgb(30,41,59)"}} className="text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="button">
                                                {form==3?"Submit":"Next"}
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