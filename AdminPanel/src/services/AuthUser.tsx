

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

    return state

        

    
}