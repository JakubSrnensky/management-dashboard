import { useState, useEffect } from "react";
import storeFilterTable from "../../../stores/storeFilterTable";
import Button from "../../Button/Button";
import storeModal from "../../../stores/storeModal";

export default function ColumnsSelectFiltration({inputsFiltration}: any) {

    const { setIsOpen } = storeModal()

    const { setSelectColumns } = storeFilterTable()

    const [ category, setCategory ] = useState<Array<string>>(["name", "office", "age", "date", "position", "currency"])

    useEffect(() => {
        setCategory(inputsFiltration.map((element: any) => element.type))
        setSelectColumns(inputsFiltration.filter((column: any) => category.includes(column.key)))
    },[])

    
    const handlerClickCategory = (event: any) => {
        if(event.target.checked){
            setCategory([...category, event.target.name])
        } else {
            setCategory(
              category.filter((filter: string) => filter !== event.target.name)
            )
        }
    }

    const handlerClickShowColumnsForm = (e: unknown) => {
        e.preventDefault()
        setSelectColumns(inputsFiltration.filter((column: any) => category.includes(column.key)))
        setIsOpen(false)
    }


    return (
        <>
            <form>
                {inputsFiltration?.map((element: any, index: number) =>   
                    <div className="filterTable-categoryFiltration" key={index}>
                        <input type="checkbox" name={element.type} defaultChecked onClick={handlerClickCategory} /> {element.label}
                    </div>
                )}
                <Button as="button" design="primary" onClick={(e: unknown) => handlerClickShowColumnsForm(e)}>Zobrazit sloupce</Button>
            </form>
        </>
    )
}