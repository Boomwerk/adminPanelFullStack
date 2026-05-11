import { create } from "zustand"

type authStore = {
    accessToken: string,
    refreshToken: string,
    setAccessToken: (setToken: string) => void,
    setRefreshToken: (setRefreshToken: string) => void,
    logout: () => void

}


export const useAuthStore = create<authStore>((set) => ({
    accessToken: "",
    refreshToken: "",
    setAccessToken: (setToken: string) => set({accessToken: setToken}),
    setRefreshToken: (setRefreshToken: string) => set({refreshToken: setRefreshToken}),
    logout: () => set({accessToken: "", refreshToken:""})
}))