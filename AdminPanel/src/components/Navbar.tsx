import { Link} from "react-router-dom"
import Logout from "./Logout";
import { useAuthStore } from "../stores/authStore";

export default function Navbar(){

    const {accessToken} = useAuthStore();

   
    return (
        <div className='navbar bg-base-100 shadow-sm px-5'>

           { accessToken === "" ? (
            <>
                <div className="navbar-start">
                    <p className='font-bold'><Link to='/'>ADMIN PANEL</Link></p>
                </div>
                <div className="navbar-end gap-4">
                    <Link to="/connexion">Connexion</Link>
                    
                    
                    <Link to='/inscription' className="btn btn-soft btn-primary"> Inscription</Link>
                </div>
            </>) : (
               
                <>
                    
                    <div className="navbar-start">
                        <p className='font-bold'><Link to='/'>Welcome User</Link></p>
                    </div>
                    <div className="navbar-end gap-4">
                       <Logout />
                    </div>
                </>
            )}
            
         
                
           
     </div>
    )
}