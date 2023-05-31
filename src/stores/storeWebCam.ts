import { create } from "zustand";

interface IModalStore {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}
  
const storeWebCam = create((set) => ({
    photo: {
        turnOffWebCam: false,
        imageCode: ""
    },
    setMakePhoto: (photo: boolean) => set({ photo: photo })
}))

export default storeWebCam;