import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import Gamasurf from "../../../Images/gamasurf2022.png"
const TimelineData = [
    {
        "title": "Pendaftaran dan Pengumpulan Persyaratan",
        "date": "22 Agustus 2022 - 10 September 2022"
    },
    {
        "title": "Pengumuman Finalis",
        "date": "19 September 2022"
    },
    {
        "title": "Pendaftaran Ulang Peserta Lolos",
        "date": "20 September 2022 - 25 September 2022"
    },
    {
        "title": "Orientation",
        "date": "15 Oktober 2022 - 16 Oktober 2022"
    },
    {
        "title": "Nuture Camp",
        "date": "22 Oktober 2022, 29 Oktober 2022, dan 5 November 2022"
    },
    {
        "title": "Workshop",
        "date": "22 Oktober 2022, 29 Oktober 2022, dan 5 November 2022"
    },
    {
        "title": "Presentasi",
        "date": "12 November 2022"
    },
    {
        "title": "Seminar Participation and Awarding",
        "date": "13 November 2022"
    },

]

const TimelineItem = ({data}) => {
    return (
        <div>
            <p className="text-base md:text-lg">{data.title}</p>
            <p className="text-sm md:text-base">{data.date}</p>
        </div>
    )
}

const DashGamasurf = ()=>{
    return(
        <div className="flex flex-col space-y-4">
            <div className="hidden lg:flex items-center">
                <Link to="/dashboard/events" className="hover:opacity-50">
                    <FontAwesomeIcon className="mr-2" icon={faChevronLeft} />
                    Back
                </Link>
            </div>
            <div className="rounded-md p-6 border border-gray-400">
                <p className="text-xl font-bold text-center lg:text-left">Gamasurf</p>
                <div className="flex mt-5 lg:space-x-7 space-y-5 lg:space-y-0 flex-col lg:flex-row">
                    <img style={{minWidth:"30%"}} className="w-full max-w-sm lg:w-1/4 mx-auto" alt="logo" src={Gamasurf} />
                    <p className="text-justify">
                    Festival Riset Ekonomi Syariah Nasional bagi mahasiswa aktif S1 dari seluruh perguruan tinggi negeri maupun perguruan tinggi swasta di Indonesia yang berfokus pada pelatihan riset dengan output berupa paper penelitian.
                    </p>
                </div>
            </div>
            <div className="rounded-md p-6 border border-gray-400">
                <p className="text-xl font-bold text-center lg:text-left">Tema</p>
                <div className="flex flex-col space-y-3 mt-4">
                "Peran Ekonomi Islam dalam Perkembangan Ekonomi Indonesia Menuju SDGs 2030"
                </div>
                <p className="text-md font-bold text-center lg:text-left mt-3">Sub Tema</p>
                <ul className="mt-3">
                    <li>1. Peran Ekonomi Islam dalam Mengurangi Ketimpangan Sosial di Indonesia</li>
                    <li>2. Ekonomi Islam sebagai Acuan untuk Menciptakan Pekerja yang Mampu Bersaing di Tingkat Global</li>
                    <li>3. Perspektif Ekonomi Islam dalam Menyikapi Perekonomian Dunia di Masa Depan</li>
                    <li>4. Kesadaran Masyarakat untuk Melek terhadap Pendidikan Ekonomi Islam</li>
                </ul>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-4 lg:space-y-0 space-y-4">
                <div className="rounded-md p-5 border border-gray-400 w-full flex flex-col lg:w-2/5">
                    <p className="text-center text-lg font-bold">Download</p>
                    <div className="flex flex-col flex-1 justify-center space-y-3 mt-4 "> 
                       <a href="https://www.sensationugm.com/caradaftar" className="py-2 font-bold text-center rounded-md bg-green-500 hover:opacity-80 text-white" target="blank">Tata Cara Pendaftaran</a>   
                        {/* <a href="#" className="py-2 font-bold text-center rounded-md bg-green-500 hover:opacity-80 text-white">FAQ</a>    */}
                        {/* <a rel="noreferrer" href="https://drive.google.com/file/d/1rp_utmqmArdaZ4kGuK1TLjpzzYTGIr3g/view?usp=sharing" target="_blank" className="py-2 font-bold text-center rounded-md bg-green-500 hover:opacity-80 text-white">FAQ</a>    */}
                        {/* <a href="#" className="py-2 font-bold text-center rounded-md bg-green-500 hover:opacity-80 text-white">Guidebook</a> */}
                        {/* <a href="https://drive.google.com/file/d/1O0Dr1P4_NIIMM6uC4NWYR7SAWTiwxS6e/view?usp=sharing" className="py-2 font-bold text-center rounded-md bg-green-500 hover:opacity-80 text-white">Guidebook</a> */}
                        {/* <a rel="noreferrer" href="https://drive.google.com/drive/folders/1eRFO2pwyrZoa0ceI8KBFmlk0bUT6Igp3" target="_blank" className="py-2 font-bold text-center rounded-md bg-green-500 hover:opacity-80 text-white">Required Files</a> */}
                    </div>
                </div>
                <div className="rounded-md p-5 border border-gray-400 flex-1 h-full">
                    <p className="text-center text-lg font-bold">Timeline</p>
                    <div className="flex flex-col space-y-3 mt-4">
                        {TimelineData.map((data) => {
                            return (
                                <TimelineItem data={data}/>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div>
                <Link to="/gamasurf" className="block text-center w-full bg-blue-600 rounded-md py-2 font-bold text-lg text-white hover:bg-blue-500">Daftar</Link>
            </div>
        </div>
    )
}

export default DashGamasurf