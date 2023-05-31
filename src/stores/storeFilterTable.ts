import { create } from "zustand";

interface IStoreFilterTable {
    isOpen: boolean
    title: string
    setIsOpen: (isOpen: boolean) => void
    setTitle: (title: string) => void
}
//<IStoreFilterTable>
const storeFilterTable = create((set) => ({
    selectAllInputs: false,
    selectColumns: [],
    sortByHeader: "",
    sortDesc: false,
    setSelectAllInputs: (selectAllInputs: boolean) => set({ selectAllInputs: selectAllInputs }),
    setSelectColumns: (selectColumns: any) => set({ selectColumns: selectColumns }),
    setSortByHeader: (sortByHeader: string) => set({ sortByHeader: sortByHeader }),
    setSortDesc: (sortDesc: boolean) => set({ sortDesc: sortDesc }),
}))

export default storeFilterTable;