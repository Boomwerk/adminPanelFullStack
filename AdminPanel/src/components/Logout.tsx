import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

export default function Logout(){

    const navigate = useNavigate();

    const handleLogout = () => {

        useAuthStore.getState().logout();
        cookieStore.delete("access_token");
        navigate("/");
       
    };

    return (
         <button className="btn btn-soft btn-error" onClick={handleLogout}> Deconnexion </button>
    )


}