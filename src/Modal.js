import { useState } from 'react';
import styled from 'styled-components';
import BSModal from 'react-bootstrap/Modal';

// modal state (place into parent component)
// const [modal, setModal] = useState({
// 	title: '',
// 	description: '',
// });

// modal handlers (place into parent component)
// const [showModal, setShowModal] = useState(false);
// const handleShowModal = (title, image) => {
//     setModal({ title: title, image: image });
//     setShowModal(true);
// };

const ModalComp = ({ className, title, showHandler, hideHandler }) => {
	return (
		<BSModal show={showHandler} onHide={hideHandler} dialogClassName="course-modal" centered>
			<BSModal.Header closeButton>
				<BSModal.Title>{title}</BSModal.Title>
			</BSModal.Header>
			<BSModal.Body>{title}</BSModal.Body>
		</BSModal>
	);
};

const Modal = styled(ModalComp)``;

export default Modal;
