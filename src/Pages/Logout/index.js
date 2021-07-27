import { Redirect } from "react-router-dom"

const Logout = ()=>{

    localStorage.removeItem('user')
    localStorage.removeItem('key')
    localStorage.removeItem('name')
    localStorage.removeItem('id')
    localStorage.removeItem('role')

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