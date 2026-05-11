import { useAuthStore } from "../stores/authStore";

export default function Logout(){
    const {setAccessToken, setRefreshToken} = useAuthStore();

    const handleLogout = () => {
        setAccessToken("");
        setRefreshToken("");
        cookieStore.delete("access_token");
       
    };

    return (
         <button className="btn btn-soft btn-error" onClick={handleLogout}> Deconnexion </button>
    )


}