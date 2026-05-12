

export default async function AuthUser(email:string, password:string) {


    const response = await fetch("http://localhost:8000/api/login_check", {
        method:"POST",
        credentials:"include",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            email:email,
            password:password
        })
    });

    const state = await response.json();

    if(state.token){


        return state;


    }

    
   
    
    return false;
  
        

    
}




