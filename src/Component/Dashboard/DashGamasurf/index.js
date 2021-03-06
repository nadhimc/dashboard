import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import Gamasurf from "../../../Images/gamasurf.svg"
const TimelineData = [
    {
        "title": "Pendaftaran dan Pengumpulan Persyaratan",
        "date": "9 Agustus - 18 September 2021"
    },
    {
        "title": "Pengumuman Finalis",
        "date": "2 Oktober 2021"
    },
    {
        "title": "Pendaftaran Ulang Peserta Lolos",
        "date": "4 Oktober - 7 Oktober 2021"
    },
    {
        "title": "Orientation (Week 1)",
        "date": "10 Oktober - 16 Oktober 2021"
    },
    {
        "title": "Orientation (Week 2)",
        "date": "17 Oktober - 23 Oktober 2021"
    },
    {
        "title": "Pelaksanaan 6th Gamasurf",
        "date": "1 November - 7 November 2021"
    },
    {
        "title": "Awarding",
        "date": "13 November 2021"
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
                    Acara 6th Gamasurf (Gadjah Mada Shariah Economics and Business Undergraduate Research Festival) merupakan suatu festival riset tingkat nasional. Acara ini diselenggarakan untuk meningkatkan kapabilitas riset mahasiswa/i dari berbagai perguruan tinggi se-Indonesia. Rangkaian acara 6th GAMASURF 2021 meliputi, Orientation, Nurture Camp, Workshop, Group Presentation, dan Shariah Economics National Talk Show (SENT).
                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-4 lg:space-y-0 space-y-4">
                <div className="rounded-md p-5 border border-gray-400 w-full flex flex-col lg:w-2/5">
                    <p className="text-center text-lg font-bold">Download</p>
                    <div className="flex flex-col flex-1 justify-center space-y-3 mt-4 ">  
                        {/* <a href="#" className="py-2 font-bold text-center rounded-md bg-green-500 hover:opacity-80 text-white">FAQ</a>    */}
                        <a rel="noreferrer" href="https://drive.google.com/file/d/1rp_utmqmArdaZ4kGuK1TLjpzzYTGIr3g/view?usp=sharing" target="_blank" className="py-2 font-bold text-center rounded-md bg-green-500 hover:opacity-80 text-white">FAQ</a>   
                        {/* <a href="#" className="py-2 font-bold text-center rounded-md bg-green-500 hover:opacity-80 text-white">Guidebook</a> */}
                        <a href="https://drive.google.com/file/d/1O0Dr1P4_NIIMM6uC4NWYR7SAWTiwxS6e/view?usp=sharing" className="py-2 font-bold text-center rounded-md bg-green-500 hover:opacity-80 text-white">Guidebook</a>
                        <a rel="noreferrer" href="https://drive.google.com/drive/folders/1eRFO2pwyrZoa0ceI8KBFmlk0bUT6Igp3" target="_blank" className="py-2 font-bold text-center rounded-md bg-green-500 hover:opacity-80 text-white">Required Files</a>
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