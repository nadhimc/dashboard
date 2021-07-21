import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import validator from 'validator';

const Login = ()=>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)


    const changeEmail = (e)=>{
        setEmail(e.target.value)
    }

    const changePassword = (e)=>{
        setPassword(e.target.value)
    }

    const onSignIn = (e)=>{
        e.preventDefault()
        if(validator.isEmail(email)){
            setIsLoading(true)
            fetch(`${process.env.REACT_APP_APIURL}/session`,{
                method:"POST",
                mode: "cors",
                headers:{
                  'Content-Type': 'application/json'
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body:JSON.stringify({
                    email: email,
                    password: password
                })  
              }).then(res=>{
                  console.log(res);
                  if(res.ok){
                      return res.json();
                  }else{
                      setIsError(true)
                      console.log('Error');
                      return Promise.reject(res);  
                  }
              }).then(
                  (res)=>{
                      console.log(res);
                      if(res.meta.code!=200){
                          // error
                          setIsError(true)
                          console.log("login error")
                      }else{
                          setIsError(false)
                          localStorage.setItem("user",res.data.email);
                          localStorage.setItem("id",res.data.id);
                          localStorage.setItem("key",res.data.token);
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
            setIsError(true)
        }
    }

    if(localStorage.getItem("key")){
        return(
            <Redirect to="/dashboard" />
        )
    }

    return(
        <div className="min-w-screen min-h-screen" style={{backgroundColor:"#1e293b", backgroundImage:"url(https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/register_bg_2.png)", backgroundPosition:"center", backgroundSize:"cover"}}>
            <div className="container mx-auto px-4 h-screen">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4">
                        <div style={{backgroundColor:"#e2e8f0"}} className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0">
                            <div className="rounded-t mb-0 px-6 py-6">
                                <div className="text-center mb-3">
                                    <h6 style={{color:"rgb(100,116,139)"}} className="text-sm font-bold">Sign in with</h6>
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
                                    <small>Or sign in with credentials</small>
                                </div>
                                <div className={isError?"py-2 w-full my-3 bg-red-500 text-white text-center rounded-md":"hidden"}>
                                    Please check your email and password
                                </div>
                                <form onSubmit={onSignIn}>
                                    <div className="relative w-full mb-3">
                                        <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                            Email
                                        </label>
                                        <input value={email} onChange={changeEmail} style={{color:"rgb(71,85,105)"}} type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email" />
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label style={{color:"rgb(71,85,105)"}} className="block uppercase text-xs font-bold mb-2">
                                            Password
                                        </label>
                                        <input value={password} onChange={changePassword} style={{color:"rgb(71,85,105)"}} type="password" className="border-0 px-3 py-3 placeholder-blueGray-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Password" />
                                    </div>
                                    <div className="text-center mt-6 relative">
                                        <div className={isLoading?"w-full h-full absolute inset-0 opacity-0":"hidden"} />
                                        <button style={{backgroundColor:"rgb(30,41,59)"}} className=
                                        {isLoading?"text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 opacity-40"
                                        :"text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"}
                                        type="submit">
                                            {isLoading?"Signing In...":"Sign In"}
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

export default Login