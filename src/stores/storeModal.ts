import { create } from "zustand";

interface IStoreModal {
    isOpen: boolean
    title: string
    setIsOpen: (isOpen: boolean) => void
    setTitle?: (title: string) => void
}
  
const storeModal = create<IStoreModal>((set) => ({
    isOpen: false,
    title: "",
    setIsOpen: (isOpen: boolean) => set({ isOpen: isOpen }),
    setTitle: (title: string) => set({ title: title })
}))

export default storeModal;