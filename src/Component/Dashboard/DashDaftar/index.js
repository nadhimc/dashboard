import { faChevronLeft, faExclamationCircle, faTimes, faCog } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect, createRef } from "react"
import { Link, Redirect } from "react-router-dom"
import validator from 'validator';


const DashDaftar = () => {

    const [isLoading, setIsLoading] = useState(true)

    const [edit, setEdit] = useState(false)

    const [uploading, setUploading] = useState(false)

    const [selesai, setSelesai] = useState(false)

    const [update, setUpdate] = useState(Date.now())
    
    const [modalImg, setModalImg] = useState("")

    const [event, setEvent] = useState("")

    const [buktiVal, setBuktiVal] = useState("")
    const [buktiErr, setBuktiErr] = useState("")

    let bukti = createRef();

    useEffect(()=>{
        if(bukti.current){
            if(bukti.current.files.length !== 0){
                if(bukti.current.files[0].type==="image/jpeg" || bukti.current.files[0].type==="image/jpg" || bukti.current.files[0].type==="image/png"){
                    if(bukti.current.files[0].size/1024 <= 512){
                        setBuktiErr("")
                    }else{
                        setBuktiErr("Maksimum ukuran file adalah 512kb")
                    }
                }else{
                    setBuktiErr("Ekstensi yang didukung adalah jpeg,jpg, dan png")
                }
            }else{
                setBuktiErr("")
            }
        }
    },[bukti,buktiVal])

    const [gamasurf, setGamasurf] = useState({      
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
    })

    const gamasurfUpdateTwibbon = createRef()
    const [gamasurfUpdateTwibbonVal, setGamasurfUpdateTwibbonVal] = useState("")
    const [gamasurfUpdateTwibbonErr, setGamasurfUpdateTwibbonErr] = useState("")
    useEffect(() => {
        if(gamasurfUpdateTwibbon.current){
            if(gamasurfUpdateTwibbon.current.files.length !== 0){
                if(gamasurfUpdateTwibbon.current.files[0].type==="image/jpeg" || gamasurfUpdateTwibbon.current.files[0].type==="image/jpg" || gamasurfUpdateTwibbon.current.files[0].type==="image/png"){
                    if(gamasurfUpdateTwibbon.current.files[0].size/1024 <= 512){
                        setGamasurfUpdateTwibbonErr("")
                    }else{
                        setGamasurfUpdateTwibbonErr("Maksimum ukuran file adalah 512kb")
                    }
                }else{
                    setGamasurfUpdateTwibbonErr("Ekstensi yang didukung adalah jpeg, jpg, atau png")
                }
            }else{
                setGamasurfUpdateTwibbonErr("")
            }
        }
    }, [gamasurfUpdateTwibbon,gamasurfUpdateTwibbonVal])

    const gamasurfUpdateKtm = createRef()
    const [gamasurfUpdateKtmVal, setGamasurfUpdateKtmVal] = useState("")
    const [gamasurfUpdateKtmErr, setGamasurfUpdateKtmErr] = useState("")
    useEffect(() => {
        if(gamasurfUpdateKtm.current){
            if(gamasurfUpdateKtm.current.files.length !== 0){
                if(gamasurfUpdateKtm.current.files[0].type==="image/jpeg" || gamasurfUpdateKtm.current.files[0].type==="image/jpg" || gamasurfUpdateKtm.current.files[0].type==="image/png"){
                    if(gamasurfUpdateKtm.current.files[0].size/1024 <= 512){
                        setGamasurfUpdateKtmErr("")
                    }else{
                        setGamasurfUpdateKtmErr("Maksimum ukuran file adalah 512kb")
                    }
                }else{
                    setGamasurfUpdateKtmErr("Ekstensi yang didukung adalah jpeg, jpg, atau png")
                }
            }else{
                setGamasurfUpdateKtmErr("")
            }
        }
    }, [gamasurfUpdateKtm,gamasurfUpdateKtmVal])

    const gamasurfUpdateIde = createRef()
    const [gamasurfUpdateIdeVal, setGamasurfUpdateIdeVal] = useState("")
    const [gamasurfUpdateIdeErr, setGamasurfUpdateIdeErr] = useState("")
    useEffect(() => {
        if(gamasurfUpdateIde.current){
            if(gamasurfUpdateIde.current.files.length !== 0){
                if(gamasurfUpdateIde.current.files[0].type==="application/pdf"){
                    if(gamasurfUpdateIde.current.files[0].size/1024/1024 <= 5){
                        setGamasurfUpdateIdeErr("")
                    }else{
                        setGamasurfUpdateIdeErr("Maksimum ukuran file adalah 5Mb")
                    }
                }else{
                    setGamasurfUpdateIdeErr("Ekstensi yang didukung adalah PDF")
                }
            }else{
                setGamasurfUpdateIdeErr("")
            }
        }
    }, [gamasurfUpdateIde,gamasurfUpdateIdeVal])

    const gamasurfUpdateOri = createRef()
    const [gamasurfUpdateOriVal, setGamasurfUpdateOriVal] = useState("")
    const [gamasurfUpdateOriErr, setGamasurfUpdateOriErr] = useState("")
    useEffect(() => {
        if(gamasurfUpdateOri.current){
            if(gamasurfUpdateOri.current.files.length !== 0){
                if(gamasurfUpdateOri.current.files[0].type==="application/pdf"){
                    if(gamasurfUpdateOri.current.files[0].size/1024/1024 <= 3){
                        setGamasurfUpdateOriErr("")
                    }else{
                        setGamasurfUpdateOriErr("Maksimum ukuran file adalah 3Mb")
                    }
                }else{
                    setGamasurfUpdateOriErr("Ekstensi yang didukung adalah PDF")
                }
            }else{
                setGamasurfUpdateOriErr("")
            }
        }
    }, [gamasurfUpdateOri,gamasurfUpdateOriVal])

    const [gamasurfUpdate, setGamasurfUpdate] = useState({      
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
        "created_at":"",
        "updated_at":""
    })

    // gamasurf Update

    const updatingGamasurf = ()=>{
        let data = new FormData()
        let error = false
        if(gamasurfUpdate.nama_lengkap!==""){
            data.append("nama_lengkap",gamasurfUpdate.nama_lengkap)
        }else{
            error = true
        }
        if(gamasurfUpdate.nama_panggilan!==""){
            data.append("nama_panggilan",gamasurfUpdate.nama_panggilan)
        }else{
            error = true
        }
        if(gamasurfUpdate.email!=="" && validator.isEmail(gamasurfUpdate.email)){
            data.append("email",gamasurfUpdate.email)
        }else{
            error = true
        }
        if(gamasurfUpdate.asal_univ!==""){
            data.append("asal_univ",gamasurfUpdate.asal_univ)
        }else{
            error = true
        }
        if(gamasurfUpdate.asal_daerah!==""){
            data.append("asal_daerah",gamasurfUpdate.asal_daerah)
        }else{
            error = true
        }
        if(gamasurfUpdate.no_wa!=="" && validator.isMobilePhone(gamasurfUpdate.no_wa,"id-ID")){
            data.append("no_wa",gamasurfUpdate.no_wa)
        }else{
            error = true
        }
        if(gamasurfUpdateTwibbon.current){
            if(gamasurfUpdateTwibbon.current.files.length !== 0){
                if(gamasurfUpdateTwibbon.current.files[0].type==="image/jpeg" || gamasurfUpdateTwibbon.current.files[0].type==="image/jpg" || gamasurfUpdateTwibbon.current.files[0].type==="image/png"){
                    if(gamasurfUpdateTwibbon.current.files[0].size/1024 <= 512){
                        data.append("twibbon",gamasurfUpdateTwibbon.current.files[0])
                    }else{
                        error = true
                    }
                }else{
                    error = true
                }
            }
        }
        if(gamasurfUpdateKtm.current){
            if(gamasurfUpdateKtm.current.files.length !== 0){
                if(gamasurfUpdateKtm.current.files[0].type==="image/jpeg" || gamasurfUpdateKtm.current.files[0].type==="image/jpg" || gamasurfUpdateKtm.current.files[0].type==="image/png"){
                    if(gamasurfUpdateKtm.current.files[0].size/1024 <= 512){
                        data.append("ktm",gamasurfUpdateKtm.current.files[0])
                    }else{
                        error = true
                    }
                }else{
                    error = true
                }
            }
        }
        if(gamasurfUpdateIde.current){
            if(gamasurfUpdateIde.current.files.length !== 0){
                if(gamasurfUpdateIde.current.files[0].type==="application/pdf"){
                    if(gamasurfUpdateIde.current.files[0].size/1024/1024 <= 5){
                        data.append("ide",gamasurfUpdateIde.current.files[0])
                    }else{
                        error = true
                    }
                }else{
                    error = true
                }
            }
        }

        if(gamasurfUpdateOri.current){
            if(gamasurfUpdateOri.current.files.length !== 0){
                if(gamasurfUpdateOri.current.files[0].type==="application/pdf"){
                    if(gamasurfUpdateOri.current.files[0].size/1024/1024 <= 3){
                        data.append("orisinalitas",gamasurfUpdateOri.current.files[0])
                    }else{
                        error = true
                    }
                }else{
                    error = true
                }
            }
        }

        if(!error){
            setUploading(true)
            setGamasurfUpdateTwibbonVal("")
            gamasurfUpdateTwibbon.current = null
            setGamasurfUpdateTwibbonErr("")
            setGamasurfUpdateKtmVal("")
            gamasurfUpdateKtm.current = null
            setGamasurfUpdateKtmErr("")
            setGamasurfUpdateIdeVal("")
            gamasurfUpdateIde.current = null
            setGamasurfUpdateIdeErr("")
            setGamasurfUpdateOriVal("")
            gamasurfUpdateOri.current = null
            fetch(`${process.env.REACT_APP_APIURL}/users/${localStorage.getItem("id")}/gamasurf?_method=put`,{
                method: "POST",
                headers:{
                    'Authorization' : `Bearer ${localStorage.getItem("key")}`
                },
                body: data
            }).then(res=>res.json())
            .then(
                (res)=>{
                    console.log(res)
                    getMyGamasurf(true)
                },(err)=>{
                    console.log(err)
                }
            )
        }
    }

    const [nasec, setNasec] = useState(
        {"id":1,"user_id":18,"nama_team":"Team Tutur","nama_sekolah":"MAN Insan Cendekia Serpong","alamat_sekolah":"Serpong Jaya","nama_pembimbing":"Pak Asep","no_pembimbing":"081224212953","komitmen":"Sangat Berkomitmen","info":"instagram","is_paid":0,"created_at":"2021-07-27T12:11:26.000000Z","updated_at":"2021-07-27T12:11:26.000000Z","member":[{"id":1,"team_id":1,"nama":"Rizkal","jenis_kelamin":"Laki-Laki","kelas":"10","email":"rizkal@gmail.com","no":"082424112212","kartu_pelajar":"peserta/ktm/1_1.jpg","twibbon":"peserta/twibbon/1_1.jpg","is_leader":1,"created_at":"2021-07-27T12:11:26.000000Z","updated_at":"2021-07-27T12:11:26.000000Z"},{"id":2,"team_id":1,"nama":"Ruka","jenis_kelamin":"Perempuan","kelas":"12","email":"ruka@gmail.com","no":"0812312312","kartu_pelajar":"peserta/ktm/1_2.jpg","twibbon":"peserta/twibbon/1_2.jpg","is_leader":0,"created_at":"2021-07-27T12:11:29.000000Z","updated_at":"2021-07-27T12:11:29.000000Z"},{"id":3,"team_id":1,"nama":"Mizuhara","jenis_kelamin":"Perempuan","kelas":"11","email":"mizuzu@gmail.com","no":"081232124124","kartu_pelajar":"peserta/ktm/1_3.jpg","twibbon":"peserta/twibbon/1_3.jpg","is_leader":0,"created_at":"2021-07-27T12:11:29.000000Z","updated_at":"2021-07-27T12:11:29.000000Z"}]}
    )

    const [nasecUpdate, setNasecUpdate] = useState(
        {"id":1,"user_id":18,"nama_team":"Team Tutur","nama_sekolah":"MAN Insan Cendekia Serpong","alamat_sekolah":"Serpong Jaya","nama_pembimbing":"Pak Asep","no_pembimbing":"081224212953","komitmen":"Sangat Berkomitmen","info":"instagram","is_paid":0,"created_at":"2021-07-27T12:11:26.000000Z","updated_at":"2021-07-27T12:11:26.000000Z","member":[{"id":1,"team_id":1,"nama":"Rizkal","jenis_kelamin":"Laki-Laki","kelas":"10","email":"rizkal@gmail.com","no":"082424112212","kartu_pelajar":"peserta/ktm/1_1.jpg","twibbon":"peserta/twibbon/1_1.jpg","is_leader":1,"created_at":"2021-07-27T12:11:26.000000Z","updated_at":"2021-07-27T12:11:26.000000Z"},{"id":2,"team_id":1,"nama":"Ruka","jenis_kelamin":"Perempuan","kelas":"12","email":"ruka@gmail.com","no":"0812312312","kartu_pelajar":"peserta/ktm/1_2.jpg","twibbon":"peserta/twibbon/1_2.jpg","is_leader":0,"created_at":"2021-07-27T12:11:29.000000Z","updated_at":"2021-07-27T12:11:29.000000Z"},{"id":3,"team_id":1,"nama":"Mizuhara","jenis_kelamin":"Perempuan","kelas":"11","email":"mizuzu@gmail.com","no":"081232124124","kartu_pelajar":"peserta/ktm/1_3.jpg","twibbon":"peserta/twibbon/1_3.jpg","is_leader":0,"created_at":"2021-07-27T12:11:29.000000Z","updated_at":"2021-07-27T12:11:29.000000Z"}]}
    )

    let nasecTeamForm = new FormData()
    let nasecUpdateFirstForm = new FormData()
    let nasecUpdateSecondForm = new FormData()
    let nasecUpdateThirdForm = new FormData()

    const nasecUpdateFirstTwibbon = createRef()
    const [nasecUpdateFirstTwibbonVal, setNasecUpdateFirstTwibbonVal] = useState("")
    const [nasecUpdateFirstTwibbonErr, setNasecUpdateFirstTwibbonErr] = useState("")

    useEffect(() => {
        if(nasecUpdateFirstTwibbon.current){
            if(nasecUpdateFirstTwibbon.current.files.length !== 0){
                if(nasecUpdateFirstTwibbon.current.files[0].type==="image/jpeg" || nasecUpdateFirstTwibbon.current.files[0].type==="image/jpg" || nasecUpdateFirstTwibbon.current.files[0].type==="image/png"){
                    if(nasecUpdateFirstTwibbon.current.files[0].size/1024 <= 512){
                        setNasecUpdateFirstTwibbonErr("")
                    }else{
                        setNasecUpdateFirstTwibbonErr("Maksimum ukuran file adalah 512kb")
                    }
                }else{
                    setNasecUpdateFirstTwibbonErr("Ekstensi yang didukung adalah jpeg, jpg, atau png")
                }
            }else{
                setNasecUpdateFirstTwibbonErr("")
            }
        }
    }, [nasecUpdateFirstTwibbon,nasecUpdateFirstTwibbonVal])

    const nasecUpdateSecondTwibbon = createRef()
    const [nasecUpdateSecondTwibbonVal, setNasecUpdateSecondTwibbonVal] = useState("")
    const [nasecUpdateSecondTwibbonErr, setNasecUpdateSecondTwibbonErr] = useState("")

    useEffect(() => {
        if(nasecUpdateSecondTwibbon.current){
            if(nasecUpdateSecondTwibbon.current.files.length !== 0){
                if(nasecUpdateSecondTwibbon.current.files[0].type==="image/jpeg" || nasecUpdateSecondTwibbon.current.files[0].type==="image/jpg" || nasecUpdateSecondTwibbon.current.files[0].type==="image/png"){
                    if(nasecUpdateSecondTwibbon.current.files[0].size/1024 <= 512){
                        setNasecUpdateSecondTwibbonErr("")
                    }else{
                        setNasecUpdateSecondTwibbonErr("Maksimum ukuran file adalah 512kb")
                    }
                }else{
                    setNasecUpdateSecondTwibbonErr("Ekstensi yang didukung adalah jpeg, jpg, atau png")
                }
            }else{
                setNasecUpdateSecondTwibbonErr("")
            }
        }
    }, [nasecUpdateSecondTwibbon,nasecUpdateSecondTwibbonVal])

    const nasecUpdateThirdTwibbon = createRef()
    const [nasecUpdateThirdTwibbonVal, setNasecUpdateThirdTwibbonVal] = useState("")
    const [nasecUpdateThirdTwibbonErr, setNasecUpdateThirdTwibbonErr] = useState("")

    useEffect(() => {
        if(nasecUpdateThirdTwibbon.current){
            if(nasecUpdateThirdTwibbon.current.files.length !== 0){
                if(nasecUpdateThirdTwibbon.current.files[0].type==="image/jpeg" || nasecUpdateThirdTwibbon.current.files[0].type==="image/jpg" || nasecUpdateThirdTwibbon.current.files[0].type==="image/png"){
                    if(nasecUpdateThirdTwibbon.current.files[0].size/1024 <= 512){
                        setNasecUpdateThirdTwibbonErr("")
                    }else{
                        setNasecUpdateThirdTwibbonErr("Maksimum ukuran file adalah 512kb")
                    }
                }else{
                    setNasecUpdateThirdTwibbonErr("Ekstensi yang didukung adalah jpeg, jpg, atau png")
                }
            }else{
                setNasecUpdateThirdTwibbonErr("")
            }
        }
    }, [nasecUpdateThirdTwibbon,nasecUpdateThirdTwibbonVal])

    const nasecUpdateFirstKtm = createRef()
    const [nasecUpdateFirstKtmVal, setNasecUpdateFirstKtmVal] = useState("")
    const [nasecUpdateFirstKtmErr, setNasecUpdateFirstKtmErr] = useState("")

    useEffect(() => {
        if(nasecUpdateFirstKtm.current){
            if(nasecUpdateFirstKtm.current.files.length !== 0){
                if(nasecUpdateFirstKtm.current.files[0].type==="image/jpeg" || nasecUpdateFirstKtm.current.files[0].type==="image/jpg" || nasecUpdateFirstKtm.current.files[0].type==="image/png"){
                    if(nasecUpdateFirstKtm.current.files[0].size/1024 <= 512){
                        setNasecUpdateFirstKtmErr("")
                    }else{
                        setNasecUpdateFirstKtmErr("Maksimum ukuran file adalah 512kb")
                    }
                }else{
                    setNasecUpdateFirstKtmErr("Ekstensi yang didukung adalah jpeg, jpg, atau png")
                }
            }else{
                setNasecUpdateFirstKtmErr("")
            }
        }
    }, [nasecUpdateFirstKtm,nasecUpdateFirstKtmVal])

    const nasecUpdateSecondKtm = createRef()
    const [nasecUpdateSecondKtmVal, setNasecUpdateSecondKtmVal] = useState("")
    const [nasecUpdateSecondKtmErr, setNasecUpdateSecondKtmErr] = useState("")

    useEffect(() => {
        if(nasecUpdateSecondKtm.current){
            if(nasecUpdateSecondKtm.current.files.length !== 0){
                if(nasecUpdateSecondKtm.current.files[0].type==="image/jpeg" || nasecUpdateSecondKtm.current.files[0].type==="image/jpg" || nasecUpdateSecondKtm.current.files[0].type==="image/png"){
                    if(nasecUpdateSecondKtm.current.files[0].size/1024 <= 512){
                        setNasecUpdateSecondKtmErr("")
                    }else{
                        setNasecUpdateSecondKtmErr("Maksimum ukuran file adalah 512kb")
                    }
                }else{
                    setNasecUpdateSecondKtmErr("Ekstensi yang didukung adalah jpeg, jpg, atau png")
                }
            }else{
                setNasecUpdateSecondKtmErr("")
            }
        }
    }, [nasecUpdateSecondKtm,nasecUpdateSecondKtmVal])

    const nasecUpdateThirdKtm = createRef()
    const [nasecUpdateThirdKtmVal, setNasecUpdateThirdKtmVal] = useState("")
    const [nasecUpdateThirdKtmErr, setNasecUpdateThirdKtmErr] = useState("")

    useEffect(() => {
        if(nasecUpdateThirdKtm.current){
            if(nasecUpdateThirdKtm.current.files.length !== 0){
                if(nasecUpdateThirdKtm.current.files[0].type==="image/jpeg" || nasecUpdateThirdKtm.current.files[0].type==="image/jpg" || nasecUpdateThirdKtm.current.files[0].type==="image/png"){
                    if(nasecUpdateThirdKtm.current.files[0].size/1024 <= 512){
                        setNasecUpdateThirdKtmErr("")
                    }else{
                        setNasecUpdateThirdKtmErr("Maksimum ukuran file adalah 512kb")
                    }
                }else{
                    setNasecUpdateThirdKtmErr("Ekstensi yang didukung adalah jpeg, jpg, atau png")
                }
            }else{
                setNasecUpdateThirdKtmErr("")
            }
        }
    }, [nasecUpdateThirdKtm,nasecUpdateThirdKtmVal])

    // nasec update

    const updatingNasec = ()=>{
        let error = false
        if(nasecUpdateFirstTwibbon.current){
            if(nasecUpdateFirstTwibbon.current.files.length !== 0){
                if(nasecUpdateFirstTwibbon.current.files[0].type==="image/jpeg" || nasecUpdateFirstTwibbon.current.files[0].type==="image/jpg" || nasecUpdateFirstTwibbon.current.files[0].type==="image/png"){
                    if(nasecUpdateFirstTwibbon.current.files[0].size/1024 <= 512){
                        nasecUpdateFirstForm.append("twibbon",nasecUpdateFirstTwibbon.current.files[0])
                    }else{
                        error = true
                    }
                }else{
                    error = true
                }
            }
        }
        console.log(nasecUpdateFirstForm.get("twibbon"))

        if(nasecUpdateFirstKtm.current){
            if(nasecUpdateFirstKtm.current.files.length !== 0){
                if(nasecUpdateFirstKtm.current.files[0].type==="image/jpeg" || nasecUpdateFirstKtm.current.files[0].type==="image/jpg" || nasecUpdateFirstKtm.current.files[0].type==="image/png"){
                    if(nasecUpdateFirstKtm.current.files[0].size/1024 <= 512){
                        nasecUpdateFirstForm.append("kartu_pelajar",nasecUpdateFirstKtm.current.files[0])
                    }else{
                        error = true
                    }
                }else{
                    error = true
                }
            }
        }



        if(nasecUpdateSecondTwibbon.current){
            if(nasecUpdateSecondTwibbon.current.files.length !== 0){
                if(nasecUpdateSecondTwibbon.current.files[0].type==="image/jpeg" || nasecUpdateSecondTwibbon.current.files[0].type==="image/jpg" || nasecUpdateSecondTwibbon.current.files[0].type==="image/png"){
                    if(nasecUpdateSecondTwibbon.current.files[0].size/1024 <= 512){
                        nasecUpdateSecondForm.append("twibbon",nasecUpdateSecondTwibbon.current.files[0])
                    }else{
                        error = true
                    }
                }else{
                    error = true
                }
            }
        }

        if(nasecUpdateSecondKtm.current){
            if(nasecUpdateSecondKtm.current.files.length !== 0){
                if(nasecUpdateSecondKtm.current.files[0].type==="image/jpeg" || nasecUpdateSecondKtm.current.files[0].type==="image/jpg" || nasecUpdateSecondKtm.current.files[0].type==="image/png"){
                    if(nasecUpdateSecondKtm.current.files[0].size/1024 <= 512){
                        nasecUpdateSecondForm.append("kartu_pelajar",nasecUpdateSecondKtm.current.files[0])
                    }else{
                        error = true
                    }
                }else{
                    error = true
                }
            }
        }

        if(nasecUpdateThirdTwibbon.current){
            if(nasecUpdateThirdTwibbon.current.files.length !== 0){
                if(nasecUpdateThirdTwibbon.current.files[0].type==="image/jpeg" || nasecUpdateThirdTwibbon.current.files[0].type==="image/jpg" || nasecUpdateThirdTwibbon.current.files[0].type==="image/png"){
                    if(nasecUpdateThirdTwibbon.current.files[0].size/1024 <= 512){
                        nasecUpdateThirdForm.append("twibbon",nasecUpdateThirdTwibbon.current.files[0])
                    }else{
                        error = true
                    }
                }else{
                    error = true
                }
            }
        }

        if(nasecUpdateThirdKtm.current){
            if(nasecUpdateThirdKtm.current.files.length !== 0){
                if(nasecUpdateThirdKtm.current.files[0].type==="image/jpeg" || nasecUpdateThirdKtm.current.files[0].type==="image/jpg" || nasecUpdateThirdKtm.current.files[0].type==="image/png"){
                    if(nasecUpdateThirdKtm.current.files[0].size/1024 <= 512){
                        nasecUpdateThirdForm.append("kartu_pelajar",nasecUpdateThirdKtm.current.files[0])
                    }else{
                        error = true
                    }
                }else{
                    error = true
                }
            }
        }

        if(bukti.current){
            if(bukti.current.files.length !== 0){
                if(bukti.current.files[0].type==="image/jpeg" || bukti.current.files[0].type==="image/jpg" || bukti.current.files[0].type==="image/png"){
                    if(bukti.current.files[0].size/1024 <= 512){
                        nasecTeamForm.append("bukti",bukti.current.files[0])
                    }else{
                        error = true
                    }
                }else{
                    error = true
                }
            }
        }
        
        if(
            nasecUpdate.nama_team!==""
            && nasecUpdate.nama_sekolah!==""
            && nasecUpdate.alamat_sekolah!==""
            && nasecUpdate.nama_pembimbing!==""
            && nasecUpdate.no_pembimbing!=="" && validator.isMobilePhone(nasecUpdate.no_pembimbing,"id-ID")
            // anggota 1
            && nasecUpdate.member[0].nama!==""
            && nasecUpdate.member[0].jenis_kelamin!==""
            && nasecUpdate.member[0].kelas!==""
            && nasecUpdate.member[0].email!=="" && validator.isEmail(nasecUpdate.member[0].email)
            && nasecUpdate.member[0].no!=="" && validator.isMobilePhone(nasecUpdate.member[0].no,"id-ID")
            // anggota 2
            && nasecUpdate.member[1].nama!==""
            && nasecUpdate.member[1].jenis_kelamin!==""
            && nasecUpdate.member[1].kelas!==""
            && nasecUpdate.member[1].email!=="" && validator.isEmail(nasecUpdate.member[0].email)
            && nasecUpdate.member[1].no!=="" && validator.isMobilePhone(nasecUpdate.member[0].no,"id-ID")
            // anggota 3
            && nasecUpdate.member[2].nama!==""
            && nasecUpdate.member[2].jenis_kelamin!==""
            && nasecUpdate.member[2].kelas!==""
            && nasecUpdate.member[2].email!=="" && validator.isEmail(nasecUpdate.member[0].email)
            && nasecUpdate.member[2].no!=="" && validator.isMobilePhone(nasecUpdate.member[0].no,"id-ID")
            && !error
        ){
            // jalankan fetch
            setUploading(true)
            uploadingNasecTeam()
        }
    }

    const uploadingNasecTeam = ()=>{
        nasecTeamForm.append("nama_team",nasecUpdate.nama_team)
        nasecTeamForm.append("nama_sekolah",nasecUpdate.nama_sekolah)
        nasecTeamForm.append("alamat_sekolah",nasecUpdate.alamat_sekolah)
        nasecTeamForm.append("nama_pembimbing",nasecUpdate.nama_pembimbing)
        nasecTeamForm.append("no_pembimbing",nasecUpdate.no_pembimbing)
        nasecTeamForm.append("komitmen",nasecUpdate.komitmen)
        nasecTeamForm.append("info",nasecUpdate.info)
        fetch(`${process.env.REACT_APP_APIURL}/users/${localStorage.getItem("id")}/nasec`,{
            method:"PUT",
            headers:{
                // 'Content-Type': 'application/json',
                'Authorization' : `Bearer ${localStorage.getItem("key")}`
            },
            body:nasecTeamForm
        }).then(res=>res.json())
        .then(
            (res)=>{
                console.log(res)
                uploadingNasecFirstMember()
            },(err)=>{
                console.log(err)
                uploadingNasecFirstMember()
            }
        )
    }

    const uploadingNasecFirstMember = ()=>{
        console.log(nasecUpdateFirstForm.get("twibbon"))
        
        nasecUpdateFirstForm.append("nama",nasecUpdate.member[0].nama)
        nasecUpdateFirstForm.append("email",nasecUpdate.member[0].email)
        nasecUpdateFirstForm.append("jenis_kelamin",nasecUpdate.member[0].jenis_kelamin)
        nasecUpdateFirstForm.append("kelas",nasecUpdate.member[0].kelas)
        nasecUpdateFirstForm.append("no",nasecUpdate.member[0].no)

        fetch(`${process.env.REACT_APP_APIURL}/nasec/peserta/${nasecUpdate.member[0].id}?_method=put`,{
            method:"POST",
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem("key")}`
            },
            body: nasecUpdateFirstForm
        }).then(res=>res.json())
        .then(
            (res)=>{
                console.log(res)
                uploadingNasecSecondMember()
            },(err)=>{
                console.log(err)
                uploadingNasecSecondMember()
            }
        )
    }

    const uploadingNasecSecondMember = ()=>{
        nasecUpdateSecondForm.append("nama",nasecUpdate.member[1].nama)
        nasecUpdateSecondForm.append("email",nasecUpdate.member[1].email)
        nasecUpdateSecondForm.append("jenis_kelamin",nasecUpdate.member[1].jenis_kelamin)
        nasecUpdateSecondForm.append("kelas",nasecUpdate.member[1].kelas)
        nasecUpdateSecondForm.append("no",nasecUpdate.member[1].no)

        fetch(`${process.env.REACT_APP_APIURL}/nasec/peserta/${nasecUpdate.member[1].id}?_method=put`,{
            method:"POST",
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem("key")}`
            },
            body: nasecUpdateSecondForm
        }).then(res=>res.json())
        .then(
            (res)=>{
                console.log(res)
                uploadingNasecThirdMember()
            },(err)=>{
                console.log(err)
                uploadingNasecThirdMember()
            }
        )
    }

    const uploadingNasecThirdMember = ()=>{
        
        nasecUpdateThirdForm.append("nama",nasecUpdate.member[2].nama)
        nasecUpdateThirdForm.append("email",nasecUpdate.member[2].email)
        nasecUpdateThirdForm.append("jenis_kelamin",nasecUpdate.member[2].jenis_kelamin)
        nasecUpdateThirdForm.append("kelas",nasecUpdate.member[2].kelas)
        nasecUpdateThirdForm.append("no",nasecUpdate.member[2].no)

        fetch(`${process.env.REACT_APP_APIURL}/nasec/peserta/${nasecUpdate.member[2].id}?_method=put`,{
            method:"POST",
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem("key")}`
            },
            body: nasecUpdateThirdForm
        }).then(res=>res.json())
        .then(
            (res)=>{
                console.log(res)
                getMyNasec(true)
            },(err)=>{
                console.log(err)
                getMyNasec(true)
            }
        )
    }

    const [sent, setSent] = useState({
        nama_lengkap:"",
        email:"",
        asal_institusi:"",
        status:"",
        info:""
    })

    // sent update
    const [sentUpdate, setSentUpdate] = useState({
        nama_lengkap:"",
        email:"",
        asal_institusi:"",
        status:"",
        info:""
    })

    const updatingSent = ()=>{
        console.log(JSON.stringify(sentUpdate))
        if(
            sentUpdate.nama_lengkap!==""
            && validator.isEmail(sentUpdate.email)
            && sentUpdate.email!==""
            && sentUpdate.asal_institusi!==""
            && sentUpdate.status!==""
            && sentUpdate.info!==""
        ){
            setUploading(true)
            fetch(`${process.env.REACT_APP_APIURL}/users/${localStorage.getItem("id")}/sent`,{
                method: "PUT",
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${localStorage.getItem("key")}`
                },
                body: JSON.stringify(sentUpdate)
            }).then(res=>res.json())
            .then(
                (res)=>{
                    console.log(res)
                    getMySent(true)
                },(err)=>{
                    console.log(err)
                }
            )
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
                if(res.meta.code===401 || (res.meta.code===200 && res.data===false)){
                    setSelesai(true)
                    // atasi error sementara
                }else{
                    setEvent(res.data)
                }
            },
            (err)=>{
                console.log(err)
            }
        )
    }

    const getMyNasec = (afteredit=false)=>{
        if(event==="nasec"){
            console.log("get my nasec")
            fetch(`${process.env.REACT_APP_APIURL}/users/${localStorage.getItem("id")}/nasec`,{
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${localStorage.getItem("key")}`
                }
            }).then(res=>res.json())
            .then(
                (res)=>{
                    console.log(res)
                    setNasec({
                        "id":res.data.id,
                        "user_id":res.data.user_id,
                        "nama_team":res.data.nama_team,
                        "nama_sekolah":res.data.nama_sekolah,
                        "alamat_sekolah":res.data.alamat_sekolah,
                        "nama_pembimbing":res.data.nama_pembimbing,
                        "no_pembimbing":res.data.no_pembimbing,
                        "komitmen":res.data.komitmen,
                        "bukti":res.data.bukti,
                        "info":res.data.info,
                        "is_paid":res.data.is_paid,
                        "created_at":res.data.created_at,
                        "updated_at":res.data.updated_at,
                        "member": res.data.member
                    })
                    setNasecUpdate({
                        "id":res.data.id,
                        "user_id":res.data.user_id,
                        "nama_team":res.data.nama_team,
                        "nama_sekolah":res.data.nama_sekolah,
                        "alamat_sekolah":res.data.alamat_sekolah,
                        "nama_pembimbing":res.data.nama_pembimbing,
                        "no_pembimbing":res.data.no_pembimbing,
                        "komitmen":res.data.komitmen,
                        "bukti":res.data.bukti,
                        "info":res.data.info,
                        "is_paid":res.data.is_paid,
                        "created_at":res.data.created_at,
                        "updated_at":res.data.updated_at,
                        "member": res.data.member
                    })
                    setIsLoading(false)
                    setUpdate(Date.now())
                    if(afteredit){
                        setUploading(false)
                        setEdit(false)
                    }
                },(err)=>{
                    console.log(err)
                }
            )
        }
    }

    const getMyGamasurf = (afteredit=false)=>{
        if(event==="gamasurf"){
            console.log("get my gamasurf")
            fetch(`${process.env.REACT_APP_APIURL}/users/${localStorage.getItem("id")}/gamasurf`,{
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${localStorage.getItem("key")}`
                }
            }).then(res=>res.json())
            .then(
                (res)=>{
                    console.log(res)
                    setGamasurf({
                        "id":res.data.id,
                        "user_id":res.data.user_id,
                        "nama_lengkap":res.data.nama_lengkap,
                        "nama_panggilan":res.data.nama_panggilan,
                        "email":res.data.email,
                        "asal_univ":res.data.asal_univ,
                        "asal_daerah":res.data.asal_daerah,
                        "no_wa":res.data.no_wa,
                        "motivasi":res.data.motivasi,
                        "ekspetasi":res.data.ekspetasi,
                        "pengalaman":res.data.pengalaman,
                        "komitmen":res.data.komitmen,
                        "info":res.data.info,
                        "twibbon":res.data.twibbon,
                        "orisinalitas":res.data.orisinalitas,
                        "ktm":res.data.ktm,
                        "ide":res.data.ide,
                        "created_at":res.data.created_at,
                        "updated_at":res.data.updated_at
                    })
                    setGamasurfUpdate({
                        "id":res.data.id,
                        "user_id":res.data.user_id,
                        "nama_lengkap":res.data.nama_lengkap,
                        "nama_panggilan":res.data.nama_panggilan,
                        "email":res.data.email,
                        "asal_univ":res.data.asal_univ,
                        "asal_daerah":res.data.asal_daerah,
                        "no_wa":res.data.no_wa,
                        "motivasi":res.data.motivasi,
                        "ekspetasi":res.data.ekspetasi,
                        "pengalaman":res.data.pengalaman,
                        "komitmen":res.data.komitmen,
                        "info":res.data.info,
                        "twibbon":res.data.twibbon,
                        "orisinalitas":res.data.orisinalitas,
                        "ktm":res.data.ktm,
                        "ide":res.data.ide,
                        "created_at":res.data.created_at,
                        "updated_at":res.data.updated_at
                    })
                    setIsLoading(false)
                    setUpdate(Date.now())
                    if(afteredit){
                        setUploading(false)
                        setEdit(false)
                    }
                },(err)=>{
                    console.log(err)
                }
            )
        }
    }

    const getMySent = (afteredit=false)=>{
        if(event==="sent"){
            console.log("get my sent")
            fetch(`${process.env.REACT_APP_APIURL}/users/${localStorage.getItem("id")}/sent`,{
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${localStorage.getItem("key")}`
                }
            }).then(res=>res.json())
            .then(
                (res)=>{
                    console.log(res)
                    setSent({
                        nama_lengkap: res.data.nama_lengkap,
                        email: res.data.email,
                        asal_institusi: res.data.asal_institusi,
                        status: res.data.status,
                        info: res.data.info,
                    })
                    setSentUpdate({
                        nama_lengkap: res.data.nama_lengkap,
                        email: res.data.email,
                        asal_institusi: res.data.asal_institusi,
                        status: res.data.status,
                        info: res.data.info,
                    })
                    setIsLoading(false)
                    if(afteredit){
                        setUploading(false)
                        setEdit(false)
                    }
                },(err)=>{
                    console.log(err)
                }
            )
        }
    }

    useEffect(getMyGamasurf,[event])
    useEffect(getMySent,[event])
    useEffect(getMyNasec,[event])

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
            <div className={event==="gamasurf"&&!isLoading?"border rounded-md p-4 relative":"hidden"}>
                <div style={{backgroundColor:"rgba(255,255,255,.4)"}} className={uploading?"absolute w-full h-full z-10 flex flex-col space-y-3 items-center justify-center":"hidden"}>
                    <FontAwesomeIcon className="animate-spin text-6xl" style={{animationDuration:"3s"}} icon={faCog} />
                    <p className="text-xl font-bold animate-bounce">Uploading</p>
                </div>
                <h1 className="text-center text-xl font-bold">Gamasurf</h1>
                <button onClick={()=>
                    {if(!edit)
                    {setEdit(!edit)}
                    else{
                        setEdit(!edit)
                        setGamasurfUpdateTwibbonVal("")
                        gamasurfUpdateTwibbon.current = null
                        setGamasurfUpdateTwibbonErr("")
                        setGamasurfUpdateKtmVal("")
                        gamasurfUpdateKtm.current = null
                        setGamasurfUpdateKtmErr("")
                        setGamasurfUpdateIdeVal("")
                        gamasurfUpdateIde.current = null
                        setGamasurfUpdateIdeErr("")
                        setGamasurfUpdateOriVal("")
                        gamasurfUpdateOri.current = null
                        setGamasurfUpdateOriErr("")
                    }}} className={edit?"py-2 w-full max-w-xs mx-auto block mt-3 mb-6 rounded-md bg-red-600 text-white hover:bg-red-500":"py-2 w-full max-w-xs mx-auto block mt-3 mb-6 rounded-md bg-blue-600 text-white hover:bg-blue-500"}>
                    {edit?"Cancel Edit":"Edit Document"}
                </button>
                <div>
                    <div className="flex-1 flex flex-col space-y-4 mt-3">
                        <div className="flex flex-col md:flex-row relative">
                            <p className="md:w-1/3 text-lg md:text-base text-gray-900">Nama Lengkap</p>
                            <p className={edit?"hidden":""}>{gamasurf.nama_lengkap}</p>
                            <input value={gamasurfUpdate.nama_lengkap} onChange={(e)=>{setGamasurfUpdate({...gamasurfUpdate,nama_lengkap:e.target.value})}} type="text" className={!edit?"hidden":"border-0 px-3 py-1 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150 relative"} />
                            <div className={edit&&gamasurfUpdate.nama_lengkap===""?"text-red-600 absolute right-0.5 h-full flex justify-center items-center":"hidden"}>
                            <FontAwesomeIcon icon={faExclamationCircle} />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row relative">
                            <p className="md:w-1/3 text-lg md:text-base text-gray-900">Nama Panggilan</p>
                            <p className={edit?"hidden":""}>{gamasurf.nama_panggilan}</p>
                            <input value={gamasurfUpdate.nama_panggilan} onChange={(e)=>{setGamasurfUpdate({...gamasurfUpdate,nama_panggilan:e.target.value})}} type="text" className={!edit?"hidden":"border-0 px-3 py-1 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150 relative"} />
                            <div className={edit&&gamasurfUpdate.nama_panggilan===""?"text-red-600 absolute right-0.5 h-full flex justify-center items-center":"hidden"}>
                                <FontAwesomeIcon icon={faExclamationCircle} />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row relative">
                            <p className="md:w-1/3 text-lg md:text-base text-gray-900">Email</p>
                            <p className={edit?"hidden":""}>{gamasurf.email}</p>
                            <input value={gamasurfUpdate.email} onChange={(e)=>{setGamasurfUpdate({...gamasurfUpdate,email:e.target.value})}} type="text" className={!edit?"hidden":"border-0 px-3 py-1 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150 relative"} />
                            <div className={edit&&(gamasurfUpdate.email===""||!validator.isEmail(gamasurfUpdate.email))?"text-red-600 absolute right-0.5 h-full flex justify-center items-center":"hidden"}>
                                <FontAwesomeIcon icon={faExclamationCircle} />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row relative">
                            <p className="md:w-1/3 text-lg md:text-base text-gray-900">Asal Universitas</p>
                            <p className={edit?"hidden":""}>{gamasurf.asal_univ}</p>
                            <input value={gamasurfUpdate.asal_univ} onChange={(e)=>{setGamasurfUpdate({...gamasurfUpdate,asal_univ:e.target.value})}} type="text" className={!edit?"hidden":"border-0 px-3 py-1 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150 relative"} />
                            <div className={edit&&gamasurfUpdate.asal_univ===""?"text-red-600 absolute right-0.5 h-full flex justify-center items-center":"hidden"}>
                                <FontAwesomeIcon icon={faExclamationCircle} />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row relative">
                            <p className="md:w-1/3 text-lg md:text-base text-gray-900">Asal Daerah</p>
                            <p className={edit?"hidden":""}>{gamasurf.asal_daerah}</p>
                            <input value={gamasurfUpdate.asal_daerah} onChange={(e)=>{setGamasurfUpdate({...gamasurfUpdate,asal_daerah:e.target.value})}} type="text" className={!edit?"hidden":"border-0 px-3 py-1 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150 relative"} />
                            <div className={edit&&gamasurfUpdate.asal_daerah===""?"text-red-600 absolute right-0.5 h-full flex justify-center items-center":"hidden"}>
                                <FontAwesomeIcon className={edit&&gamasurfUpdate.asal_daerah===""?"text-red-600 absolute right-0.5":"hidden"} icon={faExclamationCircle} />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row relative">
                            <p className="md:w-1/3 text-lg md:text-base text-gray-900">No Handphone</p>
                            <p className={edit?"hidden":""}>{gamasurf.no_wa}</p>
                            <input value={gamasurfUpdate.no_wa} onChange={(e)=>{setGamasurfUpdate({...gamasurfUpdate,no_wa:e.target.value})}} type="text" className={!edit?"hidden":"border-0 px-3 py-1 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150 relative"} />
                            <div className={edit&&(gamasurfUpdate.no_wa===""||!validator.isMobilePhone(gamasurfUpdate.no_wa,"id-ID"))?"text-red-600 absolute right-0.5 h-full flex justify-center items-center":"hidden"}>
                                <FontAwesomeIcon icon={faExclamationCircle} />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row relative">
                            <p className="md:w-1/3 text-lg md:text-base text-gray-900">Motivasi</p>
                            <p className={edit?"hidden":""}>{gamasurf.motivasi}</p>
                            <input value={gamasurfUpdate.motivasi} onChange={(e)=>{setGamasurfUpdate({...gamasurfUpdate,motivasi:e.target.value})}} type="text" className={!edit?"hidden":"border-0 px-3 py-1 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150 relative"} />
                            <div className={edit&&gamasurfUpdate.motivasi===""?"text-red-600 absolute right-0.5 h-full flex justify-center items-center":"hidden"}>
                                <FontAwesomeIcon icon={faExclamationCircle} />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row relative">
                            <p className="md:w-1/3 text-lg md:text-base text-gray-900">Ekspetasi</p>
                            <p className={edit?"hidden":""}>{gamasurf.ekspetasi}</p>
                            <input value={gamasurfUpdate.ekspetasi} onChange={(e)=>{setGamasurfUpdate({...gamasurfUpdate,ekspetasi:e.target.value})}} type="text" className={!edit?"hidden":"border-0 px-3 py-1 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150 relative"} />
                            <div className={edit&&gamasurfUpdate.ekspetasi===""?"text-red-600 absolute right-0.5 h-full flex justify-center items-center":"hidden"}>
                                <FontAwesomeIcon icon={faExclamationCircle} />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row relative">
                            <p className="md:w-1/3 text-lg md:text-base text-gray-900">Pengalaman</p>
                            <p className={edit?"hidden":""}>{gamasurf.pengalaman}</p>
                            <input value={gamasurfUpdate.pengalaman} onChange={(e)=>{setGamasurfUpdate({...gamasurfUpdate,pengalaman:e.target.value})}} type="text" className={!edit?"hidden":"border-0 px-3 py-1 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150 relative"} />
                            <div className={edit&&gamasurfUpdate.pengalaman===""?"text-red-600 absolute right-0.5 h-full flex justify-center items-center":"hidden"}>
                                <FontAwesomeIcon icon={faExclamationCircle} />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <p className="md:w-1/3 text-lg md:text-base text-gray-900">KTM</p>
                            <img onClick={()=>{changeImg(`https://sensation.smartsoft.co.id/sensation/storage/app/peserta/ktm/`+gamasurf.ktm+"?"+update)}} className={edit?"hidden":"max-w-full w-24 cursor-pointer"} alt="ktm" src={`https://sensation.smartsoft.co.id/sensation/storage/app/peserta/ktm/`+gamasurf.ktm+"?"+update} />
                            <div className="flex-1">
                                <div className={!edit?"hidden":"flex items-center relative flex-1"}>
                                    <input accept="image/jpg, image/jpeg, image/png" ref={gamasurfUpdateKtm} onChange={()=>{gamasurfUpdateKtm.current.files[0]?setGamasurfUpdateKtmVal(gamasurfUpdateKtm.current.files[0].name):setGamasurfUpdateKtmVal("")}} style={{color:"rgb(71,85,105)"}} type="file" className="w-full h-full absolute cursor-pointer opacity-0 inset-0" />
                                    <input disabled value={gamasurfUpdateKtmVal} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded-l text-sm shadow focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150" placeholder="Upload files..." />
                                    <button type="button" className="bg-blue-500 rounded-r-md px-3 py-3 font-bold text-white text-sm">Upload</button>
                                </div>
                                <small className={!edit?"hidden":gamasurfUpdateKtmErr===""?"ml-1 text-gray-700":"ml-1 text-red-500"}><FontAwesomeIcon className={gamasurfUpdateKtmErr===""?"hidden":""} icon={faExclamationCircle} /> {gamasurfUpdateKtmErr===""?"Kosongkan jika tidak mengubah file sebelumnya":gamasurfUpdateKtmErr}</small>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <p className="md:w-1/3 text-lg md:text-base text-gray-900">Twibbon</p>
                            <img onClick={()=>{changeImg(`https://sensation.smartsoft.co.id/sensation/storage/app/peserta/twibbon/`+gamasurf.twibbon+"?"+update)}} className={edit?"hidden":"max-w-full w-24 cursor-pointer"} alt="twibbon" src={`https://sensation.smartsoft.co.id/sensation/storage/app/peserta/twibbon/`+gamasurf.twibbon+"?"+update} />
                            <div className="flex-1">
                                <div className={!edit?"hidden":"flex items-center relative flex-1"}>
                                    <input accept="image/jpg, image/jpeg, image/png" ref={gamasurfUpdateTwibbon} onChange={()=>{gamasurfUpdateTwibbon.current.files[0]?setGamasurfUpdateTwibbonVal(gamasurfUpdateTwibbon.current.files[0].name):setGamasurfUpdateTwibbonVal("")}} style={{color:"rgb(71,85,105)"}} type="file" className="w-full h-full absolute cursor-pointer opacity-0 inset-0" />
                                    <input disabled value={gamasurfUpdateTwibbonVal} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded-l text-sm shadow focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150" placeholder="Upload files..." />
                                    <button type="button" className="bg-blue-500 rounded-r-md px-3 py-3 font-bold text-white text-sm">Upload</button>
                                </div>
                                <small className={!edit?"hidden":gamasurfUpdateTwibbonErr===""?"ml-1 text-gray-700":"ml-1 text-red-500"}><FontAwesomeIcon className={gamasurfUpdateTwibbonErr===""?"hidden":""} icon={faExclamationCircle} /> {gamasurfUpdateTwibbonErr===""?"Kosongkan jika tidak mengubah file sebelumnya":gamasurfUpdateTwibbonErr}</small>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <p className="md:w-1/3 text-lg md:text-base text-gray-900">Ide</p>
                            <a className={edit?"hidden":"hover:text-blue-400"} href={`https://sensation.smartsoft.co.id/sensation/storage/app/peserta/ide/`+gamasurf.ide}>
                                Klik disini
                            </a>
                            <div className="flex-1">
                                <div className={!edit?"hidden":"flex items-center relative flex-1"}>
                                    <input accept=".pdf" ref={gamasurfUpdateIde} onChange={()=>{gamasurfUpdateIde.current.files[0]?setGamasurfUpdateIdeVal(gamasurfUpdateIde.current.files[0].name):setGamasurfUpdateIdeVal("")}} style={{color:"rgb(71,85,105)"}} type="file" className="w-full h-full absolute cursor-pointer opacity-0 inset-0" />
                                    <input disabled value={gamasurfUpdateIdeVal} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded-l text-sm shadow focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150" placeholder="Upload files..." />
                                    <button type="button" className="bg-blue-500 rounded-r-md px-3 py-3 font-bold text-white text-sm">Upload</button>
                                </div>
                                <small className={!edit?"hidden":gamasurfUpdateIdeErr===""?"ml-1 text-gray-700":"ml-1 text-red-500"}><FontAwesomeIcon className={gamasurfUpdateIdeErr===""?"hidden":""} icon={faExclamationCircle} /> {gamasurfUpdateIdeErr===""?"Kosongkan jika tidak mengubah file sebelumnya":gamasurfUpdateIdeErr}</small>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <p className="md:w-1/3 text-lg md:text-base text-gray-900">File Orisinalitas</p>
                            <a className={edit?"hidden":"hover:text-blue-400"} href={`https://sensation.smartsoft.co.id/sensation/storage/app/peserta/orisinalitas/`+gamasurf.orisinalitas}>
                                Klik disini
                            </a>
                            <div className="flex-1">
                                <div className={!edit?"hidden":"flex items-center relative flex-1"}>
                                    <input accept=".pdf" ref={gamasurfUpdateOri} onChange={()=>{gamasurfUpdateOri.current.files[0]?setGamasurfUpdateOriVal(gamasurfUpdateOri.current.files[0].name):setGamasurfUpdateOriVal("")}} style={{color:"rgb(71,85,105)"}} type="file" className="w-full h-full absolute cursor-pointer opacity-0 inset-0" />
                                    <input disabled value={gamasurfUpdateOriVal} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded-l text-sm shadow focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150" placeholder="Upload files..." />
                                    <button type="button" className="bg-blue-500 rounded-r-md px-3 py-3 font-bold text-white text-sm">Upload</button>
                                </div>
                                <small className={!edit?"hidden":gamasurfUpdateOriErr===""?"ml-1 text-gray-700":"ml-1 text-red-500"}><FontAwesomeIcon className={gamasurfUpdateOriErr===""?"hidden":""} icon={faExclamationCircle} /> {gamasurfUpdateOriErr===""?"Kosongkan jika tidak mengubah file sebelumnya":gamasurfUpdateOriErr}</small>
                            </div>
                        </div>
                    </div>
                    <button onClick={updatingGamasurf} className={!edit?"hidden":"w-full max-w-xs rounded-md py-2 bg-blue-600 text-white mx-auto mt-7 block hover:bg-blue-500"}>
                            Submit
                    </button>
                </div>
            </div>

            {/* Nasec */}
            <div className={event==="nasec"&&!isLoading?"border rounded-md p-4 relative":"hidden"}>
                <div style={{backgroundColor:"rgba(255,255,255,.4)"}} className={uploading?"absolute w-full h-full z-10 flex flex-col space-y-3 items-center justify-center":"hidden"}>
                    <FontAwesomeIcon className="animate-spin text-6xl" style={{animationDuration:"3s"}} icon={faCog} />
                    <p className="text-xl font-bold animate-bounce">Uploading</p>
                </div>
                <h1 className="text-center text-xl font-bold">Nasec</h1>
                <button onClick={()=>{
                    setEdit(!edit)
                    setNasecUpdate(nasec)
                    }} className={edit?"py-2 w-full max-w-xs mx-auto block mt-3 mb-6 rounded-md bg-red-600 text-white hover:bg-red-500":"py-2 w-full max-w-xs mx-auto block mt-3 mb-6 rounded-md bg-blue-600 text-white hover:bg-blue-500"}>
                    {edit?"Cancel Edit":"Edit Document"}
                </button>
                <div>
                    <div className="flex-1 flex flex-col space-y-4">
                        <div className="flex flex-col md:flex-row relative">
                            <p className="md:w-1/3 text-lg md:text-base text-gray-900">Nama Team</p>
                            <p className={edit?"hidden":""}>{nasec.nama_team}</p>
                            <input value={nasecUpdate.nama_team} onChange={(e)=>{setNasecUpdate({...nasecUpdate,nama_team:e.target.value})}} type="text" className={!edit?"hidden":"border-0 px-3 py-1 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150 relative"} />
                            <div className={edit&&(nasecUpdate.nama_team==="")?"text-red-600 absolute right-0.5 h-full flex justify-center items-center":"hidden"}>
                                <FontAwesomeIcon icon={faExclamationCircle} />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row relative">
                            <p className="md:w-1/3 text-lg md:text-base text-gray-900">Nama Sekolah</p>
                            <p className={edit?"hidden":""}>{nasec.nama_sekolah}</p>
                            <input value={nasecUpdate.nama_sekolah} onChange={(e)=>{setNasecUpdate({...nasecUpdate,nama_sekolah:e.target.value})}} type="text" className={!edit?"hidden":"border-0 px-3 py-1 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150 relative"} />
                            <div className={edit&&(nasecUpdate.nama_sekolah==="")?"text-red-600 absolute right-0.5 h-full flex justify-center items-center":"hidden"}>
                                <FontAwesomeIcon icon={faExclamationCircle} />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row relative">
                            <p className="md:w-1/3 text-lg md:text-base text-gray-900">Alamat Sekolah</p>
                            <p className={edit?"hidden":""}>{nasec.alamat_sekolah}</p>
                            <input value={nasecUpdate.alamat_sekolah} onChange={(e)=>{setNasecUpdate({...nasecUpdate,alamat_sekolah:e.target.value})}} type="text" className={!edit?"hidden":"border-0 px-3 py-1 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150 relative"} />
                            <div className={edit&&(nasecUpdate.alamat_sekolah==="")?"text-red-600 absolute right-0.5 h-full flex justify-center items-center":"hidden"}>
                                <FontAwesomeIcon icon={faExclamationCircle} />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row relative">
                            <p className="md:w-1/3 text-lg md:text-base text-gray-900">Nama Pembimbing</p>
                            <p className={edit?"hidden":""}>{nasec.nama_pembimbing}</p>
                            <input value={nasecUpdate.nama_pembimbing} onChange={(e)=>{setNasecUpdate({...nasecUpdate,nama_pembimbing:e.target.value})}} type="text" className={!edit?"hidden":"border-0 px-3 py-1 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150 relative"} />
                            <div className={edit&&(nasecUpdate.nama_pembimbing==="")?"text-red-600 absolute right-0.5 h-full flex justify-center items-center":"hidden"}>
                                <FontAwesomeIcon icon={faExclamationCircle} />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row relative">
                            <p className="md:w-1/3 text-lg md:text-base text-gray-900">No Pembimbing</p>
                            <p className={edit?"hidden":""}>{nasec.no_pembimbing}</p>
                            <input value={nasecUpdate.no_pembimbing} onChange={(e)=>{setNasecUpdate({...nasecUpdate,no_pembimbing:e.target.value})}} type="text" className={!edit?"hidden":"border-0 px-3 py-1 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150 relative"} />
                            <div className={edit&&(nasecUpdate.no_pembimbing===""||!validator.isMobilePhone(nasecUpdate.no_pembimbing,"id-ID"))?"text-red-600 absolute right-0.5 h-full flex justify-center items-center":"hidden"}>
                                <FontAwesomeIcon icon={faExclamationCircle} />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <p className="md:w-1/3 text-lg md:text-base text-gray-900">Bukti Pembayaran</p>
                            <img onClick={()=>{changeImg(`https://sensation.smartsoft.co.id/sensation/storage/app/team/bukti/`+nasec.bukti+"?"+update)}} className={edit?"hidden":"max-w-full w-24 cursor-pointer"} alt="bukti" src={`https://sensation.smartsoft.co.id/sensation/storage/app/team/bukti/`+nasec.bukti+"?"+update} />
                            <div className="flex-1">
                                <div className={!edit?"hidden":"flex items-center relative flex-1"}>
                                    <input accept="image/jpg, image/jpeg, image/png" ref={bukti} onChange={()=>{bukti.current.files[0]?setBuktiVal(bukti.current.files[0].name):setBuktiVal("")}} style={{color:"rgb(71,85,105)"}} type="file" className="w-full h-full absolute cursor-pointer opacity-0 inset-0" />
                                    <input disabled value={buktiVal} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded-l text-sm shadow focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150" placeholder="Upload files..." />
                                    <button type="button" className="bg-blue-500 rounded-r-md px-3 py-3 font-bold text-white text-sm">Upload</button>
                                </div>
                                <small className={!edit?"hidden":buktiErr===""?"ml-1 text-gray-700":"ml-1 text-red-500"}><FontAwesomeIcon className={buktiErr===""?"hidden":""} icon={faExclamationCircle} /> {buktiErr===""?"Kosongkan jika tidak mengubah file sebelumnya":buktiErr}</small>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3 text-lg md:text-base text-gray-900">Anggota Pertama{parseInt(nasec.member[0].is_leader)===1?" (Ketua)":""}</div>
                            <div className={edit?"hidden":""}>
                                <p>{nasec.member[0].nama}</p>
                                <p>{nasec.member[0].email}</p>
                                <p>{nasec.member[0].jenis_kelamin}</p>
                                <p>Kelas {nasec.member[0].kelas}</p>
                                <p>{nasec.member[0].no}</p>
                                <p className="mb-1">
                                    <img onClick={()=>{changeImg(`https://sensation.smartsoft.co.id/sensation/storage/app/peserta/kartu_pelajar/`+nasec.member[0].kartu_pelajar+"?"+update)}} className="max-w-full w-24 cursor-pointer" alt="ktm" src={`https://sensation.smartsoft.co.id/sensation/storage/app/peserta/kartu_pelajar/`+nasec.member[0].kartu_pelajar+"?"+update} />
                                </p>
                                <p>
                                    <img onClick={()=>{changeImg(`https://sensation.smartsoft.co.id/sensation/storage/app/peserta/twibbon/`+nasec.member[0].twibbon+"?"+update)}} className="max-w-full w-24 cursor-pointer" alt="ktm" src={`https://sensation.smartsoft.co.id/sensation/storage/app/peserta/twibbon/`+nasec.member[0].twibbon+"?"+update} />
                                </p>
                            </div>
                            <div className={!edit?"hidden":"flex-1"}>
                                <div className="flex flex-col flex-1 mb-2">
                                    <p className="text-sm pl-2 mb-1">Nama</p>
                                    <div className="relative flex-1">
                                        <input value={nasecUpdate.member[0].nama} onChange={(e)=>{
                                            let a = nasecUpdate.member
                                            a[0].nama = e.target.value
                                            setNasecUpdate({...nasecUpdate,member: a})
                                        }} type="text" className={!edit?"hidden":"border-0 px-3 py-1 placeholder-blueGray-300 bg-white rounded text-sm shadow w-full focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150 relative"} />
                                        <div className={edit&&(nasecUpdate.member[0].nama==="")?"text-red-600 absolute right-0.5 top-0 h-full flex justify-center items-center":"hidden"}>
                                            <FontAwesomeIcon icon={faExclamationCircle} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 mb-2">
                                    <p className="text-sm pl-2 mb-1">Email</p>
                                    <div className="relative flex-1">
                                        <input value={nasecUpdate.member[0].email} onChange={(e)=>{
                                            let a = nasecUpdate.member
                                            a[0].email = e.target.value
                                            setNasecUpdate({...nasecUpdate,member: a})
                                        }} type="text" className={!edit?"hidden":"border-0 px-3 py-1 placeholder-blueGray-300 bg-white rounded text-sm shadow w-full focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150 relative"} />
                                        <div className={edit&&(nasecUpdate.member[0].email==="" || !validator.isEmail(nasecUpdate.member[0].email))?"text-red-600 absolute right-0.5 top-0 h-full flex justify-center items-center":"hidden"}>
                                            <FontAwesomeIcon icon={faExclamationCircle} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <div className="relative w-full mb-3">
                                        <div className="flex relative">
                                        <div style={{left:nasecUpdate.member[0].jenis_kelamin==="Laki-laki"?0:"50%"}} className="w-1/2 rounded-md bg-blue-700 top-0 transition-all duration-300 bottom-0 absolute opacity-40" />
                                            <button type="button" onClick={()=>{
                                                let a = nasecUpdate.member
                                                a[0].jenis_kelamin = "Laki-laki"
                                                setNasecUpdate({...nasecUpdate,member: a})
                                            }} className="w-full py-2 bg-white focus:outline-none rounded-l-md">
                                                Laki-laki
                                            </button>
                                            <button type="button" onClick={()=>{
                                                let a = nasecUpdate.member
                                                a[0].jenis_kelamin = "Perempuan"
                                                setNasecUpdate({...nasecUpdate,member: a})
                                            }} className="w-full py-2 bg-white focus:outline-none rounded-r-md">
                                                Perempuan
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 mb-2">
                                    <p className="text-sm pl-2 mb-1">Kelas</p>
                                    <div className="relative flex-1">
                                        <input value={nasecUpdate.member[0].kelas} onChange={(e)=>{
                                            let a = nasecUpdate.member
                                            a[0].kelas = e.target.value
                                            setNasecUpdate({...nasecUpdate,member: a})
                                        }} type="text" className={!edit?"hidden":"border-0 px-3 py-1 placeholder-blueGray-300 bg-white rounded text-sm shadow w-full focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150 relative"} />
                                        <div className={edit&&(nasecUpdate.member[0].kelas==="")?"text-red-600 absolute right-0.5 top-0 h-full flex justify-center items-center":"hidden"}>
                                            <FontAwesomeIcon icon={faExclamationCircle} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 mb-2">
                                    <p className="text-sm pl-2 mb-1">Nomor Hp</p>
                                    <div className="relative flex-1">
                                        <input value={nasecUpdate.member[0].no} onChange={(e)=>{
                                            let a = nasecUpdate.member
                                            a[0].no = e.target.value
                                            setNasecUpdate({...nasecUpdate,member: a})
                                        }} type="text" className={!edit?"hidden":"border-0 px-3 py-1 placeholder-blueGray-300 bg-white rounded text-sm shadow w-full focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150 relative"} />
                                        <div className={edit&&(nasecUpdate.member[0].no===""||!validator.isMobilePhone(nasecUpdate.member[0].no,"id-ID"))?"text-red-600 absolute right-0.5 top-0 h-full flex justify-center items-center":"hidden"}>
                                            <FontAwesomeIcon icon={faExclamationCircle} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 mb-2">
                                    <p className="text-sm pl-2 mb-1">Twibbon</p>
                                    <div className="flex-1">
                                        <div className={!edit?"hidden":"flex items-center relative flex-1"}>
                                            <input accept="image/jpg, image/jpeg, image/png" ref={nasecUpdateFirstTwibbon} onChange={()=>{nasecUpdateFirstTwibbon.current.files[0]?setNasecUpdateFirstTwibbonVal(nasecUpdateFirstTwibbon.current.files[0].name):setNasecUpdateFirstTwibbonVal("")}} style={{color:"rgb(71,85,105)"}} type="file" className="w-full h-full absolute cursor-pointer opacity-0 inset-0" />
                                            <input disabled value={nasecUpdateFirstTwibbonVal} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded-l text-sm shadow focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150" placeholder="Upload files..." />
                                            <button type="button" className="bg-blue-500 rounded-r-md px-3 py-3 font-bold text-white text-sm">Upload</button>
                                        </div>
                                        <small className={!edit?"hidden":nasecUpdateFirstTwibbonErr===""?"ml-1 text-gray-700":"ml-1 text-red-500"}><FontAwesomeIcon className={nasecUpdateFirstTwibbonErr===""?"hidden":""} icon={faExclamationCircle} /> {nasecUpdateFirstTwibbonErr===""?"Kosongkan jika tidak mengubah file sebelumnya":nasecUpdateFirstTwibbonErr}</small>
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 mb-2">
                                    <p className="text-sm pl-2 mb-1">Ktm</p>
                                    <div className="flex-1">
                                        <div className={!edit?"hidden":"flex items-center relative flex-1"}>
                                            <input accept="image/jpg, image/jpeg, image/png" ref={nasecUpdateFirstKtm} onChange={()=>{nasecUpdateFirstKtm.current.files[0]?setNasecUpdateFirstKtmVal(nasecUpdateFirstKtm.current.files[0].name):setNasecUpdateFirstKtmVal("")}} style={{color:"rgb(71,85,105)"}} type="file" className="w-full h-full absolute cursor-pointer opacity-0 inset-0" />
                                            <input disabled value={nasecUpdateFirstKtmVal} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded-l text-sm shadow focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150" placeholder="Upload files..." />
                                            <button type="button" className="bg-blue-500 rounded-r-md px-3 py-3 font-bold text-white text-sm">Upload</button>
                                        </div>
                                        <small className={!edit?"hidden":nasecUpdateFirstKtmErr===""?"ml-1 text-gray-700":"ml-1 text-red-500"}><FontAwesomeIcon className={nasecUpdateFirstKtmErr===""?"hidden":""} icon={faExclamationCircle} /> {nasecUpdateFirstKtmErr===""?"Kosongkan jika tidak mengubah file sebelumnya":nasecUpdateFirstKtmErr}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <p className="md:w-1/3 text-lg md:text-base text-gray-900">Anggota Kedua{parseInt(nasec.member[1].is_leader)===1?" (Ketua)":""}</p>
                            <div className={edit?"hidden":""}>
                                <p>{nasec.member[1].nama}</p>
                                <p>{nasec.member[1].email}</p>
                                <p>{nasec.member[1].jenis_kelamin}</p>
                                <p>Kelas {nasec.member[1].kelas}</p>
                                <p>{nasec.member[1].no}</p>
                                <p className="mb-1">
                                    <img onClick={()=>{changeImg(`https://sensation.smartsoft.co.id/sensation/storage/app/peserta/kartu_pelajar/`+nasec.member[1].kartu_pelajar+"?"+update)}} className="max-w-full w-24 cursor-pointer" alt="ktm" src={`https://sensation.smartsoft.co.id/sensation/storage/app/peserta/kartu_pelajar/`+nasec.member[1].kartu_pelajar+"?"+update} />
                                </p>
                                <p>
                                    <img onClick={()=>{changeImg(`https://sensation.smartsoft.co.id/sensation/storage/app/peserta/twibbon/`+nasec.member[1].twibbon+"?"+update)}} className="max-w-full w-24 cursor-pointer" alt="ktm" src={`https://sensation.smartsoft.co.id/sensation/storage/app/peserta/twibbon/`+nasec.member[1].twibbon+"?"+update} />
                                </p>
                            </div>
                            <div className={!edit?"hidden":"flex-1"}>
                                <div className="flex flex-col flex-1 mb-2">
                                    <p className="text-sm pl-2 mb-1">Nama</p>
                                    <div className="relative flex-1">
                                        <input value={nasecUpdate.member[1].nama} onChange={(e)=>{
                                            let a = nasecUpdate.member
                                            a[1].nama = e.target.value
                                            setNasecUpdate({...nasecUpdate,member: a})
                                        }} type="text" className={!edit?"hidden":"border-0 px-3 py-1 placeholder-blueGray-300 bg-white rounded text-sm shadow w-full focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150 relative"} />
                                        <div className={edit&&(nasecUpdate.member[1].nama==="")?"text-red-600 absolute right-0.5 top-0 h-full flex justify-center items-center":"hidden"}>
                                            <FontAwesomeIcon icon={faExclamationCircle} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 mb-2">
                                    <p className="text-sm pl-2 mb-1">Email</p>
                                    <div className="relative flex-1">
                                        <input value={nasecUpdate.member[1].email} onChange={(e)=>{
                                            let a = nasecUpdate.member
                                            a[1].email = e.target.value
                                            setNasecUpdate({...nasecUpdate,member: a})
                                        }} type="text" className={!edit?"hidden":"border-0 px-3 py-1 placeholder-blueGray-300 bg-white rounded text-sm shadow w-full focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150 relative"} />
                                        <div className={edit&&(nasecUpdate.member[1].email==="" || !validator.isEmail(nasecUpdate.member[1].email))?"text-red-600 absolute right-0.5 top-0 h-full flex justify-center items-center":"hidden"}>
                                            <FontAwesomeIcon icon={faExclamationCircle} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <div className="relative w-full mb-3">
                                        <div className="flex relative">
                                        <div style={{left:nasecUpdate.member[1].jenis_kelamin==="Laki-laki"?0:"50%"}} className="w-1/2 rounded-md bg-blue-700 top-0 transition-all duration-300 bottom-0 absolute opacity-40" />
                                            <button type="button" onClick={()=>{
                                                let a = nasecUpdate.member
                                                a[1].jenis_kelamin = "Laki-laki"
                                                setNasecUpdate({...nasecUpdate,member: a})
                                            }} className="w-full py-2 bg-white focus:outline-none rounded-l-md">
                                                Laki-laki
                                            </button>
                                            <button type="button" onClick={()=>{
                                                let a = nasecUpdate.member
                                                a[1].jenis_kelamin = "Perempuan"
                                                setNasecUpdate({...nasecUpdate,member: a})
                                            }} className="w-full py-2 bg-white focus:outline-none rounded-r-md">
                                                Perempuan
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 mb-2">
                                    <p className="text-sm pl-2 mb-1">Kelas</p>
                                    <div className="relative flex-1">
                                        <input value={nasecUpdate.member[1].kelas} onChange={(e)=>{
                                            let a = nasecUpdate.member
                                            a[1].kelas = e.target.value
                                            setNasecUpdate({...nasecUpdate,member: a})
                                        }} type="text" className={!edit?"hidden":"border-0 px-3 py-1 placeholder-blueGray-300 bg-white rounded text-sm shadow w-full focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150 relative"} />
                                        <div className={edit&&(nasecUpdate.member[1].kelas==="")?"text-red-600 absolute right-0.5 top-0 h-full flex justify-center items-center":"hidden"}>
                                            <FontAwesomeIcon icon={faExclamationCircle} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 mb-2">
                                    <p className="text-sm pl-2 mb-1">Nomor Hp</p>
                                    <div className="relative flex-1">
                                        <input value={nasecUpdate.member[1].no} onChange={(e)=>{
                                            let a = nasecUpdate.member
                                            a[1].no = e.target.value
                                            setNasecUpdate({...nasecUpdate,member: a})
                                        }} type="text" className={!edit?"hidden":"border-0 px-3 py-1 placeholder-blueGray-300 bg-white rounded text-sm shadow w-full focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150 relative"} />
                                        <div className={edit&&(nasecUpdate.member[1].no===""||!validator.isMobilePhone(nasecUpdate.member[1].no,"id-ID"))?"text-red-600 absolute right-0.5 top-0 h-full flex justify-center items-center":"hidden"}>
                                            <FontAwesomeIcon icon={faExclamationCircle} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 mb-2">
                                    <p className="text-sm pl-2 mb-1">Twibbon</p>
                                    <div className="flex-1">
                                        <div className={!edit?"hidden":"flex items-center relative flex-1"}>
                                            <input accept="image/jpg, image/jpeg, image/png" ref={nasecUpdateSecondTwibbon} onChange={()=>{nasecUpdateSecondTwibbon.current.files[0]?setNasecUpdateSecondTwibbonVal(nasecUpdateSecondTwibbon.current.files[0].name):setNasecUpdateSecondTwibbonVal("")}} style={{color:"rgb(71,85,105)"}} type="file" className="w-full h-full absolute cursor-pointer opacity-0 inset-0" />
                                            <input disabled value={nasecUpdateSecondTwibbonVal} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded-l text-sm shadow focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150" placeholder="Upload files..." />
                                            <button type="button" className="bg-blue-500 rounded-r-md px-3 py-3 font-bold text-white text-sm">Upload</button>
                                        </div>
                                        <small className={!edit?"hidden":nasecUpdateSecondTwibbonErr===""?"ml-1 text-gray-700":"ml-1 text-red-500"}><FontAwesomeIcon className={nasecUpdateSecondTwibbonErr===""?"hidden":""} icon={faExclamationCircle} /> {nasecUpdateSecondTwibbonErr===""?"Kosongkan jika tidak mengubah file sebelumnya":nasecUpdateSecondTwibbonErr}</small>
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 mb-2">
                                    <p className="text-sm pl-2 mb-1">Ktm</p>
                                    <div className="flex-1">
                                        <div className={!edit?"hidden":"flex items-center relative flex-1"}>
                                            <input accept="image/jpg, image/jpeg, image/png" ref={nasecUpdateSecondKtm} onChange={()=>{nasecUpdateSecondKtm.current.files[0]?setNasecUpdateSecondKtmVal(nasecUpdateSecondKtm.current.files[0].name):setNasecUpdateSecondKtmVal("")}} style={{color:"rgb(71,85,105)"}} type="file" className="w-full h-full absolute cursor-pointer opacity-0 inset-0" />
                                            <input disabled value={nasecUpdateSecondKtmVal} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded-l text-sm shadow focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150" placeholder="Upload files..." />
                                            <button type="button" className="bg-blue-500 rounded-r-md px-3 py-3 font-bold text-white text-sm">Upload</button>
                                        </div>
                                        <small className={!edit?"hidden":nasecUpdateSecondKtmErr===""?"ml-1 text-gray-700":"ml-1 text-red-500"}><FontAwesomeIcon className={nasecUpdateSecondKtmErr===""?"hidden":""} icon={faExclamationCircle} /> {nasecUpdateSecondKtmErr===""?"Kosongkan jika tidak mengubah file sebelumnya":nasecUpdateSecondKtmErr}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <p className="md:w-1/3 text-lg md:text-base text-gray-900">Anggota Ketiga{parseInt(nasec.member[2].is_leader)===1?" (Ketua)":""}</p>
                            <div className={edit?"hidden":""}>
                                <p>{nasec.member[2].nama}</p>
                                <p>{nasec.member[2].email}</p>
                                <p>{nasec.member[2].jenis_kelamin}</p>
                                <p>Kelas {nasec.member[2].kelas}</p>
                                <p>{nasec.member[2].no}</p>
                                <p className="mb-1">
                                    <img onClick={()=>{changeImg(`https://sensation.smartsoft.co.id/sensation/storage/app/peserta/kartu_pelajar/`+nasec.member[2].kartu_pelajar+"?"+update)}} className="max-w-full w-24 cursor-pointer" alt="ktm" src={`https://sensation.smartsoft.co.id/sensation/storage/app/peserta/kartu_pelajar/`+nasec.member[2].kartu_pelajar+"?"+update} />
                                </p>
                                <p>
                                    <img onClick={()=>{changeImg(`https://sensation.smartsoft.co.id/sensation/storage/app/peserta/twibbon/`+nasec.member[2].twibbon+"?"+update)}} className="max-w-full w-24 cursor-pointer" alt="ktm" src={`https://sensation.smartsoft.co.id/sensation/storage/app/peserta/twibbon/`+nasec.member[2].twibbon+"?"+update} />
                                </p>
                            </div>
                            <div className={!edit?"hidden":"flex-1"}>
                                <div className="flex flex-col flex-1 mb-2">
                                    <p className="text-sm pl-2 mb-1">Nama</p>
                                    <div className="relative flex-1">
                                        <input value={nasecUpdate.member[2].nama} onChange={(e)=>{
                                            let a = nasecUpdate.member
                                            a[2].nama = e.target.value
                                            setNasecUpdate({...nasecUpdate,member: a})
                                        }} type="text" className={!edit?"hidden":"border-0 px-3 py-1 placeholder-blueGray-300 bg-white rounded text-sm shadow w-full focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150 relative"} />
                                        <div className={edit&&(nasecUpdate.member[2].nama==="")?"text-red-600 absolute right-0.5 top-0 h-full flex justify-center items-center":"hidden"}>
                                            <FontAwesomeIcon icon={faExclamationCircle} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 mb-2">
                                    <p className="text-sm pl-2 mb-1">Email</p>
                                    <div className="relative flex-1">
                                        <input value={nasecUpdate.member[2].email} onChange={(e)=>{
                                            let a = nasecUpdate.member
                                            a[2].email = e.target.value
                                            setNasecUpdate({...nasecUpdate,member: a})
                                        }} type="text" className={!edit?"hidden":"border-0 px-3 py-1 placeholder-blueGray-300 bg-white rounded text-sm shadow w-full focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150 relative"} />
                                        <div className={edit&&(nasecUpdate.member[2].email==="" || !validator.isEmail(nasecUpdate.member[2].email))?"text-red-600 absolute right-0.5 top-0 h-full flex justify-center items-center":"hidden"}>
                                            <FontAwesomeIcon icon={faExclamationCircle} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <div className="relative w-full mb-3">
                                        <div className="flex relative">
                                        <div style={{left:nasecUpdate.member[2].jenis_kelamin==="Laki-laki"?0:"50%"}} className="w-1/2 rounded-md bg-blue-700 top-0 transition-all duration-300 bottom-0 absolute opacity-40" />
                                            <button type="button" onClick={()=>{
                                                let a = nasecUpdate.member
                                                a[2].jenis_kelamin = "Laki-laki"
                                                setNasecUpdate({...nasecUpdate,member: a})
                                            }} className="w-full py-2 bg-white focus:outline-none rounded-l-md">
                                                Laki-laki
                                            </button>
                                            <button type="button" onClick={()=>{
                                                let a = nasecUpdate.member
                                                a[2].jenis_kelamin = "Perempuan"
                                                setNasecUpdate({...nasecUpdate,member: a})
                                            }} className="w-full py-2 bg-white focus:outline-none rounded-r-md">
                                                Perempuan
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 mb-2">
                                    <p className="text-sm pl-2 mb-1">Kelas</p>
                                    <div className="relative flex-1">
                                        <input value={nasecUpdate.member[2].kelas} onChange={(e)=>{
                                            let a = nasecUpdate.member
                                            a[2].kelas = e.target.value
                                            setNasecUpdate({...nasecUpdate,member: a})
                                        }} type="text" className={!edit?"hidden":"border-0 px-3 py-1 placeholder-blueGray-300 bg-white rounded text-sm shadow w-full focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150 relative"} />
                                        <div className={edit&&(nasecUpdate.member[2].kelas==="")?"text-red-600 absolute right-0.5 top-0 h-full flex justify-center items-center":"hidden"}>
                                            <FontAwesomeIcon icon={faExclamationCircle} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 mb-2">
                                    <p className="text-sm pl-2 mb-1">Nomor Hp</p>
                                    <div className="relative flex-1">
                                        <input value={nasecUpdate.member[2].no} onChange={(e)=>{
                                            let a = nasecUpdate.member
                                            a[2].no = e.target.value
                                            setNasecUpdate({...nasecUpdate,member: a})
                                        }} type="text" className={!edit?"hidden":"border-0 px-3 py-1 placeholder-blueGray-300 bg-white rounded text-sm shadow w-full focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150 relative"} />
                                        <div className={edit&&(nasecUpdate.member[2].no===""||!validator.isMobilePhone(nasecUpdate.member[2].no,"id-ID"))?"text-red-600 absolute right-0.5 top-0 h-full flex justify-center items-center":"hidden"}>
                                            <FontAwesomeIcon icon={faExclamationCircle} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 mb-2">
                                    <p className="text-sm pl-2 mb-1">Twibbon</p>
                                    <div className="flex-1">
                                        <div className={!edit?"hidden":"flex items-center relative flex-1"}>
                                            <input accept="image/jpg, image/jpeg, image/png" ref={nasecUpdateThirdTwibbon} onChange={()=>{nasecUpdateThirdTwibbon.current.files[0]?setNasecUpdateThirdTwibbonVal(nasecUpdateThirdTwibbon.current.files[0].name):setNasecUpdateThirdTwibbonVal("")}} style={{color:"rgb(71,85,105)"}} type="file" className="w-full h-full absolute cursor-pointer opacity-0 inset-0" />
                                            <input disabled value={nasecUpdateThirdTwibbonVal} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded-l text-sm shadow focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150" placeholder="Upload files..." />
                                            <button type="button" className="bg-blue-500 rounded-r-md px-3 py-3 font-bold text-white text-sm">Upload</button>
                                        </div>
                                        <small className={!edit?"hidden":nasecUpdateThirdTwibbonErr===""?"ml-1 text-gray-700":"ml-1 text-red-500"}><FontAwesomeIcon className={nasecUpdateThirdTwibbonErr===""?"hidden":""} icon={faExclamationCircle} /> {nasecUpdateThirdTwibbonErr===""?"Kosongkan jika tidak mengubah file sebelumnya":nasecUpdateThirdTwibbonErr}</small>
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 mb-2">
                                    <p className="text-sm pl-2 mb-1">Ktm</p>
                                    <div className="flex-1">
                                        <div className={!edit?"hidden":"flex items-center relative flex-1"}>
                                            <input accept="image/jpg, image/jpeg, image/png" ref={nasecUpdateThirdKtm} onChange={()=>{nasecUpdateThirdKtm.current.files[0]?setNasecUpdateThirdKtmVal(nasecUpdateThirdKtm.current.files[0].name):setNasecUpdateThirdKtmVal("")}} style={{color:"rgb(71,85,105)"}} type="file" className="w-full h-full absolute cursor-pointer opacity-0 inset-0" />
                                            <input disabled value={nasecUpdateThirdKtmVal} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded-l text-sm shadow focus:outline-none focus:ring flex-1 ease-linear transition-all duration-150" placeholder="Upload files..." />
                                            <button type="button" className="bg-blue-500 rounded-r-md px-3 py-3 font-bold text-white text-sm">Upload</button>
                                        </div>
                                        <small className={!edit?"hidden":nasecUpdateThirdKtmErr===""?"ml-1 text-gray-700":"ml-1 text-red-500"}><FontAwesomeIcon className={nasecUpdateThirdKtmErr===""?"hidden":""} icon={faExclamationCircle} /> {nasecUpdateThirdKtmErr===""?"Kosongkan jika tidak mengubah file sebelumnya":nasecUpdateThirdKtmErr}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={updatingNasec} className={!edit?"hidden":"w-full max-w-xs rounded-md py-2 bg-blue-600 text-white mx-auto mt-7 block hover:bg-blue-500"}>
                                    Submit
                            </button>
                    </div>
                </div>
            </div>

            {/* Sent */}
            <div className={event==="sent"&&!isLoading?"border rounded-md p-4 relative":"hidden relative"}>
                <div style={{backgroundColor:"rgba(255,255,255,.4)"}} className={uploading?"absolute w-full h-full z-10 flex flex-col space-y-3 items-center justify-center":"hidden"}>
                    <FontAwesomeIcon className="animate-spin text-6xl" style={{animationDuration:"3s"}} icon={faCog} />
                    <p className="text-xl font-bold animate-bounce">Uploading</p>
                </div>
                <h1 className="text-center text-xl font-bold">Sent</h1>
                <button onClick={()=>{if(!edit){setEdit(!edit)}else{setSentUpdate(sent);setEdit(!edit)}}} className={edit?"py-2 w-full max-w-xs mx-auto block mt-3 mb-6 rounded-md bg-red-600 text-white hover:bg-red-500":"py-2 w-full max-w-xs mx-auto block mt-3 mb-6 rounded-md bg-blue-600 text-white hover:bg-blue-500"}>
                    {edit?"Cancel Edit":"Edit Document"}
                </button>
                <div>
                    <div className="flex-1 flex flex-col space-y-4">
                        <div className="flex flex-col items-center md:flex-row relative">
                            <p className="md:w-1/3 text-lg md:text-base text-gray-900">Nama Lengkap</p>
                            <p className={edit?"hidden":""}>{sent.nama_lengkap}</p>
                            <input value={sentUpdate.nama_lengkap} onChange={(e)=>{setSentUpdate({...sentUpdate,nama_lengkap:e.target.value})}} type="text" className={!edit?"hidden":"border-0 px-3 py-1 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 relative"} />
                            <FontAwesomeIcon className={edit&&sentUpdate.nama_lengkap===""?"text-red-600 absolute right-0.5":"hidden"} icon={faExclamationCircle} />
                        </div>
                        <div className="flex flex-col items-center md:flex-row relative">
                            <p className="md:w-1/3 text-lg md:text-base text-gray-900">Email</p>
                            <p className={edit?"hidden":""}>{sent.email}</p>
                            <input value={sentUpdate.email} onChange={(e)=>{setSentUpdate({...sentUpdate,email:e.target.value})}} type="text" className={!edit?"hidden":"border-0 px-3 py-1 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"} />
                            <FontAwesomeIcon className={edit&&(sentUpdate.email===""||!validator.isEmail(sentUpdate.email))?"text-red-600 absolute right-0.5":"hidden"} icon={faExclamationCircle} />
                        </div>
                        <div className="flex flex-col items-center md:flex-row relative">
                            <p className="md:w-1/3 text-lg md:text-base text-gray-900">Asal Institusi</p>
                            <p className={edit?"hidden":""}>{sent.asal_institusi}</p>
                            <input value={sentUpdate.asal_institusi} onChange={(e)=>{setSentUpdate({...sentUpdate,asal_institusi:e.target.value})}} type="text" className={!edit?"hidden":"border-0 px-3 py-1 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"} />
                            <FontAwesomeIcon className={edit&&sentUpdate.asal_institusi===""?"text-red-600 absolute right-0.5":"hidden"} icon={faExclamationCircle} />
                        </div>
                        <div className="flex flex-col items-center md:flex-row relative">
                            <p className="md:w-1/3 text-lg md:text-base text-gray-900">Status</p>
                            <p className={edit?"hidden":""}>{sent.status}</p>
                            <select value={sentUpdate.status} onChange={(e)=>{setSentUpdate({...sentUpdate,status:e.target.value})}} type="text" className={!edit?"hidden":"border-0 px-3 py-1 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"}>
                                <option value="Siswa">Siswa</option>
                                <option value="Mahasiswa">Mahasiswa</option>
                                <option value="Pekerja">Pekerja</option>
                                <option value="Lain-lain">Lain-lain</option>
                            </select>
                        </div>
                    </div>
                    <button onClick={updatingSent} className={!edit?"hidden":"w-full max-w-xs rounded-md py-2 bg-blue-600 text-white mx-auto mt-7 block hover:bg-blue-500"}>
                            Submit
                    </button>
                </div>
            </div>

        </div>
        </div>
    )
}

export default DashDaftar