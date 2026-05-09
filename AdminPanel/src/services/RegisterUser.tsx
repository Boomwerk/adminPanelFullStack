import type { RegisterFormData } from "../types/auth";


export default async function RegisterUser(form:RegisterFormData)
{

   
   const response = fetch("http://localhost:8000/api/users",{
        method: "POST",
        headers:{
            "Content-Type": "application/ld+json"
        },
        body: JSON.stringify({
            email: form.email,
            password: form.password
        })
    });

    const status = await response;

    return status.status;

}