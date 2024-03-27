import { useState } from "react";
import Modal from '../components/Modal';
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const actionBar = (
        <div>
            <Button onClick={handleCloseModal} primary>I Accept</Button>
        </div>);

    const modal = (
        <Modal onClose={handleCloseModal} actionBar={actionBar}>
            <p>
                Here is an important agreement for you to accept.
            </p>
        </Modal>);

    return (
        <div>
            <Button onClick={handleOpenModal} primary>Open Modal</Button>
            {showModal && modal}
        </div>
    );
}

export default ModalPage;