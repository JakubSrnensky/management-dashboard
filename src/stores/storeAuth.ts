import { create } from "zustand";
import { validateEmail } from "../utils/functions";

export const storeAuthLogin = create((set, get: any) => ({
    isLoading: false,
    user: {
        email: "",
        password: ""
    },
    setUser: (user: any) => set({ user: user }),
    setIsLoading: (isLoading: any) => {

        set({isLoading: isLoading})

        if (get().user.email === "" || get().user.password === "") {
            return
        }

        //try and catch
        
        console.log("přihlášeno")
    }
}))


export const storeAuthRegistration = create((set, get: any) => ({
    isLoading: false,
    login: {
        email: "",
        firstName: "",
        lastName: "",
        password: ""
    },
    setLogin: (login: any) => set({ login: login }),
    setIsLoading: (isLoading: any) => {

        set({isLoading: isLoading})

        if (get().login.password === "" || !validateEmail(get().login.email)) {
            return
        }

        //try and catch
        
        console.log("odesílam", get().login)
    }
}))

