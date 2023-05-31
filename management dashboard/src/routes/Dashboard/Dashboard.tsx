import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import storeModal from "../../stores/storeModal";

export default function Dashboard() {

  const { setIsOpen } = storeModal()

    return (
        <div className="dashboardRoute">
            <Button as="button" design="primary" onClick={() => setIsOpen(true)}>Test</Button><Modal
                title="Nadpis"
                footer={<><Button as="button" design="secondary" onClick={() => setIsOpen(false)}>Close</Button><Button as="button" design="primary">Uložit</Button></>}
            >
                Textace
            </Modal>

            <br/><br/>
            <Button as="button" design="primary">primary</Button>
            <Button as="button" design="secondary">secondary</Button>
            <Button as="button" design="success">success</Button>
            <Button as="button" design="danger">Danger</Button>
            <Button as="button" design="warning">warning</Button>
            <Button as="button" design="info">info</Button>
            <Button as="button" design="light">light</Button>
            <Button as="button" design="dark">dark</Button>
        </div>
    )
}