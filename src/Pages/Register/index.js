import { useState } from "react"
import { Redirect } from "react-router-dom"
import validator from 'validator';


const Register = ()=>{

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [university, setUniversity] = useState("")
    const [email, setEmail] = useState("")
    const [afterSignUp, setAfterSignUp] = useState(false)

    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState("Please check the form again")

    const passRequirement = {
        minLength: 8,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 1,
        minSymbols: 0,
        returnScore: false,
        // pointsPerUnique: 1,
        // pointsPerRepeat: 0.5,
        // pointsForContainingLower: 10,
        // pointsForContainingUpper: 10,
        // pointsForContainingNumber: 10,
        // pointsForContainingSymbol: 10
    }

    if(localStorage.getItem("key")){
        return(
            <Redirect to="/dashboard" />
        )
    }

    if(afterSignUp){
        return(
            <Redirect to="/login" />
        )
    }

    const onSignUp = (e)=>{
        e.preventDefault()

        if(validator.isEmail(email) && validator.isStrongPassword(password,passRequirement) && password === confirmPassword && name!=="" && university!==""){
            setIsError(false)
            setIsLoading(true)
            setErrorMsg("Please check the form again")
            fetch(`${process.env.REACT_APP_APIURL}/users`,{
                method:"POST",
                mode: "cors",
                headers:{
                  'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    email: email,
                    password: password,
                    confirm_password: confirmPassword ,
                    name: name,
                    asal_kampus: university
                })  
              }).then(res=>{
                  console.log(res);
                  return res.json()
                //   if(res.ok){
                //       return res.json();
                //   }else{
                //       setIsError(true)
                //       console.log('Error');
                //       return Promise.reject(res);  
                //   }
              }).then(
                  (res)=>{
                      console.log(res);
                      if(res.meta.code!==200){
                          // error
                          setIsError(true)
                          if(res.errors.email.length>0){
                              setErrorMsg("Email has been registered")                            
                          }
                          console.log("login error")
                      }else{
                          setIsError(false)
                          setAfterSignUp(true)
                        //   localStorage.setItem("user",res.data.email);
                        //   localStorage.setItem("key",res.data.token);
                      }
                      setIsLoading(false)
                  },
                  (err)=>{
                      setIsError(true)
                      setIsLoading(false)
                      console.log(err);
                  }
              )
        }else{
            setErrorMsg("Please check the form again")
            setIsError(true)
        }

    }

    return(
        <div className="min-w-screen min-h-screen" style={{backgroundColor:"#1e293b", backgroundImage:"url(https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/register_bg_2.png)", backgroundPosition:"center", backgroundSize:"cover"}}>
            <div className="container mx-auto px-4 h-screen">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4">
                        <div style={{backgroundColor:"#e2e8f0"}} className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0">
                            <div className="rounded-t mb-0 px-6 py-6">
                                <div className="text-center mb-3">
                                    <h6 style={{color:"rgb(100,116,139)"}} className="text-sm font-bold">Sign up with</h6>
                                </div>
                                <div className="btn-wrapper text-center">
                                    <button style={{color:"rgb(51,65,85)"}} className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                                        <img alt="..." className="w-5 mr-1" src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/github.svg" />
                                        Github
                                    </button>
                                    <button style={{color:"rgb(51,65,85)"}} className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                                        <img alt="..." className="w-5 mr-1" src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/google.svg" />
                                        Google
                                    </button>
                                </div>
                                <hr style={{borderColor:"rgb(203,213,225)"}} className="mt-6 border-b-1" />
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div style={{color:"rgb(148,163,184)"}} className="text-center mb-3 font-bold">
                                    <small>Or sign up with credentials</small>
                                </div>
                                <div className={isError?"py-2 w-full my-3 bg-red-500 text-white text-center rounded-md":"hidden"}>
                                    {errorMsg}
                                </div>
                                <form onSubmit={onSignUp}>
                                    <div className="relative w-full mb-3">
                                        <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2" for="grid-password">
                                            Full Name
                                        </label>
                                        <input required value={name} onChange={(e)=>{setName(e.target.value)}} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Full Name" />
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2" for="grid-password">
                                            Email
                                        </label>
                                        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} style={{color:"rgb(71,85,105)"}} type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email" />
                                        <small style={{color:"rgb(71,85,105)"}} className={
                                            (email==="" || validator.isEmail(email))?
                                            "hidden":
                                            "text-sm font-semibold text-blueGray-600"
                                            }>Must be an email format</small>
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2" for="grid-password">
                                            Institute / University
                                        </label>
                                        <input required value={university} onChange={(e)=>{setUniversity(e.target.value)}} style={{color:"rgb(71,85,105)"}} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Institute/University" />
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2" for="grid-password">
                                            Password
                                        </label>
                                        <input value={password} onChange={(e)=>{setPassword(e.target.value)}} style={{color:"rgb(71,85,105)"}} type="password" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Password" />
                                        <small style={{color:"rgb(71,85,105)"}} className={
                                            (password==="" || validator.isStrongPassword(password,passRequirement))?
                                            "hidden":
                                            "text-sm font-semibold text-blueGray-600"
                                            }>Password must contain 8 character with minimum one number</small>
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2" for="grid-password">
                                            Confirm Password
                                        </label>
                                        <input value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} style={{color:"rgb(71,85,105)"}} type="password" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Confirm Password" />
                                        <small style={{color:"rgb(71,85,105)"}} className={
                                            (confirmPassword==="" || password===confirmPassword)?
                                            "hidden":
                                            "text-sm font-semibold text-blueGray-600"
                                            }>Password not same</small>
                                    </div>
                                    <div className="text-center mt-6">
                                        <div className={isLoading?"w-full h-full absolute inset-0 opacity-0":"hidden"} />
                                        <button style={{backgroundColor:"rgb(30,41,59)"}} className=
                                        {isLoading?"text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 opacity-40"
                                        :"text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"}
                                        type="submit">
                                            {isLoading? "Signing Up...":"Sign Up"}
                                        </button>
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

export default Register