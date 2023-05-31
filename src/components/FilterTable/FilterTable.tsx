import FilterTbody from "./FilterTbody";
import FilterThead from "./FilterThead";
import "./filterTable.scss";

export default function FilterTable({tableData, columns}: unknown) {
    return (
        <div className="filterTable">
            <table cellSpacing="0">
                <FilterThead columns={columns} />
                <FilterTbody columns={columns}  itemsArray={tableData} />            
            </table>
        </div>
    )
}