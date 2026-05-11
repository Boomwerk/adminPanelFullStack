

export default async function AuthUser(email:string, password:string) {


    const response = await fetch("http://127.0.0.1:8000/api/login_check", {
        method:"POST",
        headers: {
            "Content-Type" : "application/json" 
        },
        body: JSON.stringify({
            email:email,
            password:password
        })
    });

    const state = await response.json();

    if(state.token){

        const tokenToCookie = await fetch("http://127.0.0.1:8000/api/auth/store-refresh-token", {
            method:"POST",
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${state.token}`,
            },
            body: JSON.stringify({
                refresh_token: state.refresh_token
            })
        });

        if(await tokenToCookie.ok){

            return state;
        }

        return false;


    }

    
   
    
    
  
        

    
}




