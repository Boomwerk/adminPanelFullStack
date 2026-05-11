import { useEffect } from "react";
import {useAuthStore} from "../../stores/authStore";
import { useNavigate } from "react-router-dom";

const IsAuthenticated = ({ children }: { children: React.ReactNode }) => {

    const { accessToken } = useAuthStore();
    const navigate = useNavigate();


    useEffect(() => {
        const isAuthenticated = !!accessToken;

        if(!isAuthenticated) navigate("/");

    }, []);

    return (children);
}



export default IsAuthenticated;