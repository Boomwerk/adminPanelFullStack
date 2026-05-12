
// import { useAuthStore } from "../stores/authStore";

export default function RefreshJWT() {

    // const {setAccessToken} = useAuthStore();



    try{

        fetch("http://127.0.0.1:8000/api/token/refresh")
        .then((response) => console.log(response))
       
    }catch(error) {
        return error;
    }
}