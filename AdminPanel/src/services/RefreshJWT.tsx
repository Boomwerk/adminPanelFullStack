
import { useAuthStore } from "../stores/authStore";

export default  function  RefreshJWT() {

    const {accessToken} = useAuthStore();

    if(!accessToken){
        return false;
    }

    

    // try{

    //     const response = await fetch("http://127.0.0.1:8000/api/token/refresh", {
    //         method:"POST",
    //         headers: {
    //             "Content-Type" : "application/json" 
    //         },
    //         body: JSON.stringify({
    //             refresh_token: cookieStore.get("refresh_token")?.value
    //         })  
    //     })
        
    // }
}