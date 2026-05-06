import logoprotect from "../assets/logoprotect.png";
import { Link } from "react-router-dom";
export default function Login(){

    return (<div className="flex flex-col items-center bluegradient py-20">

        
        <div className="flex flex-col items-center">
            
            
            <div className="card w-96 bg-[white] shadow-sm mt-3 ">
                <div className="card-body">

                   
                    
                    <div className="flex flex-col items-center ">
                        <img src={logoprotect} alt="logo protect" className='w-25'/>
                       
                        <div className="flex flex-col items-center mt-3 ">
                            <h2 className="text-2xl font-bold m-0">Admin Panel</h2>
                            <p>Sécurité & Optimisation</p>
                        </div>

                        {/* <Alert type={alert.type} message={alert.message} /> */}
                         

                        <form action="" className="flex flex-col items-center gap-5 mt-5">

                            
            
                          
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
                               
                              Connexion
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
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

    </div>)
}