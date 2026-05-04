import { Link } from "react-router-dom"
export default function Navbar(){

    return (
        <div className='navbar bg-base-100 shadow-sm px-5'>
            <div className="navbar-start">
                <p className='font-bold'>ADMIN PANEL</p>
            </div>
            <div className="navbar-end gap-4">
                <Link to="/connexion">Connexion</Link>
                
                
                <Link to='/inscription' className="btn btn-soft btn-primary"> Inscription</Link>
            </div>
     </div>
    )
}