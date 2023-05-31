import storeFilterTable from "../../stores/storeFilterTable";
import "./filterTable.scss";

export default function FilterThead({columns}: unknown) {

    const { sortDesc, sortByHeader, selectAllInputs, setSelectAllInputs, setSortByHeader, setSortDesc } = storeFilterTable()
 
    // sorting data desc and asc
    const onSortItemsClick = (header: string) =>{
        if (sortByHeader === header) {
            setSortDesc(!sortDesc)
        }
        setSortByHeader(header);
    }

    //select all items or one by one from table
    const handlerClickSelectAllItems = (event: unknown) => {
        if(event.target.checked){
            setSelectAllInputs(true)
            return
        }

        setSelectAllInputs(false)
    }

    //icons arrow for sorting
    const arrowSortIcon = (element: string) => {
        if (sortByHeader === element && sortDesc) {
            return "asc"
        } else if (sortByHeader === element && !sortDesc) {
            return "desc"
        }
    }
    
    return (
        <thead>
            <tr className="filterTable-theadTr">
                <td className="filterTable-td">
                    <input type="checkbox" onChange={(event: unknown) => handlerClickSelectAllItems(event)} checked={selectAllInputs}/>
                </td>
                {columns.map((element: unknown, index: number) => 
                    <td key={index} className="filterTable-td">
                        <button onClick={() => onSortItemsClick(element.type)} className="filterTable-sortButton">
                            {element.label}
                            <span className={`filterTable-sortIcon`}>
                                <span className={`filterTable-sortIconArrowUp  ${arrowSortIcon(element.type) === "asc" ? "isActive" : ""}`}></span>
                                <span className={`filterTable-sortIconArrowDown  ${arrowSortIcon(element.type) === "desc" ? "isActive" : ""}`}></span>    
                            </span>
                            
                        </button>
                    </td>
                )}
            </tr>
        </thead>
    )
}