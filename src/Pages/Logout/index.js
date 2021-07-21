import { Redirect } from "react-router-dom"

const Logout = ()=>{

    localStorage.removeItem('user')
    localStorage.removeItem('key')

    if(localStorage.getItem('key')){
        return(
            <Redirect to="/dashboard" />
        )
    }else{
        return(
            <Redirect to="/" />
        )
    }

}

export default Logout