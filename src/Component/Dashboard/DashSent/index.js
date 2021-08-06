import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import Sent from "../../../Images/sent.svg"

const DashSent = ()=>{
    return(
        <div className="flex flex-col space-y-4">
            <div className="hidden lg:flex items-center">
                <Link to="/dashboard/events" className="hover:opacity-50">
                    <FontAwesomeIcon className="mr-2" icon={faChevronLeft} />
                    Back
                </Link>
            </div>
            <div className="rounded-md p-6 border border-gray-400">
                <p className="text-xl font-bold text-center lg:text-left">SENT (Sharia Economic National Talk Show)</p>
                <div className="flex mt-5 lg:space-x-7 space-y-5 lg:space-y-0 flex-col lg:flex-row">
                    <img style={{minWidth:"30%"}} className="w-full max-w-sm lg:w-1/4 mx-auto" alt="logo" src={Sent} />
                    <p className="text-justify">
                    Sharia Economic National Talk Show (SENT) merupakan salah satu bagian dari rangkaian acara SENSATION (Sharia Economics Acts In Innovation), acara kolaborasi tahunan yang diselenggarakan oleh Sharia Economics Forum (SEF) UGM dengan Jamaah Mahasiswa Muslim Ekonomi (JMME) FEB UGM. Tahun ini SENT mengusung tema “Optimizing the Role of the Shariah Economy and Finance in the Recovery of the National Economy”. SENT sendiri merupakan seminar nasional yang mengangkat topik Ekonomi Syariah dengan menghadirkan para pembicara yang kompeten di bidangnya serta dipandu oleh seorang moderator andal. Acara ini bertujuan untuk meningkatkan literasi keuangan syariah bagi masyarakat umum di Indonesia. Dikarenakan belum  berakhirnya pandemi pada saat ini, maka acara SENT tahun ini akan dilaksanakan secara daring pada tanggal 13 November 2021.
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
                        <p className="text-center">COMING SOON!</p>
                        {/* <div>
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
                        </div> */}
                    </div>
                </div>
            </div>
            <div>
                {/* <Link to="/sent" className="block text-center w-full bg-blue-600 rounded-md py-2 font-bold text-lg text-white hover:bg-blue-500">Daftar</Link> */}
                {/* <a href="#" className="block text-center w-full bg-gray-400 rounded-md py-2 font-bold text-lg text-white">Cooming Soon</a> */}
                <button className="block text-center w-full bg-gray-400 rounded-md py-2 font-bold text-lg text-white">Cooming Soon</button>
            </div>
        </div>
    )
}

export default DashSent