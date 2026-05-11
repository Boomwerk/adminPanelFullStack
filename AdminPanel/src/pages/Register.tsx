import React, { useState} from 'react';
import logoprotect from '../assets/logoprotect.png'
import type { RegisterFormData } from '../types/auth';
import RegisterUser from '../services/RegisterUser';
import Alert from '../components/Alert';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Register = () => 
{

    console.log("render rendu");
    const [alert, setalert] = useState({
        type:"",
        message:""
    });

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState<RegisterFormData>({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

       const name = e.target.name
       const value = e.target.value

        setForm((prev) => ({
            ...prev,
            [name]: value
        }))
       
    }

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        if(!form.email.includes("@")){
           return  setalert({
                    type:"error",
                    message:"l'email est invalide"
                })
        }
        
        if(form.name.length < 3 || form.name.length > 50){
            
           return setalert({
                    type:"error",
                    message:"Le Nom complet doit faire entre 3 et 50 caractères"
                })
        }

        if(form.password.length < 8 || form.password.length > 150){

            return setalert({
                    type:"error",
                    message:"Le mot de passe doit faire entre 8 et 150 caractères"
                })
        }

        try{
            
           const status = await RegisterUser(form);
            if(status === 201){
                setLoading(false);

                setalert({
                    type:"success",
                    message:"Inscription Réuissi !"
                })
            }

        }catch(e){
           
            console.error(e);
        }

        
        

    }
    

    return (<>
    <Navbar/>
    <div className="flex flex-col items-center bluegradient">

        
        <div className="flex flex-col items-center mb-10 mt-5">
            
            <div className="flex flex-col items-center mt-3 ">
                <img src={logoprotect} alt="logo protect" className='w-25'/>
                <h2 className="text-2xl font-bold m-0">Admin Panel</h2>
                <p>Sécurité & Optimisation</p>
            </div>
            <div className="card w-96 bg-[white] shadow-sm mt-3 ">
                <div className="card-body">

                   
                    
                    <div className="flex flex-col items-center ">
                       
                        <h2 className="text-xl font-bold">Créer votre compte</h2>
                        <span className="text-sm mb-3">Rejoignez nous c'est vous simplifiez !</span>

                        <Alert type={alert.type} message={alert.message} />
                         

                        <form action="" className="flex flex-col items-center gap-5 mt-5" onSubmit={handleSubmit}>

                            <div className='w-75'>
                                Nom complet
                                <label className="input validator">
                                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                        >
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                        </g>
                                    </svg>
                                    <input
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                        pattern="[A-Za-z][A-Za-z0-9\-]*"
                                        minLength={3}
                                        maxLength={30}
                                        title="Only letters, numbers or dash"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        
                                    />
                                </label>
                                <p className="validator-hint hidden">
                                    Dois contenir entre 3 et 30 caractères et
                                    <br />contenir que des lettre numéro et tirer
                                </p>

                            </div>
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
                                    name="email" 
                                    value={form.email}
                                    onChange={handleChange}/>
                                </label>
                                <div className="validator-hint hidden">Veuillez entrer une adresse email valide.</div>

                            </div>
                            

                            

                            <div className='w-75'>
                                Mot de passe
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

                            <button className="btn btn-primary mt-4 w-75">
                               
                              {loading ? 'Chargement...': 'Inscription'}
                              
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </button>
                        </form>

                        <div className='mt-5 py-3 border-t border-gray-400'>
                           <p> Déjà un compte ?  <Link to="/connexion" className='text-blue-700'>  Se connecter</Link></p>
                        </div>
                  
                    </div>
                    

                </div>
            </div>

        </div>

    </div>
    </>);
}



export default Register;