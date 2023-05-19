import { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";
import { Navigate } from "react-router-dom";


const Privateroute = ({children}) => {
    const {user,loading} = useContext(AuthContext) 

    if(loading){
        return <progress className=" mx-auto progress w-56"></progress>
    }

    if(user?.email){
        return children
    }
    return <Navigate to='/login' replace></Navigate>
};

export default Privateroute;