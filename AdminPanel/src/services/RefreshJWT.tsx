
import { useAuthStore } from "../stores/authStore";

export default function RefreshJWT() {

    const {setAccessToken} = useAuthStore();



    try{

        fetch("http://localhost:8000/api/token/refresh",{
            method:"POST",
            headers: {
                "Content-Type" : "application/json" 
            },
            credentials:"include"
        })
        .then((response) => response.json())
        .then((data) => {
            setAccessToken(data.token);
        })
        .catch((error) => {
            console.error("Error refreshing token:", error);
        });
       
    }catch(error) {
        return error;
    }
}