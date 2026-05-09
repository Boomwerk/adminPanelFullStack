import logoprotect from "../assets/logoprotect.png";
import { useState} from "react";
import { Link } from "react-router-dom";
import type { AuthFormData } from "../types/auth";
import Alert from "../components/Alert";
import AuthUser from "../services/AuthUser";
import Navbar from "../components/Navbar";
import { useAuthStore } from "../stores/authStore";


export default function Login(){

    console.log("render rendu");

    const {setToken, setRefreshToken} = useAuthStore();


    const [alert, setAlert] = useState({
        type: '',
        message: ''
    })

    const [form, setForm] = useState<AuthFormData>({
        email: '',
        password: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value

        setForm((prev) => ({
            ...prev,
            [name]:value
        }))

    }

    const  handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        
        e.preventDefault();
        setLoading(true);

        if(!form.email.includes("@") || form.email.length <= 2 || form.email.length >= 30){
            return setAlert({
                type:"error",
                message: "L'email est invalide !"
            })
        }

        if(form.password.length < 8 || form.password.length > 100 ){
           return setAlert({
                type:"error",
                message: "Le mot de passe est invalide"
            })
        }

        try{

           const responseApi = await AuthUser(form.email, form.password);

            if(responseApi.token)
            {
                

                setToken(responseApi.token);
                setRefreshToken(responseApi.refreshToken);
                // Gestion token
                // redirection
                
            }else{
                setAlert({
                    type:"error",
                    message: "Identifiant ou mot de passe incorrect !"
                })
            }
           
        }catch(e){

            console.error(e);
        }


    }

    return (
    <>
        <Navbar/>
    
        <div className="flex flex-col items-center bluegradient py-20">

            
            <div className="flex flex-col items-center">
                
                
                <div className="card w-96 bg-[white] shadow-sm mt-3 ">
                    <div className="card-body">

                    
                        
                        <div className="flex flex-col items-center ">
                            <img src={logoprotect} alt="logo protect" className='w-25'/>
                        
                            <div className="flex flex-col items-center mt-3 ">
                                <h2 className="text-2xl font-bold m-0">Admin Panel</h2>
                                <p>Sécurité & Optimisation</p>
                            </div>

                            <Alert type={alert.type} message={alert.message} />
                            

                            <form action="" className="flex flex-col items-center gap-5 mt-5" onSubmit={handleSubmit}>

                                
                
                            
                                <div className='w-75'>
                                    Email
                                    
                                    <label className="input validator">
                                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2.5"
                                            fill="none"
                                            stroke="currentColor"
                                            >
                                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                            </g>
                                        </svg>
                                        <input type="email" placeholder="e-mail@site.com" required 
                                        name="email" onChange={handleChange} value={form.email}
                                    />
                                    </label>
                                    <div className="validator-hint hidden">Veuillez entrer une adresse email valide.</div>

                                </div>
                                

                                

                                <div className='w-75'>
                                    <div className="flex justify-between">
                                        <div>Mot de passe</div>
                                        <div>
                                            <a href="" className="text-blue-700">Mot de passe oublie ?</a> 
                                        </div>
                                    </div>
                                    <label className="input validator">
                                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2.5"
                                            fill="none"
                                            stroke="currentColor"
                                            >
                                            <path
                                                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                            ></path>
                                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                        <input
                                            type="password"
                                            required
                                            placeholder="Mot de passe"
                                            minLength={8}
                                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                            title="Dois être supérieur a 8 caractères, inclure des nombres, lettre minuscule, lettre majuscule"
                                            name="password"
                                            value={form.password}
                                            onChange={handleChange}
                                        
                                        />
                                    </label>
                                    <p className="validator-hint hidden">
                                        Dois être supérieur a 8 caractères, inclure
                                        <br />au moins un chiffre <br />au moins une lettre minuscule <br />au moins une lettre Majuscule
                                    </p>
                                
                                </div>
                                <div className="flex gap-2 justify-start w-75">

                                    <input type="checkbox" id="rememberme" defaultChecked className="checkbox-md checkbox-primary" />
                                    <label htmlFor="rememberme">Se souvenir de moi </label>

                                </div>


                                <button className="btn btn-primary mt-4 w-75">
                                {loading ? 'Chargement... ': 'Connexion'} 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                                    </svg>

                                </button>

                            </form>

                        

                            <div className="flex justify-center py-5 border-t border-gray-200 w-75 mt-5">
                                <p className="text-center">Pas de compte ? <Link to="/inscription" className="text-blue-700"> Inscription </Link></p>
                            </div>
                    
                        </div>
                        

                    </div>
                </div>

            </div>

        </div>
    </>
    )
}