import { useEffect, useState } from "react"
import storeFilterTable from "../../stores/storeFilterTable";
import "./filterTable.scss";
import _, { orderBy } from "lodash";

interface IFilterTbody {
    category: string[]
    columnDefinitions: unknown
}

export default function FilterTbody({itemsArray, columns}: unknown) {
    
    const { sortByHeader, sortDesc, selectAllInputs, setSelectAllInputs } = storeFilterTable()

    const [ selectItemFromTable, setSelectItemFromTable ] = useState<unknown>([])

    //select item from table if you click at it
    const handlerClickSelectItems = (user: unknown, event: unknown) => {
        if (event.target.checked) {
            setSelectItemFromTable([...selectItemFromTable, user])
        } else {
            setSelectItemFromTable(
                selectItemFromTable.filter((filter: string) => filter?.name !== user.name)
            )
        }
    }
    //console.log(selectItemFromTable)

    // sorting data desc and asc
    const handlerTypeSortHeader = (sortByHeader: string) => {
        switch (sortByHeader) {
            case "currency":
                return "currency.value"
            default:
                return sortByHeader
        }
    }

    const sortingItems = orderBy(itemsArray, [handlerTypeSortHeader(sortByHeader)], [sortDesc ? "desc" : "asc"])


    //render cells for table => tbody
    const renderCell = (row: any, col: any) => {
        switch (col.type) {
            case "currency":
                return `${row[col.key].value} ${row[col.key].currency}`
            default:
                return row[col.key]
        }
    }

    //unselect and select all checkboxes or one by one (both useEffects)
    useEffect(() => {
        //if select al checkboxed one by one => master checkbox will mark
        if(selectItemFromTable.length === itemsArray.length) {
            setSelectAllInputs(true)
        } else {
            setSelectAllInputs(false)
        }
    },[selectItemFromTable])
    
    useEffect(() => {
        //if click on master checkbox, all checkboxes will select
        if (selectAllInputs) {
            setSelectItemFromTable([...itemsArray])
            return
        } 

        //if selected all checkboxes and click on master checkbost => all checkbox unselect
        if (!selectAllInputs && selectItemFromTable.length === itemsArray.length) {
            setSelectItemFromTable([])
        }
    },[selectAllInputs])


    return (
        <tbody>
            {sortingItems.map((row: unknown, index: number) => 
                <tr key={index} className="filterTable-tbodyTr">
                    <td className="filterTable-td">
                        <input type="checkbox" name={index.toString()} 
                            onChange={(event: unknown) => handlerClickSelectItems(row, event)}
                            checked={selectItemFromTable.some((item: unknown) => item.name === row.name)}
                        />
                    </td>
                    {columns.map((col: unknown, indexRow: number) => 
                        <td key={indexRow} className="filterTable-td">
                            {renderCell(row, col)}
                        </td>
                    )}
                </tr>
            )}
        </tbody>
    )
}