import { create } from "zustand"

type authStore = {
    token: string,
    refreshToken: string,
    setToken: (setToken: string) => void,
    setRefreshToken: (setRefreshToken: string) => void,
    logout: () => void

}


export const useAuthStore = create<authStore>((set) => ({
    token: "",
    refreshToken: "",
    setToken: (setToken: string) => set({token: setToken}),
    setRefreshToken: (setRefreshToken: string) => set({refreshToken: setRefreshToken}),
    logout: () => set({token: "", refreshToken:""})
}))