import { useEffect, useState } from "react"
import { dataDbTable } from "../../test_data/dataDbTable"
import { columnDefinitions } from "../../utils/columnDefinitions";
import FilterTable from "../../components/FilterTable/FilterTable";
import Modal from "../../components/Modal/Modal";
import storeModal from "../../stores/storeModal";
import Button from "../../components/Button/Button";
import ColumnsSelectFiltration from "../../components/FilterTable/component/columnsSelectFiltration";
import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";
import storeFilterTable from "../../stores/storeFilterTable";


export default function DataStructured() {

    const { setIsOpen } = storeModal()
    const { selectColumns } = storeFilterTable()

    const renderComponentToModal = (state: any) => {
      
        switch (state) {
            case "test":
                return <ColumnsSelectFiltration inputsFiltration={columnDefinitions} />
            default:
                return null
        }
    }

    const modalContent = renderComponentToModal("test");

    return (
        <>
        <Title as="h1">Datová struktura</Title>
        <Card>
            <form>
                Name
                <input type="text" name="name"/><br />
                Age
                <input type="text" name="name"/><br />
                Office
                <input type="text" name="name"/><br />
                <button type="button">Hledat</button>
            </form>
            <br /><br />
            <Button as="button" design="primary" onClick={() => setIsOpen(true)}>Zobrazit Sloupce</Button>

            <br /><br />
            <FilterTable tableData={dataDbTable} columns={selectColumns} />
        </Card>
        <Modal title="Zobrazení položek v tabulce" >
            {modalContent}
        </Modal>
        </>    
    )
}