import { Navigate } from "react-router-dom";
import { isAuth } from "./FrontendHelper";

const PrivateRoute =({children})=>{
    const authenticated= isAuth()
    return authenticated ? children : <Navigate to="/" />
}

export default PrivateRoute;
