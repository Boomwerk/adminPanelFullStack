export type RegisterFormData = {
    name : string;
    email : string;
    password : string;
};

export type RegisterErrors = {
    name? : string;
    email? : string;
    password? : string;
};