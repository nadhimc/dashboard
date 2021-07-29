import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import Nasec from "../../../Images/nasec.svg"

const DashNasec = ()=>{
    return(
        <div className="flex flex-col space-y-4">
            <div className="hidden lg:flex items-center">
                <Link to="/dashboard/events" className="hover:opacity-50">
                    <FontAwesomeIcon className="mr-2" icon={faChevronLeft} />
                    Back
                </Link>
            </div>
            <div>
                <Link to="/nasec" className="block text-center w-full bg-blue-600 rounded-md py-2 font-bold text-lg text-white hover:bg-blue-500">Join</Link>
            </div>
            <div className="rounded-md p-6 border border-gray-400">
                <p className="text-xl font-bold text-center lg:text-left">NaSec (National .....)</p>
                <div className="flex mt-5 lg:space-x-7 space-y-5 lg:space-y-0 flex-col lg:flex-row">
                    <img style={{minWidth:"30%"}} className="w-full max-w-sm lg:w-1/4 mx-auto" alt="logo" src={Nasec} />
                    <p className="text-justify">
                    National Sharia Economics Championship (NaSEC) adalah perlombaan mengenai Ekonomi Islam yang diselenggarakan oleh SEF (Shariah Economics Forum) UGM dan JMME (Jamaah Mahasiswa Muslim Ekonomi) FEB UGM. Perlombaan ini bertujuan untuk menguji kemampuan seluruh peserta atas penguasaan materi ekonomi Islam serta materi pelajaran ekonomi dan akuntansi SMA. NaSEC dapat diikuti oleh seluruh pelajar SMA atau sederajat di seluruh Indonesia.
                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-4 lg:space-y-0 space-y-4">
                <div className="rounded-md p-5 border border-gray-400 w-full flex flex-col lg:w-2/5">
                    <p className="text-center text-lg font-bold">Guide</p>
                    <div className="flex flex-col flex-1 justify-center space-y-3 mt-4 ">
                        <button className="py-2 font-bold rounded-md bg-green-500 hover:opacity-80 text-white">Booklet</button>
                        <button className="py-2 font-bold rounded-md bg-green-500 hover:opacity-80 text-white">Twibbon</button>
                        <button className="py-2 font-bold rounded-md bg-green-500 hover:opacity-80 text-white">Tata Cara Pendaftaran</button>
                    </div>
                </div>
                <div className="rounded-md p-5 border border-gray-400 flex-1 h-full">
                    <p className="text-center text-lg font-bold">Timeline</p>
                    <div className="flex flex-col space-y-3 mt-4">
                        <div>
                            <p className="text-base md:text-lg">Pendaftaran</p>
                            <p className="text-sm md:text-base">20 Juli 2021 - 23 Juli 2021</p>
                        </div>
                        <div>
                            <p className="text-base md:text-lg">Pendaftaran</p>
                            <p className="text-sm md:text-base">20 Juli 2021 - 23 Juli 2021</p>
                        </div>
                        <div>
                            <p className="text-base md:text-lg">Pendaftaran</p>
                            <p className="text-sm md:text-base">20 Juli 2021 - 23 Juli 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashNasec