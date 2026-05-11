import { create } from "zustand"

type authStore = {
    accessToken: string,
    setAccessToken: (setToken: string) => void,
    logout: () => void

}


export const useAuthStore = create<authStore>((set) => ({
    accessToken: "",
    setAccessToken: (setToken: string) => set({accessToken: setToken}),
    logout: () => set({accessToken: ""})
}))